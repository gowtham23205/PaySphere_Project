
import './SalaryDetailOfEmp.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SalaryDetailOfEmp = () => {
  const { id } = useParams();
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generatingPayslip, setGeneratingPayslip] = useState(false);
  const [message, setMessage] = useState(''); // State for message

  useEffect(() => {
    const token = localStorage.getItem('token');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-indexed
    const currentYear = currentDate.getFullYear();

    const fetchSalaryHistory = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/salary/employee_salary_history/${id}/`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const filteredData = res.data.filter(record => {
          const recordDate = new Date(record.created_at);
          const recordMonth = recordDate.getMonth();
          const recordYear = recordDate.getFullYear();

          return recordMonth === currentMonth && recordYear === currentYear;
        });

        setSalaryHistory(filteredData);
      } catch (error) {
        console.error('Failed to fetch salary history', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSalaryHistory();
  }, [id]);

  // Handle "Generate Payslip" button click
  const handleGeneratePayslip = async (employeeId) => {
    setGeneratingPayslip(true);
    setMessage('');
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/salary/generate_payslip/${employeeId}/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'blob',
        }
      );
  
      // Download Payslip
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'payslip.pdf';
      link.click();
  
      setMessage('Payslip generated successfully.');
  
      // ✅ Re-fetch salary history to get updated status and payment date
      const updatedRes = await axios.get(
        `http://127.0.0.1:8000/api/salary/employee_salary_history/${id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
  
      const filteredData = updatedRes.data.filter(record => {
        const recordDate = new Date(record.created_at);
        const recordMonth = recordDate.getMonth();
        const recordYear = recordDate.getFullYear();
        return recordMonth === currentMonth && recordYear === currentYear;
      });
  
      setSalaryHistory(filteredData);
    } catch (error) {
      console.error('Failed to generate payslip', error);
      setMessage('Failed to generate payslip. Please try again.');
    } finally {
      setGeneratingPayslip(false);
    }
  };
  
  

  return (
    <div className="salary-history-container">
      <h2>Current Month Salary Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : salaryHistory.length === 0 ? (
        <p>No salary records found for this employee this month.</p>
      ) : (
        <>
          <table className="salary-history-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Year</th>
                <th>Basic Salary</th>
                <th>Allowances</th>
                <th>Deductions</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
                <th>Status</th>
                <th>Payment Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {salaryHistory.map((record, index) => {
                const recordDate = new Date(record.created_at);
                const month = recordDate.toLocaleString('default', { month: 'long' });
                const year = recordDate.getFullYear();

                return (
                  <tr key={index}>
                    <td>{month}</td>
                    <td>{year}</td>
                    <td>{record.basic_salary || 0}</td>
                    <td>{record.allowances || 0}</td>
                    <td>{record.deductions || 0}</td>
                    <td>{record.gross_salary || 0}</td>
                    <td>{record.net_salary || 0}</td>
                    <td>{record.salary_status}</td>
                    <td>{record.payment_date ? new Date(record.payment_date).toLocaleDateString() : '—'}</td>
                    <td>
  {record.salary_status === 'Pending' && (
    <button
      className="generate-payslip-btn"
      onClick={() => handleGeneratePayslip(id)}
      disabled={generatingPayslip}
    >
      {generatingPayslip ? 'Generating...' : 'Generate Payslip'}
    </button>
  )}
</td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      {/* Display success or error message */}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default SalaryDetailOfEmp;
