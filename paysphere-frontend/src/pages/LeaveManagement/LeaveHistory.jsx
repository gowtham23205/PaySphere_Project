

import './LeaveHistory.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeaveHistory = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch leave history when the component is mounted
    const fetchLeaveHistory = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/leave/all/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (response.status === 200) {
            setLeaveHistory(response.data);
          } else {
            console.error('Unexpected response status:', response.status);
            setError('Unexpected error occurred. Please try again later.');
          }
        } catch (err) {
          console.error('Error fetching leave history:', err);
          if (err.response) {
            console.error('Response error:', err.response);
          } else if (err.request) {
            console.error('Request error:', err.request);
          } else {
            console.error('Unknown error:', err.message);
          }
          setError('Failed to fetch leave history. Please try again later.');
        }
      };
      

    fetchLeaveHistory();
  }, [token]);

  return (
    <div className="leave-history">
      <h2>Leave History</h2>
      {error && <p className="text-red-500">{error}</p>}
      {leaveHistory.length === 0 ? (
        <p>No leave history available.</p>
      ) : (
        <table className="leave-history-table">
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.leave_type}</td>
                <td>{new Date(leave.start_date).toLocaleDateString()}</td>
                <td>{new Date(leave.end_date).toLocaleDateString()}</td>
                <td>{leave.reason || 'N/A'}</td>
                <td>{leave.leave_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveHistory;
