
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
        user = self.request.user  # Get logged-in user

        # If HR, return all users
        if user.role.lower() == "hr":
            return UserProfile.objects.all()

        # If an employee tries to fetch all users, return an error
        if self.action == "list":
            raise PermissionDenied("Only HR can see all users.")

        return UserProfile.objects.filter(id=user.id)  # Employee can see only their own details

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

# class LeaveRequest(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, *args, **kwargs):
#         print("User:", request.user)  
#         print("User ID:", request.user.id)

#         user_profile = get_object_or_404(UserProfile, id=request.user.id)
#         data = request.data.copy()
#         data['employee_id'] = request.user.id  
#         serializer = LeaveTableSerializer(data=data)

#         if serializer.is_valid():
#             days_requested = (serializer.validated_data['end_date'] - serializer.validated_data['start_date']).days + 1
            
#             # Check if remaining leaves are exceeded
#             if user_profile.remaining_leaves < days_requested:
#                 return Response({"error": "Not enough remaining leaves"}, status=status.HTTP_400_BAD_REQUEST)

#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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

# class LeaveRequest(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, *args, **kwargs):
#         print("User:", request.user)
#         print("User ID:", request.user.id)

#         user_profile = get_object_or_404(UserProfile, id=request.user.id)
#         data = request.data.copy()
#         data['employee_id'] = request.user.id  
#         serializer = LeaveTableSerializer(data=data)

#         if serializer.is_valid():
#             start_date = serializer.validated_data['start_date']
#             end_date = serializer.validated_data['end_date']
#             days_requested = (end_date - start_date).days + 1

#             # Check if leave dates overlap with existing leave requests
#             existing_leaves = LeaveTable.objects.filter(
#                 employee_id=request.user.id,
#                 start_date__lte=end_date,
#                 end_date__gte=start_date
#             )
            
#             if existing_leaves.exists():
#                 return Response({"error": "You have already applied for leave during these dates."}, status=status.HTTP_400_BAD_REQUEST)

#             # Check if remaining leaves are exceeded
#             if user_profile.remaining_leaves < days_requested:
#                 return Response({"error": "Not enough remaining leaves"}, status=status.HTTP_400_BAD_REQUEST)

#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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

