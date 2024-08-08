// src/api/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: 
	{
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token)
	{
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export const registerUser = async (userData) => {
	const response = await api.post("/users/register", userData);
	return response.data;
};

export const loginUser = async (credentials) => {
	const response = await api.post("/users/login", credentials);
	return response.data;
};

export const getAllUsers = async () => {
	const response = await api.get("/users");
	return response.data;
};

export const getUserById = async (id) => {
	const response = await api.get(`/users/${id}`);
	return response.data;
};

export const updateUserById = async (id, userData) => {
	const response = await api.put(`/users/${id}`, userData);
	return response.data;
};

export const deleteUserById = async (id) => {
	const response = await api.delete(`/users/${id}`);
	return response.data;
};

export default api;
