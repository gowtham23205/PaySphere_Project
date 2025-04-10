
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
