import React from "react";
import PropTypes from "prop-types";
import "./css/myCSS.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import filmApi from "../../../api/filmApi";
import lichchieuApi from "../../../api/lichchieuApi";
import { useHistory, useLocation } from "react-router";
import { useSnackbar } from "notistack";
FilmItem.prototype = {
  list: PropTypes.array,
};
FilmItem.defaultProps = {
  list: [],
};
function FilmItem(props) {
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [xoa, setXoa] = useState(0);
  const [filmUpdate, setFilmUpdate] = useState({
    tenphim: "",
    mota: "",
    theloai: "",
    hinhanh: null,
  });
  const [LichChieuUpdate, setLichChieuUpdate] = useState({
    giochieu: "",
    ngaychieu: "",
    rapchieu: 0,
    movieId: 0,
  });
  const list = useSelector((state) => {
    return state.film?.filmList;
  });
  const deleteFilm = async (id) => {
    console.log("item delete: ", id);
    await filmApi.Delete(id);

    window.location.reload();
    enqueueSnackbar("xóa thành công", { variant: "success" });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilmUpdate({
      ...filmUpdate, // để đủ thuộc tính
      [name]: value,
    });
    console.log(filmUpdate);
  };
  const handleChangeLichChieu = (event) => {
    const { name, value } = event.target;
    setLichChieuUpdate({
      ...LichChieuUpdate, // để đủ thuộc tính
      [name]: value,
    });
    console.log(LichChieuUpdate);
  };
  const handleChangeIdmovie = (id) => {
    setLichChieuUpdate({
      ...LichChieuUpdate, // để đủ thuộc tính
      movieId: id,
    });
    console.log(LichChieuUpdate);
  };
  const handleImagePreview = (e) => {
    let image_as_files = e.target.files[0];
    const { name } = e.target;
    setFilmUpdate({
      ...filmUpdate,
      [name]: image_as_files,
    });
  };
  const onhandleUpdate = (values, event) => {
    let formData = new FormData();
    const token = localStorage.getItem("token");

    Object.keys(filmUpdate).forEach((key) => {
      formData.append(key, filmUpdate[key]);
    });
    console.log(filmUpdate.tenphim);
    console.log("token", token);
    console.log("form data", formData);
    axios
      .put(`http://localhost:7000/api/movies/${xoa}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          token: `${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        enqueueSnackbar("update thành công", { variant: "success" });
        console.log(`Success` + res.data);
      })
      .catch((err) => {
        enqueueSnackbar("thất bại", { variant: "error" });
        console.log(err);
      });
  };
  const onhandleCreateLichChieu = (values, event) => {
    lichchieuApi.creatLichChieu(LichChieuUpdate);
    console.log(LichChieuUpdate);
  };
  return (
    <tbody>
      {list?.map((item) => (
        <tr>
          {/* <th scope="row">{item.id}</th> */}
          <td>{item.tenphim}</td>
          <td>{item.mota}</td>
          <td>{item.theloai}</td>
          <td class="hinhAnh">
            <img src={item.hinhanh} />
          </td>
          <td>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#updateModal"
                onClick={() => {
                  setXoa(item.id);
                  setFilmUpdate({
                    ...filmUpdate,
                    tenphim: item.tenphim,
                    mota: item.mota,
                    theloai: item.theloai,
                  });
                }}
              >
                Update
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#createLichChieu"
                onClick={() => {
                  handleChangeIdmovie(item.id);
                }}
              >
                Thêm lịch chiếu
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteFilm(item.id);
                }}
                className="btn btn-outline-danger"
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      ))}
      <div
        className="modal fade"
        id="updateModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Cập nhật phim
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form noValidate onSubmit={onhandleUpdate}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">tên phim</label>
                  <input
                    type="text"
                    name="tenphim"
                    value={filmUpdate.tenphim}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">mô tả</label>
                  <input
                    type="text"
                    name="mota"
                    value={filmUpdate.mota}
                    className="form-control"
                    onChange={handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">hình ảnh</label>
                  <input
                    type="file"
                    onChange={handleImagePreview}
                    name="hinhanh"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Thể loại</label>
                  <input
                    type="text"
                    name="theloai"
                    value={filmUpdate.theloai}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Cap Nhat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* modal them lich chieu */}

      <div
        className="modal fade"
        id="createLichChieu"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel2">
                Thêm lịch chiếu cho phim
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form noValidate onSubmit={onhandleCreateLichChieu}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Giờ chiếu</label>
                  <input
                    type="text"
                    name="giochieu"
                    onChange={handleChangeLichChieu}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Ngày chiếu</label>
                  <input
                    type="text"
                    name="ngaychieu"
                    className="form-control"
                    onChange={handleChangeLichChieu}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Rạp chiếu</label>
                  <input
                    type="text"
                    onChange={handleChangeLichChieu}
                    name="rapchieu"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Thêm lich chiếu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
    </tbody>
  );
}

export default FilmItem;
