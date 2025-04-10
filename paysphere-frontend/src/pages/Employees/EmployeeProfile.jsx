// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";

// // // const EmployeeProfile = () => {
// // //   const { id } = useParams();
// // //   const [employee, setEmployee] = useState(null);

// // //   useEffect(() => {
// // //     const fetchEmployeeDetails = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const response = await axios.get(`http://127.0.0.1:8000/api/employees/${id}/`, {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         setEmployee(response.data);
// // //       } catch (error) {
// // //         console.error("Error fetching employee details", error);
// // //       }
// // //     };

// // //     fetchEmployeeDetails();
// // //   }, [id]);

// // //   if (!employee) {
// // //     return <p>Loading employee details...</p>;
// // //   }

// // //   return (
// // //     <div className="employee-profile">
// // //       <h2>Employee Profile</h2>
// // //       <p><strong>Name:</strong> {employee.name}</p>
// // //       <p><strong>Email:</strong> {employee.email}</p>
// // //       <p><strong>Role:</strong> {employee.role}</p>
// // //       <p><strong>Salary:</strong> ${employee.salary}</p>
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeProfile;

// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';

// // // const EmployeeProfile = () => {
// // //   const { id } = useParams();
// // //   const token = localStorage.getItem('token');
// // //   const headers = { Authorization: `Bearer ${token}` };

// // //   const [employee, setEmployee] = useState(null);
// // //   const [salary, setSalary] = useState([]);
// // //   const [leaves, setLeaves] = useState([]);

// // //   useEffect(() => {
// // //     // Fetch Personal Info
// // //     axios.get(`http://localhost:8000/api/users/${id}/`, { headers })
// // //       .then(res => setEmployee(res.data))
// // //       .catch(err => console.error('Employee fetch error:', err));

// // //     // Fetch Salary Info
// // //     axios.get(`http://localhost:8000/api/salary/get_employee_salary_history/${id}/`, { headers })
// // //       .then(res => setSalary(res.data))
// // //       .catch(err => console.error('Salary fetch error:', err));

// // //     // Fetch Leave Info
// // //     axios.get(`http://localhost:8000/api/leave/employee/${id}/`, { headers })
// // //       .then(res => setLeaves(res.data))
// // //       .catch(err => console.error('Leave fetch error:', err));
// // //   }, [id]);

// // //   if (!employee) return <p>Loading employee profile...</p>;

// // //   return (
// // //     <div>
// // //       <h2>Employee Profile</h2>

// // //       <h3>👤 Personal Details</h3>
// // //       <p><strong>Name:</strong> {employee.first_name} {employee.last_name}</p>
// // //       <p><strong>Email:</strong> {employee.email}</p>
// // //       <p><strong>Status:</strong> {employee.is_active ? 'Active' : 'Inactive'}</p>

// // //       <h3>💰 Salary History</h3>
// // //       {salary.length === 0 ? (
// // //         <p>No salary records found.</p>
// // //       ) : (
// // //         <ul>
// // //           {salary.map((s, index) => (
// // //             <li key={index}>
// // //               {s.month} - ₹{s.amount}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}

// // //       <h3>🛫 Leave Records</h3>
// // //       {leaves.length === 0 ? (
// // //         <p>No leave records found.</p>
// // //       ) : (
// // //         <ul>
// // //           {leaves.map((l, index) => (
// // //             <li key={index}>
// // //               {l.start_date} to {l.end_date} - {l.status}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeProfile;

// // // import './EmployeeProfile.css';
// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';

// // // const EmployeeProfile = () => {
// // //   const { id } = useParams();
// // //   const [employee, setEmployee] = useState(null);
// // //   const [salary, setSalary] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     const token = localStorage.getItem('token');
// // //     const headers = { Authorization: `Bearer ${token}` };

// // //     const fetchAll = async () => {
// // //       try {
// // //         const [empRes, salaryRes] = await Promise.all([
// // //           axios.get(`http://localhost:8000/api/users/${id}/`, { headers }),
// // //           // axios.get(`http://localhost:8000/api/salary/employee_salary_history/${id}/`, { headers }),
// // //           axios.get(`http://localhost:8000/api/salary/employee_salary_history/?user_id=${id}`, { headers }),

// // //         ]);

// // //         setEmployee(empRes.data);
// // //         setSalary(salaryRes.data);
// // //       } catch (err) {
// // //         console.error('Error fetching profile data:', err);
// // //         setError('Something went wrong while fetching data.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchAll();
// // //   }, [id]);

// // //   if (loading) return <p>Loading employee profile...</p>;
// // //   if (error) return <p style={{ color: 'red' }}>{error}</p>;
// // //   if (!employee) return <p>No employee found.</p>;

// // //   return (
// // //     <div style={{ padding: '1rem' }}>
// // //       <h2>Employee Profile</h2>

