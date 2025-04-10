// // import { render, screen } from '@testing-library/react';
// // import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// test("renders login page if no token", () => {
//   localStorage.removeItem("token"); // Ensure no token exists
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const loginElement = screen.getByText(/Login/i);
//   expect(loginElement).toBeInTheDocument();
// });

// test("redirects HR to HR dashboard if logged in", () => {
//   localStorage.setItem("token", "dummy-token");
//   localStorage.setItem("role", "HR");

//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );

//   const dashboardElement = screen.getByText(/HR Dashboard/i);
//   expect(dashboardElement).toBeInTheDocument();
// });

// test("redirects Employee to Employee dashboard if logged in", () => {
//   localStorage.setItem("token", "dummy-token");
//   localStorage.setItem("role", "Employee");

//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );

//   const dashboardElement = screen.getByText(/Employee Dashboard/i);
//   expect(dashboardElement).toBeInTheDocument();
// });
