
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import (
    home, CustomLoginView, RegisterView, UserViewSet,ActivateUserView,DeactivateUserView,UpdateUserView,DeleteUserView,
    LeaveTableViewSet,LeaveRequest,LeaveApproval,PendingLeaveRequestsAPIView,CreateSalary,CreateAllowance,CreateDeduction,
    EmployeeSalaryStatusAPIView,EmployeeSalaryHistoryAPIView,CurrentSalaryDetails,PayrollHistory,GeneratePayslip
)

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'leaves', LeaveTableViewSet,basename='leaves')


urlpatterns = [
    path('', home, name='home'),
    # path('api/login/', CustomLoginView, name='login'),
    path('api/login/', CustomLoginView.as_view(), name='login'),
    path('api/register/', RegisterView.as_view(), name='register_user'),
    path('api/update-user/<int:user_id>/', UpdateUserView.as_view(), name='update-user'),
    path('api/delete-user/<int:user_id>/', DeleteUserView.as_view(), name='delete-user'),
    path('api/user/activate/<int:user_id>/', ActivateUserView.as_view(), name='activate_user'),
    path('api/user/deactivate/<int:user_id>/',DeactivateUserView.as_view(), name='deactivate_user'),
    path('api/', include(router.urls)),
    
    path('api/leave/apply/', LeaveRequest.as_view(), name='leave_apply'),
    path('api/leave/all/', LeaveTableViewSet.as_view({'get': 'list'}), name='all_leaves'), 
    path('api/leave/pending/', PendingLeaveRequestsAPIView.as_view(), name='pending_leaves'),  
    path('api/leave/approval/<int:leave_id>/',LeaveApproval.as_view(), name='leave_approval'),
    
    path("api/salary/create/", CreateSalary.as_view(), name="create-salary"),
    path('api/allowance/create/', CreateAllowance.as_view(), name='create-allowance'),
    path('api/deduction/create/', CreateDeduction.as_view(), name='create-deduction'),
    path('api/salary/employee_salary_status_list/', EmployeeSalaryStatusAPIView.as_view(), name='employee_salary_status_list'),
    path('api/salary/employee_salary_history/', EmployeeSalaryHistoryAPIView.as_view(), name='employee_salary_history'),
    path('api/salary/current_salary_details/', CurrentSalaryDetails.as_view(), name='current_salary_details'),
    path('api/salary/salary_history/', PayrollHistory.as_view(), name='payroll_history'),
    path('api/salary/generate_payslip/<int:employee_id>/', GeneratePayslip.as_view(), name='generate_payslip'),
    path('api/salary/employee_salary_history/<int:user_id>/', views.get_employee_salary_history),
]