// // //       <h3>👤 Personal Details</h3>
// // //       <p><strong>Name:</strong> {employee.first_name} {employee.last_name}</p>
// // //       <p><strong>Email:</strong> {employee.email}</p>
// // //       <p><strong>Status:</strong> {employee.is_active ? 'Active' : 'Inactive'}</p>

// // //       <h3>💰 Salary History</h3>
// // // {salary.length === 0 ? (
// // //   <p>No salary records found.</p>
// // // ) : (
// // //   <ul>
// // //     {salary.map((s, index) => (
// // //       <li key={index}>
// // //         {new Date(s.created_at).toLocaleDateString()} – 
// // //         ₹{s.net_salary} (Basic: ₹{s.basic_salary}, Allowance: ₹{s.allowances}, Deduction: ₹{s.deductions}, Status: {s.salary_status})
// // //       </li>
// // //     ))}
// // //   </ul>
// // // )}


// // //     </div>
// // //   );
// // // };

// // // export default EmployeeProfile;


// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';
// // // import './EmployeeProfile.css'; // ✅ CSS import

// // // const EmployeeProfile = () => {
// // //   const { id } = useParams();
// // //   const [employee, setEmployee] = useState(null);
// // //   const [salary, setSalary] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     const token = localStorage.getItem('token');
// // //     const headers = { Authorization: `Bearer ${token}` };

// // //     const fetchAll = async () => {
// // //       try {
// // //         const [empRes, salaryRes] = await Promise.all([
// // //           axios.get(`http://localhost:8000/api/users/${id}/`, { headers }),
// // //           axios.get(`http://localhost:8000/api/salary/employee_salary_history/?user_id=${id}`, { headers }),
// // //         ]);

// // //         setEmployee(empRes.data);
// // //         setSalary(salaryRes.data);
// // //       } catch (err) {
// // //         console.error('Error fetching profile data:', err);
// // //         setError('Something went wrong while fetching data.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchAll();
// // //   }, [id]);

// // //   if (loading) return <p className="loading-text">Loading employee profile...</p>;
// // //   if (error) return <p className="error-text">{error}</p>;
// // //   if (!employee) return <p>No employee found.</p>;

// // //   return (
// // //     <div className="profile-container">
// // //       <h2>Employee Profile</h2>

// // //       <h3>👤 Personal Details</h3>
// // //       <p><strong>Name:</strong> {employee.first_name} {employee.last_name}</p>
// // //       <p><strong>Email:</strong> {employee.email}</p>
// // //       <p>
// // //         <strong>Status:</strong>{' '}
// // //         <span className={employee.is_active ? 'status-active' : 'status-inactive'}>
// // //           {employee.is_active ? 'Active' : 'Inactive'}
// // //         </span>
// // //       </p>

// // //       <h3>💰 Salary History</h3>
// // //       {salary.length === 0 ? (
// // //         <p>No salary records found.</p>
// // //       ) : (
// // //         <ul>
// // //           {salary.map((s, index) => (
// // //             <li key={index}>
// // //               {new Date(s.created_at).toLocaleDateString()} – ₹{s.net_salary}<br />
// // //               (Basic: ₹{s.basic_salary}, Allowance: ₹{s.allowances}, Deduction: ₹{s.deductions}, Status: {s.salary_status})
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeProfile;


// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import './EmployeeProfile.css'; // ✅ CSS import

// // const EmployeeProfile = () => {
// //   const { id } = useParams();
// //   const [employee, setEmployee] = useState(null);
// //   const [salary, setSalary] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     const headers = { Authorization: `Bearer ${token}` };
  
// //     const fetchAll = async () => {
// //       try {
// //         const [empRes, salaryRes] = await Promise.all([
// //           axios.get(`http://localhost:8000/api/users/${id}/`, { headers }),
// //           axios.get(`http://localhost:8000/api/salary/employee_salary_history/?user_id=${id}`, { headers }),
// //         ]);
  
// //         setEmployee(empRes.data);
// //         setSalary(salaryRes.data.filter((s) => s.user === parseInt(id))); // ✅ Filter salary by user id
// //       } catch (err) {
// //         console.error('Error fetching profile data:', err);
// //         setError('Something went wrong while fetching data.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
  
// //     fetchAll();
// //   }, [id]);
  

// //   if (loading) return <p className="loading-text">Loading employee profile...</p>;
// //   if (error) return <p className="error-text">{error}</p>;
// //   if (!employee) return <p>No employee found.</p>;

// //   return (
// //     <div className="profile-container">
// //       <h2>Employee Profile</h2>

