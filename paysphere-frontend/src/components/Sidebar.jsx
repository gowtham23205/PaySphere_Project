
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const role = localStorage.getItem('role')?.toLowerCase();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const dashboardPath = role === 'hr' ? '/dashboard/hr' : '/dashboard/employee';

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Paysphere</h2>

      {/* Dashboard - Visible */}
      <NavLink to={dashboardPath} className="sidebar-link">Dashboard</NavLink>

      {/* Employee Management - Hover Expand */}
      {role === 'hr' && (
        <div className="sidebar-section hover-expand">
          <p className="sidebar-section-title">Employee Management</p>
          <div className="sidebar-submenu">
            <NavLink to="/employees" className="sidebar-link">View Employee List</NavLink>
            <NavLink to="/employees/new" className="sidebar-link">Register Employee</NavLink>
          </div>
        </div>
      )}

      {/* Leave Management - Hover Expand */}
      <div className="sidebar-section hover-expand">
        <p className="sidebar-section-title">Leave Management</p>
        <div className="sidebar-submenu">
          {role === 'hr' ? (
            <>
              <NavLink to="/leaves/pending" className="sidebar-link">Pending Leaves</NavLink>
              <NavLink to="/leaves" className="sidebar-link">All Leave Requests</NavLink>
              <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/apply-leave" className="sidebar-link">Apply Leave</NavLink>
              <NavLink to="/leave-history" className="sidebar-link">Leave History</NavLink>
            </>
          )}
        </div>
      </div>

      {/* Salary - Hover Expand */}
      <div className="sidebar-section hover-expand">
        <p className="sidebar-section-title">Salary</p>
        <div className="sidebar-submenu">
          <NavLink to="/salary-details" className="sidebar-link">Salary Details</NavLink>
          <NavLink to="/salary-history" className="sidebar-link">Salary History</NavLink>
          {role === 'hr' && (
      <NavLink to="/all-employee-salaries" className="sidebar-link">All Empl Salary Details</NavLink>
    )}
        </div>
      </div>

      {/* Profile and Logout - No heading */}
      <NavLink to="/profile" className="sidebar-link">Profile</NavLink>
      <button onClick={handleLogout} className="sidebar-link logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
