// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";

// // // const AppRoutes = () => {
// // //     return (
// // //         <Router>
// // //             <Header />
// // //             <div style={{ display: "flex" }}>
// // //                 <Sidebar />
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         {/* Authentication Routes */}
// // //                         <Route path="/" element={<Login />} />
// // //                         <Route path="/logout" element={<Logout />} />

// // //                         {/* Dashboard Routes */}
// // //                         <Route path="/dashboard/hr" element={<HRDashboard />} />
// // //                         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />

// // //                         {/* Profile Routes */}
// // //                         <Route path="/profile/my" element={<MyProfile />} />
// // //                         <Route path="/profile/hr" element={<HRProfile />} />

// // //                         {/* Employee Management (HR Only) */}
// // //                         <Route path="/employees" element={<EmployeeList />} />
// // //                         <Route path="/employees/:id" element={<EmployeeProfile />} />
// // //                         <Route path="/employees/new" element={<CreateEmployee />} />

// // //                         {/* Leave Management */}
// // //                         <Route path="/apply-leave" element={<ApplyLeave />} />
// // //                         <Route path="/leave-history" element={<LeaveHistory />} />
// // //                         <Route path="/leaves/pending" element={<PendingRequests />} />
// // //                         <Route path="/leaves" element={<AllLeaveRequests />} />

// // //                         {/* Salary Management */}
// // //                         <Route path="/salary/details" element={<SalaryDetails />} />
// // //                         <Route path="/salary/history" element={<SalaryHistory />} />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </Router>
// // //     );
// // // };

// // // export default AppRoutes;


// // // import React from "react";
// // // import { Routes, Route } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";

// // // const AppRoutes = () => {
// // //     return (
// // //         <>
// // //             <Header />
// // //             <div style={{ display: "flex" }}>
// // //                 <Sidebar />
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         {/* Authentication Routes */}
// // //                         <Route path="/" element={<Login />} />
// // //                         <Route path="/logout" element={<Logout />} />

// // //                         {/* Dashboard Routes */}
// // //                         <Route path="/dashboard/hr" element={<HRDashboard />} />
// // //                         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />

// // //                         {/* Profile Routes */}
// // //                         <Route path="/profile/my" element={<MyProfile />} />
// // //                         <Route path="/profile/hr" element={<HRProfile />} />

// // //                         {/* Employee Management (HR Only) */}
// // //                         <Route path="/employees" element={<EmployeeList />} />
// // //                         <Route path="/employees/:id" element={<EmployeeProfile />} />
// // //                         <Route path="/employees/new" element={<CreateEmployee />} />

// // //                         {/* Leave Management */}
// // //                         <Route path="/apply-leave" element={<ApplyLeave />} />
// // //                         <Route path="/leave-history" element={<LeaveHistory />} />
// // //                         <Route path="/leaves/pending" element={<PendingRequests />} />
// // //                         <Route path="/leaves" element={<AllLeaveRequests />} />

// // //                         {/* Salary Management */}
// // //                         <Route path="/salary/details" element={<SalaryDetails />} />
// // //                         <Route path="/salary/history" element={<SalaryHistory />} />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default AppRoutes;


// // // import React from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";

// // // const AppRoutes = () => {
// // //     const role = localStorage.getItem("role");  // Get user role from storage

// // //     return (
// // //         <>
// // //             <Header />
// // //             <div style={{ display: "flex" }}>
// // //                 <Sidebar />
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         {/* Authentication Routes */}
// // //                         <Route path="/" element={<Login />} />
// // //                         <Route path="/logout" element={<Logout />} />

// // //                         {/* Dashboard Routes */}
// // //                         <Route path="/dashboard/hr" element={<HRDashboard />} />
// // //                         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />

// // //                         {/* Role-Based Profile Route */}
// // //                         <Route path="/profile" element={role === "HR" ? <HRProfile /> : <MyProfile />} />

// // //                         {/* Employee Management (HR Only) */}
// // //                         <Route path="/employees" element={<EmployeeList />} />
// // //                         <Route path="/employees/:id" element={<EmployeeProfile />} />
// // //                         <Route path="/employees/new" element={<CreateEmployee />} />

// // //                         {/* Leave Management */}
// // //                         <Route path="/apply-leave" element={<ApplyLeave />} />
// // //                         <Route path="/leave-history" element={<LeaveHistory />} />
// // //                         <Route path="/leaves/pending" element={<PendingRequests />} />
// // //                         <Route path="/leaves" element={<AllLeaveRequests />} />

// // //                         {/* Salary Management */}
// // //                         <Route path="/salary/details" element={<SalaryDetails />} />
// // //                         <Route path="/salary/history" element={<SalaryHistory />} />

// // //                         {/* Redirect unknown routes to Dashboard */}
// // //                         <Route path="*" element={<Navigate to={role === "HR" ? "/dashboard/hr" : "/dashboard/employee"} />} />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default AppRoutes;

// // // import React from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";
// // // import ProtectedRoute from "../components/ProtectedRoute.jsx";


// // // const AppRoutes = () => {
// // //     const role = localStorage.getItem("role");  // Get user role from storage

