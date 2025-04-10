
from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.hashers import make_password
import datetime
import re  # For regex validation
from rest_framework.serializers import ModelSerializer
from .models import LeaveTable

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

        
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, min_length=6)
    profile_pic = serializers.ImageField(required=False, allow_null=True)
    email = serializers.EmailField(required=True)
    phone_no = serializers.CharField(required=True, min_length=10, max_length=12)
    dob = serializers.DateField(required=True)
    designation = serializers.CharField(required=True, max_length=100)
    address = serializers.CharField(required=True, max_length=300)
    department = serializers.CharField(required=True, max_length=100)

    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'email', 'password', 'phone_no', 'dob', 'role', 'is_active', 'profile_pic', 'designation', 'address', 'department']

    def validate_email(self, value):
        """Check if the email is unique."""
        if UserProfile.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists.")
        return value

    def validate_phone_no(self, value):
        """Validate phone number format."""
        if not re.match(r'^\d{10,12}$', value):  # Only digits, length 10-12
            raise serializers.ValidationError("Phone number must be 10-12 digits long.")
        if UserProfile.objects.filter(phone_no=value).exists():
            raise serializers.ValidationError("Phone number already exists.")
        return value

    def validate_dob(self, value):
        """Ensure the user is at least 18 years old."""
        today = datetime.date.today()
        age = today.year - value.year - ((today.month, today.day) < (value.month, value.day))
        if age < 18:
            raise serializers.ValidationError("User must be at least 18 years old.")
        return value

    def create(self, validated_data):
        """Hash password before saving the user."""
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
    
from datetime import date

class LeaveTableSerializer(ModelSerializer):
    class Meta:
        model = LeaveTable
        fields = '__all__'
        
    def validate_start_date(self, value):
        if value < date.today():
            raise serializers.ValidationError("You cannot request leave for past dates.")
        return value

    def validate(self, data):
        """Validate that start_date is before end_date."""
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        if start_date and end_date and start_date > end_date:
            raise serializers.ValidationError({"end_date": "End date must be after start date."})
        return data

from paysphere_app.models import Salary

from rest_framework import serializers
from .models import Salary

class SalarySerializer(serializers.ModelSerializer):
    employee = serializers.SerializerMethodField()
    month = serializers.SerializerMethodField()
    year = serializers.SerializerMethodField()

    class Meta:
        model = Salary
        fields = [
            'id', 'employee', 'basic_salary', 'gross_salary', 'net_salary',
            'allowances', 'deductions', 'salary_status',
            'payment_date', 'created_at', 'month', 'year'
        ]

    def get_employee(self, obj):
        return obj.employee.id  # Or obj.employee.email or username

    def get_month(self, obj):
        return obj.created_at.strftime('%B')

    def get_year(self, obj):
        return obj.created_at.year


from paysphere_app.models import Allowances
class AllowanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Allowances
        fields = ['id', 'employee', 'allowance_type', 'amount', 'created_at']
        read_only_fields = ['created_at']


from paysphere_app.models import Deductions

class DeductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deductions
        fields = ['id', 'employee', 'deduction_type', 'amount', 'created_at']
        read_only_fields = ['created_at']
        
from rest_framework import serializers
from .models import Salary

class PayslipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salary
        fields = ['basic_salary', 'allowances', 'gross_salary', 'deductions', 'net_salary']

    def get_gross_salary(self, obj):
        return obj.basic_salary + obj.allowances

    def get_net_salary(self, obj):
        return obj.gross_salary - obj.deductions

    def get_allowances(self, obj):
        return obj.allowances

    def get_deductions(self, obj):
        return obj.deductions
