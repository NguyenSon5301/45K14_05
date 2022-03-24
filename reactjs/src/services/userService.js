import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("api/login", { email, password });
};
const CreateNewUser = (data) => {
  return axios.post("/api/Register", data);
};
const getUser = (id) => {
  return axios.get(`/api/get-all-users?id=${id}`);
};
const deleteUser = (id) => {
  return axios.delete(`/api/delete-user`, { data: { id } });
};
const editUser = (data) => {
  return axios.put(`/api/edit-user`, data);
};
const sendEmail = (data) => {
  return axios.post(`/api/send-gmail`, data);
};
const sendNewLetter = (data) => {
  return axios.post(`/api/send-newLetter`, data);
};
export {
  handleLoginApi,
  CreateNewUser,
  getUser,
  editUser,
  deleteUser,
  sendEmail,
  sendNewLetter,
};
