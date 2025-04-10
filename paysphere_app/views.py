
from datetime import datetime, timedelta
import jwt
from django.conf import settings
from django.contrib.auth.hashers import check_password,make_password
from django.http import HttpResponse
from rest_framework import viewsets, status ,permissions
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed,PermissionDenied
from rest_framework.authentication import BaseAuthentication
from .models import UserProfile,LeaveTable
from .serializers import UserProfileSerializer, UserSerializer
from django.views.decorators.csrf import csrf_exempt
# Home View
def home(request):
    return HttpResponse("Welcome to Paysphere! Hello, This is Jack")

from datetime import timedelta
from django.utils import timezone
from rest_framework_simplejwt.tokens import AccessToken

# def generate_jwt_token(user):
#     token = AccessToken.for_user(user) 
#     return str(token)

from datetime import datetime, timedelta
from django.conf import settings
import jwt
import uuid

def generate_jwt_token(user):
    payload = {
        "user_id": user.id,
        "role": getattr(user, "role", "user"),
        "exp": datetime.utcnow() + timedelta(hours=2),  # Use `datetime.utcnow()`
        "iat": datetime.utcnow(),  # Issued time
        "jti": str(uuid.uuid4()),
        "token_type": "access"  # Required for SimpleJWT
    }
    
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
    return token


import jwt
from django.conf import settings
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from paysphere_app.models import UserProfile  

class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get("Authorization", "")
        if not auth_header.startswith("Bearer "):  
            return None  
        
        token = auth_header.split(" ")[1] if len(auth_header.split(" ")) > 1 else None
        if not token:
            raise AuthenticationFailed("Token missing.")

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            user = UserProfile.objects.get(id=payload.get("user_id"))
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Token has expired.")
        except jwt.InvalidTokenError:
            raise AuthenticationFailed("Invalid token.")
        except UserProfile.DoesNotExist:
            raise AuthenticationFailed("User not found.")
        except Exception:
            raise AuthenticationFailed("Authentication error.")

        return (user, token)

# User Login View
class CustomLoginView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = UserProfile.objects.get(email=email)
            if not user.is_active:
                return Response({"error": "Your account has been deactivated. Please contact HR."}, status=status.HTTP_403_FORBIDDEN)
            if not check_password(password, user.password):
                raise AuthenticationFailed("Incorrect password.")
        except UserProfile.DoesNotExist:
            raise AuthenticationFailed("User not found.")
        token = generate_jwt_token(user)
        return Response({"message": "Login successful", "token": token, "role": user.role , "id": user.id}, status=status.HTTP_200_OK)
# from django.http import JsonResponse
# from django.views import View
# import logging

# logger = logging.getLogger(__name__)

# class CustomLoginView(View):
#     def post(self, request, *args, **kwargs):
#         logger.info("CustomLoginView executed!")
#         return JsonResponse({"message": "Login successful"}, status=200)

class RegisterView(APIView):
    authentication_classes = [JWTAuthentication]  # Ensure authentication
    permission_classes = [IsAuthenticated]  # Only authenticated users can register

    def post(self, request):
        # Ensure only HR can register new users
        if request.user.role.lower() != "hr":
            return Response({"error": "Only HR can register employees."}, status=status.HTTP_403_FORBIDDEN)

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
# User Management ViewSet
class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get_queryset(self):
        return UserProfile.objects.all()
    # def get_queryset(self):
    #     user = self.request.user  # Get logged-in user

    #     # If HR, return all users
    #     if user.role.lower() == "hr":
    #         return UserProfile.objects.all()

    #     # If an employee tries to fetch all users, return an error
    #     if self.action == "list":
    #         raise PermissionDenied("Only HR can see all users.")

    #     return UserProfile.objects.filter(id=user.id)  # Employee can see only their own details

# Activate User
class ActivateUserView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def patch(self, request, user_id):
        try:
            user = UserProfile.objects.get(id=user_id)
            if not request.user.role or request.user.role.lower() != "hr":
                return Response({"error": "Only HR can activate users."}, status=status.HTTP_403_FORBIDDEN)

            user.is_active = True
            user.save()
            return Response({"message": "User activated successfully."}, status=status.HTTP_200_OK)
        except UserProfile.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

# Deactivate User
class DeactivateUserView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def patch(self, request, user_id):
        try:
            user = UserProfile.objects.get(id=user_id)
            if not request.user.role or request.user.role.lower() != "hr":
                return Response({"error": "Only HR can deactivate users."}, status=status.HTTP_403_FORBIDDEN)

            user.is_active = False
            user.save()
            return Response({"message": "User deactivated successfully."}, status=status.HTTP_200_OK)
        except UserProfile.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

