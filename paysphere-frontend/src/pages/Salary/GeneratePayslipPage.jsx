

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './GeneratePayslipPage.css';

const GeneratePayslipPage = () => {
  const { id } = useParams(); // employee ID
  const [salary, setSalary] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSalary = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(
          `http://localhost:8000/api/salary/get_current_salary_details/${id}/`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSalary(response.data);
      } catch (error) {
        console.error('Error fetching salary details:', error.response?.data || error.message);
        alert('Failed to fetch salary details');
      } finally {
        setLoading(false);
      }
    };

    fetchSalary();
  }, [id]);

  const handleGenerate = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `http://localhost:8000/api/salary/generate_payslip/${id}/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('Payslip generated and emailed successfully!');
      navigate('/employees'); // Redirect to Employee List
    } catch (error) {
      console.error('Error generating payslip:', error.response?.data || error.message);
      alert('Failed to generate payslip. Please try again.');
    }
  };

  if (loading) return <p>Loading salary details...</p>;

  return (
    <div className="generate-payslip-container">
      <h2>Generate Payslip</h2>
      {salary ? (
        <div className="salary-details">
          <p><strong>Basic Salary:</strong> ₹{salary.basic_salary}</p>
          <p><strong>Total Allowances:</strong> ₹{salary.total_allowances}</p>
          <p><strong>Gross Salary:</strong> ₹{salary.gross_salary}</p>
          <p><strong>Total Deductions:</strong> ₹{salary.total_deductions}</p>
          <p><strong>Net Salary:</strong> ₹{salary.net_salary}</p>

          <button className="confirm-generate-button" onClick={handleGenerate}>
            Confirm & Generate Payslip
          </button>
        </div>
      ) : (
        <p>No salary details found for this employee.</p>
      )}
    </div>
  );
};

export default GeneratePayslipPage;
