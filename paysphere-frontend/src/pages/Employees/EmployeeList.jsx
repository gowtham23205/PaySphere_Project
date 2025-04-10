// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // const EmployeeList = () => {
// //     const [employees, setEmployees] = useState([]);

// //     useEffect(() => {
// //     const fetchEmployees = async () => {
// //         try {
// //         const token = localStorage.getItem("token");
// //         const response = await axios.get("http://127.0.0.1:8000/api/employees/", {
// //             headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setEmployees(response.data);
// //         } catch (error) {
// //         console.error("Error fetching employees", error);
// //         }
// //     };

// //     fetchEmployees();
// //   }, []);

// //   return (
// //     <div className="employee-list">
// //       <h2>Employee List</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Role</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {employees.map((employee) => (
// //             <tr key={employee.id}>
// //               <td>{employee.name}</td>
// //               <td>{employee.email}</td>
// //               <td>{employee.role}</td>
// //               <td>
// //                 <Link to={`/employees/${employee.id}`}>View</Link>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default EmployeeList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       const token = localStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Failed to fetch employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>
//                 <a href={`/employees/${emp.id}`}>
//                     {emp.first_name} {emp.last_name}
//                 </a>
//               </td>

//               <td>{emp.email}</td>
//               <td>{emp.is_active ? 'Active' : 'Inactive'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './EmployeeList.css'; // Make sure this file exists

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       const token = localStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Fetched Employees:", response.data); // Debug log
//         setEmployees(response.data); // Adjust this if your backend sends { users: [...] }
//       } catch (error) {
//         console.error('Failed to fetch employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div className="employee-list-container">
//       <h2>Employee List</h2>
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.length > 0 ? (
//             employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td>
//                   <a href={`/employees/${emp.id}`}>
//                     {emp.first_name} {emp.last_name}
//                   </a>
//                 </td>
//                 <td>{emp.email}</td>
//                 <td>{emp.is_active ? 'Active' : 'Inactive'}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" style={{ textAlign: 'center' }}>
//                 No employees found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './EmployeeList.css';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       const token = localStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Fetched Employees:", response.data);
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Failed to fetch employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div className="employee-list-container">
//       <h2>Employee List</h2>
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Status</th>
//             <th>Actions</th> {/* New Column */}
//           </tr>
//         </thead>
//         <tbody>
//           {employees.length > 0 ? (
//             employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td>
//                   <a href={`/employees/${emp.id}`}>
//                     {emp.first_name} {emp.last_name}
//                   </a>
//                 </td>
//                 <td>{emp.email}</td>
//                 <td>{emp.is_active ? 'Active' : 'Inactive'}</td>
//                 <td>
//                   <button
//                     className="add-salary-button"
//                     onClick={() => navigate(`/salary/add/${emp.id}`)}
//                   >
//                     Add Salary
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" style={{ textAlign: 'center' }}>
//                 No employees found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './EmployeeList.css';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [salaryMap, setSalaryMap] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
  
//     const fetchEmployeesAndSalaryStatus = async () => {
//       try {
//         const empRes = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEmployees(empRes.data);
  
//         const salaryRes = await axios.get(
//           'http://localhost:8000/api/salary/employee_salary_history/',
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
  
//         const map = {};
//         salaryRes.data.forEach((record) => {
//           const empId = typeof record.employee === 'object' ? record.employee.id : record.employee;
//           map[empId] = record;
//         });
//         setSalaryMap(map);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
  
//     fetchEmployeesAndSalaryStatus();
//   }, []);
  

//   const renderSalaryStatus = (empId) => {
//     const record = salaryMap[empId];
//     if (record) {
//       return record.is_paid ? 'Paid' : 'Pending';
//     }
//     return 'Not Generated';
//   };

//   const renderActionButton = (empId) => {
//     const record = salaryMap[empId];

//     if (!record) {
//       return (
//         <button onClick={() => navigate(`/salary/add/${empId}`)}>
//           Add Salary
//         </button>
//       );
//     }

//     if (record.is_paid === false) {
//       return (
//         <button onClick={() => navigate(`/salary/generate/${empId}`)}>
//           Generate Slip
//         </button>
//       );
//     }

//     return (
//       <button onClick={() => navigate(`/salary/history/${empId}`)}>
//         View History
//       </button>
//     );
//   };

//   return (
//     <div className="employee-list-container">
//       <h2>Employee List</h2>
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Status</th>
//             <th>Salary Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>
//                 <a href={`/employees/${emp.id}`}>
//                   {emp.first_name} {emp.last_name}
//                 </a>
//               </td>
//               <td>{emp.email}</td>
//               <td>{emp.is_active ? 'Active' : 'Inactive'}</td>
//               <td>{renderSalaryStatus(emp.id)}</td>
//               <td>{renderActionButton(emp.id)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './EmployeeList.css';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [salaryMap, setSalaryMap] = useState({});
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const empRes = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEmployees(empRes.data);

//         // Fetch salary history for each employee
//         const salaryMapTemp = {};
//         await Promise.all(
//           empRes.data.map(async (emp) => {
//             try {
//               const res = await axios.get(
//                 `http://localhost:8000/api/salary/employee_salary_history/${emp.id}/`,
//                 {
//                   headers: { Authorization: `Bearer ${token}` },
//                 }
//               );

//               const history = res.data;
//               if (Array.isArray(history) && history.length > 0) {
//                 salaryMapTemp[emp.id] = history[0]; // Latest record
//               }
//             } catch (error) {
//               console.warn(`No salary record for user ${emp.id}`);
//             }
//           })
//         );

//         setSalaryMap(salaryMapTemp);
//       } catch (error) {
//         console.error('Error fetching employees or salary data', error);
//       }
//     };

//     fetchEmployees();
//   }, [token]);

//   const renderSalaryStatus = (empId) => {
//     const record = salaryMap[empId];
//     if (record) {
//       return record.is_paid ? 'Paid' : 'Pending';
//     }
//     return 'Not Generated';
//   };

//   const renderActionButton = (empId) => {
//     const record = salaryMap[empId];

//     if (!record) {
//       return (
//         <button onClick={() => navigate(`/salary/add/${empId}`)}>
//           Add Salary
//         </button>
//       );
//     }

//     if (record.is_paid === false) {
//       return (
//         <button onClick={() => navigate(`/salary/generate/${empId}`)}>
//           Generate Slip
//         </button>
//       );
//     }

//     return (
//       <button onClick={() => navigate(`/salary/history/${empId}`)}>
//         View History
//       </button>
//     );
//   };

//   return (
//     <div className="employee-list-container">
//       <h2>Employee List</h2>
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Status</th>
//             <th>Salary Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>
//                 <a href={`/employees/${emp.id}`}>
//                   {emp.first_name} {emp.last_name}
//                 </a>
//               </td>
//               <td>{emp.email}</td>
//               <td>{emp.is_active ? 'Active' : 'Inactive'}</td>
//               <td>{renderSalaryStatus(emp.id)}</td>
//               <td>{renderActionButton(emp.id)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [salaryMap, setSalaryMap] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const empRes = await axios.get('http://localhost:8000/api/users/', {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        // ✅ Filter only active employees
        const activeEmployees = empRes.data.filter(emp => emp.is_active);
        activeEmployees.sort((a, b) => a.id - b.id);
        setEmployees(activeEmployees);
  
        const salaryMapTemp = {};
        await Promise.all(
          activeEmployees.map(async (emp) => {
            try {
              const res = await axios.get(
                `http://localhost:8000/api/salary/employee_salary_history/${emp.id}/`,
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              );
              const history = res.data;
              if (Array.isArray(history) && history.length > 0) {
                salaryMapTemp[emp.id] = history[0];
              }
            } catch (error) {
              console.warn(`No salary record for user ${emp.id}`);
            }
          })
        );
  
        setSalaryMap(salaryMapTemp);
      } catch (error) {
        console.error('Error fetching employees or salary data', error);
      }
    };
  
    fetchEmployees();
  }, [token]);
  

  const renderSalaryStatus = (empId) => {
    const record = salaryMap[empId];
    if (record) {
      return record.is_paid ? 'Paid' : 'Pending';
    }
    return 'Not Generated';
  };

  const renderActionButton = (empId) => {
    const record = salaryMap[empId];
  
    if (!record) {
      return (
        <button
          className="small-button"
          onClick={() => navigate(`/salary/add/${empId}`)}
        >
          Add Salary
        </button>
      );
    }
  
    return (
      <div className="button-group">
        <button className="small-button" onClick={() => navigate(`/salary/add-allowance/${empId}`)}>
          Add Allowance
        </button>
        <button className="small-button" onClick={() => navigate(`/salary/add-deduction/${empId}`)}>
          Add Deduction
        </button>
        {record.is_paid === false ? (
          <button className="small-button" onClick={() => navigate(`/salary/generate/${empId}`)}>
            Generate
          </button>
        ) : (
          <button className="small-button" onClick={() => navigate(`/salary/history/${empId}`)}>
            View History
          </button>
        )}
      </div>
    );
  };    
  

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Salary Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>
                <a href={`/employees/${emp.id}`}>
                  {emp.first_name} {emp.last_name}
                </a>
              </td>
              <td>{emp.email}</td>
              <td>{emp.is_active ? 'Active' : 'Inactive'}</td>
              <td>{renderSalaryStatus(emp.id)}</td>
              <td>{renderActionButton(emp.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
