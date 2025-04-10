
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddSalary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [basicSalary, setBasicSalary] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!id || isNaN(parseInt(id))) {
      setResponseMsg("❌ Invalid or missing Employee ID.");
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!basicSalary) {
      setResponseMsg("❌ Please enter Basic Salary.");
      return;
    }

    try {
      const payload = {
        basic_salary: parseFloat(basicSalary),
        employee: parseInt(id),
      };

      await axios.post(
        'http://localhost:8000/api/salary/create/',
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setResponseMsg('✅ Salary added successfully!');
      setBasicSalary('');
      setTimeout(() => navigate('/employees'), 1500);
    } catch (error) {
      const errMsg = error.response?.data?.error || '❌ Failed to add salary.';
      setResponseMsg(errMsg);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, bgcolor: '#fff', boxShadow: 3, borderRadius: 2, p: 3 }}>
      {responseMsg && (
        <Typography variant="subtitle1" sx={{ color: responseMsg.startsWith("✅") ? 'green' : 'red', mb: 2, textAlign: 'center' }}>
          {responseMsg}
        </Typography>
      )}

      <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>Add Salary</Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Basic Salary"
            type="number"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
          Submit Salary
        </Button>
      </form>
    </Box>
  );
};

export default AddSalary;
