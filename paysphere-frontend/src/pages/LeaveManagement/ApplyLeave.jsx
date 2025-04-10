
import './ApplyLeave.css';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState('casual');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate(); // useNavigate to handle redirects

  const validateForm = () => {
    if (!leaveType || !startDate || !endDate) {
      setError('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    const leaveData = {
      leave_type: leaveType,
      start_date: startDate,
      end_date: endDate,
      reason: reason || '',  // If reason is not provided, send an empty string
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/leave/apply/', leaveData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        setSuccess('Leave request successfully submitted.');
        setTimeout(() => {
          navigate('/leave-history'); // Redirect to the leave history page after 1.5 seconds
        }, 1500);
      }
    } catch (err) {
      console.error('Error applying for leave:', err);
      setError('Failed to apply for leave. Please try again later.');
    }
  };

  return (
    <div className="apply-leave-form">
      <h2>Apply for Leave</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="casual">Casual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="paid">Paid Leave</option>
            <option value="unpaid">Unpaid Leave</option>
            <option value="vacation">Vacation Leave</option>
            <option value="maternity">Maternity Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason (Optional)</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Optional"
          />
        </div>

        <button type="submit">Apply Leave</button>
      </form>
    </div>
  );
};

export default ApplyLeave;
