// // import React from "react";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("/api/login/", { email, password });
  
// //       if (response.data.token) {
// //         localStorage.setItem("token", response.data.token);
// //         navigate("/dashboard");
// //       } else {
// //         setError("Invalid credentials");
// //       }
// //     } catch (err) {
// //       setError("Invalid credentials or server error");
// //     }
// //   };
  
// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // // export default Login;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "../../App.css";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/api/login/", { email, password });

// //       localStorage.setItem("token", response.data.token);
// //       localStorage.setItem("role", response.data.role); // Store user role
// //       localStorage.setItem("userId", response.data.id); // Store user ID

// //       // Redirect based on role
// //       if (response.data.role === "HR") {
// //         navigate("/dashboard"); // HR Dashboard
// //       } else {
// //         navigate("/dashboard"); // Employee Dashboard
// //       }
// //     } catch (error) {
// //       setError(error.response?.data?.error || "Invalid credentials");
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = ({ setToken, setRole }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await axios.post("http://localhost:8000/api/login/", { email, password });
// //       const { token, role } = response.data;

// //       localStorage.setItem("token", token);
// //       localStorage.setItem("role", role);  // Ensure role is saved properly
// //       setToken(token);
// //       setRole(role);

// //       if (role === "HR") {
// //         navigate("/dashboard/hr");
// //       } else if (role === "Employee") {
// //         navigate("/dashboard/employee");
// //       } else {
// //         navigate("/login");
// //       }
// //     } catch (err) {
// //       setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   // ✅ Redirect if already logged in
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const role = localStorage.getItem("role");

// //     if (token && role) {
// //       if (role === "HR") {
// //         navigate("/dashboard/hr");
// //       } else if (role === "Employee") {
// //         navigate("/dashboard/employee");
// //       }
// //     }
// //   }, [navigate]);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/api/login/", {
// //         email,
// //         password,
// //       });

// //       console.log("Login Response:", response.data); // ✅ Debug API response

// //       const { token, role } = response.data;

// //       if (!token || !role) {
// //         throw new Error("Invalid response from server");
// //       }

// //       localStorage.setItem("token", token);
// //       localStorage.setItem("role", role);

// //       if (role === "HR") {
// //         navigate("/dashboard/hr");
// //       } else if (role === "Employee") {
// //         navigate("/dashboard/employee");
// //       }
// //     } catch (error) {
// //       console.error("Login Error:", error.response ? error.response.data : error);
// //       setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;


// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "./Login.css";


// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   // ✅ Redirect if already logged in
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const role = localStorage.getItem("role");
  
// //     if (token && role) {
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }
// //     }
// //   }, [navigate]);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/api/login/", {
// //         email,
// //         password,
// //       });

// //       console.log("Login Response:", response.data); // ✅ Debug API response

// //       const { token, role } = response.data;
// //       if (!token || !role) {
// //         throw new Error("Invalid response from server");
// //       }

// //       localStorage.setItem("token", token);
// //       localStorage.setItem("role", role.toLowerCase()); // ✅ Normalize role case

// //       // ✅ Redirect based on role
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }
// //     } catch (error) {
// //       console.error("Login Error:", error.response ? error.response.data : error);
// //       setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// // // import { useEffect, useCallback } from "react";
// // import React, { useState, useEffect,useCallback, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();
// //   const didRedirect = useRef(false); // ✅ Prevents infinite redirects

// //   const navigateUser = useCallback(() => {
// //     const token = localStorage.getItem("token");
// //     const role = localStorage.getItem("role");

// //     if (token && role) {
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }
// //     }
// //   }, [navigate]);

// //   useEffect(() => {
// //     navigateUser();
// //   }, [navigateUser]);

// //   // useEffect(() => {
// //   //   if (didRedirect.current) return; // ✅ Prevents multiple re-renders

// //   //   const token = localStorage.getItem("token");
// //   //   const role = localStorage.getItem("role");

// //   //   if (token && role) {
// //   //     didRedirect.current = true; // ✅ Avoids unnecessary re-renders
// //   //     if (role.toLowerCase() === "hr") {
// //   //       navigate("/dashboard/hr", { replace: true });
// //   //     } else if (role.toLowerCase() === "employee") {
// //   //       navigate("/dashboard/employee", { replace: true });
// //   //     }
// //   //   }
// //   // }, []);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/api/login/", {
// //         email,
// //         password,
// //       });

// //       console.log("Login Response:", response.data);
// //       const { token, role } = response.data;
// //       if (!token || !role) {
// //         throw new Error("Invalid response from server");
// //       }

// //       localStorage.setItem("token", token);
// //       localStorage.setItem("role", role.toLowerCase());

// //       didRedirect.current = true; // ✅ Ensures only one redirect
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }
// //     } catch (error) {
// //       console.error("Login Error:", error.response ? error.response.data : error);
// //       setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;


// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();
// //   const didRedirect = useRef(false); // ✅ Prevents infinite redirects

// //   useEffect(() => {
// //     if (didRedirect.current) return; // ✅ Prevents multiple re-renders

