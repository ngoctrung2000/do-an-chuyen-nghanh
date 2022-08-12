import React from "react";
import PropTypes from "prop-types";
// import "./css/myCSS.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import userApi from "../../../api/userApi";
import { useHistory, useLocation } from "react-router";
import { deleteUser } from "../../Auth/userSlice";
import { useSnackbar } from "notistack";
UserItem.prototype = {
  list: PropTypes.array,
};
UserItem.defaultProps = {
  list: [],
};
function UserItem(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [xoa, setXoa] = useState(0);
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    role: "",
  });
  const list = useSelector((state) => {
    return state.user?.userList;
  });
  const deleteuser = async (id) => {
    console.log("item delete: ", id);
    await userApi.Delete(id);
    window.location.reload();
    enqueueSnackbar("xoa thành công", { variant: "success" });
  };
  const handleid = (event) => {
    const { id } = event.target;
    setXoa(id);
    console.log("id xoa: ", xoa);
  };
  const handleChange = (event) => {
    console.log("update: ", event.target);
    const { name, value } = event.target;
    setUserUpdate({
      ...userUpdate, // để đủ thuộc tính
      [name]: value,
    });
    console.log("update: ", userUpdate);
  };
  const onhandleUpdate = (values, event) => {
    enqueueSnackbar("update thành công", { variant: "success" });
    console.log("userupdate ", userUpdate);
    userApi.updateUser(userUpdate, xoa);
  };
  return (
    <tbody>
      {list?.map((item) => (
        <tr>
          {/* <th scope="row">{item.id}</th> */}
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.age}</td>
          <td>{item.role}</td>
          <td>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#updateModal"
                onClick={() => {
                  setXoa(item.id);
                  setUserUpdate({
                    ...userUpdate, // để đủ thuộc tính
                    name: item.name,
                    email: item.email,
                    password: item.password,
                    phone: item.phone,
                    age: item.age,
                    role: item.role,
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
                cập nhật user
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
                  <label htmlFor="exampleInputEmail1">Name</label>

                  <input
                    type="text"
                    name="name"
                    value={userUpdate.name}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={userUpdate.email}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={userUpdate.password}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={userUpdate.phone}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">age</label>
                  <input
                    type="text"
                    name="age"
                    value={userUpdate.age}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">role</label>
                  <input
                    type="text"
                    name="role"
                    value={userUpdate.role}
                    onChange={handleChange}
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

export default UserItem;
