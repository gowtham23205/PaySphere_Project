// // src/context/AuthContext.jsx
// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [role, setRole] = useState(localStorage.getItem("role"));
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const login = (newRole, newToken) => {
//     localStorage.setItem("role", newRole);
//     localStorage.setItem("token", newToken);
//     setRole(newRole);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem("role");
//     localStorage.removeItem("token");
//     setRole(null);
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ role, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
