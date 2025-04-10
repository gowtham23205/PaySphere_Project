import React from 'react';

const ProfileForm = ({ userDetails, handleChange, handleSubmit }) => (
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
);

export default ProfileForm;