from django.contrib.auth.hashers import make_password
class UpdateUserView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def patch(self, request, user_id):
        try:
            user = UserProfile.objects.get(id=user_id)

            if request.user.role.lower() != "hr" and request.user.id != user.id:
                return Response({"error": "Unauthorized action."}, status=status.HTTP_403_FORBIDDEN)

            # Handle password update separately
            data = request.data.copy()
            if 'password' in data:
                data['password'] = make_password(data['password'])

            serializer = UserProfileSerializer(user, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "User updated successfully.", "data": serializer.data}, status=status.HTTP_200_OK)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except UserProfile.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

# Delete User
class DeleteUserView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def delete(self, request, user_id):
        try:
            user = UserProfile.objects.get(id=user_id)

            # Only HR can delete
            if request.user.role.lower() != "hr":
                return Response({"error": "Only HR can delete users."}, status=status.HTTP_403_FORBIDDEN)

            user.delete()
            return Response({"message": "User deleted successfully."}, status=status.HTTP_200_OK)

        except UserProfile.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

# Fetch All Employees (For HR Only)
class GetAllEmployeesView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.role.lower() != "hr":
            return Response({"error": "Only HR can view all employees."}, status=status.HTTP_403_FORBIDDEN)

        employees = UserProfile.objects.all()
        serializer = UserProfileSerializer(employees, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


from .models import LeaveTable
from .serializers import LeaveTableSerializer

class LeaveTableViewSet(viewsets.ModelViewSet):
    queryset = LeaveTable.objects.all()
    serializer_class = LeaveTableSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            if getattr(user, "role", None) == "hr":
                return LeaveTable.objects.select_related("employee_id", "approved_by").all()
            return LeaveTable.objects.select_related("employee_id").filter(employee_id=user.id)
        return LeaveTable.objects.none()

class PendingLeaveRequestsAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        # Only HR should access pending leave requests
        if getattr(user, "role", None).lower() != "hr":
            return Response({"error": "Only HR can view pending leave requests."}, status=status.HTTP_403_FORBIDDEN)
        pending_leaves = LeaveTable.objects.filter(leave_status="pending").select_related("employee_id")
        serializer = LeaveTableSerializer(pending_leaves, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
from datetime import date
from django.shortcuts import get_object_or_404
from .models import LeaveTable, UserProfile
from .serializers import LeaveTableSerializer
from rest_framework.permissions import IsAuthenticated
from django.db.models import F, Sum


from django.db.models import ExpressionWrapper, DurationField
class LeaveRequest(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        print("User:", request.user)
        print("User ID:", request.user.id)

        user_profile = get_object_or_404(UserProfile, id=request.user.id)
        data = request.data.copy()
        data['employee_id'] = request.user.id  
        serializer = LeaveTableSerializer(data=data)

        if serializer.is_valid():
            start_date = serializer.validated_data['start_date']
            end_date = serializer.validated_data['end_date']
            days_requested = (end_date - start_date).days + 1

            # Check if leave dates overlap with existing leave requests
            existing_leaves = LeaveTable.objects.filter(
                employee_id=request.user.id,
                start_date__lte=end_date,
                end_date__gte=start_date
            )
            
            if existing_leaves.exists():
                return Response({"error": "You have already applied for leave during these dates."}, status=status.HTTP_400_BAD_REQUEST)

            # Check if remaining leaves are exceeded, including pending leave requests
            pending_leaves = LeaveTable.objects.filter(
                employee_id=request.user.id,
                leave_status='Pending'
            ).aggregate(total_pending=Sum(
                ExpressionWrapper(F('end_date') - F('start_date') + timedelta(days=1), output_field=DurationField())
            ))
            total_pending_leaves = pending_leaves['total_pending'] or 0
            if user_profile.remaining_leaves - total_pending_leaves < days_requested:
                return Response({"error": "Not enough remaining leaves including pending requests"}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LeaveApproval(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, leave_id, *args, **kwargs):
        user = request.user
        leave_request = get_object_or_404(LeaveTable, id=leave_id)

        # Ensure only HR can approve/reject leave requests
        if getattr(user, "role", None) != "hr":
            return Response({"error": "Only HR can approve or reject leave requests."}, status=status.HTTP_403_FORBIDDEN)

        # Allow approval/rejection only if the current status is 'pending'
        if leave_request.leave_status != "pending":
            return Response({"error": "You can only approve or reject a pending leave request."}, status=status.HTTP_400_BAD_REQUEST)

        status_choice = request.data.get("leave_status")

        if status_choice.lower() not in ["approved", "rejected"]:
            return Response({"error": "Invalid status. Choose 'approved' or 'rejected'."}, status=status.HTTP_400_BAD_REQUEST)

        # If approved, update the leave balance
        if status_choice.lower() == "approved":
            user_profile = get_object_or_404(UserProfile, id=leave_request.employee_id.id)
            days_requested = (leave_request.end_date - leave_request.start_date).days + 1

            user_profile.leaves_taken += days_requested
            user_profile.remaining_leaves -= days_requested
            user_profile.save()

        leave_request.leave_status = status_choice.lower()
        leave_request.approved_on = timezone.now()  # Store approval/rejection date
        leave_request.approved_by_id = user.id  # Track who approved/rejected the request
        leave_request.save()

        return Response({"message": f"Leave request {status_choice} successfully."}, status=status.HTTP_200_OK)


from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from paysphere_app.models import Salary, UserProfile, Allowances, Deductions
from paysphere_app.serializers import SalarySerializer, AllowanceSerializer, DeductionSerializer

class CreateSalary(APIView):
    permission_classes = [IsAuthenticated]  # Ensuring user is logged in

    def post(self, request, *args, **kwargs):
        user = request.user

        # Check if the user is HR
        if getattr(user, "role", None) != "hr":
            return Response({"error": "Only HR can create salary records."}, status=status.HTTP_403_FORBIDDEN)

        # Get employee profile
        employee_id = request.data.get("employee")

# Validate employee_id before querying
        if not employee_id or not str(employee_id).isdigit():
            return Response({"error": "Invalid or missing employee ID."}, status=status.HTTP_400_BAD_REQUEST)

        employee_profile = get_object_or_404(UserProfile, id=int(employee_id))


        # Check if salary record already exists for the employee
        existing_salary = Salary.objects.filter(employee=employee_profile).first()
        if existing_salary:
            return Response({"error": "Salary record already exists for this employee."}, status=status.HTTP_400_BAD_REQUEST)

        # Calculate salary details
        data = request.data.copy()
        basic_salary = float(data.get("basic_salary", 0))
        allowances = float(data.get("allowances", 0))
        deductions = float(data.get("deductions", 0))
        gross_salary = basic_salary + allowances
        net_salary = gross_salary - deductions

        data["gross_salary"] = gross_salary
        data["net_salary"] = net_salary

        # Create new salary record
        serializer = SalarySerializer(data=data)
        if serializer.is_valid():
            serializer.save(employee=employee_profile)  # 👈 Add employee manually here
            return Response(serializer.data, status=status.HTTP_201_CREATED)


        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateAllowance(APIView):
    permission_classes = [IsAuthenticated]  # Ensuring user is logged in

    def post(self, request, *args, **kwargs):
        user = request.user

        # Check if the user is HR
        if getattr(user, "role", None) != "hr":
            return Response({"error": "Only HR can create allowances."}, status=status.HTTP_403_FORBIDDEN)

        # Get employee profile
        employee_id = request.data.get("employee")
        employee_profile = get_object_or_404(UserProfile, id=employee_id)

        # Check if salary record exists for the employee
        salary_record = Salary.objects.filter(employee=employee_profile).first()
        if not salary_record:
            return Response({"error": "Please post the basic salary details first for this employee."}, status=status.HTTP_400_BAD_REQUEST)

        # If salary record exists, proceed with posting allowance
        data = request.data.copy()
        data["employee"] = employee_id  # Assigning employee id
        serializer = AllowanceSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            # After creating allowance, update salary record
            self.update_salary(employee_profile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update_salary(self, employee_profile):
        # Calculate total allowances for the employee
        total_allowances = Allowances.objects.filter(employee=employee_profile).aggregate(Sum('amount'))['amount__sum'] or 0.0

        # Update salary record with new allowances
        salary = Salary.objects.filter(employee=employee_profile).first()
        if salary:
            salary.allowances = total_allowances
            salary.gross_salary = salary.basic_salary + total_allowances
            salary.net_salary = salary.gross_salary - salary.deductions
            salary.save()


class CreateDeduction(APIView):
    permission_classes = [IsAuthenticated]  # Ensuring user is logged in

    def post(self, request, *args, **kwargs):
        user = request.user

        # Check if the user is HR
        if getattr(user, "role", None) != "hr":
            return Response({"error": "Only HR can create deductions."}, status=status.HTTP_403_FORBIDDEN)

        # Get employee profile
        employee_id = request.data.get("employee")
        employee_profile = get_object_or_404(UserProfile, id=employee_id)

        # Check if salary record exists for the employee
        salary_record = Salary.objects.filter(employee=employee_profile).first()
        if not salary_record:
            return Response({"error": "Please post the basic salary details first for this employee."}, status=status.HTTP_400_BAD_REQUEST)

        # If salary record exists, proceed with posting deduction
        data = request.data.copy()
        data["employee"] = employee_id  # Assigning employee id
        serializer = DeductionSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            # After creating deduction, update salary record
            self.update_salary(employee_profile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update_salary(self, employee_profile):
        # Calculate total deductions for the employee
        total_deductions = Deductions.objects.filter(employee=employee_profile).aggregate(Sum('amount'))['amount__sum'] or 0.0

        # Update salary record with new deductions
        salary = Salary.objects.filter(employee=employee_profile).first()
        if salary:
            salary.deductions = total_deductions
            salary.gross_salary = salary.basic_salary + salary.allowances
            salary.net_salary = salary.gross_salary - salary.deductions
            salary.save()

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.utils import timezone
from paysphere_app.models import Salary
from .serializers import SalarySerializer

class EmployeeSalaryStatusAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        # Only HR should access the employee salary status
        if getattr(user, "role", None).lower() != "hr":
            return Response({"error": "Only HR can view employee salary status."}, status=status.HTTP_403_FORBIDDEN)
        
        # Get current month and year
        today = timezone.now()
        current_month = today.month
        current_year = today.year

        # Filter salary records for the current month
        salary_records = Salary.objects.filter(created_at__month=current_month, created_at__year=current_year)
        serializer = SalarySerializer(salary_records, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class EmployeeSalaryHistoryAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        # Only HR should access the employee salary history
        if getattr(user, "role", None).lower() != "hr":
            return Response({"error": "Only HR can view employee salary history."}, status=status.HTTP_403_FORBIDDEN)

        # Get current month and year
        today = timezone.now()
        current_month = today.month
        current_year = today.year

        # Filter salary records up to the previous month
        salary_records = Salary.objects.filter(created_at__lt=timezone.datetime(current_year, current_month, 1))
        serializer = SalarySerializer(salary_records, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.utils import timezone
from .models import Salary
from .serializers import SalarySerializer

class CurrentSalaryDetails(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user

        # Get the latest salary record for the logged-in user
        latest_salary = Salary.objects.filter(employee=user).order_by('-created_at').first()

        if not latest_salary:
            return Response({"error": "No salary records found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = SalarySerializer(latest_salary)
        return Response(serializer.data, status=status.HTTP_200_OK)

from django.utils import timezone
from datetime import datetime, timezone as dt_timezone

class PayrollHistory(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user

        # Get current month and year
        today = timezone.now()
        current_month = today.month
        current_year = today.year

        # Get the first day of the current month with UTC timezone
        first_day_of_current_month = datetime(current_year, current_month, 1, tzinfo=dt_timezone.utc)

        # Fetch salary records up to the previous month (excluding current month)
        salary_history = Salary.objects.filter(
            employee=user,
            created_at__lt=first_day_of_current_month  # Exclude current month
        ).order_by('-created_at')

        if not salary_history.exists():
            return Response({"error": "No payroll history found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = SalarySerializer(salary_history, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.utils import timezone
from .models import Salary
from .serializers import PayslipSerializer
import smtplib

class GeneratePayslip(APIView):
    permission_classes = [IsAuthenticated]  # Ensures only logged-in users can access

    def put(self, request, employee_id):
        user = request.user

        # Only HR can generate payslips
        if getattr(user, "role", "").lower() != "hr":
            return Response({"error": "Only HR can generate payslips."}, status=status.HTTP_403_FORBIDDEN)

        try:
            salary = Salary.objects.filter(employee_id=employee_id).latest('created_at')
            serializer = PayslipSerializer(salary)

            # Update Salary Fields
            salary.gross_salary = serializer.get_gross_salary(salary)
            salary.net_salary = serializer.get_net_salary(salary)
            salary.save()

            # Send Email Notification
            subject = "Payroll Processed - Payslip Available"
            message = f"""
            Dear Gowtham,

            Your payroll has been processed for this month.

            Basic Salary: ₹{salary.basic_salary}
            Total Allowances: ₹{serializer.get_allowances(salary)}
            Gross Salary: ₹{salary.gross_salary}
            Total Deductions: ₹{serializer.get_deductions(salary)}
            Net Salary: ₹{salary.net_salary}

            Please check your payslip in the HR Portal.

            Best regards,
            Payroll Team
            """
            recipient = salary.employee.email
            send_mail(subject, message, 'gowthamkumar2308@gmail.com', [recipient])

            return Response({"message": "Payslip generated and email sent", "data": serializer.data})
        except Salary.DoesNotExist:
            return Response({"error": "Salary details not found for this employee"}, status=status.HTTP_404_NOT_FOUND)
        
        
        
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import UserProfile, Salary
from .serializers import SalarySerializer  # Assuming you have this

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_employee_salary_history(request, user_id):
    # ✅ Only HRs are allowed to access this endpoint
    if request.user.role != 'hr':
        return Response({'error': 'Access denied. HR only.'}, status=403)

    try:
        user = UserProfile.objects.get(id=user_id)
    except UserProfile.DoesNotExist:
        return Response({'error': 'Employee not found.'}, status=404)

    salary_records = Salary.objects.filter(employee=user).order_by('-created_at')  # fallback ordering
    if not salary_records.exists():
        return Response({'message': 'No salary records found for this employee.'}, status=200)
    serializer = SalarySerializer(salary_records, many=True)
    return Response(serializer.data)


# views

# from django.core.mail import send_mail
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.permissions import IsAuthenticated
# from .models import Salary
# from .serializers import PayslipSerializer

# class GeneratePayslip(APIView):
#     permission_classes = [IsAuthenticated]

#     def put(self, request, employee_id):
#         try:
#             salary = Salary.objects.get(employee__id=employee_id)  # Assuming Salary model has `employee` FK
#             serializer = PayslipSerializer(salary)

#             # Update Salary Fields
#             salary.gross_salary = serializer.get_gross_salary(salary)
#             salary.net_salary = serializer.get_net_salary(salary)
#             salary.save()

#             # Send Email Notification
#             subject = "Payroll Processed - Payslip Available"
#             message = f"""
#             Dear {salary.employee.username},

#             Your payroll has been processed for this month.

#             Basic Salary: ₹{salary.basic_salary}
#             Total Allowances: ₹{serializer.get_total_allowances(salary)}
#             Gross Salary: ₹{salary.gross_salary}
#             Total Deductions: ₹{serializer.get_total_deductions(salary)}
#             Net Salary: ₹{salary.net_salary}

#             Please check your payslip in the HR Portal.

#             Best regards,
#             Payroll Team
#             """
#             recipient = salary.employee.email  # Assuming Salary model links to User via `employee`
#             send_mail(subject, message, 'your_email@gmail.com', [recipient])

#             return Response({"message": "Payslip generated and email sent", "data": serializer.data})
#         except Salary.DoesNotExist:
#             return Response({"error": "Salary record not found"}, status=404)

# # from django.utils import timezone

# # class PayrollHistory(APIView):
# #     permission_classes = [IsAuthenticated]

# #     def get(self, request, *args, **kwargs):
# #         user = request.user

# #         # Get current month and year
# #         today = timezone.now()
# #         current_month = today.month
# #         current_year = today.year

# #         # Fetch salary records up to the previous month (excluding current month)
# #         salary_history = Salary.objects.filter(
# #             employee=user,
# #             created_at__lt=timezone.datetime(current_year, current_month, 1, tzinfo=timezone.utc)
# #         ).order_by('-created_at')

# #         if not salary_history.exists():
# #             return Response({"error": "No payroll history found."}, status=status.HTTP_404_NOT_FOUND)

# #         serializer = SalarySerializer(salary_history, many=True)
# #         return Response(serializer.data, status=status.HTTP_200_OK)

# # class PayrollHistory(APIView):
# #     permission_classes = [IsAuthenticated]

# #     def get(self, request, *args, **kwargs):
# #         user = request.user

# #         # Fetch all previous salary records for the logged-in user
# #         salary_history = Salary.objects.filter(employee=user).order_by('-created_at')

# #         if not salary_history.exists():
# #             return Response({"error": "No payroll history found."}, status=status.HTTP_404_NOT_FOUND)

# #         serializer = SalarySerializer(salary_history, many=True)
# #         return Response(serializer.data, status=status.HTTP_200_OK)
