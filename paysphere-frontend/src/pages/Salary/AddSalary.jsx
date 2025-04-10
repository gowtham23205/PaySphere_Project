// // // // import React, { useEffect, useState } from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import axios from 'axios';

// // // // const AddSalary = () => {
// // // //   const { id } = useParams();
// // // //   const [employee, setEmployee] = useState(null);
// // // //   const [salaryData, setSalaryData] = useState({
// // // //     basic_salary: '',
// // // //     allowances: '',
// // // //     deductions: '',
// // // //   });

// // // //   useEffect(() => {
// // // //     const fetchEmployee = async () => {
// // // //       const token = localStorage.getItem('token');
// // // //       try {
// // // //         const response = await axios.get(`http://localhost:8000/api/user/${id}/`, {
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         });
// // // //         setEmployee(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching employee:', error);
// // // //       }
// // // //     };

// // // //     fetchEmployee();
// // // //   }, [id]);

// // // //   const handleChange = (e) => {
// // // //     setSalaryData({ ...salaryData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     const token = localStorage.getItem('token');
// // // //     const payload = {
// // // //       employee: id,
// // // //       ...salaryData,
// // // //     };

// // // //     try {
// // // //       await axios.post('http://localhost:8000/api/salary/create/', payload, {
// // // //         headers: { Authorization: `Bearer ${token}` },
// // // //       });
// // // //       alert('Salary added successfully!');
// // // //     } catch (error) {
// // // //       alert('Error adding salary: ' + (error.response?.data?.error || 'Something went wrong'));
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="employee-list-container">
// // // //       <h2>Add Salary</h2>
// // // //       {employee ? (
// // // //         <div>
// // // //           <h3>{employee.first_name} {employee.last_name}</h3>
// // // //           <form onSubmit={handleSubmit}>
// // // //             <label>Basic Salary:</label>
// // // //             <input type="number" name="basic_salary" onChange={handleChange} required />

// // // //             <label>Allowances:</label>
// // // //             <input type="number" name="allowances" onChange={handleChange} required />

// // // //             <label>Deductions:</label>
// // // //             <input type="number" name="deductions" onChange={handleChange} required />

// // // //             <button type="submit">Submit Salary</button>
// // // //           </form>
// // // //         </div>
// // // //       ) : (
// // // //         <p>Loading employee data...</p>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddSalary;


// // // import React, { useEffect, useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';

// // // const AddSalary = () => {
// // //   const { employeeId } = useParams();
// // //   const navigate = useNavigate();