// // //     return (
// // //         <>
// // //             <Header />
// // //             <div style={{ display: "flex" }}>
// // //                 <Sidebar />
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         {/* Authentication Routes */}
// // //                         <Route path="/" element={<Login />} />
// // //                         <Route path="/logout" element={<Logout />} />

// // //                         {/* Dashboard Routes */}
// // //                         <Route path="/dashboard/hr" element={<ProtectedRoute element={<HRDashboard />} allowedRoles={["HR"]} />} />
// // //                         <Route path="/dashboard/employee" element={<ProtectedRoute element={<EmployeeDashboard />} allowedRoles={["Employee"]} />} />

// // //                         {/* Role-Based Profile Route */}
// // //                         <Route path="/profile" element={role === "HR" ? <HRProfile /> : <MyProfile />} />

// // //                         {/* Employee Management (HR Only) */}
// // //                         <Route path="/employees" element={<ProtectedRoute element={<EmployeeList />} allowedRoles={["HR"]} />} />
// // //                         <Route path="/employees/:id" element={<ProtectedRoute element={<EmployeeProfile />} allowedRoles={["HR"]} />} />
// // //                         <Route path="/employees/new" element={<ProtectedRoute element={<CreateEmployee />} allowedRoles={["HR"]} />} />

// // //                         {/* Leave Management - Accessible to both HR & Employees */}
// // //                         <Route path="/apply-leave" element={<ProtectedRoute element={<ApplyLeave />} allowedRoles={["HR", "Employee"]} />} />
// // //                         <Route path="/leave-history" element={<ProtectedRoute element={<LeaveHistory />} allowedRoles={["HR", "Employee"]} />} />
// // //                         <Route path="/leaves/pending" element={<ProtectedRoute element={<PendingRequests />} allowedRoles={["HR"]} />} />
// // //                         <Route path="/leaves" element={<ProtectedRoute element={<AllLeaveRequests />} allowedRoles={["HR"]} />} />

// // //                         {/* Salary Management - Accessible to both HR & Employees */}
// // //                         <Route path="/salary/details" element={<ProtectedRoute element={<SalaryDetails />} allowedRoles={["HR", "Employee"]} />} />
// // //                         <Route path="/salary/history" element={<ProtectedRoute element={<SalaryHistory />} allowedRoles={["HR", "Employee"]} />} />

// // //                         {/* Redirect unknown routes to respective dashboards */}
// // //                         <Route path="*" element={<Navigate to={role === "HR" ? "/dashboard/hr" : "/dashboard/employee"} />} />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default AppRoutes;


// // // import React from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";

// // // import { useContext } from "react";
// // // import { AuthContext } from "../context/AuthContext";

// // // // Inside AppRoutes
// // // const { role } = useContext(AuthContext); // ✅ Reactively updates

// // // const AppRoutes = () => {
// // //     const role = localStorage.getItem("role");

// // //     return (
// // //         <>
// // //             <Header />
// // //             <div style={{ display: "flex" }}>
// // //                 <Sidebar />
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         {/* Authentication */}
// // //                         <Route path="/" element={<Login />} />
// // //                         <Route path="/logout" element={<Logout />} />

// // //                         {/* Dashboards */}
// // //                         <Route
// // //                             path="/dashboard/hr"
// // //                             element={role === "HR" ? <HRDashboard /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/dashboard/employee"
// // //                             element={role === "Employee" ? <EmployeeDashboard /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Profile */}
// // //                         <Route
// // //                             path="/profile"
// // //                             element={role === "HR" ? <HRProfile /> : role === "Employee" ? <MyProfile /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Employee Management (HR Only) */}
// // //                         <Route
// // //                             path="/employees"
// // //                             element={role === "HR" ? <EmployeeList /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/:id"
// // //                             element={role === "HR" ? <EmployeeProfile /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/new"
// // //                             element={role === "HR" ? <CreateEmployee /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Leave Management */}
// // //                         <Route
// // //                             path="/apply-leave"
// // //                             element={["HR", "Employee"].includes(role) ? <ApplyLeave /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leave-history"
// // //                             element={["HR", "Employee"].includes(role) ? <LeaveHistory /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves/pending"
// // //                             element={role === "HR" ? <PendingRequests /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves"
// // //                             element={role === "HR" ? <AllLeaveRequests /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Salary */}
// // //                         <Route
// // //                             path="/salary/details"
// // //                             element={["HR", "Employee"].includes(role) ? <SalaryDetails /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/salary/history"
// // //                             element={["HR", "Employee"].includes(role) ? <SalaryHistory /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Fallback */}
// // //                         <Route
// // //                             path="*"
// // //                             element={
// // //                                 role === "HR"
// // //                                     ? <Navigate to="/dashboard/hr" replace />
// // //                                     : role === "Employee"
// // //                                     ? <Navigate to="/dashboard/employee" replace />
// // //                                     : <Navigate to="/" replace />
// // //                             }
// // //                         />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default AppRoutes;

// // // import React, { useContext } from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import { AuthContext } from "../context/AuthContext";

// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";

