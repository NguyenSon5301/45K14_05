import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("api/login", { email, password });
};
const CreateNewUser = (data) => {
  return axios.post("/api/Register", data);
};

export { handleLoginApi, CreateNewUser };
