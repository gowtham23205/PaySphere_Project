# # # from django.shortcuts import render

# # # # # Create your views here.
# # # # from rest_framework import viewsets

# # # # class UserViewSet(viewsets.ModelViewSet):
# # # #     queryset = User.objects.all()
# # # #     serializer_class = UserSerializer

# # # from rest_framework import viewsets,generics
# # # from .models import UserProfile
# # # from .serializers import UserProfileSerializer,UserSerializer

# # # class UserViewSet(viewsets.ModelViewSet):
# # #     queryset = UserProfile.objects.all()
# # #     serializer_class = UserProfileSerializer
    
# # # from django.http import HttpResponse

# # # def home(request):
# # #     return HttpResponse("Welcome to Paysphere!"+" Hello, "+"This is Gowtham")

# # # # from rest_framework import generics
# # # from django.contrib.auth.models import User
# # # from rest_framework.response import Response
# # # from rest_framework import status
# # # # from .serializers import UserSerializer

# # # class RegisterView(generics.CreateAPIView):
# # #     queryset = User.objects.all()
# # #     serializer_class = UserSerializer
# # #     permission_classes = [AllowAny]

# # #     def create(self, request, *args, **kwargs):
# # #         serializer = self.get_serializer(data=request.data)
# # #         if serializer.is_valid():
# # #             user = serializer.save()
# # #             return Response({"message": "User registered successfully!", "user": serializer.data}, status=status.HTTP_201_CREATED)
# # #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # from django.shortcuts import render
# # from rest_framework import viewsets, generics,status
# # from .models import UserProfile
# # from .serializers import UserProfileSerializer, UserSerializer
# # from django.http import HttpResponse
# # from django.contrib.auth import authenticate
# # from rest_framework.response import Response
# # from rest_framework.permissions import AllowAny, IsAuthenticated
# # from rest_framework.authtoken.models import Token
# # from rest_framework.views import APIView


# # # Home Page
# # def home(request):
# #     return HttpResponse("Welcome to Paysphere!" + " Hello, " + "This is Gowtham")


# # # User Registration API
# # class RegisterView(generics.CreateAPIView):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserSerializer
# #     permission_classes = [AllowAny]  # Allow anyone to register

# #     def create(self, request, *args, **kwargs):
# #         serializer = self.get_serializer(data=request.data)
# #         if serializer.is_valid():
# #             user = serializer.save()
# #             token, created = Token.objects.get_or_create(user=user)  # Generate auth token
# #             return Response({"message": "User registered successfully!", "user": serializer.data, "token": token.key}, status=status.HTTP_201_CREATED)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # # User Login API
# # class LoginView(APIView):
# #     permission_classes = [AllowAny]  # Allow anyone to log in

# #     def post(self, request, *args, **kwargs):
# #         email = request.data.get("email")
# #         password = request.data.get("password")

# #         user = authenticate(email=email, password=password)
# #         if user:
# #             token, created = Token.objects.get_or_create(user=user)
# #             return Response({"message": "Login successful", "token": token.key, "role": user.role}, status=status.HTTP_200_OK)
# #         return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


# # # User Logout API
# # class LogoutView(APIView):
# #     permission_classes = [IsAuthenticated]  # Only authenticated users can log out

# #     def post(self, request, *args, **kwargs):
# #         request.user.auth_token.delete()  # Delete user's auth token
# #         return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)


# # # User CRUD Operations
# # class UserViewSet(viewsets.ModelViewSet):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserProfileSerializer
# #     permission_classes = [IsAuthenticated]  # Only logged-in users can perform CRUD operations

# #######python manage.py makemigrations
# #######python manage.py migrate
# #######python manage.py runserver


# # from rest_framework import viewsets, generics, status
# # from rest_framework.response import Response
# # from rest_framework.permissions import IsAuthenticated, AllowAny
# # from rest_framework.authtoken.models import Token
# # from rest_framework.authtoken.views import ObtainAuthToken
# # from django.contrib.auth import authenticate
# # from django.http import HttpResponse
# # from .models import UserProfile
# # from .serializers import UserProfileSerializer, UserSerializer