// // // const AppRoutes = () => {
// // //     const { role } = useContext(AuthContext); // ✅ Correct usage

// // //     return (
// // //         <>
// // //             <Header />
// // //             <div style={{ display: "flex" }}>
// // //                 <Sidebar />
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         <Route path="/" element={<Login />} />
// // //                         <Route path="/logout" element={<Logout />} />

// // //                         <Route
// // //                             path="/dashboard/hr"
// // //                             element={role === "HR" ? <HRDashboard /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/dashboard/employee"
// // //                             element={role === "Employee" ? <EmployeeDashboard /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/profile"
// // //                             element={role === "HR" ? <HRProfile /> : role === "Employee" ? <MyProfile /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees"
// // //                             element={role === "HR" ? <EmployeeList /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/:id"
// // //                             element={role === "HR" ? <EmployeeProfile /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/new"
// // //                             element={role === "HR" ? <CreateEmployee /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/apply-leave"
// // //                             element={["HR", "Employee"].includes(role) ? <ApplyLeave /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leave-history"
// // //                             element={["HR", "Employee"].includes(role) ? <LeaveHistory /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves/pending"
// // //                             element={role === "HR" ? <PendingRequests /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves"
// // //                             element={role === "HR" ? <AllLeaveRequests /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/salary/details"
// // //                             element={["HR", "Employee"].includes(role) ? <SalaryDetails /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/salary/history"
// // //                             element={["HR", "Employee"].includes(role) ? <SalaryHistory /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="*"
// // //                             element={
// // //                                 role === "HR"
// // //                                     ? <Navigate to="/dashboard/hr" replace />
// // //                                     : role === "Employee"
// // //                                     ? <Navigate to="/dashboard/employee" replace />
// // //                                     : <Navigate to="/" replace />
// // //                             }
// // //                         />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default AppRoutes;


// // // import React, { useContext } from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";
// // // import { AuthContext } from "../context/AuthContext";

// // // const AppRoutes = () => {
// // //     const { role } = useContext(AuthContext); // ✅ Correct usage INSIDE the component

// // //     return (
// // //         <>
// // //             <Header />
// // //             <div style={{ display: "flex" }}>
// // //                 <Sidebar />
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         {/* Authentication */}
// // //                         <Route path="/" element={<Login />} />
                        
// // //                         <Route path="/logout" element={<Logout />} />

// // //                         {/* Dashboards */}
// // //                         <Route
// // //                             path="/dashboard/hr"
// // //                             element={role === "hr" ? <HRDashboard /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/dashboard/employee"
// // //                             element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Profile */}
// // //                         <Route
// // //                             path="/profile"
// // //                             element={
// // //                                 role === "hr" ? (
// // //                                     <HRProfile />
// // //                                 ) : role === "employee" ? (
// // //                                     <MyProfile />
// // //                                 ) : (
// // //                                     <Navigate to="/" replace />
// // //                                 )
// // //                             }
// // //                         />

// // //                         {/* Employee Management (HR Only) */}
// // //                         <Route
// // //                             path="/employees"
// // //                             element={role === "hr" ? <EmployeeList /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/:id"
// // //                             element={role === "hr" ? <EmployeeProfile /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/new"
// // //                             element={role === "hr" ? <CreateEmployee /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Leave Management */}
// // //                         <Route
// // //                             path="/apply-leave"
// // //                             element={["hr", "employee"].includes(role) ? <ApplyLeave /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leave-history"
// // //                             element={["hr", "employee"].includes(role) ? <LeaveHistory /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves/pending"
// // //                             element={role === "hr" ? <PendingRequests /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves"
// // //                             element={role === "hr" ? <AllLeaveRequests /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Salary */}
// // //                         <Route
// // //                             path="/salary/details"
// // //                             element={["hr", "employee"].includes(role) ? <SalaryDetails /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/salary/history"
// // //                             element={["hr", "employee"].includes(role) ? <SalaryHistory /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Fallback */}
// // //                         <Route
// // //                             path="*"
// // //                             element={
// // //                                 role === "hr" ? (
// // //                                     <Navigate to="/dashboard/hr" replace />
// // //                                 ) : role === "employee" ? (
// // //                                     <Navigate to="/dashboard/employee" replace />
// // //                                 ) : (
// // //                                     <Navigate to="/" replace />
// // //                                 )
// // //                             }
// // //                         />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default AppRoutes;


// // // import React, { useContext } from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Header from "../components/Header";
// // // import Sidebar from "../components/Sidebar";
// // // import { AuthContext } from "../context/AuthContext";

// // // const AppRoutes = () => {
// // //     const { role, user } = useContext(AuthContext); // ✅ Fixed: added user

// // //     return (
// // //         <>
// // //             {user && <Header />}
// // //             <div style={{ display: "flex" }}>
// // //                 {user && <Sidebar />}
// // //                 <div style={{ flexGrow: 1, padding: "20px" }}>
// // //                     <Routes>
// // //                         {/* Authentication */}
// // //                         <Route
// // //                             path="/"
// // //                             element={
// // //                                 user ? (
// // //                                     role === "hr" ? (
// // //                                         <Navigate to="/dashboard/hr" replace />
// // //                                     ) : (
// // //                                         <Navigate to="/dashboard/employee" replace />
// // //                                     )
// // //                                 ) : (
// // //                                     <Login />
// // //                                 )
// // //                             }
// // //                         />

