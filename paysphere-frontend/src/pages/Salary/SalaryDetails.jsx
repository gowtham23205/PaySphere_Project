// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SalaryDetails = () => {
//     const [salary, setSalary] = useState(null);
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         const fetchSalary = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const response = await axios.get("http://127.0.0.1:8000/api/employee/salary/", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setSalary(response.data);
//             } catch (error) {
//                 console.error("Error fetching salary details", error);
//                 setMessage("Failed to fetch salary details.");
//             }
//         };
//         fetchSalary();
//     }, []);

//     return (
//         <div>
//             <h2>Salary Details</h2>
//             {message && <p>{message}</p>}
//             {salary ? (
//                 <div>
//                     <p><strong>Basic Salary:</strong> ${salary.basic}</p>
//                     <p><strong>Allowances:</strong> ${salary.allowances}</p>
//                     <p><strong>Deductions:</strong> ${salary.deductions}</p>
//                     <p><strong>Net Salary:</strong> ${salary.net_salary}</p>
//                 </div>
//             ) : (
//                 <p>Loading salary details...</p>
//             )}
//         </div>
//     );
// };

// export default SalaryDetails;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SalaryDetails.css';  // Import the CSS file

const SalaryDetails = () => {
  const [salaryDetails, setSalaryDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // For loading state
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('Please log in to view salary details.');
      setLoading(false);
      return;
    }

    // Fetch salary details when the component is mounted
    const fetchSalaryDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/salary/current_salary_details/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          // Assuming the response structure matches your example
          setSalaryDetails(response.data);
        } else {
          setError('Unexpected response from the server.');
        }
      } catch (err) {
        console.error('Error fetching salary details:', err);
        if (err.response && err.response.status === 401) {
          setError('Unauthorized access. Please log in again.');
        } else {
          setError('Failed to fetch salary details. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSalaryDetails();
  }, [token]);

  return (
    <div className="salary-details">
      <h2>Salary Details</h2>
      {loading && <p>Loading salary details...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {salaryDetails && !loading && !error && (
        <div className="salary-info">
          <p><strong>Employee ID:</strong> {salaryDetails.employee}</p>
          <p><strong>Basic Salary:</strong> ₹{salaryDetails.basic_salary}</p>
          <p><strong>Allowances:</strong> ₹{salaryDetails.allowances}</p>
          <p><strong>Deductions:</strong> ₹{salaryDetails.deductions}</p>
          <p><strong>Net Salary:</strong> ₹{salaryDetails.net_salary}</p>
          <p><strong>Salary Status:</strong> {salaryDetails.salary_status}</p>
          <p><strong>Created At:</strong> {new Date(salaryDetails.created_at).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default SalaryDetails;
