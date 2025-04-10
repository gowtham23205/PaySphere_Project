// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Profile.css";

// const HRProfile = () => {
//     const [profile, setProfile] = useState({
//         name: "",
//         email: "",
//         role: "HR",
//     });
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const response = await axios.get("http://127.0.0.1:8000/api/hr/profile/", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setProfile(response.data);
//             } catch (error) {
//                 console.error("Error fetching HR profile", error);
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
//             await axios.patch("http://127.0.0.1:8000/api/hr/profile/update/", profile, {
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
//             <h2>HR Profile</h2>
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

// export default HRProfile;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HRProfile = () => {
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
//         const response = await axios.get('http://127.0.0.1:8000/api/hr/profile/', {
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
//         'http://127.0.0.1:8000/api/hr/profile/update/',
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
//       <h2>HR Profile</h2>

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

// export default HRProfile;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('token');
//   const userId = localStorage.getItem('user_id');
//   console.log(userId); // Get ID from localStorage

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/users/${userId}/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         setUser(response.data);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch user profile. Please try again.');
//       }
//     };

//     if (userId) fetchUserProfile();
//   }, [userId, token]);

//   if (error) return <p className="text-red-500">{error}</p>;
//   if (!user) return <p>Loading profile...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">My Profile</h2>
//       <img
//         src={user.profile_pic ? `http://localhost:8000${user.profile_pic}` : '/default-profile.png'}
//         alt="Profile"
//         width="120"
//         className="rounded-full mb-4"
//       />
//       <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone_no}</p>
//       <p><strong>DOB:</strong> {user.dob}</p>
//       <p><strong>Gender:</strong> {user.gender}</p>
//       <p><strong>Department:</strong> {user.department}</p>
//       <p><strong>Designation:</strong> {user.designation}</p>
//       <p><strong>Total Leaves:</strong> {user.total_leaves}</p>
//       <p><strong>Leaves Taken:</strong> {user.leaves_taken}</p>
//     </div>
//   );
// };

// export default Profile;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
// import './Profile.css'; // Import the CSS file

// const Profile = () => {
//   const [profileData, setProfileData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone_number: '',
//   });

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const getUserIdFromToken = () => {
//     const token = localStorage.getItem('token');
//     if (!token) return null;
//     const decoded = jwtDecode(token);
//     return decoded.user_id;
//   };

//   const userId = getUserIdFromToken();

//   useEffect(() => {
//     if (!userId) {
//       setError('User not authenticated');
//       setLoading(false);
//       return;
//     }

//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/users/${userId}/`, {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load profile data');
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, [userId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.patch(
//         `http://127.0.0.1:8000/api/update-user/${userId}/`,
//         profileData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );
//       setSuccessMessage('Profile updated successfully');
//     } catch (err) {
//       setError('Failed to update profile');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prev) => ({ ...prev, [name]: value }));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="container">
//       <h2>Update Profile</h2>
//       {successMessage && <div className="message">{successMessage}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name</label>
//           <input
//             type="text"
//             name="first_name"
//             value={profileData.first_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="last_name"
//             value={profileData.last_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={profileData.email}
//             onChange={handleChange}
//             disabled
//           />
//         </div>
//         <div>
//           <label>Phone Number</label>
//           <input
//             type="text"
//             name="phone_number"
//             value={profileData.phone_number}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default Profile;



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