// //     const token = localStorage.getItem("token");
// //     const role = localStorage.getItem("role");

// //     if (token && role) {
// //       didRedirect.current = true; // ✅ Avoids unnecessary re-renders
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }
// //     }
// //   }, []); // ✅ Runs only once on mount

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/api/login/", {
// //         email,
// //         password,
// //       });

// //       console.log("Login Response:", response.data);
// //       const { token, role } = response.data;
// //       if (!token || !role) {
// //         throw new Error("Invalid response from server");
// //       }

// //       localStorage.setItem("token", token);
// //       localStorage.setItem("role", role.toLowerCase());

// //       didRedirect.current = true; // ✅ Ensures only one redirect
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }
// //     } catch (error) {
// //       console.error("Login Error:", error.response ? error.response.data : error);
// //       setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;


// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();
// //   const didRedirect = useRef(false);

// //   useEffect(() => {
// //     if (didRedirect.current) return;

// //     const token = localStorage.getItem("token");
// //     const role = localStorage.getItem("role");

// //     if (token && role) {
// //       didRedirect.current = true;
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }
// //     }
// //   }, [navigate]); // ✅ Fixes ESLint warning

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await axios.post("http://127.0.0.1:8000/api/login/", {
// //         email,
// //         password,
// //       });

// //       const { token, role } = response.data;
// //       if (!token || !role) {
// //         throw new Error("Invalid response from server");
// //       }

// //       localStorage.setItem("token", token);
// //       localStorage.setItem("role", role.toLowerCase());

// //       didRedirect.current = true;
// //       if (role.toLowerCase() === "hr") {
// //         navigate("/dashboard/hr", { replace: true });
// //       } else if (role.toLowerCase() === "employee") {
// //         navigate("/dashboard/employee", { replace: true });
// //       }

// //       // Optional: Reset form
// //       setEmail("");
// //       setPassword("");
// //     } catch (error) {
// //       console.error("Login Error:", error.response ? error.response.data : error);
// //       setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       {error && <p className="error">{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState, useEffect, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const didRedirect = useRef(false);
//   const { login, role } = useContext(AuthContext); // ✅ use auth context

//   useEffect(() => {
//     if (didRedirect.current || !role) return;

//     didRedirect.current = true;
//     if (role === "hr") {
//       navigate("/dashboard/hr", { replace: true });
//     } else if (role === "employee") {
//       navigate("/dashboard/employee", { replace: true });
//     }
//   }, [navigate, role]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/login/", {
//         email,
//         password,
//       });

//       const { token, role } = response.data;
//       if (!token || !role) {
//         throw new Error("Invalid response from server");
//       }

//       login(role.toLowerCase(), token); // ✅ updates context + localStorage

//       didRedirect.current = true;
//       if (role.toLowerCase() === "hr") {
//         navigate("/dashboard/hr", { replace: true });
//       } else if (role.toLowerCase() === "employee") {
//         navigate("/dashboard/employee", { replace: true });
//       }

//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       console.error("Login Error:", error.response ? error.response.data : error);
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8000/api/login/', {
//         email,
//         password,
//       });

//       const { token, role } = res.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);

//       // Redirect based on role
//       if (role === 'hr') {
//         navigate('/dashboard/hr');
//       } else {
//         navigate('/dashboard/employee');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:8000/api/login/', {
//         email,
//         password,
//       });

//       const { token, role } = res.data;
//       console.log('Role received:', role); // Debug check

//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);

//       // Redirect based on role
//       if (role.toLowerCase() === 'hr') {
//         navigate('/dashboard/hr');
//       } else {
//         navigate('/dashboard/employee');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit" disabled={loading}>
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </form>
//   );
// };

// export default Login;

/**
 * The `Login` component in JavaScript React handles user authentication by sending a POST request to a
 * server and redirecting based on the user's role.
 * @returns The `Login` component is being returned, which contains a form for user login
 * functionality. The form includes input fields for email and password, a submit button for logging
 * in, and an error message display area. The component also handles form submission, makes an API call
 * to authenticate the user, and redirects the user to different dashboards based on their role after
 * successful login.
 */

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:8000/api/login/', {
//         email,
//         password,
//       });

//       const { token, role } = res.data;
//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);

//       if (role.toLowerCase() === 'hr') {
//         navigate('/dashboard/hr');
//       } else {
//         navigate('/dashboard/employee');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2 className="login-title">Login</h2>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//           className="login-input"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//           className="login-input"
//         />
//         <button type="submit" disabled={loading} className="login-button">
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//         {error && <p className="login-error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:8000/api/login/', {
        email,
        password,
      });

      const { token, role, first_name, last_name } = res.data;

      // Save to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('first_name', first_name);
      localStorage.setItem('last_name', last_name);

      // Redirect based on role
      if (role.toLowerCase() === 'hr') {
        navigate('/dashboard/hr');
      } else {
        navigate('/dashboard/employee');
      }
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="login-input"
        />
        <button type="submit" disabled={loading} className="login-button">
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