// // //                         <Route path="/logout" element={<Logout />} />

// // //                         {/* Dashboards */}
// // //                         <Route
// // //                             path="/dashboard/hr"
// // //                             element={role === "hr" ? <HRDashboard /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/dashboard/employee"
// // //                             element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Profile */}
// // //                         <Route
// // //                             path="/profile"
// // //                             element={
// // //                                 role === "hr" ? (
// // //                                     <HRProfile />
// // //                                 ) : role === "employee" ? (
// // //                                     <MyProfile />
// // //                                 ) : (
// // //                                     <Navigate to="/" replace />
// // //                                 )
// // //                             }
// // //                         />

// // //                         {/* Employee Management (HR Only) */}
// // //                         <Route
// // //                             path="/employees"
// // //                             element={role === "hr" ? <EmployeeList /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/:id"
// // //                             element={role === "hr" ? <EmployeeProfile /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/employees/new"
// // //                             element={role === "hr" ? <CreateEmployee /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Leave Management */}
// // //                         <Route
// // //                             path="/apply-leave"
// // //                             element={["hr", "employee"].includes(role) ? <ApplyLeave /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leave-history"
// // //                             element={["hr", "employee"].includes(role) ? <LeaveHistory /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves/pending"
// // //                             element={role === "hr" ? <PendingRequests /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/leaves"
// // //                             element={role === "hr" ? <AllLeaveRequests /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Salary */}
// // //                         <Route
// // //                             path="/salary/details"
// // //                             element={["hr", "employee"].includes(role) ? <SalaryDetails /> : <Navigate to="/" replace />}
// // //                         />
// // //                         <Route
// // //                             path="/salary/history"
// // //                             element={["hr", "employee"].includes(role) ? <SalaryHistory /> : <Navigate to="/" replace />}
// // //                         />

// // //                         {/* Fallback */}
// // //                         <Route
// // //                             path="*"
// // //                             element={
// // //                                 role === "hr" ? (
// // //                                     <Navigate to="/dashboard/hr" replace />
// // //                                 ) : role === "employee" ? (
// // //                                     <Navigate to="/dashboard/employee" replace />
// // //                                 ) : (
// // //                                     <Navigate to="/" replace />
// // //                                 )
// // //                             }
// // //                         />
// // //                     </Routes>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default AppRoutes;


// // // import React, { useContext } from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Login from "../pages/Auth/Login";
// // // import Logout from "../pages/Auth/Logout";
// // // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // // import MyProfile from "../pages/Profile/MyProfile";
// // // import HRProfile from "../pages/Profile/HRProfile";
// // // import EmployeeList from "../pages/Employees/EmployeeList";
// // // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // // import Layout from "../components/Layout";
// // // import { AuthContext } from "../context/AuthContext";

// // // const AppRoutes = () => {
// // //   const { role, user } = useContext(AuthContext);

// // //   return (
// // //     <Routes>
// // //       {/* Login */}
// // //       <Route
// // //         path="/"
// // //         element={
// // //           user ? (
// // //             role === "hr" ? (
// // //               <Navigate to="/dashboard/hr" replace />
// // //             ) : (
// // //               <Navigate to="/dashboard/employee" replace />
// // //             )
// // //           ) : (
// // //             <Login />
// // //           )
// // //         }
// // //       />

// // //       <Route path="/logout" element={<Logout />} />

// // //       {/* All Authenticated Routes Wrapped in Layout */}
// // //       {user && (
// // //         <Route
// // //           path="*"
// // //           element={
// // //             <Layout>
// // //               <Routes>
// // //                 {/* Dashboards */}
// // //                 <Route
// // //                   path="/dashboard/hr"
// // //                   element={role === "hr" ? <HRDashboard /> : <Navigate to="/" replace />}
// // //                 />
// // //                 <Route
// // //                   path="/dashboard/employee"
// // //                   element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" replace />}
// // //                 />

// // //                 {/* Profile */}
// // //                 <Route
// // //                   path="/profile"
// // //                   element={
// // //                     role === "hr" ? <HRProfile /> : role === "employee" ? <MyProfile /> : <Navigate to="/" replace />
// // //                   }
// // //                 />

// // //                 {/* Employees (HR only) */}
// // //                 <Route
// // //                   path="/employees"
// // //                   element={role === "hr" ? <EmployeeList /> : <Navigate to="/" replace />}
// // //                 />
// // //                 <Route
// // //                   path="/employees/:id"
// // //                   element={role === "hr" ? <EmployeeProfile /> : <Navigate to="/" replace />}
// // //                 />
// // //                 <Route
// // //                   path="/employees/new"
// // //                   element={role === "hr" ? <CreateEmployee /> : <Navigate to="/" replace />}
// // //                 />

