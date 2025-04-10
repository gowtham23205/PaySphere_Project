// // import React from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ element, allowedRoles }) => {
// //     const role = localStorage.getItem("role");

// //     if (!role || !allowedRoles.includes(role)) {
// //         return <Navigate to="/" replace />;
// //     }

// //     return element;
// // };

// // export default ProtectedRoute;

// // import React, { useMemo } from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ element, allowedRoles }) => {
// //     const role = localStorage.getItem("role");

// //     const content = useMemo(() => {
// //         if (!role || !allowedRoles.includes(role)) {
// //             return <Navigate to="/" replace />;
// //         }
// //         return element;
// //     }, [role, allowedRoles, element]); // ✅ Prevents unnecessary re-renders

// //     return content;
// // };

// // export default React.memo(ProtectedRoute);


// // import React from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ element, allowedRoles }) => {
// //     const role = localStorage.getItem("role");

// //     if (!role || !allowedRoles.includes(role)) {
// //         return <Navigate to="/" replace />;
// //     }

// //     return element;
// // };

// // export default React.memo(ProtectedRoute);


// // import React from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ element, allowedRoles }) => {
// //   const role = localStorage.getItem("role");

// //   if (!role || !allowedRoles.includes(role)) {
// //     return <Navigate to="/" replace />;
// //   }

// //   return element;
// // };

// // export default ProtectedRoute;


// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ element, allowedRoles }) => {
// //   const [role, setRole] = useState(null);

// //   useEffect(() => {
// //     const storedRole = localStorage.getItem("role");
// //     setRole(storedRole);
// //   }, []);

// //   if (!role) {
// //     return null; // ✅ Prevents unnecessary re-renders
// //   }

// //   if (!allowedRoles.includes(role)) {
// //     return <Navigate to="/" replace />;
// //   }

// //   return element;
// // };

// // export default ProtectedRoute;


// // import React, { useState, useEffect } from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ element, allowedRoles }) => {
// //   const [role, setRole] = useState(() => localStorage.getItem("role")); // ✅ Get it directly once

// //   // Optional: Re-check localStorage in effect (edge case)
// //   useEffect(() => {
// //     const storedRole = localStorage.getItem("role");
// //     if (storedRole !== role) {
// //       setRole(storedRole);
// //     }
// //   }, []);

// //   if (role === null) {
// //     return null; // Still mounting / fetching role
// //   }

// //   if (!allowedRoles.includes(role)) {
// //     return <Navigate to="/" replace />;
// //   }

// //   return element;
// // };

// // export default ProtectedRoute;

// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element, allowedRoles }) => {
//   const [role, setRole] = useState(null);
//   const [isLoading, setIsLoading] = useState(true); // 👈 to handle loading state

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");

//     if (storedRole) {
//       setRole(storedRole);
//     }

//     setIsLoading(false); // ✅ end loading after checking
//   }, []);

//   if (isLoading) return null; // or show spinner

//   // If role is not allowed
//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/" replace />;
//   }

//   return element;
// };

// export default ProtectedRoute;
