import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import lichchieuApi from "../../../api/lichchieuApi";
import { useHistory, useLocation } from "react-router";
import { useSnackbar } from "notistack";
LichChieuItem.prototype = {
  list: PropTypes.array,
};
LichChieuItem.defaultProps = {
  list: [],
};
function LichChieuItem(props) {
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const dispatch = useDispatch();
  const [xoa, setXoa] = useState(0);
  const [Id, setId] = useState(0);
  const [LichChieuUpdate, setLichChieuUpdate] = useState({
    giochieu: "",
    ngaychieu: "",
    rapchieu: 0,
    movieId: 0,
  });
  const list = useSelector((state) => {
    return state.lichChieu?.LichChieuList;
  });

  const deleteuser = async (id) => {
    console.log("item delete: ", id);
    await lichchieuApi.Delete(id);
    enqueueSnackbar("xóa thành công", { variant: "success" });
    window.location.reload();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLichChieuUpdate({
      ...LichChieuUpdate, // để đủ thuộc tính
      [name]: value,
    });
    console.log(LichChieuUpdate);
  };
  const onhandleUpdate = (values, event) => {
    console.log("userupdate ", LichChieuUpdate);
    lichchieuApi.updateLichChieu(LichChieuUpdate, xoa);
    enqueueSnackbar("update thành công", { variant: "success" });
    setXoa(0);
  };
  return (
    <tbody>
      {list?.map((item) => (
        <tr>
          {/* <th scope="row">{item.id}</th> */}
          <td>{item.giochieu}</td>
          <td>{item.ngaychieu}</td>
          <td>{item.rapchieu}</td>
          <td>{item.movie?.tenphim}</td>
          <td>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#updateModal"
                onClick={() => {
                  setXoa(item.id);
                  //handleChangeIdmovie(item.movieId);
                  setLichChieuUpdate({
                    ...LichChieuUpdate, // để đủ thuộc tính
                    giochieu: item.giochieu,
                    ngaychieu: item.ngaychieu,
                    rapchieu: item.rapchieu,
                    movieId: item.movieId,
                  });
                }}
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteuser(item.id);
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
                cập nhật lịch chiếu
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
                  <label htmlFor="exampleInputEmail1">Giờ chiếu</label>
                  <input
                    type="text"
                    name="giochieu"
                    value={LichChieuUpdate.giochieu}
                    onChange={handleChange}
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
                    value={LichChieuUpdate.ngaychieu}
                    className="form-control"
                    onChange={handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">rạp chiếu</label>
                  <input
                    type="text"
                    name="rapchieu"
                    value={LichChieuUpdate.rapchieu}
                    className="form-control"
                    onChange={handleChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Cap Nhat
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

export default LichChieuItem;