// //       <h3>👤 Personal Details</h3>
// //       {employee.profile_pic && (
// //         <img src={employee.profile_pic} alt="Profile" className="profile-pic" />
// //       )}
// //       <p><strong>First Name:</strong> {employee.first_name}</p>
// //       <p><strong>Last Name:</strong> {employee.last_name}</p>
// //       <p><strong>Email:</strong> {employee.email}</p>
// //       <p><strong>Phone Number:</strong> {employee.phone_no || 'N/A'}</p>
// //       <p><strong>Date of Birth:</strong> {employee.dob || 'N/A'}</p>
// //       <p><strong>Gender:</strong> {employee.gender || 'N/A'}</p>
// //       <p><strong>Address:</strong> {employee.address || 'N/A'}</p>
// //       <p><strong>Department:</strong> {employee.department || 'N/A'}</p>
// //       <p><strong>Designation:</strong> {employee.designation || 'N/A'}</p>
// //       <p><strong>Role:</strong> {employee.role}</p>
// //       <p>
// //         <strong>Status:</strong>{' '}
// //         <span className={employee.is_active ? 'status-active' : 'status-inactive'}>
// //           {employee.is_active ? 'Active' : 'Inactive'}
// //         </span>
// //       </p>

// //       <h3>💰 Salary History</h3>
// //       {salary.length === 0 ? (
// //         <p>No salary records found.</p>
// //       ) : (
// //         <ul>
// //           {salary.map((s, index) => (
// //             <li key={index}>
// //               {new Date(s.created_at).toLocaleDateString()} – ₹{s.net_salary}<br />
// //               (Basic: ₹{s.basic_salary}, Allowance: ₹{s.allowances}, Deduction: ₹{s.deductions}, Status: {s.salary_status})
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default EmployeeProfile;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './EmployeeProfile.css'; // ✅ CSS import

// const EmployeeProfile = () => {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}` };

//     const fetchEmployee = async () => {
//       try {
//         const empRes = await axios.get(`http://localhost:8000/api/users/${id}/`, { headers });
//         setEmployee(empRes.data);
//       } catch (err) {
//         console.error('Error fetching profile data:', err);
//         setError('Something went wrong while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   if (loading) return <p className="loading-text">Loading employee profile...</p>;
//   if (error) return <p className="error-text">{error}</p>;
//   if (!employee) return <p>No employee found.</p>;

//   return (
//     <div className="profile-container">
//       <h2>Employee Profile</h2>

//       <h3>👤 Personal Details</h3>
//       {employee.profile_pic && (
//         <img src={employee.profile_pic} alt="Profile" className="profile-pic" />
//       )}
//       <p><strong>First Name:</strong> {employee.first_name}</p>
//       <p><strong>Last Name:</strong> {employee.last_name}</p>
//       <p><strong>Email:</strong> {employee.email}</p>
//       <p><strong>Phone Number:</strong> {employee.phone_no || 'N/A'}</p>
//       <p><strong>Date of Birth:</strong> {employee.dob || 'N/A'}</p>
//       <p><strong>Gender:</strong> {employee.gender || 'N/A'}</p>
//       <p><strong>Address:</strong> {employee.address || 'N/A'}</p>
//       <p><strong>Department:</strong> {employee.department || 'N/A'}</p>
//       <p><strong>Designation:</strong> {employee.designation || 'N/A'}</p>
//       <p><strong>Role:</strong> {employee.role}</p>
//       <p>
//         <strong>Status:</strong>{' '}
//         <span className={employee.is_active ? 'status-active' : 'status-inactive'}>
//           {employee.is_active ? 'Active' : 'Inactive'}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default EmployeeProfile;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EmployeeProfile.css';

const EmployeeProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    const fetchEmployee = async () => {
      try {
        const empRes = await axios.get(`http://localhost:8000/api/users/${id}/`, { headers });
        setEmployee(empRes.data);
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setError('Something went wrong while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) return <p className="loading-text">Loading employee profile...</p>;
  if (error) return <p className="error-text">{error}</p>;
  if (!employee) return <p>No employee found.</p>;

  return (
    <div className="profile-container">
      <h2>Employee Profile</h2>

      <h3>👤 Personal Details</h3>
      <p><strong>Employee ID:</strong> {employee.id}</p>
      {employee.profile_pic && (
        <img src={employee.profile_pic} alt="Profile" className="profile-pic" />
      )}
      <p><strong>First Name:</strong> {employee.first_name}</p>
      <p><strong>Last Name:</strong> {employee.last_name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone Number:</strong> {employee.phone_no || 'N/A'}</p>
      <p><strong>Date of Birth:</strong> {employee.dob || 'N/A'}</p>
      <p><strong>Gender:</strong> {employee.gender || 'N/A'}</p>
      <p><strong>Address:</strong> {employee.address || 'N/A'}</p>
      <p><strong>Department:</strong> {employee.department || 'N/A'}</p>
      <p><strong>Designation:</strong> {employee.designation || 'N/A'}</p>
      <p><strong>Role:</strong> {employee.role}</p>
      <p>
        <strong>Status:</strong>{' '}
        <span className={employee.is_active ? 'status-active' : 'status-inactive'}>
          {employee.is_active ? 'Active' : 'Inactive'}
        </span>
      </p>
    </div>
  );
};

export default EmployeeProfile;