# # # Home Page View
# # def home(request):
# #     return HttpResponse("Welcome to Paysphere! Hello, This is Gowtham")

# # # User ViewSet (CRUD Operations)
# # class UserViewSet(viewsets.ModelViewSet):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserProfileSerializer
# #     permission_classes = [IsAuthenticated]  

# # # Register User API
# # class RegisterView(generics.CreateAPIView):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserSerializer
# #     permission_classes = [IsAuthenticated]

# #     def create(self, request, *args, **kwargs):
# #         if request.user.role not in ['HR', 'hr']:   # Only HR can register employees
# #             return Response(
# #                 {"error": "Only HR can register employees."},
# #                 status=status.HTTP_403_FORBIDDEN
# #             )
# #         serializer = self.get_serializer(data=request.data)
# #         if serializer.is_valid():
# #             user = serializer.save()
# #             token, created = Token.objects.get_or_create(user=user)
# #             return Response({
# #                 "message": "User registered successfully!",
# #                 "user": serializer.data,
# #                 "token": token.key  # Return Bearer Token on Registration
# #             }, status=status.HTTP_201_CREATED)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # # Custom Login View (Token-Based)
# # class CustomAuthTokenView(ObtainAuthToken):
# #     def post(self, request, *args, **kwargs):
# #         serializer = self.serializer_class(data=request.data, context={'request': request})
# #         serializer.is_valid(raise_exception=True)
# #         user = serializer.validated_data['user']
# #         token, created = Token.objects.get_or_create(user=user)
# #         return Response({"token": f"Bearer {token.key}"})

# # # User Detail View (Retrieve User Info)
# # class UserDetailView(generics.RetrieveAPIView):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserProfileSerializer
# #     permission_classes = [IsAuthenticated]

# # # Update User Info
# # class UserUpdateView(generics.UpdateAPIView):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserProfileSerializer
# #     permission_classes = [IsAuthenticated]

# # # Delete User
# # class UserDeleteView(generics.DestroyAPIView):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserProfileSerializer
# #     permission_classes = [IsAuthenticated]

# # # Activate / Deactivate User
# # class ActivateDeactivateUserView(generics.UpdateAPIView):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserProfileSerializer
# #     permission_classes = [IsAuthenticated]

# #     def patch(self, request, *args, **kwargs):
# #         user = self.get_object()
# #         user.is_active = not user.is_active  
# #         user.save()
# #         return Response({"message": f"User successfully {'activated' if user.is_active else 'deactivated'}."}, status=status.HTTP_200_OK)





# from rest_framework import viewsets, generics, status
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from django.http import HttpResponse
# from .models import UserProfile
# from .serializers import UserProfileSerializer, UserSerializer
# from rest_framework.authtoken.views import ObtainAuthToken

# # Home Page View
# def home(request):
#     return HttpResponse("Welcome to Paysphere! Hello, This is Gowtham")

# # User ViewSet (HR can access all users, Employees can only access their own data)
# class UserViewSet(viewsets.ModelViewSet):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         if user.role in ['HR', 'hr']:
#             return UserProfile.objects.all()  # HR can see all users
#         return UserProfile.objects.filter(id=user.id)  # Employees can only see their own profile

