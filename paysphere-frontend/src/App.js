// // import logo from './logo.svg';
// // import './App.css';
// // import React from 'react';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // src/App.js
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./pages/Auth/Login";
// // import Logout from "./pages/Auth/Logout";
// // import HRDashboard from "./pages/Dashboard/HRDashboard";
// // import EmployeeDashboard from "./pages/Dashboard/EmployeeDashboard";
// // import './App.css';

// // const App = () => {
// //   const isAuthenticated = !!localStorage.getItem("token");

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/logout" element={<Logout />} />
// //         <Route path="/dashboard" element={isAuthenticated ? <HRDashboard /> : <Navigate to="/" />} />
// //         <Route path="/employee-dashboard" element={isAuthenticated ? <EmployeeDashboard /> : <Navigate to="/" />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./pages/Auth/Login";
// // import Logout from "./pages/Auth/Logout";
// // import "./App.css";

// // function App() {
// //   const isAuthenticated = localStorage.getItem("token");

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
// //         <Route path="/logout" element={<Logout />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import HRDashboard from "./pages/Dashboard/HRDashboard";
// // import EmployeeDashboard from "./pages/Dashboard/EmployeeDashboard";
// // import Login from "./pages/Auth/Login";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Navigate to="/dashboard" />} />
// //         <Route path="/dashboard" element={<HRDashboard />} />
// //         <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
// //         <Route path="/login" element={<Login />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // // export default App;
// // import React, { useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./pages/Auth/Login";
// // import HRDashboard from "./pages/Dashboard/HRDashboard";
// // import EmployeeDashboard from "./pages/Dashboard/EmployeeDashboard";

// // const App = () => {
// //   const token = localStorage.getItem("token");
// //   const role = localStorage.getItem("role");

// //   useEffect(() => {
// //     console.log("Token:", token);
// //     console.log("Role:", role);
// //   }, [token, role]);

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Default route should be login */}
// //         <Route path="/" element={token ? <Navigate to={role === "HR" ? "/dashboard/hr" : "/dashboard/employee"} /> : <Login />} />
        
// //         {/* HR and Employee Dashboards */}
// //         <Route path="/dashboard/hr" element={token && role === "HR" ? <HRDashboard /> : <Navigate to="/" />} />
// //         <Route path="/dashboard/employee" element={token && role === "Employee" ? <EmployeeDashboard /> : <Navigate to="/" />} />

// //         {/* Catch-all route to prevent access to wrong pages */}
// //         <Route path="*" element={<Navigate to="/" />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// // import React, { useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./pages/Auth/Login";
// // import HRDashboard from "./pages/Dashboard/HRDashboard";
// // import EmployeeDashboard from "./pages/Dashboard/EmployeeDashboard";
// // import EmployeeList from "./pages/Employees/EmployeeList";
// // import CreateEmployee from "./pages/Employees/CreateEmployee";
// // import EmployeeProfile from "./pages/Employees/EmployeeProfile";
// // import ApplyLeave from "./pages/LeaveManagement/ApplyLeave";
// // import LeaveHistory from "./pages/LeaveManagement/LeaveHistory";
// // import PendingRequests from "./pages/LeaveManagement/PendingRequests";
// // import AllLeaveRequests from "./pages/LeaveManagement/AllLeaveRequests";
// // import SalaryDetails from "./pages/Salary/SalaryDetails";
// // import SalaryHistory from "./pages/Salary/SalaryHistory";
// // import MyProfile from "./pages/Profile/MyProfile";
// // import HRProfile from "./pages/Profile/HRProfile";
// // import Logout from "./pages/Auth/Logout";
// // import Sidebar from "./components/Sidebar";

// // const App = () => {
// //   const token = localStorage.getItem("token");
// //   const role = localStorage.getItem("role");

// //   useEffect(() => {
// //     console.log("Token:", token);
// //     console.log("Role:", role);
// //   }, [token, role]);

