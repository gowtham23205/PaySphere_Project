

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
