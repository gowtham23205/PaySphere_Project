// import React, { useState } from "react";
// import axios from "axios";

// const CreateEmployee = () => {
//     const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "Employee",
//     salary: "",
//     });

//     const [message, setMessage] = useState("");

//     const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const token = localStorage.getItem("token");
    
//         await axios.post(
//             "http://127.0.0.1:8000/api/users/", // Ensure correct endpoint
//             formData, 
//             {
//                 headers: { Authorization: `Bearer ${token}` }
//             }
//         );
    
//         setMessage("Employee created successfully!");
//         setFormData({ name: "", email: "", role: "Employee", salary: "" });
//     } catch (error) {
//         if (error.response) {
//             console.error("Server Error:", error.response.data);
//             setMessage(`Error: ${error.response.data.detail || "Failed to create employee."}`);
//         } else {
//             console.error("Request Error:", error.message);
//             setMessage("Network error. Please try again.");
//         }
//     }
    
//     };

//     return (
//     <div className="create-employee">
//         <h2>Create Employee</h2>
//         {message && <p>{message}</p>}
//         <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//         <select name="role" value={formData.role} onChange={handleChange}>
//             <option value="Employee">Employee</option>
//             <option value="HR">HR</option>
//         </select>
//         <input type="number" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" required />
//         <button type="submit">Create</button>
//         </form>
//     </div>
//     );
// };

// export default CreateEmployee;import './CreateEmployee.css';
// import './CreateEmployee.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     password: '',
//     role: 'employee',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       await axios.post('http://localhost:8000/api/register/', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       setSuccess('Employee registered successfully!');
//       setFormData({
//         first_name: '',
//         last_name: '',
//         email: '',
//         password: '',
//         role: 'employee',
//       });
//       setTimeout(() => navigate('/employees'), 1000);
//     } catch (err) {
//       console.error("Full error:", err);
//       console.error("Error response:", err.response);
    
//       setError(
//         err.response?.data?.detail ||
//         err.response?.data?.message ||
//         JSON.stringify(err.response?.data) || // show other error info
//         'Error registering employee. Check input or login as HR.'
//       );
//     }
    
//   };

//   return (
//     <div className="create-employee-container">
//       <h2>Create New Employee</h2>
//       {error && <p className="error-msg">{error}</p>}
//       {success && <p className="success-msg">{success}</p>}

//       <form onSubmit={handleSubmit} className="employee-form">
//         <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
//         <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="employee">Employee</option>
//           <option value="hr">HR</option>
//         </select>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CreateEmployee;


import './CreateEmployee.css';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'employee',
    phone_no: '',
    dob: '',
    designation: '',
    address: '',
    department: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:8000/api/register/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setSuccess('Employee registered successfully!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: 'employee',
        phone_no: '',
        dob: '',
        designation: '',
        address: '',
        department: '',
      });
      setTimeout(() => navigate('/employees'), 1000);
    } catch (err) {
      console.error("Full error:", err);
      console.error("Error response:", err.response);
      setError(
        err.response?.data?.detail ||
        err.response?.data?.message ||
        JSON.stringify(err.response?.data) ||
        'Error registering employee. Check input or login as HR.'
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Create New Employee</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required className="input" />
        <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required className="input" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input" />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="input" />
        <input name="phone_no" placeholder="Phone Number" value={formData.phone_no} onChange={handleChange} required className="input" />
        <input name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required className="input" />
        <input name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} required className="input" />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="input" />
        <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required className="input" />
        <select name="role" value={formData.role} onChange={handleChange} className="input">
          <option value="employee">Employee</option>
          <option value="hr">HR</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
