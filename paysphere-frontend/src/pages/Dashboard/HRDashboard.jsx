// // import React from "react";

// // const HRDashboard = () => {
// //   return (
// //     <div>
// //       <h1>HR Dashboard Loaded!</h1>
// //     </div>
// //   );
// // };

// // export default HRDashboard;

//   // import React, { useState, useEffect } from "react";
//   // import axios from "axios";
//   // import "./Dashboard.css";

//   // const HRDashboard = () => {
//   //   const [employeeCount, setEmployeeCount] = useState(0);
//   //   const [pendingLeaves, setPendingLeaves] = useState(0);
//   //   // const [payrollStatus, setPayrollStatus] = useState("");

//   //   useEffect(() => {
//   //     const fetchDashboardData = async () => {
//   //       try {
//   //         const token = localStorage.getItem("token");

//   //         const employeesRes = await axios.get("http://127.0.0.1:8000/api/users/", {
//   //           headers: { Authorization: `Bearer ${token}` },
//   //         });

//   //         const leavesRes = await axios.get("http://127.0.0.1:8000/api/leave/pending/", {
//   //           headers: { Authorization: `Bearer ${token}` },
//   //         });

//   //         // const payrollRes = await axios.get("http://127.0.0.1:8000/api/salary/history/", {
//   //         //   headers: { Authorization: `Bearer ${token}` },
//   //         // });

//   //         setEmployeeCount(employeesRes.data.length); // Fix: get array length
//   //         setPendingLeaves(leavesRes.data.length); // Fix: get array length
//   //         // setPayrollStatus(payrollRes.data.length > 0 ? "Processed" : "Pending"); // Fix: Example logic    
//   //       } catch (error) {
//   //         console.error("Error fetching dashboard data", error);
//   //       }
//   //     };

//   //     fetchDashboardData();
//   //   }, []);

//   //   return (
//   //     <div className="dashboard">
//   //       <h2>HR Dashboard</h2>
//   //       <div className="dashboard-cards">
//   //         <div className="card">
//   //           <h3>Total Employees</h3>
//   //           <p>{employeeCount}</p>
//   //         </div>
//   //         <div className="card">
//   //           <h3>Pending Leave Requests</h3>
//   //           <p>{pendingLeaves}</p>
//   //         </div>
//   //         <div className="card">
//   //           <h3>Payroll Status</h3>
//   //           {/* <p>{payrollStatus}</p> */}
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // };

//   // export default HRDashboard;

//   // import React from "react";

//   // const HRDashboard = () => {
//   //   console.log("✅ HRDashboard rendering"); // Add this line
//   //   return <h2 style={{ color: "green" }}>✅ HR Dashboard Content</h2>;
//   // };
  
//   // export default HRDashboard;
  

//   import React, { useState, useEffect } from "react";
//   import axios from "axios";
//   import "./Dashboard.css";
  
//   const HRDashboard = () => {
//     const [employeeCount, setEmployeeCount] = useState(0);
//     const [pendingLeaves, setPendingLeaves] = useState(0);
//     // const [payrollStatus, setPayrollStatus] = useState("");
  
//     useEffect(() => {
//       const fetchDashboardData = async () => {
//         try {
//           const token = localStorage.getItem("token");
  
//           const employeesRes = await axios.get("http://127.0.0.1:8000/api/users/", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
  
//           const leavesRes = await axios.get("http://127.0.0.1:8000/api/leave/pending/", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
  
//           // const payrollRes = await axios.get("http://127.0.0.1:8000/api/salary/history/", {
//           //   headers: { Authorization: `Bearer ${token}` },
//           // });
  
//           setEmployeeCount(employeesRes.data.length);
//           setPendingLeaves(leavesRes.data.length);
//           // setPayrollStatus(payrollRes.data.length > 0 ? "Processed" : "Pending");
//         } catch (error) {
//           console.error("Error fetching dashboard data", error);
//         }
//       };
  
//       fetchDashboardData();
//     }, []);
  
//     return (
//       <div className="dashboard">
//         <h2>HR Dashboard</h2>
//         <div className="dashboard-cards">
//           <div className="card">
//             <h3>Total Employees</h3>
//             <p>{employeeCount}</p>
//           </div>
//           <div className="card">
//             <h3>Pending Leave Requests</h3>
//             <p>{pendingLeaves}</p>
//           </div>
//           <div className="card">
//             <h3>Payroll Status</h3>
//             {/* <p>{payrollStatus}</p> */}
//             <p>Pending</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default HRDashboard;
  

