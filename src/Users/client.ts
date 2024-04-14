import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export interface User { _id: string; username: string; password: string; role: string;
  firstName: string, lastName: string };  

const axiosWithCredentials = axios.create({
  baseURL: `${API_BASE}/api`,
  withCredentials: true,
});

export const fetchAllUsers = async () => {
  const response = await axiosWithCredentials.get("/users");
  return response.data;
};

export const registerUser = async (user: any) => {
  const response = await axiosWithCredentials.post(`/users/signup`, user);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post("/users/profile");
  return response.data;
};

export const loginUser = async (user: any) => {
  const response = await axiosWithCredentials.post(`/users/signin`, user);
  return response.data;
};

export const logoutUser = async () => {
  const response = await axiosWithCredentials.post("/users/logout");
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`/users/${user._id}`, user);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(`/users/`, user);
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await axiosWithCredentials.delete(`/users/${user._id}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axiosWithCredentials.get(`/users/${id}`);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  console.log("Role type filter call");
  const response = await axiosWithCredentials.get(`/users/?role=${role}`);
  return response.data;
};