// // //   const [employee, setEmployee] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [basicSalary, setBasicSalary] = useState('');
// // //   const [allowances, setAllowances] = useState('');
// // //   const [deductions, setDeductions] = useState('');
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     const fetchEmployee = async () => {
// // //       const token = localStorage.getItem('token');
// // //       try {
// // //         const res = await axios.get(`http://localhost:8000/api/user/${employeeId}/`, {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });
// // //         setEmployee(res.data);
// // //       } catch (err) {
// // //         console.error('Failed to load employee details:', err);
// // //         setError('Failed to load employee details.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchEmployee();
// // //   }, [employeeId]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const token = localStorage.getItem('token');

// // //     try {
// // //       await axios.post(
// // //         'http://localhost:8000/api/salary/create/',
// // //         {
// // //           employee: employeeId,
// // //           basic_salary: parseFloat(basicSalary),
// // //           allowances: parseFloat(allowances),
// // //           deductions: parseFloat(deductions),
// // //         },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       alert('Salary added successfully!');
// // //       navigate('/employees'); // redirect after success
// // //     } catch (err) {
// // //       console.error('Error creating salary:', err.response?.data || err.message);
// // //       setError(err.response?.data?.error || 'Failed to create salary.');
// // //     }
// // //   };

// // //   if (loading) return <div>Loading employee info...</div>;
// // //   if (error) return <div>{error}</div>;

// // //   return (
// // //     <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
// // //       <h2>Add Salary</h2>
// // //       <p>
// // //         <strong>Employee:</strong> {employee.first_name} {employee.last_name}
// // //       </p>

// // //       <form onSubmit={handleSubmit}>
// // //         <div style={{ marginBottom: '10px' }}>
// // //           <label>Basic Salary: </label>
// // //           <input
// // //             type="number"
// // //             value={basicSalary}
// // //             onChange={(e) => setBasicSalary(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div style={{ marginBottom: '10px' }}>
// // //           <label>Allowances: </label>
// // //           <input
// // //             type="number"
// // //             value={allowances}
// // //             onChange={(e) => setAllowances(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div style={{ marginBottom: '10px' }}>
// // //           <label>Deductions: </label>
// // //           <input
// // //             type="number"
// // //             value={deductions}
// // //             onChange={(e) => setDeductions(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         {error && <p style={{ color: 'red' }}>{error}</p>}

// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AddSalary;

// // // import React, { useEffect, useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import './AddSalary.css'; // CSS file

// // // const AddSalary = () => {
// // //   const { id: employeeId } = useParams();
// // //   const navigate = useNavigate();

// // //   const [employee, setEmployee] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [basicSalary, setBasicSalary] = useState('');
// // //   const [allowances, setAllowances] = useState('');
// // //   const [deductions, setDeductions] = useState('');
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     const fetchEmployee = async () => {
// // //       const token = localStorage.getItem('token');
// // //       try {
// // //         const res = await axios.get(`http://localhost:8000/api/users/${employeeId}/`, {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         setEmployee(res.data);
// // //       } catch (err) {
// // //         console.error('Error fetching employee:', err);
// // //         setError('Failed to load employee details.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchEmployee();
// // //   }, [employeeId]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const token = localStorage.getItem('token');

// // //     try {
// // //       await axios.post(
// // //         'http://localhost:8000/api/salary/create/',
// // //         {
// // //           employee: employeeId,
// // //           basic_salary: parseFloat(basicSalary),
// // //           allowances: parseFloat(allowances),
// // //           deductions: parseFloat(deductions),
// // //         },
// // //         {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         }
// // //       );

// // //       alert('Salary added successfully!');
// // //       navigate('/employees');
// // //     } catch (err) {
// // //       console.error('Salary creation failed:', err.response?.data || err.message);
// // //       setError(err.response?.data?.error || 'Failed to create salary.');
// // //     }
// // //   };

// // //   if (loading) return <p>Loading employee info...</p>;
// // //   if (error && !employee) return <p className="error-message">{error}</p>;

// // //   return (
// // //     <div className="add-salary-container">
// // //       <h2>Add Salary</h2>
// // //       <p className="employee-name">
// // //         Employee: {employee?.first_name} {employee?.last_name}
// // //       </p>

// // //       <form onSubmit={handleSubmit} className="salary-form">
// // //         <label>Basic Salary:</label>
// // //         <input
// // //           type="number"
// // //           value={basicSalary}
// // //           onChange={(e) => setBasicSalary(e.target.value)}
// // //           required
// // //         />

// // //         <label>Allowances:</label>
// // //         <input
// // //           type="number"
// // //           value={allowances}
// // //           onChange={(e) => setAllowances(e.target.value)}
// // //           required
// // //         />

// // //         <label>Deductions:</label>
// // //         <input
// // //           type="number"
// // //           value={deductions}
// // //           onChange={(e) => setDeductions(e.target.value)}
// // //           required
// // //         />

// // //         {error && <p className="error-message">{error}</p>}

// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AddSalary;



// // // import React, { useEffect, useState } from 'react';
// // // import { useParams} from 'react-router-dom';
// // // import axios from 'axios';

// // // const AddSalary = () => {
// // //   const { id: employeeId } = useParams();
// // // //   const navigate = useNavigate();

// // //   const [employee, setEmployee] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [basicSalary, setBasicSalary] = useState('');
// // //   const [allowances, setAllowances] = useState('');
// // //   const [deductions, setDeductions] = useState('');
// // //   const [error, setError] = useState('');
// // //   const [success, setSuccess] = useState('');

// // //   useEffect(() => {
// // //     const fetchEmployee = async () => {
// // //       const token = localStorage.getItem('token');
// // //       try {
// // //         const res = await axios.get(`http://localhost:8000/api/users/${employeeId}/`, {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         setEmployee(res.data);
// // //       } catch (err) {
// // //         console.error('Error fetching employee:', err.response?.data || err.message);
// // //         setError('Failed to load employee details.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchEmployee();
// // //   }, [employeeId]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError('');
// // //     setSuccess('');

// // //     const token = localStorage.getItem('token');

// // //     try {
// // //       await axios.post(
// // //         'http://localhost:8000/api/salary/create/',
// // //         {
// // //           employee: employeeId,
// // //           basic_salary: parseFloat(basicSalary),
// // //           allowances: parseFloat(allowances),
// // //           deductions: parseFloat(deductions),
// // //         },
// // //         {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         }
// // //       );

// // //       setSuccess('Salary added successfully!');
// // //       setBasicSalary('');
// // //       setAllowances('');
// // //       setDeductions('');
// // //     } catch (err) {
// // //       console.error('Salary creation failed:', err.response?.data || err.message);
// // //       setError(err.response?.data?.error || 'Failed to create salary.');
// // //     }
// // //   };

// // //   if (loading) return <p>Loading employee info...</p>;

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2>Add Salary</h2>

// // //       {success && <p style={styles.success}>{success}</p>}
// // //       {error && <p style={styles.error}>{error}</p>}

// // //       <p>
// // //         <strong>Employee:</strong> {employee?.first_name} {employee?.last_name}
// // //       </p>

// // //       <form onSubmit={handleSubmit}>
// // //         <div style={styles.inputGroup}>
// // //           <label>Basic Salary:</label>
// // //           <input
// // //             type="number"
// // //             value={basicSalary}
// // //             onChange={(e) => setBasicSalary(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div style={styles.inputGroup}>
// // //           <label>Allowances:</label>
// // //           <input
// // //             type="number"
// // //             value={allowances}
// // //             onChange={(e) => setAllowances(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <div style={styles.inputGroup}>
// // //           <label>Deductions:</label>
// // //           <input
// // //             type="number"
// // //             value={deductions}
// // //             onChange={(e) => setDeductions(e.target.value)}
// // //             required
// // //           />
// // //         </div>

// // //         <button type="submit" style={styles.button}>Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     padding: '20px',
// // //     maxWidth: '500px',
// // //     margin: 'auto',
// // //     border: '1px solid #ccc',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
// // //     backgroundColor: '#f9f9f9',
// // //   },
// // //   inputGroup: {
// // //     marginBottom: '12px',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //   },
// // //   button: {
// // //     padding: '10px 20px',
// // //     backgroundColor: '#4CAF50',
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '6px',
// // //     cursor: 'pointer',
// // //   },
// // //   error: {
// // //     color: 'red',
// // //     marginBottom: '10px',
// // //     fontWeight: 'bold',
// // //   },
// // //   success: {
// // //     color: 'green',
// // //     marginBottom: '10px',
// // //     fontWeight: 'bold',
// // //   },
// // // };

// // // export default AddSalary;



// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import {
// // //   Box,
// // //   Button,
// // //   TextField,
// // //   Typography,
// // //   Tabs,
// // //   Tab
// // // } from '@mui/material';
// // // import AddAllowance from './AddAllowance';
// // // import AddDeduction from './AddDeduction';

// // // function CustomTabPanel({ children, value, index }) {
// // //   return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
// // // }

// // // function a11yProps(index) {
// // //   return {
// // //     id: `tab-${index}`,
// // //     'aria-controls': `tabpanel-${index}`,
// // //   };
// // // }

// // // const AddSalary = () => {
// // //   const [employeeId, setEmployeeId] = useState('');
// // //   const [basicSalary, setBasicSalary] = useState('');
// // //   const [responseMsg, setResponseMsg] = useState('');
// // //   const [value, setValue] = useState(0);

// // //   const token = localStorage.getItem('token');

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       await axios.post(
// // //         'http://localhost:8000/api/salary/create/',
// // //         {
// // //           employee: employeeId,
// // //           basic_salary: parseFloat(basicSalary),
// // //         },
// // //         {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         }
// // //       );
// // //       setResponseMsg('Salary added successfully!');
// // //       setBasicSalary('');
// // //     } catch (error) {
// // //       const errMsg = error.response?.data?.error || 'Failed to add salary.';
// // //       setResponseMsg(errMsg);
// // //     }
// // //   };

// // //   const handleTabChange = (event, newValue) => {
// // //     setValue(newValue);
// // //   };

// // //   return (
// // //     <Box sx={{ width: '100%' }}>
// // //       {responseMsg && (
// // //         <Typography variant="subtitle1" sx={{ color: 'green', m: 2 }}>
// // //           {responseMsg}
// // //         </Typography>
// // //       )}

// // //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// // //         <Tabs value={value} onChange={handleTabChange} aria-label="Add Salary Tabs">
// // //           <Tab label="Add Salary" {...a11yProps(0)} />
// // //           <Tab label="Add Allowance" {...a11yProps(1)} />
// // //           <Tab label="Add Deduction" {...a11yProps(2)} />
// // //         </Tabs>
// // //       </Box>

// // //       <CustomTabPanel value={value} index={0}>
// // //         <form onSubmit={handleSubmit}>
// // //           <Box sx={{ mb: 2 }}>
// // //             <TextField
// // //               label="Employee ID"
// // //               value={employeeId}
// // //               onChange={(e) => setEmployeeId(e.target.value)}
// // //               fullWidth
// // //               required
// // //             />
// // //           </Box>
// // //           <Box sx={{ mb: 2 }}>
// // //             <TextField
// // //               label="Basic Salary"
// // //               type="number"
// // //               value={basicSalary}
// // //               onChange={(e) => setBasicSalary(e.target.value)}
// // //               fullWidth
// // //               required
// // //             />
// // //           </Box>
// // //           <Button type="submit" variant="contained" color="primary">
// // //             Submit Salary
// // //           </Button>
// // //         </form>
// // //       </CustomTabPanel>

// // //       <CustomTabPanel value={value} index={1}>
// // //         <AddAllowance employeeId={employeeId} />
// // //       </CustomTabPanel>

// // //       <CustomTabPanel value={value} index={2}>
// // //         <AddDeduction employeeId={employeeId} />
// // //       </CustomTabPanel>
// // //     </Box>
// // //   );
// // // };

// // // export default AddSalary;



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   Tabs,
// //   Tab
// // } from '@mui/material';
// // import AddAllowance from './AddAllowance';
// // import AddDeduction from './AddDeduction';

// // function CustomTabPanel({ children, value, index }) {
// //   return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
// // }

// // function a11yProps(index) {
// //   return {
// //     id: `tab-${index}`,
// //     'aria-controls': `tabpanel-${index}`,
// //   };
// // }

// // const AddSalary = () => {
// //   const [employeeId, setEmployeeId] = useState('');
// //   const [basicSalary, setBasicSalary] = useState('');
// //   const [responseMsg, setResponseMsg] = useState('');
// //   const [value, setValue] = useState(0);

// //   const token = localStorage.getItem('token');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await axios.post(
// //         'http://localhost:8000/api/salary/create/',
// //         {
// //           employee: employeeId,
// //           basic_salary: parseFloat(basicSalary),
// //         },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );
// //       setResponseMsg('Salary added successfully!');
// //       setBasicSalary('');
// //     } catch (error) {
// //       const errMsg = error.response?.data?.error || 'Failed to add salary.';
// //       setResponseMsg(errMsg);
// //     }
// //   };

// //   const handleTabChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   return (
// //     <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, bgcolor: '#fff', boxShadow: 3, borderRadius: 2, p: 3 }}>
// //       {responseMsg && (
// //         <Typography variant="subtitle1" sx={{ color: 'green', mb: 2, textAlign: 'center' }}>
// //           {responseMsg}
// //         </Typography>
// //       )}

// //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// //         <Tabs value={value} onChange={handleTabChange} aria-label="Add Salary Tabs" variant="fullWidth">
// //           <Tab label="Add Salary" {...a11yProps(0)} />
// //           <Tab label="Add Allowance" {...a11yProps(1)} />
// //           <Tab label="Add Deduction" {...a11yProps(2)} />
// //         </Tabs>
// //       </Box>

// //       <CustomTabPanel value={value} index={0}>
// //         <form onSubmit={handleSubmit}>
// //           <Box sx={{ mb: 3 }}>
// //             <TextField
// //               label="Employee ID"
// //               value={employeeId}
// //               onChange={(e) => setEmployeeId(e.target.value)}
// //               fullWidth
// //               required
// //             />
// //           </Box>
// //           <Box sx={{ mb: 3 }}>
// //             <TextField
// //               label="Basic Salary"
// //               type="number"
// //               value={basicSalary}
// //               onChange={(e) => setBasicSalary(e.target.value)}
// //               fullWidth
// //               required
// //             />
// //           </Box>
// //           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
// //             Submit Salary
// //           </Button>
// //         </form>
// //       </CustomTabPanel>

// //       <CustomTabPanel value={value} index={1}>
// //         <AddAllowance employeeId={employeeId} />
// //       </CustomTabPanel>

// //       <CustomTabPanel value={value} index={2}>
// //         <AddDeduction employeeId={employeeId} />
// //       </CustomTabPanel>
// //     </Box>
// //   );
// // };

// // export default AddSalary;




// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   Tabs,
// //   Tab
// // } from '@mui/material';
// // import AddAllowance from './AddAllowance';
// // import AddDeduction from './AddDeduction';

// // function CustomTabPanel({ children, value, index }) {
// //   return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
// // }

// // function a11yProps(index) {
// //   return {
// //     id: `tab-${index}`,
// //     'aria-controls': `tabpanel-${index}`,
// //   };
// // }

// // const AddSalary = () => {
// //   const [employeeId, setEmployeeId] = useState('');
// //   const [basicSalary, setBasicSalary] = useState('');
// //   const [responseMsg, setResponseMsg] = useState('');
// //   const [value, setValue] = useState(0);
// //   const [isHR, setIsHR] = useState(false);

// //   const token = localStorage.getItem('token');

// //   useEffect(() => {
// //     // Get user profile to auto-fill employee ID
// //     const fetchProfile = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:8000/api/users/', {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         const user = res.data;
// //         if (user.role === 'HR') {
// //           setIsHR(true); // Show input field for HR
// //         } else {
// //           setEmployeeId(user.id); // Auto-fill for employee
// //         }
// //       } catch (err) {
// //         console.error('Failed to fetch profile', err);
// //       }
// //     };

// //     fetchProfile();
// //   }, [token]);

// //   const handleTabChange = (event, newValue) => {
// //     setValue(newValue);
// //     setResponseMsg('');
// //   };

// //   const handleSalarySubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post(
// //         'http://localhost:8000/api/salary/create/',
// //         {
// //           employee: employeeId,
// //           basic_salary: parseFloat(basicSalary),
// //         },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );
// //       setResponseMsg('✅ Salary added successfully!');
// //       setBasicSalary('');
// //     } catch (error) {
// //       const errMsg = error.response?.data?.error || '❌ Failed to add salary.';
// //       setResponseMsg(errMsg);
// //     }
// //   };

// //   return (
// //     <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, bgcolor: '#fff', boxShadow: 3, borderRadius: 2, p: 3 }}>
// //       {responseMsg && (
// //         <Typography variant="subtitle1" sx={{ color: 'green', mb: 2, textAlign: 'center' }}>
// //           {responseMsg}
// //         </Typography>
// //       )}

// //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// //         <Tabs value={value} onChange={handleTabChange} variant="fullWidth">
// //           <Tab label="Add Salary" {...a11yProps(0)} />
// //           <Tab label="Add Allowance" {...a11yProps(1)} />
// //           <Tab label="Add Deduction" {...a11yProps(2)} />
// //         </Tabs>
// //       </Box>

// //       <CustomTabPanel value={value} index={0}>
// //         <form onSubmit={handleSalarySubmit}>
// //           {isHR && (
// //             <Box sx={{ mb: 3 }}>
// //               <TextField
// //                 label="Employee ID"
// //                 value={employeeId}
// //                 onChange={(e) => setEmployeeId(e.target.value)}
// //                 fullWidth
// //                 required
// //               />
// //             </Box>
// //           )}

// //           <Box sx={{ mb: 3 }}>
// //             <TextField
// //               label="Basic Salary"
// //               type="number"
// //               value={basicSalary}
// //               onChange={(e) => setBasicSalary(e.target.value)}
// //               fullWidth
// //               required
// //             />
// //           </Box>
// //           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
// //             Add Salary
// //           </Button>
// //         </form>
// //       </CustomTabPanel>

// //       <CustomTabPanel value={value} index={1}>
// //         <AddAllowance employeeId={employeeId} />
// //       </CustomTabPanel>

// //       <CustomTabPanel value={value} index={2}>
// //         <AddDeduction employeeId={employeeId} />
// //       </CustomTabPanel>
// //     </Box>
// //   );
// // };

// // export default AddSalary;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   Tabs,
// //   Tab
// // } from '@mui/material';
// // import AddAllowance from './AddAllowance';
// // import AddDeduction from './AddDeduction';

// // function CustomTabPanel({ children, value, index }) {
// //   return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
// // }

// // function a11yProps(index) {
// //   return {
// //     id: `tab-${index}`,
// //     'aria-controls': `tabpanel-${index}`,
// //   };
// // }

// // const AddSalary = () => {
// //   const [employeeId, setEmployeeId] = useState('');
// //   const [basicSalary, setBasicSalary] = useState('');
// //   const [responseMsg, setResponseMsg] = useState('');
// //   const [value, setValue] = useState(0);
// //   const [isHR, setIsHR] = useState(false);

// //   const token = localStorage.getItem('token');

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:8000/api/users/', {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         const user = res.data;
// //         if (user.role === 'HR') {
// //           setIsHR(true);
// //         } else {
// //           setEmployeeId(user.id);  // This is User.id
// //         }
// //       } catch (err) {
// //         console.error('Failed to fetch profile', err);
// //       }
// //     };

// //     fetchProfile();
// //   }, [token]);

// //   const handleTabChange = (event, newValue) => {
// //     setValue(newValue);
// //     setResponseMsg('');
// //   };

// //   const handleSalarySubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post(
// //         'http://localhost:8000/api/salary/create/',
// //         {
// //           employee: employeeId,
// //           basic_salary: parseFloat(basicSalary),
// //         },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );
// //       setResponseMsg('✅ Salary added successfully!');
// //       setBasicSalary('');
// //     } catch (error) {
// //       const errMsg = error.response?.data?.error || '❌ Failed to add salary.';
// //       setResponseMsg(errMsg);
// //     }
// //   };

// //   return (
// //     <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, bgcolor: '#fff', boxShadow: 3, borderRadius: 2, p: 3 }}>
// //       {responseMsg && (
// //         <Typography variant="subtitle1" sx={{ color: 'green', mb: 2, textAlign: 'center' }}>
// //           {responseMsg}
// //         </Typography>
// //       )}

// //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// //         <Tabs value={value} onChange={handleTabChange} variant="fullWidth">
// //           <Tab label="Add Salary" {...a11yProps(0)} />
// //           <Tab label="Add Allowance" {...a11yProps(1)} />
// //           <Tab label="Add Deduction" {...a11yProps(2)} />
// //         </Tabs>
// //       </Box>

// //       <CustomTabPanel value={value} index={0}>
// //         <form onSubmit={handleSalarySubmit}>
// //           {isHR && (
// //             <Box sx={{ mb: 3 }}>
// //               <TextField
// //                 label="Employee ID"
// //                 value={employeeId}
// //                 onChange={(e) => setEmployeeId(e.target.value)}
// //                 fullWidth
// //                 required
// //               />
// //             </Box>
// //           )}

// //           <Box sx={{ mb: 3 }}>
// //             <TextField
// //               label="Basic Salary"
// //               type="number"
// //               value={basicSalary}
// //               onChange={(e) => setBasicSalary(e.target.value)}
// //               fullWidth
// //               required
// //             />
// //           </Box>
// //           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
// //             Add Salary
// //           </Button>
// //         </form>
// //       </CustomTabPanel>

// //       <CustomTabPanel value={value} index={1}>
// //         <AddAllowance employeeId={employeeId} />
// //       </CustomTabPanel>

// //       <CustomTabPanel value={value} index={2}>
// //         <AddDeduction employeeId={employeeId} />
// //       </CustomTabPanel>
// //     </Box>
// //   );
// // };

// // export default AddSalary;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Tabs,
//   Tab
// } from '@mui/material';
// import AddAllowance from './AddAllowance';
// import AddDeduction from './AddDeduction';

// function CustomTabPanel({ children, value, index }) {
//   return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
// }

// function a11yProps(index) {
//   return {
//     id: `tab-${index}`,
//     'aria-controls': `tabpanel-${index}`,
//   };
// }

// const AddSalary = () => {
//   const [employee_id, setEmployeeId] = useState('');
//   const [basicSalary, setBasicSalary] = useState('');
//   const [responseMsg, setResponseMsg] = useState('');
//   const [value, setValue] = useState(0);
//   const [isHR, setIsHR] = useState(false);

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         const user = res.data;
//         if (user.role.toLowerCase() === 'hr') {
//           setIsHR(true);
//         }
//       } catch (err) {
//         console.error('Failed to fetch profile', err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//     setResponseMsg('');
//   };

//   const handleSalarySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         'http://localhost:8000/api/salary/create/',
//         {
//           employee: parseInt(employee_id), // 👈 Convert string to integer
//           basic_salary: parseFloat(basicSalary),
//           allowances: 0,
//           deductions: 0,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setResponseMsg('✅ Salary added successfully!');
//       setBasicSalary('');
//       setEmployeeId('');
//     } catch (error) {
//       const errMsg = error.response?.data?.error || '❌ Failed to add salary.';
//       setResponseMsg(errMsg);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, bgcolor: '#fff', boxShadow: 3, borderRadius: 2, p: 3 }}>
//       {responseMsg && (
//         <Typography variant="subtitle1" sx={{ color: 'green', mb: 2, textAlign: 'center' }}>
//           {responseMsg}
//         </Typography>
//       )}

//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleTabChange} variant="fullWidth">
//           <Tab label="Add Salary" {...a11yProps(0)} />
//           <Tab label="Add Allowance" {...a11yProps(1)} />
//           <Tab label="Add Deduction" {...a11yProps(2)} />
//         </Tabs>
//       </Box>

//       <CustomTabPanel value={value} index={0}>
//         <form onSubmit={handleSalarySubmit}>
//           {isHR && (
//             <Box sx={{ mb: 3 }}>
//               <TextField
//                 label="Employee ID"
//                 value={employee_id}
//                 onChange={(e) => setEmployeeId(e.target.value)}
//                 fullWidth
//                 required
//               />
//             </Box>
//           )}

//           <Box sx={{ mb: 3 }}>
//             <TextField
//               label="Basic Salary"
//               type="number"
//               value={basicSalary}
//               onChange={(e) => setBasicSalary(e.target.value)}
//               fullWidth
//               required
//             />
//           </Box>
//           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
//             Add Salary
//           </Button>
//         </form>
//       </CustomTabPanel>

//       <CustomTabPanel value={value} index={1}>
//         <AddAllowance employeeId={employee_id} />
//       </CustomTabPanel>

//       <CustomTabPanel value={value} index={2}>
//         <AddDeduction employeeId={employee_id} />
//       </CustomTabPanel>
//     </Box>
//   );
// };

// export default AddSalary;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Button, TextField, Typography } from '@mui/material';

// const AddSalary = () => {
//   const [employeeId, setEmployeeId] = useState('');
//   const [basicSalary, setBasicSalary] = useState('');
//   const [allowances, setAllowances] = useState('');
//   const [deductions, setDeductions] = useState('');
//   const [responseMsg, setResponseMsg] = useState('');
//   const [isHR, setIsHR] = useState(false);

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:8000/api/users/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const user = res.data;
//         if (user.role.toLowerCase() === 'hr') {
//           setIsHR(true);
//         }
//       } catch (err) {
//         console.error('Failed to fetch profile', err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isHR && (!employeeId || isNaN(parseInt(employeeId)))) {
//       setResponseMsg("❌ Please enter a valid Employee ID.");
//       return;
//     }

//     try {
//       const payload = {
//         basic_salary: parseFloat(basicSalary),
//         allowances: parseFloat(allowances),
//         deductions: parseFloat(deductions),
//       };

//       if (isHR) {
//         payload.employee = parseInt(employeeId);
//       }

//       await axios.post(
//         'http://localhost:8000/api/salary/create/',
//         payload,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setResponseMsg('✅ Salary added successfully!');
//       setEmployeeId('');
//       setBasicSalary('');
//       setAllowances('');
//       setDeductions('');
//     } catch (error) {
//       const errMsg = error.response?.data?.error || '❌ Failed to add salary.';
//       setResponseMsg(errMsg);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4, bgcolor: '#fff', boxShadow: 3, borderRadius: 2, p: 3 }}>
//       {responseMsg && (
//         <Typography variant="subtitle1" sx={{ color: responseMsg.startsWith("✅") ? 'green' : 'red', mb: 2, textAlign: 'center' }}>
//           {responseMsg}
//         </Typography>
//       )}

//       <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>Add Complete Salary</Typography>

//       <form onSubmit={handleSubmit}>
//         {isHR && (
//           <Box sx={{ mb: 3 }}>
//             <TextField
//               label="Employee"
//               placeholder="Enter Employee ID"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               fullWidth
//               required
//             />
//           </Box>
//         )}

//         <Box sx={{ mb: 3 }}>
//           <TextField
//             label="Basic Salary"
//             type="number"
//             value={basicSalary}
//             onChange={(e) => setBasicSalary(e.target.value)}
//             fullWidth
//             required
//           />
//         </Box>

//         <Box sx={{ mb: 3 }}>
//           <TextField
//             label="Allowances"
//             type="number"
//             value={allowances}
//             onChange={(e) => setAllowances(e.target.value)}
//             fullWidth
//             required
//           />
//         </Box>

//         <Box sx={{ mb: 3 }}>
//           <TextField
//             label="Deductions"
//             type="number"
//             value={deductions}
//             onChange={(e) => setDeductions(e.target.value)}
//             fullWidth
//             required
//           />
//         </Box>

//         <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
//           Submit Salary
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default AddSalary;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddSalary = () => {
  const { id } = useParams(); // Get employee ID from URL parameter
  const navigate = useNavigate();
  
  const [basicSalary, setBasicSalary] = useState('');
  const [allowances, setAllowances] = useState('');
  const [deductions, setDeductions] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!id || isNaN(parseInt(id))) {
      setResponseMsg("❌ Invalid or missing Employee ID.");
      return;
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!basicSalary || !allowances || !deductions) {
      setResponseMsg("❌ Please fill in all fields.");
      return;
    }

    try {
      const payload = {
        basic_salary: parseFloat(basicSalary),
        allowances: parseFloat(allowances),
        deductions: parseFloat(deductions),
        employee: parseInt(id), // Use the employee ID from URL
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
      setAllowances('');
      setDeductions('');
      setTimeout(() => navigate('/employees'), 1500); // Redirect after success
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

      <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>Add Complete Salary</Typography>

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

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Allowances"
            type="number"
            value={allowances}
            onChange={(e) => setAllowances(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Deductions"
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
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