// const HRDashboard = () => {
//   return <h1>Welcome to HR Dashboard</h1>;
// };

// export default HRDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const HRDashboard = () => {
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [pendingLeaves, setPendingLeaves] = useState(0);
//   const [payrollStatus, setPayrollStatus] = useState(0);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` };

//     axios.get('http://localhost:8000/api/users/', { headers })
//       .then(res => setTotalEmployees(res.data.length))
//       .catch(() => setTotalEmployees(0));

//     axios.get('http://localhost:8000/api/leave/pending/', { headers })
//       .then(res => setPendingLeaves(res.data.length))
//       .catch(() => setPendingLeaves(0));

//     axios.get('http://localhost:8000/api/salary/employee_salary_status_list/', { headers })
//       .then(res => setPayrollStatus(res.data.length))
//       .catch(() => setPayrollStatus(0));
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to HR Dashboard</h2>
//       <p>Total Employees: {totalEmployees}</p>
//       <p>Pending Leave Requests: {pendingLeaves}</p>
//       <p>Payroll Status Records: {payrollStatus}</p>
//     </div>
//   );
// };

// export default HRDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const HRDashboard = () => {
//   const navigate = useNavigate();
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [pendingLeaves, setPendingLeaves] = useState(0);
//   const [payrollStatus, setPayrollStatus] = useState(0);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` };

//     axios.get('http://localhost:8000/api/users/', { headers })
//       .then(res => setTotalEmployees(res.data.length))
//       .catch(() => setTotalEmployees(0));

//     axios.get('http://localhost:8000/api/leave/pending/', { headers })
//       .then(res => setPendingLeaves(res.data.length))
//       .catch(() => setPendingLeaves(0));

//     axios.get('http://localhost:8000/api/salary/employee_salary_status_list/', { headers })
//       .then(res => setPayrollStatus(res.data.length))
//       .catch(() => setPayrollStatus(0));
//   }, []);

//   return (
//     <div>
//       <h2>Welcome to HR Dashboard</h2>
//       <p>Total Employees: {totalEmployees}</p>
//       <p>Pending Leave Requests: {pendingLeaves}</p>
//       <p>Payroll Status Records: {payrollStatus}</p>

//       <button onClick={() => navigate('/employees')}>View Employee List</button>
//     </div>
//   );
// };

