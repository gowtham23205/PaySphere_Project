import React from 'react';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default DashboardLayout;
