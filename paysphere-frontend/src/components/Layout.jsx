
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  );
};

export default Layout;
