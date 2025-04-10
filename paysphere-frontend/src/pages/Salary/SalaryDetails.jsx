
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './SalaryDetails.css';

const SalaryDetails = () => {
  const [salaryDetails, setSalaryDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('Please log in to view salary details.');
      setLoading(false);
      return;
    }

    const fetchSalaryDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/salary/current_salary_details/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setSalaryDetails(response.data);
        } else {
          setError('Unexpected response from the server.');
        }
      } catch (err) {
        console.error('Error fetching salary details:', err);
        if (err.response && err.response.status === 401) {
          setError('Unauthorized access. Please log in again.');
        } else {
          setError('Failed to fetch salary details. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSalaryDetails();
  }, [token]);

  const downloadPDF = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text('Salary Details', 14, 20);
  
    autoTable(doc, {
      startY: 30,
      head: [['Field', 'Value']],
      body: [
        ['Employee ID', salaryDetails.employee],
        ['Basic Salary', `₹${salaryDetails.basic_salary}`],
        ['Allowances', `₹${salaryDetails.allowances}`],
        ['Deductions', `₹${salaryDetails.deductions}`],
        ['Net Salary', `₹${salaryDetails.net_salary}`],
        ['Salary Status', salaryDetails.salary_status],
        ['Created At', new Date(salaryDetails.created_at).toLocaleString()],
      ],
    });
  
    doc.save('salary_details.pdf');
  };
  

  return (
    <div className="salary-details">
      <h2>Salary Details</h2>
      {loading && <p>Loading salary details...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {salaryDetails && !loading && !error && (
        <div className="salary-info">
          <p><strong>Employee ID:</strong> {salaryDetails.employee}</p>
          <p><strong>Basic Salary:</strong> ₹{salaryDetails.basic_salary}</p>
          <p><strong>Allowances:</strong> ₹{salaryDetails.allowances}</p>
          <p><strong>Deductions:</strong> ₹{salaryDetails.deductions}</p>
          <p><strong>Net Salary:</strong> ₹{salaryDetails.net_salary}</p>
          <p><strong>Salary Status:</strong> {salaryDetails.salary_status}</p>
          <p><strong>Created At:</strong> {new Date(salaryDetails.created_at).toLocaleString()}</p>

          <button className="download-btn" onClick={downloadPDF}>
            Download PaySlip
          </button>
        </div>
      )}
    </div>
  );
};

export default SalaryDetails;
