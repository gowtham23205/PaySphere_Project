// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './AddAllowance.css';

// const AddAllowance = () => {
//   const { empId } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const [type, setType] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:8000/api/allowance/create/`, {
//         employee: empId,
//         type,
//         amount
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert('Allowance added successfully');
//       navigate('/employees');
//     } catch (err) {
//       alert('Error adding allowance');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Allowance</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Type:</label>
//         <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />

//         <label>Amount:</label>
//         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddAllowance;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddAllowance.css';

const AddAllowance = () => {
  const { empId } = useParams(); // Get employee ID from URL params
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [allowanceType, setAllowanceType] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const allowanceOptions = [
    'Bonus',
    'Overtime',
    'Travel',
    'House Rent',
    'Daily Allowance',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!empId) {
      setMessage('❌ Invalid or missing employee ID.');
      setIsSuccess(false);
      return;
    }

    try {
      await axios.post(
        `http://localhost:8000/api/allowance/create/`,
        {
          employee: empId, // Use the empId from the URL params
          allowance_type: allowanceType,
          amount,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage('✅ Allowance added successfully');
      setIsSuccess(true);
      setTimeout(() => navigate('/employees'), 1500);
    } catch (err) {
      const errorMsg = err.response?.data?.error || '❌ Failed to add allowance';
      setMessage(errorMsg);
      setIsSuccess(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Allowance</h2>

      {message && (
        <div className={`message ${isSuccess ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Allowance Type:</label>
        <select
          value={allowanceType}
          onChange={(e) => setAllowanceType(e.target.value)}
          required
        >
          <option value="">-- Select Type --</option>
          {allowanceOptions.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAllowance;
