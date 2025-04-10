// import axios from "axios";

// // Base URL for the backend API
// const API_BASE_URL = "http://127.0.0.1:8000/api";

// // Get the authentication token from localStorage
// const getAuthToken = () => localStorage.getItem("token");

// // Create an Axios instance with default headers
// const apiClient = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// // Add Authorization token dynamically before each request
// apiClient.interceptors.request.use((config) => {
//     const token = getAuthToken();
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// // **Authentication APIs**
// export const login = async (credentials) => {
//     return apiClient.post("/login/", credentials);
// };

// export const registerUser = async (userData) => {
//     return apiClient.post("/register/", userData);
// };

// // **Employee Management APIs (HR Only)**
// export const getEmployees = async () => {
//     return apiClient.get("/users/");
// };

// export const getEmployeeById = async (id) => {
//     return apiClient.get(`/users/${id}/`);
// };

// export const createEmployee = async (employeeData) => {
//     return apiClient.post("/users/", employeeData);
// };


// export const updateEmployee = async (id, updatedData) => {
//     return apiClient.patch(`/api/update-user/${id}/`, updatedData);
// };

// export const deleteEmployee = async (id) => {
//     return apiClient.delete(`/api/delete-user/${id}/`);
// };


// // **Leave Management APIs**
// export const applyLeave = async (leaveData) => {
//     return apiClient.post("/leave/apply/", leaveData);
// };


// export const getLeaveHistory = async () => {
//     return apiClient.get("/api/leave/all/");
// };


// export const getPendingLeaves = async () => {
//     return apiClient.get("/api/leave/pending/");
// };


// export const approveLeave = async (leaveId) => {
//     return apiClient.post(`/api/leave/approval/${leaveId}/`, { status: "approved" });
// };

// export const rejectLeave = async (leaveId) => {
//     return apiClient.post(`/api/leave/approval/${leaveId}/`, { status: "rejected" });
// };


// // **User Profile APIs**
// export const getMyProfile = async () => {
//     return apiClient.get("/profile/");
// };

// export const updateMyProfile = async (profileData) => {
//     return apiClient.patch("/profile/update/", profileData);
// };

// // **Salary APIs**
// export const getSalaryDetails = async () => {
//     return apiClient.get("/salary/details/");
// };

// export const getSalaryHistory = async () => {
//     return apiClient.get("/salary/history/");
// };

// export default apiClient;

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export default api;
