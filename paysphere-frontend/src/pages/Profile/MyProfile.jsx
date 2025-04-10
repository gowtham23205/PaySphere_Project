// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Profile.css";

// const MyProfile = () => {
//     const [profile, setProfile] = useState({
//         name: "",
//         email: "",
//         role: "Employee",
//     });
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const response = await axios.get("http://127.0.0.1:8000/api/employee/profile/", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setProfile(response.data);
//             } catch (error) {
//                 console.error("Error fetching employee profile", error);
//             }
//         };
//         fetchProfile();
//     }, []);

//     const handleChange = (e) => {
//         setProfile({ ...profile, [e.target.name]: e.target.value });
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             const token = localStorage.getItem("token");
//             await axios.patch("http://127.0.0.1:8000/api/employee/profile/update/", profile, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setMessage("Profile updated successfully!");
//         } catch (error) {
//             console.error("Error updating profile", error);
//             setMessage("Failed to update profile.");
//         }
//     };

//     return (
//         <div>
//             <h2>My Profile</h2>
//             {message && <p>{message}</p>}
//             <form onSubmit={handleUpdate}>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={profile.name} onChange={handleChange} required />

//                 <label>Email:</label>
//                 <input type="email" name="email" value={profile.email} onChange={handleChange} required disabled />

//                 <button type="submit">Update Profile</button>
//             </form>
//         </div>
//     );
// };

// export default MyProfile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyProfile = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [updatedProfile, setUpdatedProfile] = useState({});
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) {
//       setError('Please log in to view your profile.');
//       setLoading(false);
//       return;
//     }

//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.status === 200) {
//           setProfileData(response.data);
//         } else {
//           setError('Unexpected response from the server.');
//         }
//       } catch (err) {
//         console.error('Error fetching profile data:', err);
//         setError('Failed to fetch profile data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, [token]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//     setUpdatedProfile(profileData);  // Pre-fill the form with current data
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//     setUpdatedProfile({});
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedProfile((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveClick = async () => {
//     try {
//       const response = await axios.patch(
//         'http://127.0.0.1:8000/api/profile/update/',
//         updatedProfile,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setProfileData(response.data); // Update the profile data with the response
//         setIsEditing(false);
//         setError('');
//       } else {
//         setError('Failed to update profile.');
//       }
//     } catch (err) {
//       console.error('Error updating profile:', err);
//       setError('Failed to update profile. Please try again later.');
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>My Profile</h2>

//       {loading && <p>Loading profile...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {profileData && !loading && !error && !isEditing ? (
//         <div className="profile-info">
//           <p><strong>Name:</strong> {profileData.name}</p>
//           <p><strong>Email:</strong> {profileData.email}</p>
//           <p><strong>Phone Number:</strong> {profileData.phone_number}</p>
//           <p><strong>Role:</strong> {profileData.role}</p>
//           <button onClick={handleEditClick}>Edit Profile</button>
//         </div>
//       ) : isEditing ? (
//         <div className="profile-edit">
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={updatedProfile.name || ''}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={updatedProfile.email || ''}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="phone_number">Phone Number:</label>
//             <input
//               type="text"
//               id="phone_number"
//               name="phone_number"
//               value={updatedProfile.phone_number || ''}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="role">Role:</label>
//             <input
//               type="text"
//               id="role"
//               name="role"
//               value={updatedProfile.role || ''}
//               onChange={handleChange}
//               disabled
//             />
//           </div>
//           <button onClick={handleSaveClick}>Save</button>
//           <button onClick={handleCancelClick}>Cancel</button>
//         </div>
//       ) : (
//         <p>No profile data available.</p>
//       )}
//     </div>
//   );
// };

// export default MyProfile;



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
