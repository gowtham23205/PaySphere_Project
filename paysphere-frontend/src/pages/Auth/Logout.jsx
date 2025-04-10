// // // import React from "react";
// // // import { useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const Logout = () => {
// // //   const navigate = useNavigate();
// // //   useEffect(() => {
// // //     localStorage.removeItem("token");
// // //     navigate("/");
// // //   }, [navigate]);

// // //   return <p>Logging out...</p>;
// // // };

// // // export default Logout;

// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../../App.css";

// // const Logout = () => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("role"); // Remove role
// //     localStorage.removeItem("userId"); // Remove user ID
// //     navigate("/");
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2>Are you sure you want to logout?</h2>
// //       <button onClick={handleLogout}>Logout</button>
// //     </div>
// //   );
// // };

// // export default Logout;


// // import React, { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Logout = () => {
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("role");
// //     navigate("/");
// //   }, [navigate]);

// //   return <p>Logging out...</p>;
// // };

// // export default Logout;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     localStorage.clear();
//     navigate("/");
//     window.location.reload(); // optional: force refresh
//   }, [navigate]);

//   return <p>Logging out...</p>;
// };

// export default Logout;
