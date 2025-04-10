// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PendingRequests = () => {
//     const [pendingLeaves, setPendingLeaves] = useState([]);

//     useEffect(() => {
//         const fetchPendingLeaves = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const response = await axios.get("http://127.0.0.1:8000/api/leave/pending/", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setPendingLeaves(response.data);
//             } catch (error) {
//                 console.error("Error fetching pending leaves", error);
//             }
//         };
//         fetchPendingLeaves();
//     }, []);

//     const handleAction = async (leaveId, action) => {
//         try {
//             const token = localStorage.getItem("token");
//             await axios.post(`http://127.0.0.1:8000/api/leave/approval/${leaveId}/`, { action }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setPendingLeaves(pendingLeaves.filter((leave) => leave.id !== leaveId));
//         } catch (error) {
//             console.error("Error processing leave request", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Pending Leave Requests</h2>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Employee</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>Reason</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {pendingLeaves.map((leave) => (
//                         <tr key={leave.id}>
//                             <td>{leave.employee_name}</td>
//                             <td>{leave.start_date}</td>
//                             <td>{leave.end_date}</td>
//                             <td>{leave.reason}</td>
//                             <td>
//                                 <button onClick={() => handleAction(leave.id, "approve")}>Approve</button>
//                                 <button onClick={() => handleAction(leave.id, "reject")}>Reject</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PendingRequests;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PendingRequests = () => {
//   const [pendingLeaves, setPendingLeaves] = useState([]);
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchPendingLeaves = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/leave/pending/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         setPendingLeaves(response.data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch pending leave requests. Please try again later.');
//       }
//     };

//     fetchPendingLeaves();
//   }, [token]);

//   const handleApprove = async (leaveId) => {
//     try {
//       await axios.patch(
//         `http://localhost:8000/api/leave/approve/${leaveId}/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setPendingLeaves((prevState) =>
//         prevState.filter((leave) => leave.id !== leaveId)
//       );
//     } catch (err) {
//       console.error(err);
//       setError('Error approving leave request.');
//     }
//   };

//   const handleReject = async (leaveId) => {
//     try {
//       await axios.patch(
//         `http://localhost:8000/api/leave/reject/${leaveId}/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setPendingLeaves((prevState) =>
//         prevState.filter((leave) => leave.id !== leaveId)
//       );
//     } catch (err) {
//       console.error(err);
//       setError('Error rejecting leave request.');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold mb-4">Pending Leave Requests</h2>
//       {error && <p className="text-red-500">{error}</p>}

//       {pendingLeaves.length === 0 ? (
//         <p>No pending leave requests.</p>
//       ) : (
//         <table className="table-auto w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="border-b px-4 py-2">Employee Name</th>
//               <th className="border-b px-4 py-2">Leave Type</th>
//               <th className="border-b px-4 py-2">Start Date</th>
//               <th className="border-b px-4 py-2">End Date</th>
//               <th className="border-b px-4 py-2">Status</th>
//               <th className="border-b px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pendingLeaves.map((leave, index) => (
//               <tr key={index}>
//                 <td className="border-b px-4 py-2">{leave.employee_name}</td>
//                 <td className="border-b px-4 py-2">{leave.leave_type}</td>
//                 <td className="border-b px-4 py-2">{leave.start_date}</td>
//                 <td className="border-b px-4 py-2">{leave.end_date}</td>
//                 <td className="border-b px-4 py-2">{leave.status}</td>
//                 <td className="border-b px-4 py-2">
//                   <button
//                     onClick={() => handleApprove(leave.id)}
//                     className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => handleReject(leave.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Reject
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default PendingRequests;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PendingRequests = () => {
  const [pendingLeaves, setPendingLeaves] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  // Fetch pending leaves
  useEffect(() => {
    const fetchPendingLeaves = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/leave/pending/', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        setPendingLeaves(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch pending leave requests. Please try again later.');
      }
    };

    fetchPendingLeaves();
  }, [token]);

  // Fetch employee details based on employee_id
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployees(response.data); // Assuming response contains a list of employees
      } catch (err) {
        console.error(err);
        setError('Failed to fetch employee data.');
      }
    };

    fetchEmployees();
  }, [token]);

  // Function to get employee first name based on employee_id
  const getEmployeeFirstName = (employeeId) => {
    const employee = employees.find((emp) => emp.id === employeeId);
    return employee ? `${employee.first_name} ${employee.last_name}` : 'Unknown';
  };

  // Handle Approve action
  const handleApprove = async (leaveId) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/leave/approval/${leaveId}/`,
        { leave_status: 'Approved' }, // Approving the leave request
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setPendingLeaves((prevState) =>
        prevState.filter((leave) => leave.id !== leaveId)
      );
    } catch (err) {
      console.error(err);
      setError('Error approving leave request.');
    }
  };

  // Handle Reject action
  const handleReject = async (leaveId) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/leave/approval/${leaveId}/`,
        { leave_status: 'Rejected' }, // Rejecting the leave request
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setPendingLeaves((prevState) =>
        prevState.filter((leave) => leave.id !== leaveId)
      );
    } catch (err) {
      console.error(err);
      setError('Error rejecting leave request.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Pending Leave Requests</h2>
      {error && <p className="text-red-500">{error}</p>}

      {pendingLeaves.length === 0 ? (
        <p>No pending leave requests.</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Employee Name</th>
              <th className="border-b px-4 py-2">Leave Type</th>
              <th className="border-b px-4 py-2">Start Date</th>
              <th className="border-b px-4 py-2">End Date</th>
              <th className="border-b px-4 py-2">Status</th>
              <th className="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingLeaves.map((leave) => (
              <tr key={leave.id}>
                <td className="border-b px-4 py-2">
                  {getEmployeeFirstName(leave.employee_id)}
                </td>
                <td className="border-b px-4 py-2">{leave.leave_type}</td>
                <td className="border-b px-4 py-2">{leave.start_date}</td>
                <td className="border-b px-4 py-2">{leave.end_date}</td>
                <td className="border-b px-4 py-2">{leave.status}</td>
                <td className="border-b px-4 py-2">
                  <button
                    onClick={() => handleApprove(leave.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(leave.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingRequests;