// // //                 {/* Leave */}
// // //                 <Route
// // //                   path="/apply-leave"
// // //                   element={["hr", "employee"].includes(role) ? <ApplyLeave /> : <Navigate to="/" replace />}
// // //                 />
// // //                 <Route
// // //                   path="/leave-history"
// // //                   element={["hr", "employee"].includes(role) ? <LeaveHistory /> : <Navigate to="/" replace />}
// // //                 />
// // //                 <Route
// // //                   path="/leaves/pending"
// // //                   element={role === "hr" ? <PendingRequests /> : <Navigate to="/" replace />}
// // //                 />
// // //                 <Route
// // //                   path="/leaves"
// // //                   element={role === "hr" ? <AllLeaveRequests /> : <Navigate to="/" replace />}
// // //                 />

// // //                 {/* Salary */}
// // //                 <Route
// // //                   path="/salary/details"
// // //                   element={["hr", "employee"].includes(role) ? <SalaryDetails /> : <Navigate to="/" replace />}
// // //                 />
// // //                 <Route
// // //                   path="/salary/history"
// // //                   element={["hr", "employee"].includes(role) ? <SalaryHistory /> : <Navigate to="/" replace />}
// // //                 />

// // //                 {/* Default fallback inside layout */}
// // //                 <Route
// // //                   path="*"
// // //                   element={
// // //                     role === "hr" ? (
// // //                       <Navigate to="/dashboard/hr" replace />
// // //                     ) : (
// // //                       <Navigate to="/dashboard/employee" replace />
// // //                     )
// // //                   }
// // //                 />
// // //               </Routes>
// // //             </Layout>
// // //           }
// // //         />
// // //       )}
// // //     </Routes>
// // //   );
// // // };

// // // export default AppRoutes;


// // import React, { useContext } from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import Login from "../pages/Auth/Login";
// // import Logout from "../pages/Auth/Logout";
// // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // import MyProfile from "../pages/Profile/MyProfile";
// // import HRProfile from "../pages/Profile/HRProfile";
// // import EmployeeList from "../pages/Employees/EmployeeList";
// // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // import Layout from "../components/Layout";
// // import { AuthContext } from "../context/AuthContext";

// // const AppRoutes = () => {
// //   const { role, user } = useContext(AuthContext);

// //   return (
// //     <Routes>
// //       {/* Login */}
// //       <Route
// //         path="/"
// //         element={
// //           user ? (
// //             role === "hr" ? (
// //               <Navigate to="/dashboard/hr" replace />
// //             ) : (
// //               <Navigate to="/dashboard/employee" replace />
// //             )
// //           ) : (
// //             <Login />
// //           )
// //         }
// //       />

// //       <Route path="/logout" element={<Logout />} />

// //       {/* All Protected Routes under Layout */}
// //       {user && (
// //         <Route path="/" element={<Layout />}>
// //           {/* Dashboards */}
// //           <Route
// //             path="dashboard/hr"
// //             element={role === "hr" ? <HRDashboard /> : <Navigate to="/" replace />}
// //           />
// //           <Route
// //             path="dashboard/employee"
// //             element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" replace />}
// //           />

// //           {/* Profile */}
// //           <Route
// //             path="profile"
// //             element={
// //               role === "hr" ? <HRProfile /> : role === "employee" ? <MyProfile /> : <Navigate to="/" replace />
// //             }
// //           />

// //           {/* Employees (HR only) */}
// //           <Route
// //             path="employees"
// //             element={role === "hr" ? <EmployeeList /> : <Navigate to="/" replace />}
// //           />
// //           <Route
// //             path="employees/:id"
// //             element={role === "hr" ? <EmployeeProfile /> : <Navigate to="/" replace />}
// //           />
// //           <Route
// //             path="employees/new"
// //             element={role === "hr" ? <CreateEmployee /> : <Navigate to="/" replace />}
// //           />

// //           {/* Leave */}
// //           <Route
// //             path="apply-leave"
// //             element={<ApplyLeave />}
// //           />
// //           <Route
// //             path="leave-history"
// //             element={<LeaveHistory />}
// //           />
// //           <Route
// //             path="leaves/pending"
// //             element={role === "hr" ? <PendingRequests /> : <Navigate to="/" replace />}
// //           />
// //           <Route
// //             path="leaves"
// //             element={role === "hr" ? <AllLeaveRequests /> : <Navigate to="/" replace />}
// //           />

// //           {/* Salary */}
// //           <Route
// //             path="salary/details"
// //             element={<SalaryDetails />}
// //           />
// //           <Route
// //             path="salary/history"
// //             element={<SalaryHistory />}
// //           />

// //           {/* Default fallback */}
// //           <Route
// //             path="*"
// //             element={
// //               role === "hr" ? (
// //                 <Navigate to="/dashboard/hr" replace />
// //               ) : (
// //                 <Navigate to="/dashboard/employee" replace />
// //               )
// //             }
// //           />
// //         </Route>
// //       )}
// //     </Routes>
// //   );
// // };

// // export default AppRoutes;

