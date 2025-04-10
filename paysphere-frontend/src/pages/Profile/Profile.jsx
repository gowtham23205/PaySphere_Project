
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    gender: '',
    address: '',
    department: '',
    role: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decoded = jwtDecode(token);
    return decoded.user_id;
  };

  const userId = getUserIdFromToken();

  useEffect(() => {
    if (!userId) {
      setError('User not authenticated');
      setLoading(false);
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/${userId}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setProfileData({
          first_name: response.data.first_name || '',
          last_name: response.data.last_name || '',
          email: response.data.email || '',
          phone_number: response.data.phone_no || '',
          date_of_birth: response.data.dob || '',
          gender: response.data.gender || '',
          address: response.data.address || '',
          department: response.data.department || '',
          role: response.data.role || '',
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile data');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/update-user/${userId}/`,
        profileData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setSuccessMessage('Profile updated successfully');
      setError(null);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError('Failed to update profile');
      setSuccessMessage(null);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Update Profile</h2>
      {successMessage && <div className="message success">{successMessage}</div>}
      {error && <div className="message error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="first_name" value={profileData.first_name} onChange={handleChange} />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" name="last_name" value={profileData.last_name} onChange={handleChange} />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={profileData.email} disabled />
        </div>

        <div>
          <label>Phone Number</label>
          <input type="text" name="phone_number" value={profileData.phone_number} onChange={handleChange} />
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" name="date_of_birth" value={profileData.date_of_birth} onChange={handleChange} />
        </div>

        <div>
          <label>Gender</label>
          <select name="gender" value={profileData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Address</label>
          <input type="text" name="address" value={profileData.address} onChange={handleChange} />
        </div>

        <div>
          <label>Department</label>
          <input type="text" name="department" value={profileData.department} onChange={handleChange} />
        </div>

        <div>
          <label>Role</label>
          <input type="text" name="role" value={profileData.role} disabled />
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
