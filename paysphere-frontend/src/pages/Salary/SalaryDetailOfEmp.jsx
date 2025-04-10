// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // // optional for styling

// // const SalaryDetailOfEmp = () => {
// //   const { id } = useParams(); // employee ID from route
// //   const [salaryHistory, setSalaryHistory] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchSalaryHistory = async () => {
// //       const token = localStorage.getItem('token');
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:8000/api/salary/get_employee_payroll_history/${id}/`,
// //           {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //             },
// //           }
// //         );
// //         setSalaryHistory(response.data);
// //       } catch (error) {
// //         console.error('Failed to fetch salary history', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchSalaryHistory();
// //   }, [id]);

// //   return (
// //     <div className="salary-history-container">
// //       <h2>Salary History</h2>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : salaryHistory.length === 0 ? (
// //         <p>No salary records found.</p>
// //       ) : (
// //         <table className="salary-table">
// //           <thead>
// //             <tr>
// //               <th>Month</th>
// //               <th>Basic Salary</th>
// //               <th>Allowances</th>
// //               <th>Deductions</th>
// //               <th>Gross Salary</th>
// //               <th>Net Salary</th>
// //               <th>Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {salaryHistory.map((salary, index) => {
// //               const date = new Date(salary.created_at);
// //               const month = date.toLocaleString('default', { month: 'short', year: 'numeric' });

// //               return (
// //                 <tr key={index}>
// //                   <td>{month}</td>
// //                   <td>₹{salary.basic_salary}</td>
// //                   <td>₹{salary.total_allowances}</td>
// //                   <td>₹{salary.total_deductions}</td>
// //                   <td>₹{salary.gross_salary}</td>
// //                   <td>₹{salary.net_salary}</td>
// //                   <td style={{ color: salary.net_salary ? 'green' : 'red' }}>
// //                     {salary.net_salary ? 'Generated' : 'Pending'}
// //                   </td>
// //                 </tr>
// //               );
// //             })}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default SalaryDetailOfEmp;



// // src/pages/Salary/SalaryDetailOfEmp.jsx


// // import './SalaryDetailOfEmp.css';
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // const SalaryDetailOfEmp = () => {
// //   const { id } = useParams();
// //   const [salaryHistory, setSalaryHistory] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');

// //     const fetchSalaryHistory = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:8000/api/salary/employee_salary_status_list/`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setSalaryHistory(res.data);
// //       } catch (error) {
// //         console.error('Failed to fetch salary history', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchSalaryHistory();
// //   }, [id]);

// //   return (
// //     <div className="salary-history-container">
// //       <h2>Salary History</h2>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : salaryHistory.length === 0 ? (
// //         <p>No salary records found for this employee.</p>
// //       ) : (
// //         <table className="salary-history-table">
// //           <thead>
// //             <tr>
// //               <th>Month</th>
// //               <th>Year</th>
// //               <th>Basic</th>
// //               <th>HRA</th>
// //               <th>Allowances</th>
// //               <th>Deductions</th>
// //               <th>Net Salary</th>
// //               <th>Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {salaryHistory.map((record, index) => (
// //               <tr key={index}>
// //                 <td>{record.month}</td>
// //                 <td>{record.year}</td>
// //                 <td>{record.basic}</td>
// //                 <td>{record.hra}</td>
// //                 <td>{record.allowances}</td>
// //                 <td>{record.deductions}</td>
// //                 <td>{record.net_salary}</td>
// //                 <td>{record.is_paid ? 'Paid' : 'Pending'}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default SalaryDetailOfEmp;



// // import './SalaryDetailOfEmp.css';
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // const SalaryDetailOfEmp = () => {
// //   const { id } = useParams(); // Get employee ID from URL
// //   const [salaryHistory, setSalaryHistory] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');

// //     const fetchSalaryHistory = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:8000/api/salary/employee_salary_history/${id}/`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setSalaryHistory(res.data);
// //       } catch (error) {
// //         console.error('Failed to fetch salary history', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (id) fetchSalaryHistory();
// //   }, [id]);

// //   return (
// //     <div className="salary-history-container">
// //       <h2>Salary History</h2>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : salaryHistory.length === 0 ? (
// //         <p>No salary records found for this employee.</p>
// //       ) : (
// //         <table className="salary-history-table">
// //   <thead>
// //     <tr>
// //       <th>Month</th>
// //       <th>Year</th>
// //       <th>Basic Salary</th>
// //       <th>Allowances</th>
// //       <th>Deductions</th>
// //       <th>Gross Salary</th>
// //       <th>Net Salary</th>
// //       <th>Status</th>
// //       <th>Payment Date</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     {salaryHistory.map((record, index) => (
// //       <tr key={index}>
// //         <td>{record.month || '—'}</td>
// //         <td>{record.year || '—'}</td>
// //         <td>{record.basic_salary || 0}</td>
// //         <td>{record.allowances || 0}</td>
// //         <td>{record.deductions || 0}</td>
// //         <td>{record.gross_salary || 0}</td>
// //         <td>{record.net_salary || 0}</td>
// //         <td>{record.salary_status}</td>
// //         <td>{record.payment_date ? new Date(record.payment_date).toLocaleDateString() : '—'}</td>
// //       </tr>
// //     ))}
// //   </tbody>
// // </table>

// //       )}
// //     </div>
// //   );
// // };

