// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Layout.css";
// // // // Optional: For styling

// // // const Sidebar = () => {
// // //   const role = localStorage.getItem("role").toLowerCase(); // Get the role from local storage and convert it to lowercase

// // //   return (
// // //     <div className="sidebar">
// // //       <h2>Paysphere</h2>
// // //       <ul>
// // //         <li>
// // //           <Link to={role === "hr" ? "/dashboard/hr" : "/dashboard/employee"}>Dashboard</Link>
// // //         </li>

// // //         {role === "hr" && (
// // //           <>
// // //             <li>
// // //               <Link to="/employees">Employee List</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/employees/new">Add Employee</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/leaves/pending">Pending Leave Requests</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/leaves">All Leave Requests</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/salary">Manage Salaries</Link>
// // //             </li>
// // //           </>
// // //         )}

// // //         {role === "employee" && (
// // //           <>
// // //             <li>
// // //               <Link to="/apply-leave">Apply for Leave</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/leave-history">Leave History</Link>
// // //             </li>
// // //           </>
// // //         )}

// // //         <li>
// // //           <Link to="/salary-history">Salary Details</Link>
// // //         </li>

// // //         <li>
// // //           <Link to={role === "hr" ? "/hr-profile" : "/profile"}>My Profile</Link>
// // //         </li>

// // //         <li>
// // //           <Link to="/logout">Logout</Link>
// // //         </li>
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;


// // // import React from 'react';
// // // import { NavLink, useNavigate } from 'react-router-dom';
// // // import './Sidebar.css';

// // // const Sidebar = () => {
// // //   const role = localStorage.getItem('role')?.toLowerCase();
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     localStorage.clear();
// // //     navigate('/');
// // //   };

// // //   return (
// // //     <div className="sidebar">
// // //       <h2 className="sidebar-title">Paysphere</h2>
// // //       <nav className="sidebar-nav">
// // //         <NavLink to="/dashboard" className="sidebar-link">Dashboard</NavLink>

// // //         {role === 'hr' ? (
// // //           <>
// // //             <NavLink to="/employees" className="sidebar-link">Employees</NavLink>
// // //             <NavLink to="/leaves/pending" className="sidebar-link">Pending Leaves</NavLink>
// // //             <NavLink to="/leaves" className="sidebar-link">All Leave Requests</NavLink>
// // //           </>
// // //         ) : (
// // //           <>
// // //             <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
// // //             <NavLink to="/leave-history" className="sidebar-link">Leave History</NavLink>
// // //           </>
// // //         )}

// // //         <NavLink to="/salary-details" className="sidebar-link">Salary Details</NavLink>
// // //         <NavLink to="/salary-history" className="sidebar-link">Salary History</NavLink>
// // //         <NavLink to="/profile" className="sidebar-link">Profile</NavLink>

// // //         <button onClick={handleLogout} className="sidebar-link logout-btn">Logout</button>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;



// // // import React from 'react';
// // // import { NavLink, useNavigate } from 'react-router-dom';
// // // import './Sidebar.css';

// // // const Sidebar = () => {
// // //   const role = localStorage.getItem('role')?.toLowerCase();
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     localStorage.clear();
// // //     navigate('/');
// // //   };

// // //   // Role-based dashboard path
// // //   const dashboardPath = role === 'hr' ? '/dashboard/hr' : '/dashboard/employee';

// // //   return (
// // //     <div className="sidebar">
// // //       <h2 className="sidebar-title">Paysphere</h2>
// // //       <nav className="sidebar-nav">
// // //         <NavLink to={dashboardPath} className="sidebar-link">Dashboard</NavLink>

// // //         {role === 'hr' ? (
// // //   <>
// // //     <NavLink to="/leaves/pending" className="sidebar-link">Pending Leaves</NavLink>
// // //     <NavLink to="/leaves" className="sidebar-link">All Leave Requests</NavLink>
// // //     <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink> {/* Change /leave/apply to /apply-leave */}
// // //   </>
// // // ) : (
// // //   <>
// // //     <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink> {/* Change /leave/apply to /apply-leave */}
// // //     <NavLink to="/leave-history" className="sidebar-link">Leave History</NavLink>
// // //   </>
// // // )}


// // //         <NavLink to="/salary-details" className="sidebar-link">Salary Details</NavLink>
// // //         <NavLink to="/salary-history" className="sidebar-link">Salary History</NavLink>
// // //         <NavLink to="/profile" className="sidebar-link">Profile</NavLink>

// // //         <button onClick={handleLogout} className="sidebar-link logout-btn">Logout</button>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;


// // import React from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import './Sidebar.css';

// // const Sidebar = () => {
// //   const role = localStorage.getItem('role')?.toLowerCase();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate('/');
// //   };

// //   const dashboardPath = role === 'hr' ? '/dashboard/hr' : '/dashboard/employee';

// //   return (
// //     <div className="sidebar">
// //       <h2 className="sidebar-title">Paysphere</h2>
// //       <nav className="sidebar-nav">
// //         <NavLink to={dashboardPath} className="sidebar-link">Dashboard</NavLink>

