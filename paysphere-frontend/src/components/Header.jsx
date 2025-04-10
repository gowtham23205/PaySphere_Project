// import { Link } from "react-router-dom";
// import "./Layout.css";

// const Header = () => {
//   return (
//     <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
//       <h1 className="text-lg font-bold">Paysphere</h1>
//       <Link to="/logout" className="bg-red-500 px-3 py-1 rounded">Logout</Link>
//     </header>
//   );
// };

// export default Header;
// import React from 'react';
// import './Header.css'; // ✅ This file must exist in the same folder

// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const navigate = useNavigate();
//   const user = localStorage.getItem('user') || 'User';

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   return (
//     <header className="header">
//       <div className="logo">Paysphere</div>
//       <div className="right-section">
//         <span className="welcome">Welcome, {user}</span>
//         <button className="logout-button" onClick={handleLogout}>Logout</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [setUserName] = useState('User');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      setUserName(storedUser);
    }
  }, );

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">Paysphere</div>
      <div className="right-section">
        <span className="welcome"><b>Welcome</b> </span>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
