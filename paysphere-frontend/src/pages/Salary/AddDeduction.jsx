import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddDeduction.css';

const AddDeduction = () => {
  const { empId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [deductionType, setDeductionType] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const deductionOptions = [
    { value: 'TDS', label: 'Tax Deducted at Source' },
    { value: 'PF', label: 'Provident Fund' },
    { value: 'INSURANCE', label: 'Insurance' },
    { value: 'LOP', label: 'Loss of Pay' },
    { value: 'OTHER', label: 'Other' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:8000/api/deduction/create/`,
        {
          employee: empId,
          deduction_type: deductionType,
          amount,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage('✅ Deduction added successfully');
      setIsSuccess(true);
      setTimeout(() => navigate('/employees'), 1500);
    } catch (err) {
      const errorMsg = err.response?.data?.error || '❌ Error adding deduction';
      setMessage(errorMsg);
      setIsSuccess(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Deduction</h2>

      {message && (
        <div className={`message ${isSuccess ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Deduction Type:</label>
        <select
          value={deductionType}
          onChange={(e) => setDeductionType(e.target.value)}
          required
        >
          <option value="">-- Select Type --</option>
          {deductionOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
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

export default AddDeduction;
