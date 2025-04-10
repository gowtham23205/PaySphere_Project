
// MyProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch employee details on page load (use JWT token if needed)
    axios.get('/api/user/details/')
      .then(response => setUserDetails(response.data))
      .catch(error => setMessage('Failed to fetch details'));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`/api/update-user/${userDetails.id}/`, userDetails)
      .then(response => setMessage('Profile updated successfully!'))
      .catch(error => setMessage('Failed to update profile'));
  };

  return (
    <div>
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={userDetails.address}
          onChange={handleChange}
        />
        <button type="submit">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MyProfile;