// // import React, { useContext } from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import Login from "../pages/Auth/Login";
// // import Logout from "../pages/Auth/Logout";
// // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // import MyProfile from "../pages/Profile/MyProfile";
// // import HRProfile from "../pages/Profile/HRProfile";
// // import EmployeeList from "../pages/Employees/EmployeeList";
// // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // import Layout from "../components/Layout";
// // import { AuthContext } from "../context/AuthContext";

// // const AppRoutes = () => {
// //   const { role, user } = useContext(AuthContext);

// //   return (
// //     <Routes>
// //       {/* Public Routes */}
// //       <Route
// //         path="/"
// //         element={
// //           user ? (
// //             role === "hr" ? <Navigate to="/dashboard/hr" /> : <Navigate to="/dashboard/employee" />
// //           ) : (
// //             <Login />
// //           )
// //         }
// //       />
// //       <Route path="/logout" element={<Logout />} />

// //       {/* Protected Routes */}
// //       {user && (
// //         <Route path="/" element={<Layout />}>
// //           {/* Dashboards */}
// //           <Route
// //             path="dashboard/hr"
// //             element={role === "hr" ? <HRDashboard /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="dashboard/employee"
// //             element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />}
// //           />

// //           {/* Profile */}
// //           <Route
// //             path="profile"
// //             element={role === "hr" ? <HRProfile /> : <MyProfile />}
// //           />

// //           {/* Employees */}
// //           <Route
// //             path="employees"
// //             element={role === "hr" ? <EmployeeList /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="employees/:id"
// //             element={role === "hr" ? <EmployeeProfile /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="employees/new"
// //             element={role === "hr" ? <CreateEmployee /> : <Navigate to="/" />}
// //           />

// //           {/* Leave */}
// //           <Route
// //             path="apply-leave"
// //             element={<ApplyLeave />}
// //           />
// //           <Route
// //             path="leave-history"
// //             element={<LeaveHistory />}
// //           />
// //           <Route
// //             path="leaves/pending"
// //             element={role === "hr" ? <PendingRequests /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="leaves"
// //             element={role === "hr" ? <AllLeaveRequests /> : <Navigate to="/" />}
// //           />

// //           {/* Salary */}
// //           <Route path="salary/details" element={<SalaryDetails />} />
// //           <Route path="salary/history" element={<SalaryHistory />} />

// //           {/* Fallback */}
// //           <Route
// //             path="*"
// //             element={
// //               role === "hr" ? <Navigate to="/dashboard/hr" /> : <Navigate to="/dashboard/employee" />
// //             }
// //           />
// //         </Route>
// //       )}
// //     </Routes>
// //   );
// // };

// // export default AppRoutes;

// // import React, { useContext } from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import Login from "../pages/Auth/Login";
// // import Logout from "../pages/Auth/Logout";
// // import HRDashboard from "../pages/Dashboard/HRDashboard";
// // import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// // import MyProfile from "../pages/Profile/MyProfile";
// // import HRProfile from "../pages/Profile/HRProfile";
// // import EmployeeList from "../pages/Employees/EmployeeList";
// // import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// // import CreateEmployee from "../pages/Employees/CreateEmployee";
// // import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// // import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// // import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// // import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// // import SalaryDetails from "../pages/Salary/SalaryDetails";
// // import SalaryHistory from "../pages/Salary/SalaryHistory";
// // import Layout from "../components/Layout";
// // import { AuthContext } from "../context/AuthContext";

// // const AppRoutes = () => {
// //   const { role, user } = useContext(AuthContext);

// //   return (
// //     <Routes>
// //       {/* Public Routes */}
// //       <Route
// //         path="/"
// //         element={
// //           user ? (
// //             role === "hr" ? (
// //               <Navigate to="/dashboard/hr" />
// //             ) : (
// //               <Navigate to="/dashboard/employee" />
// //             )
// //           ) : (
// //             <Login />
// //           )
// //         }
// //       />
// //       <Route path="/logout" element={<Logout />} />

// //       {/* Protected Routes */}
// //       {user && (
// //         <Route path="/" element={<Layout />}>
// //           {/* Dashboards */}
// //           <Route
// //             path="dashboard/hr"
// //             element={role === "hr" ? <HRDashboard /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="dashboard/employee"
// //             element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />}
// //           />

// //           {/* Profile */}
// //           <Route
// //             path="profile"
// //             element={role === "hr" ? <HRProfile /> : <MyProfile />}
// //           />

// //           {/* Employees */}
// //           <Route
// //             path="employees"
// //             element={role === "hr" ? <EmployeeList /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="employees/:id"
// //             element={role === "hr" ? <EmployeeProfile /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="employees/new"
// //             element={role === "hr" ? <CreateEmployee /> : <Navigate to="/" />}
// //           />

// //           {/* Leave */}
// //           <Route path="apply-leave" element={<ApplyLeave />} />
// //           <Route path="leave-history" element={<LeaveHistory />} />
// //           <Route
// //             path="leaves/pending"
// //             element={role === "hr" ? <PendingRequests /> : <Navigate to="/" />}
// //           />
// //           <Route
// //             path="leaves"
// //             element={role === "hr" ? <AllLeaveRequests /> : <Navigate to="/" />}
// //           />

