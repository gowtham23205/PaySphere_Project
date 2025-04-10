
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