// //   return (
// //     <Router>
// //       <Sidebar />
// //       <Routes>
// //         <Route path="/" element={token ? <Navigate to={role === "HR" ? "/dashboard/hr" : "/dashboard/employee"} /> : <Login />} />
// //         <Route path="/dashboard/hr" element={token && role === "HR" ? <HRDashboard /> : <Navigate to="/" />} />
// //         <Route path="/dashboard/employee" element={token && role === "Employee" ? <EmployeeDashboard /> : <Navigate to="/" />} />
// //         <Route path="/employees" element={token && role === "HR" ? <EmployeeList /> : <Navigate to="/" />} />
// //         <Route path="/employees/new" element={token && role === "HR" ? <CreateEmployee /> : <Navigate to="/" />} />
// //         <Route path="/employees/:id" element={token && role === "HR" ? <EmployeeProfile /> : <Navigate to="/" />} />
// //         <Route path="/apply-leave" element={token && role === "Employee" ? <ApplyLeave /> : <Navigate to="/" />} />
// //         <Route path="/leave-history" element={token && role === "Employee" ? <LeaveHistory /> : <Navigate to="/" />} />
// //         <Route path="/leaves/pending" element={token && role === "HR" ? <PendingRequests /> : <Navigate to="/" />} />
// //         <Route path="/leaves" element={token && role === "HR" ? <AllLeaveRequests /> : <Navigate to="/" />} />
// //         <Route path="/salary-history" element={token ? <SalaryHistory /> : <Navigate to="/" />} />
// //         <Route path="/salary" element={token && role === "HR" ? <SalaryDetails /> : <Navigate to="/" />} />
// //         <Route path="/profile" element={token && role === "Employee" ? <MyProfile /> : <Navigate to="/" />} />
// //         <Route path="/hr-profile" element={token && role === "HR" ? <HRProfile /> : <Navigate to="/" />} />
// //         <Route path="/logout" element={<Logout />} />
// //         <Route path="*" element={<Navigate to="/" />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;


// // import React from "react";
// // import { BrowserRouter as Router } from "react-router-dom";
// // import AppRoutes from "./routes/AppRoutes";
// // import Sidebar from "./components/Sidebar";
// // import Header from "./components/Header";

// // const App = () => {
// //     return (
// //         <Router>
// //             <div className="flex h-screen">
// //                 <Sidebar />
// //                 <div className="flex-1 flex flex-col">
// //                     <Header />
// //                     <main className="p-4">
// //                         <AppRoutes />
// //                     </main>
// //                 </div>
// //             </div>
// //         </Router>
// //     );
// // };

// // export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import HRDashboard from './pages/Dashboard/HRDashboard'; // Example import
// // import EmployeeDashboard from './pages/Dashboard/EmployeeDashboard'; // Example import
// // import Sidebar from './components/Sidebar'; // Ensure Sidebar exists

// // function App() {
// //   return (
// //     <Router>
// //       <Sidebar /> {/* Ensure Sidebar is included */}
// //       <Routes>
// //         <Route path="/dashboard/hr" element={<HRDashboard />} />
// //         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import HRDashboard from './pages/Dashboard/HRDashboard';
// // import EmployeeDashboard from './pages/Dashboard/EmployeeDashboard';
// // import Sidebar from './components/Sidebar';

// // function App() {
// //   return (
// //     <>
// //       <Sidebar />
// //       <Routes>
// //         <Route path="/dashboard/hr" element={<HRDashboard />} />
// //         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;

// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import Login from './pages/Auth/Login';  // Import Login Page
// // import HRDashboard from './pages/Dashboard/HRDashboard';
// // import EmployeeDashboard from './pages/Dashboard/EmployeeDashboard';
// // import Sidebar from './components/Sidebar';

// // function App() {
// //   return (
// //     <>
// //       <Routes>
// //         {/* Default Route: Login Page */}
// //         <Route path="/" element={<Login />} />  
        
// //         {/* Protected Routes (Example) */}
// //         <Route path="/dashboard/hr" element={<HRDashboard />} />
// //         <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom"; // ❌ No BrowserRouter here
// // import Login from "./pages/Auth/Login";  
// import AppRoutes from "./routes/AppRoutes"; // Import AppRoutes

// function App() {
//   return (
//     <Routes>
//       {/* Main Routes (Includes Sidebar, Header, and Dashboard) */}
//       <Route path="/*" element={<AppRoutes />} />
//     </Routes>
//   );
// }

// export default App;


// import React from 'react';
// import AppRoutes from './routes/AppRoutes';

// const App = () => {
//   return <AppRoutes />;
// };

// export default App;


// src/App.js
// import React from 'react';
// import AppRoutes from './routes/AppRoutes';

// const App = () => {
//   return <AppRoutes />;
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