// export default HRDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const HRDashboard = () => {
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({
//     totalEmployees: 0,
//     pendingLeaves: 0,
//     payrollStatus: 0,
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const headers = { Authorization: `Bearer ${token}` };

//         const [empRes, leaveRes, payrollRes] = await Promise.all([
//           axios.get('http://localhost:8000/api/users/', { headers }),
//           axios.get('http://localhost:8000/api/leave/pending/', { headers }),
//           axios.get('http://localhost:8000/api/salary/employee_salary_status_list/', { headers }),
//         ]);

//         setStats({
//           totalEmployees: empRes.data.length,
//           pendingLeaves: leaveRes.data.length,
//           payrollStatus: payrollRes.data.length,
//         });
//       } catch (error) {
//         console.error("Dashboard fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) {
//     return <p>Loading dashboard...</p>;
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>👨‍💼 HR Dashboard</h2>
//       <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//         <li>👥 Total Employees: <strong>{stats.totalEmployees}</strong></li>
//         <li>🕒 Pending Leave Requests: <strong>{stats.pendingLeaves}</strong></li>
//         <li>💵 Payroll Status Records: <strong>{stats.payrollStatus}</strong></li>
//       </ul>

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={() => navigate('/employees')} style={{ marginRight: '10px' }}>
//           View Employee List
//         </button>
//         <button onClick={() => navigate('/salary/create')}>
//           Create Salary
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HRDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const HRDashboard = () => {
//   const navigate = useNavigate();
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [pendingLeaves, setPendingLeaves] = useState(0);
//   const [payrollStatus, setPayrollStatus] = useState(0);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` };

//     axios.get('http://localhost:8000/api/users/', { headers })
//       .then(res => setTotalEmployees(res.data.length))
//       .catch(() => setTotalEmployees(0));

//     axios.get('http://localhost:8000/api/leave/pending/', { headers })
//       .then(res => setPendingLeaves(res.data.length))
//       .catch(() => setPendingLeaves(0));

//     axios.get('http://localhost:8000/api/salary/employee_salary_status_list/', { headers })
//       .then(res => setPayrollStatus(res.data.length))
//       .catch(() => setPayrollStatus(0));
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>👨‍💼 HR Dashboard</h2>
//       <p>👥 Total Employees: <strong>{totalEmployees}</strong></p>
//       <p>🕒 Pending Leave Requests: <strong>{pendingLeaves}</strong></p>
//       <p>💵 Payroll Status Records: <strong>{payrollStatus}</strong></p>

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={() => navigate('/employees')} style={{ marginRight: '10px' }}>
//           View Employee List
//         </button>
//         <button onClick={() => navigate('/employees/new')}>
//           Register Employee
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HRDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './HRDashboard.css'; // ✅ Import CSS

// const HRDashboard = () => {
//   const navigate = useNavigate();
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [pendingLeaves, setPendingLeaves] = useState(0);
//   const [payrollStatus, setPayrollStatus] = useState(0);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` };

//     axios.get('http://localhost:8000/api/users/', { headers })
//       .then(res => setTotalEmployees(res.data.length))
//       .catch(() => setTotalEmployees(0));

//     axios.get('http://localhost:8000/api/leave/pending/', { headers })
//       .then(res => setPendingLeaves(res.data.length))
//       .catch(() => setPendingLeaves(0));

//     axios.get('http://localhost:8000/api/salary/employee_salary_status_list/', { headers })
//       .then(res => setPayrollStatus(res.data.length))
//       .catch(() => setPayrollStatus(0));
//   }, []);

//   return (
//     <div className="hr-dashboard-container">
//       <h2 className="dashboard-title">👨‍💼 HR Dashboard</h2>
      
//       <div className="dashboard-cards">
//         <div className="dashboard-card">👥 Total Employees: <strong>{totalEmployees}</strong></div>
//         <div className="dashboard-card">🕒 Pending Leave Requests: <strong>{pendingLeaves}</strong></div>
//         <div className="dashboard-card">💵 Payroll Status Records: <strong>{payrollStatus}</strong></div>
//       </div>

//       <div className="dashboard-actions">
//         <button onClick={() => navigate('/employees')}>View Employee List</button>
//         <button onClick={() => navigate('/employees/new')}>Register Employee</button>
//       </div>
//     </div>
//   );
// };

// export default HRDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'; // ✅ Add this line
import './HRDashboard.css';

const HRDashboard = () => {
  const navigate = useNavigate();
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [pendingLeaves, setPendingLeaves] = useState(0);
  const [payrollStatus, setPayrollStatus] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    axios.get('http://localhost:8000/api/users/', { headers })
      .then(res => setTotalEmployees(res.data.length))
      .catch(() => setTotalEmployees(0));

    axios.get('http://localhost:8000/api/leave/pending/', { headers })
      .then(res => setPendingLeaves(res.data.length))
      .catch(() => setPendingLeaves(0));

    axios.get('http://localhost:8000/api/salary/employee_salary_status_list/', { headers })
      .then(res => setPayrollStatus(res.data.length))
      .catch(() => setPayrollStatus(0));
  }, []);

  return (
    <>
      <Header /> {/* ✅ Show Header */}
      <div className="hr-dashboard-container">
        <h2 className="dashboard-title">👨‍💼 HR Dashboard</h2>
        <div className="dashboard-cards">
          <div className="dashboard-card">👥 Total Employees: <strong>{totalEmployees}</strong></div>
          <div className="dashboard-card">🕒 Pending Leave Requests: <strong>{pendingLeaves}</strong></div>
          <div className="dashboard-card">💵 Payroll Status Records: <strong>{payrollStatus}</strong></div>
        </div>
        <div className="dashboard-actions">
          <button onClick={() => navigate('/employees')}>View Employee List</button>
          <button onClick={() => navigate('/employees/new')}>Register Employee</button>
        </div>
      </div>
    </>
  );
};

export default HRDashboard;
