
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
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [previousMonthData, setPreviousMonthData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/salary/employee_salary_history/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const salaryRecords = res.data;

        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        const currentMonthSalaries = [];
        const previousMonthSalaries = [];

        salaryRecords.forEach((record) => {
          const createdAt = new Date(record.created_at);
          const month = createdAt.getMonth();
          const year = createdAt.getFullYear();

          if (month === currentMonth && year === currentYear) {
            currentMonthSalaries.push(record);
          } else {
            // Force status to "Paid" for previous months
            previousMonthSalaries.push({
              ...record,
              salary_status: 'Paid',
            });
          }
        });

        // Sort both lists by Employee ID ascending
        const sortByEmpId = (a, b) => a.employee - b.employee;

        setCurrentMonthData(currentMonthSalaries.sort(sortByEmpId));
        setPreviousMonthData(previousMonthSalaries.sort(sortByEmpId));
      } catch (error) {
        const msg = error.response?.data?.error || 'Failed to fetch salary data';
        setErrorMsg(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchSalaries();
  }, [token]);

  const renderTable = (data, title) => (
    <>
      <Typography className="salary-title" sx={{ mt: 4 }}>
        {title}
      </Typography>

      <TableContainer component={Paper} className="salary-table" sx={{ mt: 1 }}>
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
              <TableCell>Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.employee}</TableCell>
                <TableCell>₹{record.basic_salary}</TableCell>
                <TableCell>₹{record.allowances}</TableCell>
                <TableCell>₹{record.deductions}</TableCell>
                <TableCell>₹{record.gross_salary}</TableCell>
                <TableCell>₹{record.net_salary}</TableCell>
                <TableCell>{record.salary_status}</TableCell>
                <TableCell>{new Date(record.created_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  return (
    <Box className="salary-container">
      {loading ? (
        <Box className="loading-spinner">
          <CircularProgress />
        </Box>
      ) : errorMsg ? (
        <Typography className="error-text">❌ {errorMsg}</Typography>
      ) : (
        <>
          {renderTable(currentMonthData, '      🟢Current Month Salary Details')}
          {renderTable(previousMonthData, '     📁Previous Months Salary History')}
        </>
      )}
    </Box>
  );
};

export default AllEmployeeSalaries;