// // export default SalaryDetailOfEmp;



// // import './SalaryDetailOfEmp.css';
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // const SalaryDetailOfEmp = () => {
// //   const { id } = useParams();
// //   const [salaryHistory, setSalaryHistory] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     const currentDate = new Date();
// //     const currentMonth = currentDate.getMonth() + 1; // 0-indexed
// //     const currentYear = currentDate.getFullYear();

// //     const fetchSalaryHistory = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:8000/api/salary/employee_salary_history/${id}/`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         const filteredData = res.data.filter(record => {
// //           return (
// //             parseInt(record.month) === currentMonth &&
// //             parseInt(record.year) === currentYear
// //           );
// //         });

// //         setSalaryHistory(filteredData);
// //       } catch (error) {
// //         console.error('Failed to fetch salary history', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (id) fetchSalaryHistory();
// //   }, [id]);

// //   return (
// //     <div className="salary-history-container">
// //       <h2>This Month's Salary History</h2>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : salaryHistory.length === 0 ? (
// //         <p>No salary records found for this employee this month.</p>
// //       ) : (
// //         <table className="salary-history-table">
// //           <thead>
// //             <tr>
// //               <th>Month</th>
// //               <th>Year</th>
// //               <th>Basic Salary</th>
// //               <th>Allowances</th>
// //               <th>Deductions</th>
// //               <th>Gross Salary</th>
// //               <th>Net Salary</th>
// //               <th>Status</th>
// //               <th>Payment Date</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {salaryHistory.map((record, index) => (
// //               <tr key={index}>
// //                 <td>{record.month || '—'}</td>
// //                 <td>{record.year || '—'}</td>
// //                 <td>{record.basic_salary || 0}</td>
// //                 <td>{record.allowances || 0}</td>
// //                 <td>{record.deductions || 0}</td>
// //                 <td>{record.gross_salary || 0}</td>
// //                 <td>{record.net_salary || 0}</td>
// //                 <td>{record.salary_status}</td>
// //                 <td>{record.payment_date ? new Date(record.payment_date).toLocaleDateString() : '—'}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default SalaryDetailOfEmp;


// import './SalaryDetailOfEmp.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const SalaryDetailOfEmp = () => {
//   const { id } = useParams();
//   const [salaryHistory, setSalaryHistory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth(); // 0-indexed
//     const currentYear = currentDate.getFullYear();

//     const fetchSalaryHistory = async () => {
//       try {
//         const res = await axios.get(
//           `http://127.0.0.1:8000/api/salary/employee_salary_history/${id}/`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         const filteredData = res.data.filter(record => {
//           const recordDate = new Date(record.created_at);
//           const recordMonth = recordDate.getMonth();
//           const recordYear = recordDate.getFullYear();

//           return recordMonth === currentMonth && recordYear === currentYear;
//         });

//         setSalaryHistory(filteredData);
//       } catch (error) {
//         console.error('Failed to fetch salary history', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchSalaryHistory();
//   }, [id]);

//   return (
//     <div className="salary-history-container">
//       <h2>This Month's Salary History</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : salaryHistory.length === 0 ? (
//         <p>No salary records found for this employee this month.</p>
//       ) : (
//         <table className="salary-history-table">
//           <thead>
//             <tr>
//               <th>Month</th>
//               <th>Year</th>
//               <th>Basic Salary</th>
//               <th>Allowances</th>
//               <th>Deductions</th>
//               <th>Gross Salary</th>
//               <th>Net Salary</th>
//               <th>Status</th>
//               <th>Payment Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {salaryHistory.map((record, index) => {
//               const recordDate = new Date(record.created_at);
//               const month = recordDate.toLocaleString('default', { month: 'long' });
//               const year = recordDate.getFullYear();

//               return (
//                 <tr key={index}>
//                   <td>{month}</td>
//                   <td>{year}</td>
//                   <td>{record.basic_salary || 0}</td>
//                   <td>{record.allowances || 0}</td>
//                   <td>{record.deductions || 0}</td>
//                   <td>{record.gross_salary || 0}</td>
//                   <td>{record.net_salary || 0}</td>
//                   <td>{record.salary_status}</td>
//                   <td>{record.payment_date ? new Date(record.payment_date).toLocaleDateString() : '—'}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default SalaryDetailOfEmp;



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
  const handleGeneratePayslip = async () => {
    setGeneratingPayslip(true);
    setMessage(''); // Clear any previous messages
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/salary/generate_payslip/${id}/`, // Use employee_id (id)
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'blob', // To handle file download
        }
      );
  
      // Trigger the download of the generated payslip
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'payslip.pdf'; // Name of the file
      link.click();
  
      setMessage('Payslip generated successfully and download started.');
    } catch (error) {
      console.error('Failed to generate payslip', error);
      setMessage('Failed to generate payslip. Please try again.');
    } finally {
      setGeneratingPayslip(false);
    }
  };
  

  return (
    <div className="salary-history-container">
      <h2>This Month's Salary History</h2>
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
                      {/* Generate Payslip Button */}
                      <button
                        className="generate-payslip-btn"
                        onClick={() => handleGeneratePayslip(record.id)}
                        disabled={generatingPayslip}
                      >
                        {generatingPayslip ? 'Generating...' : 'Generate Payslip'}
                      </button>
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
