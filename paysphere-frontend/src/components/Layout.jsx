// // // // src/components/Layout.jsx
// // // import React from "react";
// // // import Header from "./Header";
// // // import Sidebar from "./Sidebar";

// // // const Layout = ({ children }) => {
// // //   return (
// // //     <>
// // //       <Header />
// // //       <div style={{ display: "flex" }}>
// // //         <Sidebar />
// // //         <div style={{ flexGrow: 1, padding: "20px" }}>{children}</div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Layout;

// // import { Outlet } from "react-router-dom";

// // const Layout = () => {
// //   return (
// //     <div>
// //       {/* Header / Sidebar / etc */}
// //       <Outlet /> {/* VERY IMPORTANT */}
// //     </div>
// //   );
// // };

// // export default Layout;
// // src/components/Layout.jsx
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// const Layout = () => {
//   console.log("✅ Layout is rendering");
//   return (
//     <>
//       <Header />
//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         <div style={{ flexGrow: 1, padding: "20px" }}>
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;

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
