import axios from "../axios";

const adminService = {
  /**
   * Đăng nhập hệ thống
   * {
   *  "username": "string",
   *  "password": "string"
   * }
   */
  login(loginBody) {
    return axios.post(`/admin/login`, loginBody);
  },
};

export default adminService;