# # Register User API (Only HR can register employees)
# class RegisterView(generics.CreateAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         if request.user.role not in ['HR', 'hr']:  # Only HR can register employees
#             return Response(
#                 {"error": "Only HR can register employees."},
#                 status=status.HTTP_403_FORBIDDEN
#             )
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({
#                 "message": "User registered successfully!",
#                 "user": serializer.data
#             }, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # User Detail View (Employees can only see their own details, HR can see any user)
# class UserDetailView(generics.RetrieveAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         if user.role in ['HR', 'hr']:
#             return UserProfile.objects.all()
#         return UserProfile.objects.filter(id=user.id)

# # Update User Info (Employees can update their own profile, HR can update anyone)
# class UserUpdateView(generics.UpdateAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         if user.role in ['HR', 'hr']:
#             return UserProfile.objects.all()  # HR can update any user
#         return UserProfile.objects.filter(id=user.id)  # Employees can only update their own profile

# # Delete User (Only HR can delete users)
# class UserDeleteView(generics.DestroyAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         if user.role in ['HR', 'hr']:
#             return UserProfile.objects.all()  # HR can delete any user
#         return UserProfile.objects.none()  # Employees cannot delete anyone

# # Activate / Deactivate User (Only HR can activate/deactivate employees)
# class ActivateDeactivateUserView(generics.UpdateAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticated]

#     def patch(self, request, *args, **kwargs):
#         user = self.request.user
#         if user.role not in ['HR', 'hr']:  # Only HR can activate/deactivate
#             return Response({"error": "Only HR can perform this action."}, status=status.HTTP_403_FORBIDDEN)
        
#         employee = self.get_object()
#         employee.is_active = not employee.is_active
#         employee.save()
#         return Response({"message": f"User successfully {'activated' if employee.is_active else 'deactivated'}."}, status=status.HTTP_200_OK)

# class CustomAuthTokenView(ObtainAuthToken):
#     def post(self, request, *args, **kwargs):
#         return super().post(request, *args, **kwargs)



# from datetime import datetime, timedelta
# import jwt
# from django.conf import settings
# from django.contrib.auth.hashers import check_password
# from django.http import HttpResponse
# from rest_framework import viewsets, generics, status
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.views import APIView
# from rest_framework.exceptions import AuthenticationFailed
# from .models import UserProfile
# from .serializers import UserProfileSerializer, UserSerializer
# from rest_framework.authtoken.models import Token
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework.authentication import BaseAuthentication

# # Home Page View
# def home(request):
#     return HttpResponse("Welcome to Paysphere! Hello, This is Gowtham")

# # JWT Token Generation
# def generate_jwt_token(user):
#     payload = {
#         "user_id": user.id,
#         "role": user.role,
#         "exp": datetime.utcnow() + timedelta(hours=2),  # Token expires in 2 hours
#         "iat": datetime.utcnow()
#     }
#     token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
#     return token


# # Middleware for JWT Authentication
# class JWTAuthentication(BaseAuthentication):
#     def authenticate(self, request):
#         auth_header = request.headers.get("Authorization")
#         if not auth_header or " " not in auth_header:
#             return None  # No authentication provided, let other auth classes handle it
        
#         token = auth_header.split(" ")[1]  # Extract token after "Bearer"
        
#         try:
#             payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
#             user = UserProfile.objects.get(id=payload["user_id"])
#         except jwt.ExpiredSignatureError:
#             raise AuthenticationFailed("Token has expired.")
#         except jwt.InvalidTokenError:
#             raise AuthenticationFailed("Invalid token.")
#         except UserProfile.DoesNotExist:
#             raise AuthenticationFailed("User not found.")

#         return (user, token)  # Correct return format


# class CustomLoginView(APIView):
#     authentication_classes = []  # No authentication required for login
#     permission_classes = []  # No permission required for login

#     def post(self, request):
#         email = request.data.get("email")
#         password = request.data.get("password")

#         try:
#             user = UserProfile.objects.get(email=email)
#             if not check_password(password, user.password):
#                 raise AuthenticationFailed("Incorrect password.")
#         except UserProfile.DoesNotExist:
#             raise AuthenticationFailed("User not found.")

#         # Generate JWT token
#         token = generate_jwt_token(user)

#         return Response({"message": "Login successful", "token": token, "role": user.role}, status=status.HTTP_200_OK)

# # Custom Token Refresh View
# class CustomTokenRefreshView(APIView):
#     def post(self, request):
#         old_token = request.data.get("token")
#         if not old_token:
#             return Response({"error": "Token is required."}, status=status.HTTP_400_BAD_REQUEST)

#         try:
#             payload = jwt.decode(old_token, settings.SECRET_KEY, algorithms=["HS256"])
#             user = UserProfile.objects.get(id=payload["user_id"])  # Fix here
#             new_token = generate_jwt_token(user)
#             return Response({"token": new_token}, status=status.HTTP_200_OK)
#         except jwt.ExpiredSignatureError:
#             return Response({"error": "Token has expired."}, status=status.HTTP_401_UNAUTHORIZED)
#         except jwt.InvalidTokenError:
#             return Response({"error": "Invalid token."}, status=status.HTTP_401_UNAUTHORIZED)
#         except UserProfile.DoesNotExist:
#             return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)


# # User ViewSet (HR can access all users, Employees can only access their own data)
# from rest_framework_simplejwt.authentication import JWTAuthentication

# class UserViewSet(viewsets.ModelViewSet):
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer

#     def get_queryset(self):
#         user = self.request.user
#         if user.role.lower() == "hr":
#             return UserProfile.objects.all()
#         return UserProfile.objects.filter(id=user.id)

# class RegisterView(generics.CreateAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]

#     def create(self, request, *args, **kwargs):
#         # Ensure the user is authenticated
#         user = request.user
#         if not user or not hasattr(user, "role"):
#             return Response({"error": "Authentication required."}, status=status.HTTP_401_UNAUTHORIZED)

#         # Check if the user is HR
#         if user.role.lower() != "hr":
#             return Response({"error": "Only HR can register employees."}, status=status.HTTP_403_FORBIDDEN)

#         # Process user registration
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "User registered successfully!", "user": serializer.data}, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # User Detail View (Employees can only see their own details, HR can see any user)
# class UserDetailView(generics.RetrieveAPIView):
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer

#     def get_queryset(self):
#         user = self.request.user
#         if user.role.lower() == "hr":
#             return UserProfile.objects.all()
#         return UserProfile.objects.filter(id=user.id)

# # Update User Info (Employees can update their own profile, HR can update anyone)
# class UserUpdateView(JWTAuthentication, generics.UpdateAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer

#     def get_queryset(self):
#         self.authenticate(self.request)
#         user = self.request.user
#         if user.role in ['HR', 'hr']:
#             return UserProfile.objects.all()
#         return UserProfile.objects.filter(id=user.id)

# # Delete User (Only HR can delete users)
# class UserDeleteView(generics.DestroyAPIView):
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer

#     def destroy(self, request, *args, **kwargs):
#         user = request.user
#         if user.role.lower() != "hr":
#             return Response({"error": "Only HR can delete users."}, status=status.HTTP_403_FORBIDDEN)
#         return super().destroy(request, *args, **kwargs)

# # Activate User (Only HR can activate users)
# class ActivateUserView(JWTAuthentication, APIView):
#     def patch(self, request, pk):
#         self.authenticate(request)
#         if request.user.role not in ['HR', 'hr']:
#             return Response({"error": "Only HR can activate users."}, status=status.HTTP_403_FORBIDDEN)

#         try:
#             user = UserProfile.objects.get(pk=pk)
#             if user.is_active:
#                 return Response({"message": "User is already active."}, status=status.HTTP_400_BAD_REQUEST)
#             user.is_active = True
#             user.save()
#             return Response({"message": "User activated successfully."}, status=status.HTTP_200_OK)
#         except UserProfile.DoesNotExist:
#             return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

# # Deactivate User (Only HR can deactivate users)
# class DeactivateUserView(JWTAuthentication, APIView):
#     def patch(self, request, pk):
#         self.authenticate(request)
#         if request.user.role not in ['HR', 'hr']:
#             return Response({"error": "Only HR can deactivate users."}, status=status.HTTP_403_FORBIDDEN)

#         try:
#             user = UserProfile.objects.get(pk=pk)
#             if not user.is_active:
#                 return Response({"message": "User is already deactivated."}, status=status.HTTP_400_BAD_REQUEST)
#             user.is_active = False
#             user.save()
#             return Response({"message": "User deactivated successfully."}, status=status.HTTP_200_OK)
#         except UserProfile.DoesNotExist:
#             return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)


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

# class LeaveTableViewSet(viewsets.ModelViewSet):
#     queryset = LeaveTable.objects.all()
#     serializer_class = LeaveTableSerializer
#     permission_classes = [permissions.IsAuthenticated]
#     def get_queryset(self):
#         user = self.request.user
#         if user.is_authenticated:
#             if user.role == "hr":
#                 return LeaveTable.objects.all()
#             return LeaveTable.objects.filter(employee=user)
#         return LeaveTable.objects.none()
#     def create(self, request, *args, **kwargs):
#         request.data['employee'] = request.user.id  # Associate leave request with logged-in user
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




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

    
class LeaveRequest(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        print("User:", request.user)  # Debugging line
        print("User ID:", request.user.id)
        data = request.data.copy()
        data['employee_id'] = request.user.id  # Fix: Use modified data instead of request.data
        serializer = LeaveTableSerializer(data=data)  # Fix: Pass modified data
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date
from .models import LeaveTable
from django.shortcuts import get_object_or_404


class LeaveApproval(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, leave_id, *args, **kwargs):
        user = request.user

        # Ensure only HR can approve/reject leave requests
        if getattr(user, "role", None) != "hr":
            return Response({"error": "Only HR can approve or reject leave requests."}, status=status.HTTP_403_FORBIDDEN)

        leave_request = get_object_or_404(LeaveTable, id=leave_id)

        # HR cannot approve/reject their own leave request
        if leave_request.employee_id == user.id:
            return Response({"error": "You cannot approve or reject your own leave request."}, status=status.HTTP_403_FORBIDDEN)

        # Allow approval/rejection only if the current status is 'pending'
        if leave_request.leave_status != "pending":
            return Response({"error": "You can only approve or reject a pending leave request."}, status=status.HTTP_400_BAD_REQUEST)

        status_choice = request.data.get("leave_status")

        if status_choice not in ["approved", "rejected","Approved","Rejected"]:
            return Response({"error": "Invalid status. Choose 'approved' or 'rejected'."}, status=status.HTTP_400_BAD_REQUEST)

        leave_request.leave_status = status_choice
        leave_request.approved_on = timezone.now()  # Store approval/rejection date
        leave_request.approved_by_id = user.id  # Track who approved/rejected the request
        leave_request.save()

        return Response({"message": f"Leave request {status_choice} successfully."}, status=status.HTTP_200_OK)
    
    
# class LeaveApproval(APIView):
#     permission_classes = [IsAuthenticated]

#     def patch(self, request, leave_id, *args, **kwargs):
#         user = request.user
#         # Ensure only HR can approve/reject leave requests
#         if getattr(user, "role", None) != "hr":
#             return Response({"error": "Only HR can approve or reject leave requests."}, status=status.HTTP_403_FORBIDDEN)
#         leave_request = get_object_or_404(LeaveTable, id=leave_id)
#         # Restrict employees from approving their own leave
#         if leave_request.employee_id == user.id:
#             return Response({"error": "You cannot approve your own leave request."}, status=status.HTTP_403_FORBIDDEN)
#         # Allow approval/rejection only if the current status is 'pending'
#         if leave_request.status != "pending":
#             return Response({"error": "You can only approve or reject a pending leave request."}, status=status.HTTP_400_BAD_REQUEST)
#         status_choice = request.data.get("status")
#         if status_choice not in ["approved", "rejected"]:
#             return Response({"error": "Invalid status. Choose 'approved' or 'rejected'."}, status=status.HTTP_400_BAD_REQUEST)
#         leave_request.status = status_choice
#         leave_request.approval_date = date.today()  # Store approval/rejection date
#         leave_request.approved_by = user  # Track who approved/rejected the request
#         leave_request.save()
#         return Response({"message": f"Leave request {status_choice} successfully."}, status=status.HTTP_200_OK)