// //           {/* Salary */}
// //           <Route path="salary/details" element={<SalaryDetails />} />
// //           <Route path="salary/history" element={<SalaryHistory />} />

// //           {/* Fallback */}
// //           <Route
// //             path="*"
// //             element={
// //               role === "hr" ? (
// //                 <Navigate to="/dashboard/hr" />
// //               ) : (
// //                 <Navigate to="/dashboard/employee" />
// //               )
// //             }
// //           />
// //         </Route>
// //       )}
// //     </Routes>
// //   );
// // };

// // export default AppRoutes;

// import React, { useContext } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "../pages/Auth/Login";
// import Logout from "../pages/Auth/Logout";
// import HRDashboard from "../pages/Dashboard/HRDashboard";
// import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
// import MyProfile from "../pages/Profile/MyProfile";
// import HRProfile from "../pages/Profile/HRProfile";
// import EmployeeList from "../pages/Employees/EmployeeList";
// import EmployeeProfile from "../pages/Employees/EmployeeProfile";
// import CreateEmployee from "../pages/Employees/CreateEmployee";
// import ApplyLeave from "../pages/LeaveManagement/ApplyLeave";
// import LeaveHistory from "../pages/LeaveManagement/LeaveHistory";
// import PendingRequests from "../pages/LeaveManagement/PendingRequests";
// import AllLeaveRequests from "../pages/LeaveManagement/AllLeaveRequests";
// import SalaryDetails from "../pages/Salary/SalaryDetails";
// import SalaryHistory from "../pages/Salary/SalaryHistory";
// import Layout from "../components/Layout";
// import { AuthContext } from "../context/AuthContext";

// const AppRoutes = () => {
//   const { role, user } = useContext(AuthContext);

//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Login />} />
//       <Route path="/logout" element={<Logout />} />

//       {/* Protected Layout Wrapper */}
//       {user && (
//         <Route path="/" element={<Layout />}>
//           {/* Redirect to dashboard based on role */}
//           <Route
//             index
//             element={
//               role === "hr" ? (
//                 <Navigate to="dashboard/hr" />
//               ) : (
//                 <Navigate to="dashboard/employee" />
//               )
//             }
//           />

//           {/* Dashboards */}
//           <Route
//             path="dashboard/hr"
//             element={role === "hr" ? <HRDashboard /> : <Navigate to="/" />}
//           />
//           <Route
//             path="dashboard/employee"
//             element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />}
//           />

//           {/* Profile */}
//           <Route
//             path="profile"
//             element={role === "hr" ? <HRProfile /> : <MyProfile />}
//           />

//           {/* Employees */}
//           <Route
//             path="employees"
//             element={role === "hr" ? <EmployeeList /> : <Navigate to="/" />}
//           />
//           <Route
//             path="employees/:id"
//             element={role === "hr" ? <EmployeeProfile /> : <Navigate to="/" />}
//           />
//           <Route
//             path="employees/new"
//             element={role === "hr" ? <CreateEmployee /> : <Navigate to="/" />}
//           />

//           {/* Leave Management */}
//           <Route path="apply-leave" element={<ApplyLeave />} />
//           <Route path="leave-history" element={<LeaveHistory />} />
//           <Route
//             path="leaves/pending"
//             element={role === "hr" ? <PendingRequests /> : <Navigate to="/" />}
//           />
//           <Route
//             path="leaves"
//             element={role === "hr" ? <AllLeaveRequests /> : <Navigate to="/" />}
//           />

//           {/* Salary */}
//           <Route path="salary/details" element={<SalaryDetails />} />
//           <Route path="salary/history" element={<SalaryHistory />} />

//           {/* Fallback */}
//           <Route
//             path="*"
//             element={
//               role === "hr" ? (
//                 <Navigate to="dashboard/hr" />
//               ) : (
//                 <Navigate to="dashboard/employee" />
//               )
//             }
//           />
//         </Route>
//       )}

//       {/* Catch-All Redirect for Unknown Authenticated Access */}
//       {user && <Route path="*" element={<Navigate to="/home" />} />}
//     </Routes>
//   );
// };

// export default AppRoutes;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from '../pages/Auth/Login';
// import HRDashboard from '../pages/Dashboard/HRDashboard';
// import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard';

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard/hr" element={<HRDashboard />} />
//         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from '../pages/Auth/Login';
// import HRDashboard from '../pages/Dashboard/HRDashboard';
// import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard';
// import EmployeeList from '../pages/Employees/EmployeeList';
// import EmployeeProfile from '../pages/Employees/EmployeeProfile';
// import CreateEmployee from '../pages/Employees/CreateEmployee';


// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard/hr" element={<HRDashboard />} />
//         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
//         <Route path="/employees" element={<EmployeeList />} />
//         <Route path="/employees/:id" element={<EmployeeProfile />} />
//         <Route path="/employees/new" element={<CreateEmployee />} />

