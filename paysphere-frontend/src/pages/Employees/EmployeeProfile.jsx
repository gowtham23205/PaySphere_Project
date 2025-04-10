


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
