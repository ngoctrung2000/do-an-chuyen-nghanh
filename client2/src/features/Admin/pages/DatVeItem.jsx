import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import datveApi from "../../../api/datveApi";
import formatPrice from "../../../utils/common";
import { useSnackbar } from "notistack";
import { useHistory, useLocation } from "react-router";
import { deleteUser } from "../../Auth/userSlice";
DatVeItem.prototype = {
  list: PropTypes.array,
};
DatVeItem.defaultProps = {
  list: [],
};
function DatVeItem(props) {
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const dispatch = useDispatch();
  const [xoa, setXoa] = useState(0);
  const [VeUpdate, setVeUpdate] = useState({
    soluong: 0,
    tenphim: "",
    giochieu: "",
    ngaychieu: "",
    rapchieu: 0,
    userId: 0,
    giave: 0,
  });
  const list = useSelector((state) => {
    return state.datve?.DatVeList;
  });

  const deleteuser = async (id) => {
    console.log("item delete: ", id);
    await datveApi.Delete(id);
    window.location.reload();
    enqueueSnackbar("xóa thành công", { variant: "success" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const gia = value * 40000;
    setVeUpdate({
      ...VeUpdate, // để đủ thuộc tính
      giave: gia,
      [name]: value,
    });
    console.log(VeUpdate);
  };
  const onhandleUpdate = (values, event) => {
    console.log("datveupdate ", VeUpdate);
    datveApi.updateDatVe(VeUpdate, xoa);
    enqueueSnackbar("update thành công", { variant: "success" });
    setXoa(0);
  };
  return (
    <tbody>
      {list?.map((item) => (
        <tr>
          {/* <th scope="row">{item.id}</th> */}
          <td>{item.soluong}</td>
          <td>{item.tenphim}</td>
          <td>{item.giochieu}</td>
          <td>{item.ngaychieu}</td>
          <td>{item.rapchieu}</td>
          <td>{item.User?.email}</td>
          <td>{formatPrice(item.giave)}</td>
          <td>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#updateModal"
                onClick={() => {
                  setXoa(item.id);
                  // handleChangeIdmovie(item.userId);
                  setVeUpdate({
                    ...VeUpdate, // để đủ thuộc tính
                    soluong: item.soluong,
                    tenphim: item.tenphim,
                    giochieu: item.giochieu,
                    ngaychieu: item.ngaychieu,
                    rapchieu: item.rapchieu,
                    giave: item.giave,
                    userId: item.userId,
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
                Cập nhật vé
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
                  <label htmlFor="exampleInputEmail1">Số lượng vé</label>
                  <input
                    type="text"
                    name="soluong"
                    value={VeUpdate.soluong}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">tên phim</label>
                  <input
                    type="text"
                    name="tenphim"
                    value={VeUpdate.tenphim}
                    disabled
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Giờ chiếu</label>
                  <input
                    type="text"
                    name="giochieu"
                    disabled
                    value={VeUpdate.giochieu}
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
                    disabled
                    value={VeUpdate.ngaychieu}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">rạp chiếu</label>
                  <input
                    type="text"
                    name="rapchieu"
                    disabled
                    value={VeUpdate.rapchieu}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">giá vé</label>
                  <input
                    type="text"
                    name="giave"
                    value={formatPrice(VeUpdate.giave)}
                    className="form-control"
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

export default DatVeItem;