//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;
// src/routes/AppRoutes.jsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from '../pages/Auth/Login';
// import HRDashboard from '../pages/Dashboard/HRDashboard';
// import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard';
// import EmployeeList from '../pages/Employees/EmployeeList';
// import EmployeeProfile from '../pages/Employees/EmployeeProfile';
// import CreateEmployee from '../pages/Employees/CreateEmployee';

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard/hr" element={<HRDashboard />} />
//         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
//         <Route path="/employees" element={<EmployeeList />} />
//         <Route path="/employees/:id" element={<EmployeeProfile />} />
//         <Route path="/employees/new" element={<CreateEmployee />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Login from '../pages/Auth/Login';
// import HRDashboard from '../pages/Dashboard/HRDashboard';
// import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard';
// import EmployeeList from '../pages/Employees/EmployeeList';
// import EmployeeProfile from '../pages/Employees/EmployeeProfile';
// import CreateEmployee from '../pages/Employees/CreateEmployee';

// import DashboardLayout from '../components/Layout/DashboardLayout'; // you will create this

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Public Route - No Sidebar */}
//       <Route path="/" element={<Login />} />

//       {/* Private Routes - With Sidebar */}
//       <Route
//         path="/dashboard/hr"
//         element={
//           <DashboardLayout>
//             <HRDashboard />
//           </DashboardLayout>
//         }
//       />
//       <Route
//         path="/dashboard/employee"
//         element={
//           <DashboardLayout>
//             <EmployeeDashboard />
//           </DashboardLayout>
//         }
//       />
//       <Route
//         path="/employees"
//         element={
//           <DashboardLayout>
//             <EmployeeList />
//           </DashboardLayout>
//         }
//       />
//       <Route
//         path="/employees/:id"
//         element={
//           <DashboardLayout>
//             <EmployeeProfile />
//           </DashboardLayout>
//         }
//       />
//       <Route
//         path="/employees/new"
//         element={
//           <DashboardLayout>
//             <CreateEmployee />
//           </DashboardLayout>
//         }
//       />
//     </Routes>
//   );
// };

// export default AppRoutes;

// import { Routes, Route } from 'react-router-dom';

// import Login from '../pages/Auth/Login';
// import HRDashboard from '../pages/Dashboard/HRDashboard';
// import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard';
// import EmployeeList from '../pages/Employees/EmployeeList';
// import EmployeeProfile from '../pages/Employees/EmployeeProfile';
// import CreateEmployee from '../pages/Employees/CreateEmployee';

// import ApplyLeave from '../pages/LeaveManagement/ApplyLeave';
// import LeaveHistory from '../pages/LeaveManagement/LeaveHistory';
// import PendingRequests from '../pages/LeaveManagement/PendingRequests';
// import AllLeaveRequests from '../pages/LeaveManagement/AllLeaveRequests';

// import SalaryDetails from '../pages/Salary/SalaryDetails';
// import SalaryHistory from '../pages/Salary/SalaryHistory';

// import MyProfile from '../pages/Profile/MyProfile';
// // import HRProfile from '../pages/Profile/HRProfile';

// import DashboardLayout from '../components/Layout/DashboardLayout';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Public Route */}
//       <Route path="/" element={<Login />} />

//       {/* With Sidebar */}
//       <Route path="/dashboard/hr" element={<DashboardLayout><HRDashboard /></DashboardLayout>} />
//       <Route path="/dashboard/employee" element={<DashboardLayout><EmployeeDashboard /></DashboardLayout>} />

//       <Route path="/employees" element={<DashboardLayout><EmployeeList /></DashboardLayout>} />
//       <Route path="/employees/:id" element={<DashboardLayout><EmployeeProfile /></DashboardLayout>} />
//       <Route path="/employees/new" element={<DashboardLayout><CreateEmployee /></DashboardLayout>} />

//       {/* Leave Routes */}
//       {/* <Route path="/apply-leave" element={<DashboardLayout><ApplyLeave /></DashboardLayout>} /> */}
//       {/* <Route path="/apply-leave" element={<DashboardLayout><ApplyLeave /></DashboardLayout>} /> */}
//       <Route path="/leave-history" element={<DashboardLayout><LeaveHistory /></DashboardLayout>} />
//       <Route path="/leaves/pending" element={<DashboardLayout><PendingRequests /></DashboardLayout>} />
//       <Route path="/leaves" element={<DashboardLayout><AllLeaveRequests /></DashboardLayout>} />
//       <Route path="/apply-leave" element={<DashboardLayout><ApplyLeave /></DashboardLayout>} />

//       {/* <Route path="/leaves/pending" element={<DashboardLayout><PendingRequests /></DashboardLayout>} />
//       <Route path="/leaves" element={<DashboardLayout><AllLeaveRequests /></DashboardLayout>} /> */}

//       {/* Salary Routes */}
//       <Route path="/salary-details" element={<DashboardLayout><SalaryDetails /></DashboardLayout>} />
//       <Route path="/salary-history" element={<DashboardLayout><SalaryHistory /></DashboardLayout>} />

//       {/* Profile */}
//       <Route path="/profile" element={<DashboardLayout><MyProfile /></DashboardLayout>} />
//     </Routes>
//   );
// };

// export default AppRoutes;


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
