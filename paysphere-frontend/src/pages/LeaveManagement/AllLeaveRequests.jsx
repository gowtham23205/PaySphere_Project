// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const AllLeaveRequests = () => {
// //     const [leaves, setLeaves] = useState([]);

// //     useEffect(() => {
// //         const fetchLeaves = async () => {
// //             try {
// //                 const token = localStorage.getItem("token");
// //                 const response = await axios.get("http://127.0.0.1:8000/api/leave/all/", {
// //                     headers: { Authorization: `Bearer ${token}` },
// //                 });
// //                 setLeaves(response.data);
// //             } catch (error) {
// //                 console.error("Error fetching leave requests", error);
// //             }
// //         };
// //         fetchLeaves();
// //     }, []);

// //     return (
// //         <div>
// //             <h2>All Leave Requests</h2>
// //             <table border="1">
// //                 <thead>
// //                     <tr>
// //                         <th>Employee</th>
// //                         <th>Start Date</th>
// //                         <th>End Date</th>
// //                         <th>Reason</th>
// //                         <th>Status</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {leaves.map((leave) => (
// //                         <tr key={leave.id}>
// //                             <td>{leave.employee_name}</td>
// //                             <td>{leave.start_date}</td>
// //                             <td>{leave.end_date}</td>
// //                             <td>{leave.reason}</td>
// //                             <td>{leave.status}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default AllLeaveRequests;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const AllLeaveRequests = () => {
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [error, setError] = useState('');
// //   const token = localStorage.getItem('token');

// //   useEffect(() => {
// //     const fetchLeaveRequests = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:8000/api/leave/all/', {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setLeaveRequests(res.data);
// //       } catch (err) {
// //         console.error(err);
// //         setError('Failed to fetch leave requests.');
// //       }
// //     };

// //     fetchLeaveRequests();
// //   }, [token]);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-xl font-bold mb-4">All Leave Requests</h2>
// //       {error && <p className="text-red-500">{error}</p>}
// //       {leaveRequests.length === 0 ? (
// //         <p>No leave requests found.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white shadow rounded">
// //             <thead>
// //               <tr className="bg-gray-200">
// //                 <th className="py-2 px-4 border">Employee</th>
// //                 <th className="py-2 px-4 border">From</th>
// //                 <th className="py-2 px-4 border">To</th>
// //                 <th className="py-2 px-4 border">Reason</th>
// //                 <th className="py-2 px-4 border">Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {leaveRequests.map((leave) => (
// //                 <tr key={leave.id} className="text-center">
// //                   <td className="py-2 px-4 border">{leave.employee_name}</td>
// //                   <td className="py-2 px-4 border">{leave.start_date}</td>
// //                   <td className="py-2 px-4 border">{leave.end_date}</td>
// //                   <td className="py-2 px-4 border">{leave.reason}</td>
// //                   <td className={`py-2 px-4 border font-medium ${
// //                     leave.status === 'approved' ? 'text-green-600' :
// //                     leave.status === 'rejected' ? 'text-red-600' :
// //                     'text-yellow-600'
// //                   }`}>
// //                     {leave.status}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AllLeaveRequests;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const AllLeaveRequests = () => {
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [employees, setEmployees] = useState([]);
// //   const [error, setError] = useState('');
// //   const token = localStorage.getItem('token');

// //   // Fetch all leave requests
// //   useEffect(() => {
// //     const fetchLeaveRequests = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:8000/api/leave/all/', {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setLeaveRequests(res.data);
// //       } catch (err) {
// //         console.error(err);
// //         setError('Failed to fetch leave requests.');
// //       }
// //     };

// //     fetchLeaveRequests();
// //   }, [token]);

// //   // Fetch all employees
// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8000/api/users/', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setEmployees(response.data); // Assuming response contains a list of employees
// //       } catch (err) {
// //         console.error(err);
// //         setError('Failed to fetch employee data.');
// //       }
// //     };

// //     fetchEmployees();
// //   }, [token]);

// //   // Function to get employee full name based on employee_id
// //   const getEmployeeFullName = (employeeId) => {
// //     const employee = employees.find((emp) => emp.id === employeeId);
// //     return employee ? `${employee.first_name} ${employee.last_name}` : 'Unknown';
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-xl font-bold mb-4">All Leave Requests</h2>
// //       {error && <p className="text-red-500">{error}</p>}
// //       {leaveRequests.length === 0 ? (
// //         <p>No leave requests found.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white shadow rounded">
// //             <thead>
// //               <tr className="bg-gray-200">
// //                 <th className="py-2 px-4 border">Employee</th>
// //                 <th className="py-2 px-4 border">From</th>
// //                 <th className="py-2 px-4 border">To</th>
// //                 <th className="py-2 px-4 border">Reason</th>
// //                 <th className="py-2 px-4 border">Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {leaveRequests.map((leave) => (
// //                 <tr key={leave.id} className="text-center">
// //                   <td className="py-2 px-4 border">
// //                     {/* Display full employee name using getEmployeeFullName */}
// //                     {getEmployeeFullName(leave.employee_id)}
// //                   </td>
// //                   <td className="py-2 px-4 border">{leave.start_date}</td>
// //                   <td className="py-2 px-4 border">{leave.end_date}</td>
// //                   <td className="py-2 px-4 border">{leave.reason}</td>
// //                   <td className={`py-2 px-4 border font-medium ${leave.status === 'approved' ? 'text-green-600' : leave.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
// //                     {/* Fallback to 'Pending' if status is missing */}
// //                     {leave.status || 'Pending'}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AllLeaveRequests;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AllLeaveRequests.css';  // Add this at the top of your component file

