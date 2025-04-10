


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
