import axiosClient from "./axiosClient";
const lichchieuApi = {
  creatLichChieu(data) {
    const url = "/api/lichchieu/";
    return axiosClient.post(url, data);
  },
  async getAll() {
    const url = "/api/lichchieu/admin";
    return axiosClient.get(url);
  },
  async getLichChieuTheLoai(name) {
    console.log("name la: ", name);
    const url = `/api/lichchieu/${name}`;
    return axiosClient.get(url);
  },
  async getChiTietLichChieu(id) {
    console.log("id la: ", id);
    const url = `/api/lichchieu/${id}`;
    return axiosClient.get(url);
  },
  async getChiTietPhimLichChieu(id) {
    // const url = "/api/lichchieu/phimle";
    console.log("id la: ", id);
    const url = `/api/lichchieu/phim/${id}`;
    return axiosClient.get(url);
  },
  updateLichChieu(data, id) {
    const url = `/api/lichchieu/${id}`;
    return axiosClient.put(url, data);
  },
  async Delete(id) {
    const url = `/api/lichchieu/${id}`;
    return axiosClient.delete(url);
  },
};
export default lichchieuApi;
