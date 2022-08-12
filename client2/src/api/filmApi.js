import axiosClient from "./axiosClient";

const filmApi = {
  async getAll() {
    const url = "/api/movies/";

    return axiosClient.get(url);
  },
  async getLoai(name) {
    const url = `/api/theloai/${name}`;
    return axiosClient.get(url);
  },
  creatUser(data) {
    const url = "/api/movies/";
    const myToken = localStorage.getItem("token");
    // console.log(myToken);
    console.log("my token", myToken);
    return axiosClient.post(url, data);
  },
  updateUser(data, id) {
    const url = `/api/movies/${id}`;
    return axiosClient.put(url, data);
  },
  async Delete(id) {
    const url = `/api/movies/${id}`;
    return axiosClient.delete(url);
  },
};
export default filmApi;
