
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [salaryMap, setSalaryMap] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchEmployees();
  }, [token]);

  const fetchEmployees = async () => {
    try {
      const empRes = await axios.get('http://localhost:8000/api/users/', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const activeEmployees = empRes.data.filter(emp => emp.is_active);
      activeEmployees.sort((a, b) => a.id - b.id);
      setEmployees(activeEmployees);

      const salaryMapTemp = {};
      await Promise.all(
        activeEmployees.map(async (emp) => {
          try {
            const res = await axios.get(
              `http://localhost:8000/api/salary/employee_salary_history/${emp.id}/`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            const history = res.data;
            if (Array.isArray(history) && history.length > 0) {
              salaryMapTemp[emp.id] = history[0];
            }
          } catch (error) {
            console.warn(`No salary record for user ${emp.id}`);
          }
        })
      );

      setSalaryMap(salaryMapTemp);
    } catch (error) {
      console.error('Error fetching employees or salary data', error);
    }
  };

  const handleGeneratePayslip = async (empId) => {
    try {
      await axios.put(
        `http://localhost:8000/api/salary/generate_payslip/${empId}/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Refresh salary record after generation
      const res = await axios.get(
        `http://localhost:8000/api/salary/employee_salary_history/${empId}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const history = res.data;
      if (Array.isArray(history) && history.length > 0) {
        setSalaryMap(prev => ({
          ...prev,
          [empId]: history[0],
        }));
      }

      alert("Payslip generated and email sent!");
    } catch (error) {
      console.error('Error generating payslip:', error);
      alert("Failed to generate payslip");
    }
  };

  const renderSalaryStatus = (empId) => {
    const record = salaryMap[empId];
    if (record) {
      const status = record.salary_status?.toLowerCase();
      if (status === 'paid') return 'Paid';
      if (status === 'pending') return 'Pending';
    }
    return 'Not Generated';
  };

  const renderActionButton = (empId) => {
    const record = salaryMap[empId];
  
    if (!record) {
      return (
        <button
          className="small-button"
          onClick={() => navigate(`/salary/add/${empId}`)}
        >
          Add Salary
        </button>
      );
    }
  
    const status = record.salary_status?.toLowerCase();
  
    if (status === 'paid') {
      return (
        <button
          className="small-button"
          onClick={() => navigate(`/salary/history/${empId}`)}
        >
          View History
        </button>
      );
    }
  
    if (status === 'pending') {
      return (
        <div className="button-group">
          <button
            className="small-button"
            onClick={() => navigate(`/salary/add-allowance/${empId}`)}
          >
            Add Allowance
          </button>
          <button
            className="small-button"
            onClick={() => navigate(`/salary/add-deduction/${empId}`)}
          >
            Add Deduction
          </button>
          <button
            className="small-button"
            onClick={() => navigate(`/salary/history/${empId}`)}
          >
            Generate Payslip
          </button>
        </div>
      );
    }
  
    return null;
  };
  
  

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Salary Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>
                <a href={`/employees/${emp.id}`}>
                  {emp.first_name} {emp.last_name}
                </a>
              </td>
              <td>{emp.email}</td>
              <td>{emp.is_active ? 'Active' : 'Inactive'}</td>
              <td>{renderSalaryStatus(emp.id)}</td>
              <td>{renderActionButton(emp.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
