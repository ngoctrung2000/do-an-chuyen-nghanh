import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";
import UserItem from "./userItem";
import userApi from "../../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Auth/userSlice";
import { useSnackbar } from "notistack";
import SideBar from "../components/SideBar";
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },

  right: {
    flex: "1 1 0",
  },

  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    padding: "30px 0 20px",
  },
  usertitle: {},
}));

function UserListPage(props) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    role: "",
  });
  useEffect(() => {
    (async () => {
      try {
        dispatch(getAllUser());
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
    setLoading(false);
  }, []);
  const list = useSelector((state) => {
    return state.user?.userList;
  });
  //console.log("list: ", list);
  const handleSubmit = (event) => {
    // event.preventDefault(); // chặn sự kiện load trang
    console.log("usersubmit ", user);
    userApi.creatUser(user);
    enqueueSnackbar("thêm thành công", { variant: "success" });
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user, // để đủ thuộc tính
      [name]: value,
    });

    console.log(user);
  }
  const handleUpdate = async (value, event) => {
    console.log("update: ", value);
    setUser({
      ...user, // để đủ thuộc tính
      value,
    });
    console.log("update: ", user);
  };
  return (
    <>
      <SideBar />

      <div className="page-content p-5" id="content">
        <div className="separator" />
        <div className="row text-gray">
          <div className="col-12">
            <h1>Quản lý user</h1>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              Thêm
            </button>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  {/* <th scope="col">id</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <th scope="col">phone</th>
                  <th scope="col">age</th>
                  <th scope="col">role</th>
                  <th scope="col">control</th>
                </tr>
              </thead>
              {<UserItem onUpdate={handleUpdate} />}
            </table>
            <div
              className="modal fade"
              id="staticBackdrop"
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
                      Thêm User
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
                    <form noValidate onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={handleChange}
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          name="pasword"
                          onChange={handleChange}
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Phone</label>
                        <input
                          type="number"
                          onChange={handleChange}
                          name="phone"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">age</label>
                        <input
                          type="number"
                          name="age"
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
                          onChange={handleChange}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Them
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserListPage;
