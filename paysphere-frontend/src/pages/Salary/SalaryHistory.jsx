
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SalaryHistory.css';  // You can create a separate CSS file for this component

const SalaryHistory = () => {
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('Please log in to view salary history.');
      setLoading(false);
      return;
    }

    const fetchSalaryHistory = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/salary/salary_history/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setSalaryHistory(response.data);
        } else {
          setError('Unexpected response from the server.');
        }
      } catch (err) {
        console.error('Error fetching salary history:', err);
        if (err.response && err.response.status === 401) {
          setError('Unauthorized access. Please log in again.');
        } else {
          setError('Failed to fetch salary history. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSalaryHistory();
  }, [token]);

  return (
    <div className="salary-history">
      <h2>Salary History</h2>
      {loading && <p>Loading salary history...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {salaryHistory.length > 0 && !loading && !error ? (
        <div className="salary-history-list">
          {salaryHistory.map((salary, index) => (
            <div key={index} className="salary-history-item">
              <p><strong>Salary Date:</strong> {new Date(salary.created_at).toLocaleDateString()}</p>
              <p><strong>Basic Salary:</strong> ₹{salary.basic_salary}</p>
              <p><strong>Allowances:</strong> ₹{salary.allowances}</p>
              <p><strong>Deductions:</strong> ₹{salary.deductions}</p>
              <p><strong>Net Salary:</strong> ₹{salary.net_salary}</p>
              <p><strong>Salary Status:</strong> {salary.salary_status}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No salary history available.</p>
      )}
    </div>
  );
};

export default SalaryHistory;
