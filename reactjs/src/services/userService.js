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
const getGender = (id) => {
  return axios.get(`/api/get-all-code?type=${id}`);
};
const saveBlog = (data) => {
  return axios.post(`/api/create-blog`, data);
};
const getBlogs = (data) => {
  return axios.get(`/api/get-blog`, data);
};
const getBlogByIdSV = (id) => {
  return axios.get(`/api/get-blog-by-id?id=${id}`);
};
const deleteBlog = (id) => {
  return axios.get(`/api/delete-blog?id=${id}`);
};
const getContacts = (data) => {
  return axios.get(`/api/get-contacts`, data);
};
const deleteContact = (id) => {
  return axios.get(`/api/delete-contacts?id=${id}`);
};

export {
  handleLoginApi,
  CreateNewUser,
  getUser,
  editUser,
  deleteUser,
  sendEmail,
  sendNewLetter,
  getGender,
  saveBlog,
  getBlogs,
  deleteBlog,
  getBlogByIdSV,
  getContacts,
  deleteContact,
};
