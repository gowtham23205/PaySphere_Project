# # from django.urls import path
# # from rest_framework.routers import DefaultRouter
# # from .views import UserViewSet

# # router = DefaultRouter()
# # router.register(r'users', UserViewSet)

# # urlpatterns = router.urls



# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import UserViewSet, RegisterView

# router = DefaultRouter()
# router.register(r'users', UserViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
#     path('register/', RegisterView.as_view(), name='register'),
# ]



# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import RegisterView, UserViewSet, UserDetailView, UserUpdateView, UserDeleteView, ActivateDeactivateUserView,CustomAuthTokenView
# from rest_framework.authtoken.views import obtain_auth_token

# router = DefaultRouter()
# router.register(r'users', UserViewSet, basename='user')

# urlpatterns = [
#     path('register/', RegisterView.as_view(), name='register'),
#     path('login/', CustomAuthTokenView.as_view(), name='login'),
    
#     path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
#     path('users/update/<int:pk>/', UserUpdateView.as_view(), name='user-update'),
#     path('users/delete/<int:pk>/', UserDeleteView.as_view(), name='user-delete'),
#     path('users/activate-deactivate/<int:pk>/', ActivateDeactivateUserView.as_view(), name='user-activate-deactivate'),
#     path('', include(router.urls)),
# ]

# urlpatterns += router.urls




# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import (
#     RegisterView, UserViewSet, UserDetailView, UserUpdateView, 
#     UserDeleteView, ActivateDeactivateUserView, CustomAuthTokenView
# )

# router = DefaultRouter()
# router.register(r'users', UserViewSet, basename='user')

# urlpatterns = [
#     path('register/', RegisterView.as_view(), name='register'),
#     path('login/', CustomAuthTokenView.as_view(), name='login'),
    
#     path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
#     path('users/update/<int:pk>/', UserUpdateView.as_view(), name='user-update'),
#     path('users/delete/<int:pk>/', UserDeleteView.as_view(), name='user-delete'),
#     path('users/activate-deactivate/<int:pk>/', ActivateDeactivateUserView.as_view(), name='user-activate-deactivate'),
#     path('', include(router.urls)),
# ]
# This code snippet is defining URL patterns for a Django application using the Django `path` function
# and the `DefaultRouter` from Django REST framework. Here's a breakdown of what the code is doing:


from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    home, CustomLoginView, RegisterView, UserViewSet,ActivateUserView,DeactivateUserView,UpdateUserView,DeleteUserView,LeaveTableViewSet,LeaveRequest,LeaveApproval
)

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'leaves', LeaveTableViewSet,basename='leaves')


urlpatterns = [
    path('', home, name='home'),
    path('api/login/', CustomLoginView.as_view(), name='login'),
    path('api/register/', RegisterView.as_view(), name='register_user'),
    path('api/update-user/<int:user_id>/', UpdateUserView.as_view(), name='update-user'),
    path('api/delete-user/<int:user_id>/', DeleteUserView.as_view(), name='delete-user'),
    path('api/user/activate/<int:user_id>/', ActivateUserView.as_view(), name='activate_user'),
    path('api/user/deactivate/<int:user_id>/',DeactivateUserView.as_view(), name='deactivate_user'),
    path('api/', include(router.urls)),
    
    path('api/leave/apply/', LeaveRequest.as_view(), name='leave_apply'),
    path('api/leave/approval/<int:leave_id>/',LeaveApproval.as_view(), name='leave_approval'),
]





