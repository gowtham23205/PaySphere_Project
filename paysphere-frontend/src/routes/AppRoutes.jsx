
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import HRDashboard from '../pages/Dashboard/HRDashboard';
import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard';
import EmployeeList from '../pages/Employees/EmployeeList';
import EmployeeProfile from '../pages/Employees/EmployeeProfile';
import CreateEmployee from '../pages/Employees/CreateEmployee';
import ApplyLeave from '../pages/LeaveManagement/ApplyLeave';
import LeaveHistory from '../pages/LeaveManagement/LeaveHistory';
import PendingRequests from '../pages/LeaveManagement/PendingRequests';
import AllLeaveRequests from '../pages/LeaveManagement/AllLeaveRequests';
import SalaryDetails from '../pages/Salary/SalaryDetails';
import SalaryHistory from '../pages/Salary/SalaryHistory';
// import MyProfile from '../pages/Profile/MyProfile';
import Profile from '../pages/Profile/Profile';
import DashboardLayout from '../components/Layout/DashboardLayout';
import AddSalary from '../pages/Salary/AddSalary';
import GeneratePayslipPage from '../pages/Salary/GeneratePayslipPage';
import SalaryDetailOfEmp from '../pages/Salary/SalaryDetailOfEmp';
import AllEmployeeSalaries from '../pages/Salary/AllEmployeeSalaries';
import AddAllowance from '../pages/Salary/AddAllowance';  // ✅ correct
import AddDeduction from '../pages/Salary/AddDeduction';  // ✅ correct




const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* With Sidebar */}
      <Route path="/dashboard/hr" element={<DashboardLayout><HRDashboard /></DashboardLayout>} />
      <Route path="/dashboard/employee" element={<DashboardLayout><EmployeeDashboard /></DashboardLayout>} />

      <Route path="/employees" element={<DashboardLayout><EmployeeList /></DashboardLayout>} />
      <Route path="/employees/:id" element={<DashboardLayout><EmployeeProfile /></DashboardLayout>} />
      <Route path="/employees/new" element={<DashboardLayout><CreateEmployee /></DashboardLayout>} />

      {/* Leave Routes */}
      <Route path="/leave-history" element={<DashboardLayout><LeaveHistory /></DashboardLayout>} />
      <Route path="/leaves/pending" element={<DashboardLayout><PendingRequests /></DashboardLayout>} />
      <Route path="/leaves" element={<DashboardLayout><AllLeaveRequests /></DashboardLayout>} />
      <Route path="/apply-leave" element={<DashboardLayout><ApplyLeave /></DashboardLayout>} />

      {/* Salary Routes */}
      <Route path="/salary-details" element={<DashboardLayout><SalaryDetails /></DashboardLayout>} />
      <Route path="/salary-history" element={<DashboardLayout><SalaryHistory /></DashboardLayout>} />

      <Route path="/salary/add/:id" element={<DashboardLayout><AddSalary /></DashboardLayout>} />
      <Route path="/salary/generate-payslip/:id" element={<DashboardLayout><GeneratePayslipPage /></DashboardLayout>}/>
      <Route path="/salary/history/:id" element={<DashboardLayout><SalaryDetailOfEmp /></DashboardLayout>} />
      <Route path="/all-employee-salaries" element={<DashboardLayout><AllEmployeeSalaries /></DashboardLayout>} />
      <Route path="/salary/add-allowance/:empId" element={<DashboardLayout><AddAllowance /></DashboardLayout>} />
      <Route path="/salary/add-deduction/:empId" element={<DashboardLayout><AddDeduction /></DashboardLayout>} />


      {/* Profile */}
      {/* <Route path="/profile" element={<DashboardLayout><MyProfile /></DashboardLayout>} /> */}
      {/* <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} /> */}
      <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />


      
    </Routes>
  );
};

export default AppRoutes;







// import { Routes, Route } from 'react-router-dom';
// import Login from '../pages/Auth/Login';
// import HRDashboard from '../pages/Dashboard/HRDashboard';
// import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard';
// import EmployeeList from '../pages/Employees/EmployeeList';
// import MyProfile from '../pages/Profile/MyProfile';  // Import EmployeeProfile
// import HRProfile from '../pages/Profile/HRProfile';
// import CreateEmployee from '../pages/Employees/CreateEmployee';
// import ApplyLeave from '../pages/LeaveManagement/ApplyLeave';
// import LeaveHistory from '../pages/LeaveManagement/LeaveHistory';
// import PendingRequests from '../pages/LeaveManagement/PendingRequests';
// import AllLeaveRequests from '../pages/LeaveManagement/AllLeaveRequests';
// import SalaryDetails from '../pages/Salary/SalaryDetails';
// import SalaryHistory from '../pages/Salary/SalaryHistory';
// import DashboardLayout from '../components/Layout/DashboardLayout';

// const AppRoutes = () => {
//   const userRole = localStorage.getItem('role');  // Check user role from localStorage
//   console.log(userRole);

//   return (
//     <Routes>
//       {/* Public Route */}
//       <Route path="/" element={<Login />} />

//       {/* With Sidebar */}
//       <Route path="/dashboard/hr" element={<DashboardLayout><HRDashboard /></DashboardLayout>} />
//       <Route path="/dashboard/employee" element={<DashboardLayout><EmployeeDashboard /></DashboardLayout>} />

//       <Route path="/employees" element={<DashboardLayout><EmployeeList /></DashboardLayout>} />
//       <Route path="/employees/:id" element={<DashboardLayout><MyProfile /></DashboardLayout>} />
//       <Route path="/employees/new" element={<DashboardLayout><CreateEmployee /></DashboardLayout>} />

//       {/* Leave Routes */}
//       <Route path="/leave-history" element={<DashboardLayout><LeaveHistory /></DashboardLayout>} />
//       <Route path="/leaves/pending" element={<DashboardLayout><PendingRequests /></DashboardLayout>} />
//       <Route path="/leaves" element={<DashboardLayout><AllLeaveRequests /></DashboardLayout>} />
//       <Route path="/apply-leave" element={<DashboardLayout><ApplyLeave /></DashboardLayout>} />

//       {/* Salary Routes */}
//       <Route path="/salary-details" element={<DashboardLayout><SalaryDetails /></DashboardLayout>} />
//       <Route path="/salary-history" element={<DashboardLayout><SalaryHistory /></DashboardLayout>} />

//       {/* Profile Routes */}
//       {userRole === 'employee' ? (
//         <Route path="/profile" element={<DashboardLayout><MyProfile /></DashboardLayout>} />
//       ) : (
//         <Route path="/profile" element={<DashboardLayout><HRProfile /></DashboardLayout>} />
//       )}
      
//     </Routes>
//   );
// };

// export default AppRoutes;