// const AllLeaveRequests = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('token');

//   // Fetch all leave requests
//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const res = await axios.get('http://localhost:8000/api/leave/all/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setLeaveRequests(res.data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch leave requests.');
//       }
//     };

//     fetchLeaveRequests();
//   }, [token]);

//   // Fetch all employees
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEmployees(response.data); // Assuming response contains a list of employees
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch employee data.');
//       }
//     };

//     fetchEmployees();
//   }, [token]);

//   // Function to get employee full name based on employee_id
//   const getEmployeeFullName = (employeeId) => {
//     const employee = employees.find((emp) => emp.id === employeeId);
//     return employee ? `${employee.first_name} ${employee.last_name}` : 'Unknown';
//   };

//   return (
//     <div className="table-container">
//   <div className="overflow-x-auto">
//     <h2 className="text-xl font-bold mb-4">All Leave Requests</h2>
//     {error && <p className="error-message">{error}</p>}
//     {leaveRequests.length === 0 ? (
//       <p className="no-leave-message">No leave requests found.</p>
//     ) : (
//       <table className="min-w-full bg-white shadow rounded">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="py-2 px-4 border">Employee</th>
//             <th className="py-2 px-4 border">From</th>
//             <th className="py-2 px-4 border">To</th>
//             <th className="py-2 px-4 border">Reason</th>
//             <th className="py-2 px-4 border">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveRequests.map((leave) => (
//             <tr key={leave.id} className="text-center">
//             <td className="py-2 px-4 border">
//               {getEmployeeFullName(leave.employee_id)}
//             </td>
//             <td className="py-2 px-4 border">{leave.start_date}</td>
//             <td className="py-2 px-4 border">{leave.end_date}</td>
//             <td className="py-2 px-4 border">{leave.reason}</td>
//             <td className={`py-2 px-4 border font-medium 
//               ${leave.leave_status?.toLowerCase() === 'approved' ? 'status-approved' : 
//                 leave.leave_status?.toLowerCase() === 'rejected' ? 'status-rejected' : 
//                 'status-pending'}`}>
//               {(leave.leave_status || 'pending').toLowerCase()}
//             </td>
//           </tr>
          
//           ))}
//         </tbody>
//       </table>
//     )}
//   </div>
// </div>

//   );
// };

// export default AllLeaveRequests;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllLeaveRequests.css';

const AllLeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  // Fetch all leave requests
  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/leave/all/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Sort leave requests by start_date (latest first)
        const sortedData = res.data.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
        setLeaveRequests(sortedData);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch leave requests.');
      }
    };

    fetchLeaveRequests();
  }, [token]);

  // Fetch all employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployees(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch employee data.');
      }
    };

    fetchEmployees();
  }, [token]);

  const getEmployeeFullName = (employeeId) => {
    const employee = employees.find((emp) => emp.id === employeeId);
    return employee ? `${employee.first_name} ${employee.last_name}` : 'Unknown';
  };

  return (
    <div className="table-container">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">All Leave Requests</h2>
        {error && <p className="error-message">{error}</p>}
        {leaveRequests.length === 0 ? (
          <p className="no-leave-message">No leave requests found.</p>
        ) : (
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Employee</th>
                <th className="py-2 px-4 border">From</th>
                <th className="py-2 px-4 border">To</th>
                <th className="py-2 px-4 border">Reason</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((leave) => (
                <tr key={leave.id} className="text-center">
                  <td className="py-2 px-4 border">
                    {getEmployeeFullName(leave.employee_id)}
                  </td>
                  <td className="py-2 px-4 border">{leave.start_date}</td>
                  <td className="py-2 px-4 border">{leave.end_date}</td>
                  <td className="py-2 px-4 border">{leave.reason}</td>
                  <td className={`py-2 px-4 border font-medium 
                    ${leave.leave_status?.toLowerCase() === 'approved' ? 'status-approved' : 
                      leave.leave_status?.toLowerCase() === 'rejected' ? 'status-rejected' : 
                      'status-pending'}`}>
                    {(leave.leave_status || 'pending').toLowerCase()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllLeaveRequests;