// //         {role === 'hr' ? (
// //           <>
// //             <NavLink to="/employees" className="sidebar-link">View Employee List</NavLink>
// //             <NavLink to="/employees/new" className="sidebar-link">Register Employee</NavLink>
// //             <NavLink to="/leaves/pending" className="sidebar-link">Pending Leaves</NavLink>
// //             <NavLink to="/leaves" className="sidebar-link">All Leave Requests</NavLink>
// //             <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
// //           </>
// //         ) : (
// //           <>
// //             <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
// //             <NavLink to="/leave-history" className="sidebar-link">Leave History</NavLink>
// //           </>
// //         )}

// //         <NavLink to="/salary-details" className="sidebar-link">Salary Details</NavLink>
// //         <NavLink to="/salary-history" className="sidebar-link">Salary History</NavLink>
// //         <NavLink to="/profile" className="sidebar-link">Profile</NavLink>

// //         <button onClick={handleLogout} className="sidebar-link logout-btn">Logout</button>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Sidebar;



// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   const role = localStorage.getItem('role')?.toLowerCase();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   const dashboardPath = role === 'hr' ? '/dashboard/hr' : '/dashboard/employee';

//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">Paysphere</h2>
//       <nav className="sidebar-nav">
//         {/* Dashboard */}
//         <div className="sidebar-section">
//           <p className="sidebar-section-title">Dashboard</p>
//           <NavLink to={dashboardPath} className="sidebar-link">Dashboard</NavLink>
//         </div>

//         {/* Employee Management (HR Only) */}
//         {role === 'hr' && (
//           <div className="sidebar-section hover-expand">
//             <p className="sidebar-section-title">Employee Management</p>
//             <div className="sidebar-submenu">
//               <NavLink to="/employees" className="sidebar-link">View Employee List</NavLink>
//               <NavLink to="/employees/new" className="sidebar-link">Register Employee</NavLink>
//             </div>
//           </div>
//         )}

//         {/* Leave Management */}
//         <div className="sidebar-section hover-expand">
//           <p className="sidebar-section-title">Leave Management</p>
//           <div className="sidebar-submenu">
//             {role === 'hr' ? (
//               <>
//                 <NavLink to="/leaves/pending" className="sidebar-link">Pending Leaves</NavLink>
//                 <NavLink to="/leaves" className="sidebar-link">All Leave Requests</NavLink>
//                 <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
//               </>
//             ) : (
//               <>
//                 <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
//                 <NavLink to="/leave-history" className="sidebar-link">Leave History</NavLink>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Salary */}
//         <div className="sidebar-section hover-expand">
//           <p className="sidebar-section-title">Salary</p>
//           <div className="sidebar-submenu">
//             <NavLink to="/salary-details" className="sidebar-link">Salary Details</NavLink>
//             <NavLink to="/salary-history" className="sidebar-link">Salary History</NavLink>
//           </div>
//         </div>

//         {/* Profile & Logout */}
//         <div className="sidebar-section">
//           <p className="sidebar-section-title">Account</p>
//           <NavLink to="/profile" className="sidebar-link">Profile</NavLink>
//           <button onClick={handleLogout} className="sidebar-link logout-btn">Logout</button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const role = localStorage.getItem('role')?.toLowerCase();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const dashboardPath = role === 'hr' ? '/dashboard/hr' : '/dashboard/employee';

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Paysphere</h2>

      {/* Dashboard - Visible */}
      <NavLink to={dashboardPath} className="sidebar-link">Dashboard</NavLink>

      {/* Employee Management - Hover Expand */}
      {role === 'hr' && (
        <div className="sidebar-section hover-expand">
          <p className="sidebar-section-title">Employee Management</p>
          <div className="sidebar-submenu">
            <NavLink to="/employees" className="sidebar-link">View Employee List</NavLink>
            <NavLink to="/employees/new" className="sidebar-link">Register Employee</NavLink>
          </div>
        </div>
      )}

      {/* Leave Management - Hover Expand */}
      <div className="sidebar-section hover-expand">
        <p className="sidebar-section-title">Leave Management</p>
        <div className="sidebar-submenu">
          {role === 'hr' ? (
            <>
              <NavLink to="/leaves/pending" className="sidebar-link">Pending Leaves</NavLink>
              <NavLink to="/leaves" className="sidebar-link">All Leave Requests</NavLink>
              <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
              <NavLink to="/leave-history" className="sidebar-link">Leave History</NavLink>
            </>
          )}
        </div>
      </div>

      {/* Salary - Hover Expand */}
      <div className="sidebar-section hover-expand">
        <p className="sidebar-section-title">Salary</p>
        <div className="sidebar-submenu">
          <NavLink to="/salary-details" className="sidebar-link">Salary Details</NavLink>
          <NavLink to="/salary-history" className="sidebar-link">Salary History</NavLink>
          {role === 'hr' && (
      <NavLink to="/all-employee-salaries" className="sidebar-link">All Empl Salary Details</NavLink>
    )}
        </div>
      </div>

      {/* Profile and Logout - No heading */}
      <NavLink to="/profile" className="sidebar-link">Profile</NavLink>
      <button onClick={handleLogout} className="sidebar-link logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
