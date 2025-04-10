
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
