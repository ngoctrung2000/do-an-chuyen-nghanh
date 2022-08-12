import axiosClient from "./axiosClient";
import { useDispatch } from "react-redux";
const userApi = {
  register(data) {
    //dang ky
    const url = "/api/auth/sign-up";
    return axiosClient.post(url, data);
  },
  login(data) {
    //dang nhap
    const url = "/api/auth/sign-in";
    return axiosClient.post(url, data);
  },
  async getAll() {
    const url = "/api/users/";

    return axiosClient.get(url);
  },
  creatUser(data) {
    const url = "/api/users/";
    const myToken = localStorage.getItem("token");
    // console.log(myToken);
    console.log("my token", myToken);

    return axiosClient.post(url, data);
  },
  updateUser(data, id) {
    const url = `/api/users/${id}`;
    return axiosClient.put(url, data);
  },
  async Delete(id) {
    const url = `/api/users/${id}`;
    return axiosClient.delete(url);
  },
};
export default userApi;
