import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllEmployeeSalaries.css';

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from '@mui/material';

const AllEmployeeSalaries = () => {
  const [salaryData, setSalaryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/salary/employee_salary_status_list/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSalaryData(res.data);
      } catch (error) {
        const msg = error.response?.data?.error || 'Failed to fetch salary data';
        setErrorMsg(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchSalaries();
  }, [token]);

  return (
    <Box className="salary-container">
  <Typography className="salary-title">
    All Employees - Current Month Salary Status
  </Typography>

  {loading ? (
    <Box className="loading-spinner">
      <CircularProgress />
    </Box>
  ) : errorMsg ? (
    <Typography className="error-text">❌ {errorMsg}</Typography>
  ) : (
    <TableContainer component={Paper} className="salary-table" sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell>Basic Salary</TableCell>
            <TableCell>Allowances</TableCell>
            <TableCell>Deductions</TableCell>
            <TableCell>Gross Salary</TableCell>
            <TableCell>Net Salary</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {salaryData.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.employee}</TableCell>
              <TableCell>₹{record.basic_salary}</TableCell>
              <TableCell>₹{record.allowances}</TableCell>
              <TableCell>₹{record.deductions}</TableCell>
              <TableCell>₹{record.gross_salary}</TableCell>
              <TableCell>₹{record.net_salary}</TableCell>
              <TableCell>{record.salary_status}</TableCell>
              <TableCell>{new Date(record.created_at).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
</Box>

  );
};

export default AllEmployeeSalaries;
