import axiosClient from "./axiosClient";
const DatVeApi = {
  creatDatVe(data) {
    const url = "/api/datve/";

    return axiosClient.post(url, data);
  },
  async getAll() {
    const url = "/api/datve/admin";
    return axiosClient.get(url);
  },
  async getLichSuDatVe(id) {
    const url = `/api/datve/${id}`;
    return axiosClient.get(url);
  },
  updateDatVe(data, id) {
    const url = `/api/datve/${id}`;
    return axiosClient.put(url, data);
  },
  async Delete(id) {
    const url = `/api/datve/${id}`;
    return axiosClient.delete(url);
  },
};
export default DatVeApi;
