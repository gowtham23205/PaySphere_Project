// // import React from "react";

// // const EmployeeDashboard = () => {
// //   return (
// //     <div>
// //       <h1>Employee Dashboard Loaded!</h1>
// //     </div>
// //   );
// // };

// // export default EmployeeDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Dashboard.css";

// const EmployeeDashboard = () => {
//   const [leaveBalance, setLeaveBalance] = useState(0);
//   // const [salary, setSalary] = useState(0);
//   const [recentLeaves, setRecentLeaves] = useState([]);

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const leaveRes = await axios.get("http://127.0.0.1:8000/api/leave/all/", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         // const salaryRes = await axios.get("http://127.0.0.1:8000/api/salary/details/", {
//         //   headers: { Authorization: `Bearer ${token}` },
//         // });

//         const recentLeavesRes = await axios.get("http://127.0.0.1:8000/api/leave/all/", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setLeaveBalance(leaveRes.data.balance || 0);
//         // setSalary(salaryRes.data.salary || 0);
//         setRecentLeaves(recentLeavesRes.data);
//       } catch (error) {
//         console.error("Error fetching employee data", error);
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   return (
//     <div className="dashboard">
//       <h2>Employee Dashboard</h2>
//       <div className="dashboard-cards">
//         <div className="card">
//           <h3>Leave Balance</h3>
//           <p>{leaveBalance} days</p>
//         </div>
//         <div className="card">
//           <h3>Salary</h3>
//           {/* <p>${salary}</p> */}
//         </div>
//       </div>
//       <div className="recent-leaves">
//         <h3>Recent Leave Requests</h3>
//         <ul>
//           {recentLeaves.length > 0 ? (
//             recentLeaves.map((leave, index) => (
//               <li key={index}>
//                 {leave.date} - {leave.status}
//               </li>
//             ))
//           ) : (
//             <p>No recent leave requests</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;


// const EmployeeDashboard = () => {
//   return <h1>Welcome to Employee Dashboard</h1>;
// };

// export default EmployeeDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EmployeeDashboard = () => {
//   const [leaveBalance, setLeaveBalance] = useState(0);
//   const [salaryDetails, setSalaryDetails] = useState(null);
//   const [recentLeaves, setRecentLeaves] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` };

//     axios.get('http://localhost:8000/api/leave/all/', { headers })
//       .then(res => {
//         const leaves = res.data.filter(leave => leave.status !== 'Rejected');
//         setLeaveBalance(20 - leaves.length); // assuming 20 leaves per year
//         setRecentLeaves(leaves.slice(-3)); // last 3 leaves
//       })
//       .catch(() => setLeaveBalance(0));

//     axios.get('http://localhost:8000/api/salary/current_salary_details/', { headers })
//       .then(res => setSalaryDetails(res.data))
//       .catch(() => setSalaryDetails(null));
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to Employee Dashboard</h2>
//       <p>Leave Balance: {leaveBalance}</p>

//       <h3>Salary Details</h3>
//       {salaryDetails ? (
//         <ul>
//           <li>Basic: ₹{salaryDetails.basic}</li>
//           <li>Allowances: ₹{salaryDetails.allowances_total}</li>
//           <li>Deductions: ₹{salaryDetails.deductions_total}</li>
//           <li>Net Salary: ₹{salaryDetails.net_salary}</li>
//         </ul>
//       ) : (
//         <p>No salary data found.</p>
//       )}

//       <h3>Recent Leave Requests</h3>
//       <ul>
//         {recentLeaves.map((leave, i) => (
//           <li key={i}>
//             {leave.start_date} to {leave.end_date} - {leave.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmployeeDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './EmployeeDashboard.css'; // ✅ Import CSS

// const EmployeeDashboard = () => {
//   const [leaveBalance, setLeaveBalance] = useState(0);
//   const [salaryDetails, setSalaryDetails] = useState(null);
//   const [recentLeaves, setRecentLeaves] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` };

//     axios.get('http://localhost:8000/api/leave/all/', { headers })
//       .then(res => {
//         const leaves = res.data.filter(leave => leave.status !== 'Rejected');
//         setLeaveBalance(20 - leaves.length); // assuming 20 leaves per year
//         setRecentLeaves(leaves.slice(-3)); // last 3 leaves
//       })
//       .catch(() => setLeaveBalance(0));

//     axios.get('http://localhost:8000/api/salary/current_salary_details/', { headers })
//       .then(res => setSalaryDetails(res.data))
//       .catch(() => setSalaryDetails(null));
//   }, []);

//   return (
//     <div className="employee-dashboard">
//       <h2 className="dashboard-heading">👋 Welcome to Employee Dashboard</h2>

//       <div className="dashboard-card">
//         <h3>🏖️ Leave Balance</h3>
//         <p className="highlight">{leaveBalance} Days Remaining</p>
//       </div>

//       <div className="dashboard-card">
//         <h3>💰 Salary Details</h3>
//         {salaryDetails ? (
//           <ul>
//             <li><strong>Basic:</strong> ₹{salaryDetails.basic}</li>
//             <li><strong>Allowances:</strong> ₹{salaryDetails.allowances_total}</li>
//             <li><strong>Deductions:</strong> ₹{salaryDetails.deductions_total}</li>
//             <li><strong>Net Salary:</strong> ₹{salaryDetails.net_salary}</li>
//           </ul>
//         ) : (
//           <p>No salary data found.</p>
//         )}
//       </div>

//       <div className="dashboard-card">
//         <h3>📝 Recent Leave Requests</h3>
//         {recentLeaves.length === 0 ? (
//           <p>No recent leave requests.</p>
//         ) : (
//           <ul>
//             {recentLeaves.map((leave, i) => (
//               <li key={i}>
//                 {leave.start_date} to {leave.end_date} - <strong>{leave.status}</strong>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header'; // ✅ Add this line
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const [leaveBalance, setLeaveBalance] = useState(0);
  const [salaryDetails, setSalaryDetails] = useState(null);
  const [recentLeaves, setRecentLeaves] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    axios.get('http://localhost:8000/api/leave/all/', { headers })
      .then(res => {
        const leaves = res.data.filter(leave => leave.status !== 'Rejected');
        setLeaveBalance(20 - leaves.length);
        setRecentLeaves(leaves.slice(-3));
      })
      .catch(() => setLeaveBalance(0));

    axios.get('http://localhost:8000/api/salary/current_salary_details/', { headers })
      .then(res => setSalaryDetails(res.data))
      .catch(() => setSalaryDetails(null));
  }, []);

  return (
    <>
      <Header /> {/* ✅ Show Header */}
      <div className="employee-dashboard">
        <h2 className="dashboard-heading">👋 Welcome to Employee Dashboard</h2>
        <div className="dashboard-card">
          <h3>🏖️ Leave Balance</h3>
          <p className="highlight">{leaveBalance} Days Remaining</p>
        </div>
        <div className="dashboard-card">
          <h3>💰 Salary Details</h3>
          {salaryDetails ? (
            <ul>
              <li><strong>Basic:</strong> ₹{salaryDetails.basic_salary}</li>
              <li><strong>Allowances:</strong> ₹{salaryDetails.allowances}</li>
              <li><strong>Deductions:</strong> ₹{salaryDetails.deductions}</li>
              <li><strong>Net Salary:</strong> ₹{salaryDetails.net_salary}</li>
            </ul>
          ) : (
            <p>No salary data found.</p>
          )}
        </div>
        <div className="dashboard-card">
          <h3>📝 Recent Leave Requests</h3>
          {recentLeaves.length === 0 ? (
            <p>No recent leave requests.</p>
          ) : (
            <ul>
              {recentLeaves.map((leave, i) => (
                <li key={i}>
                  {leave.start_date} to {leave.end_date} - <strong>{leave.leave_status}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
