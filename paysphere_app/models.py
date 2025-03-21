# # # # from django.db import models

# # # # # Create your models here.
# # # from django.db import models

# # # class User(models.Model):
# # #     first_name = models.CharField(max_length=100)
# # #     last_name = models.CharField(max_length=100)
# # #     email = models.EmailField(unique=True)
# # #     password = models.CharField(max_length=100)

# # #     def __str__(self):
# # #         return self.email

# # #     class Meta:
# # #         db_table = 'user'


# # from django.db import models

# # class User(models.Model):
# #     GROUP_CHOICES = [
# #         ('HR', 'HR'),
# #         ('Employee', 'Employee')
# #     ]
    
# #     GENDER_CHOICES = [
# #         ('Male', 'Male'),
# #         ('Female', 'Female'),
# #         ('Other', 'Other')
# #     ]
    
# #     first_name = models.CharField(max_length=100)
# #     last_name = models.CharField(max_length=100)
# #     email = models.EmailField(unique=True)
# #     profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
# #     gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
# #     dob = models.DateField()
# #     password = models.CharField(max_length=100)
# #     designation = models.CharField(max_length=50)
# #     address = models.TextField()
# #     group = models.CharField(max_length=10, choices=GROUP_CHOICES)
# #     phone_no = models.CharField(max_length=15, unique=True)
# #     department = models.CharField(max_length=50)
# #     active = models.BooleanField(default=True)
# #     created_at = models.DateTimeField(auto_now_add=True)
# #     modified_at = models.DateTimeField(auto_now=True)
# #     created_by = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='created_users')
# #     modified_by = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='modified_users')
    
# #     def __str__(self):
# #         return self.email

# #     class Meta:
# #         db_table = 'user'

# from django.db import models
# from django.contrib.auth.models import AbstractUser,AbstractBaseUser, BaseUserManager


# class UserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError("Email is required")
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)  # Hash password
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)
#         return self.create_user(email, password, **extra_fields)

# class UserProfile(AbstractBaseUser):
    
#     ROLE_CHOICES = (
#         ('admin', 'Admin'),
#         ('employee', 'Employee'),
#     )
    
#     GENDER_CHOICES = [
#         ('M', 'Male'),
#         ('F', 'Female'),
#         ('O', 'Other'),
#     ]
    
#     GROUP_CHOICES = [
#         ('HR', 'HR'),
#         ('Employee', 'Employee'),
#     ]

#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     email = models.EmailField(unique=True)
#     profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
#     gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
#     dob = models.DateField()
#     designation = models.CharField(max_length=100)
#     address = models.TextField(max_length=300)
#     group = models.CharField(max_length=10, choices=GROUP_CHOICES)
#     phone_no = models.CharField(max_length=12, unique=True)
#     department = models.CharField(max_length=100)
    
#     role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='employee')
#     is_active = models.BooleanField(default=True)  # Active/Inactive Status
#     is_staff = models.BooleanField(default=False)  # Required for Django Admin
#     is_superuser = models.BooleanField(default=False)  # Required for Django Admin
    
#     created_at = models.DateTimeField(auto_now_add=True)
#     modified_at = models.DateTimeField(auto_now=True)
#     created_by = models.CharField(max_length=100)
#     modified_by = models.CharField(max_length=100)

#     objects = UserManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_no', 'dob']

#     def __str__(self):
#         return self.email





# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# class UserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError("Email is required")
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)  # Hash password
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)
#         return self.create_user(email, password, **extra_fields)

# class UserProfile(AbstractBaseUser):
#     ROLE_CHOICES = (
#         ('hr', 'HR'),
#         ('employee', 'Employee'),
#     )
    
#     role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='employee')
#     is_active = models.BooleanField(default=True)  # Active/Inactive Status
    
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     email = models.EmailField(unique=True)
#     phone_no = models.CharField(max_length=12, unique=True)
#     dob = models.DateField()
#     profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
#     designation = models.CharField(max_length=100)
#     address = models.TextField(max_length=300)
#     department = models.CharField(max_length=100)
    
#     created_at = models.DateTimeField(auto_now_add=True)
#     modified_at = models.DateTimeField(auto_now=True)

#     objects = UserManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_no', 'dob']

#     def __str__(self):
#         return self.email



from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)  
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields["is_staff"] = True
        extra_fields["is_superuser"] = True
        extra_fields.setdefault("role", "hr")
        return self.create_user(email, password, **extra_fields)

class UserProfile(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    ROLE_CHOICES = (("hr", "HR"), ("employee", "Employee"))

    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default="employee")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Added password field
    phone_no = models.CharField(max_length=12, unique=True)
    dob = models.DateField()
    profile_pic = models.ImageField(upload_to="profile_pics/", blank=True, null=True)
    designation = models.CharField(max_length=100)
    address = models.TextField(max_length=300)
    department = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "phone_no", "dob"]

    def __str__(self):
        return self.email

from django.utils import timezone
from django.core.exceptions import ValidationError

class LeaveTable(models.Model):
    id = models.AutoField(primary_key=True)
    LEAVE_TYPES = [
        ("sick", "Sick Leave"),
        ("casual", "Casual Leave"),
        ("paid", "Paid Leave"),
        ("unpaid", "Unpaid Leave"),
        ("vacation", "Vacation Leave"),
        ("maternity", "Maternity Leave"),
    ]

    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("approved", "Approved"),
        ("rejected", "Rejected"),
    ]

    employee_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="leave_requests")
    leave_type = models.CharField(max_length=10, choices=LEAVE_TYPES)
    start_date = models.DateField()
    end_date = models.DateField()
    leave_status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="pending")
    reason = models.TextField(max_length=500, blank=True, null=True)
    applied_date = models.DateTimeField(auto_now_add=True)
    approved_on = models.DateTimeField(blank=True, null=True)
    approved_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name="approved_leaves")
    
        
    def save(self, *args, **kwargs):
        if self.leave_status in ["approved", "rejected","Approved","Rejected"]:
            self.approved_on = timezone.now()
            if not self.approved_by:
                raise ValidationError({"approved_by": "Approver is required for approved/rejected  leaves."})
        else:
            self.approved_on = None  # Reset date if status is pending
            self.approved_by = None  # Reset approver too
        super().save(*args, **kwargs)

    def clean(self):
        """Ensure that `approved_by` is required if leave is accepted"""
        if self.leave_status == "accepted" and not self.approved_by:
            raise ValidationError({"approved_by": "Approver is required for accepted leaves."})
        
    def __str__(self):
        return f"{self.employee_id.email} - {self.leave_type} ({self.leave_status})"