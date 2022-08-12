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
import DatVeItem from "./DatVeItem";
import userApi from "../../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Auth/userSlice";
import { getAllDatVe } from "../components/datVeSlide";
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

function DatVeListPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        dispatch(getAllDatVe());
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
    setLoading(false);
  }, []);

  return (
    <>
      <SideBar />

      <div className="page-content p-5" id="content">
        <div className="separator" />
        <div className="row text-gray">
          <div className="col-12">
            <h1>Quản lý Đặt vé</h1>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  {/* <th scope="col">id</th> */}
                  <th scope="col">Số lượng vé</th>
                  <th scope="col">tên phim</th>
                  <th scope="col">giờ chiếu </th>
                  <th scope="col">ngày chiếu</th>
                  <th scope="col">rạp chiếu</th>
                  <th scope="col">tài khoản</th>
                  <th scope="col">giá vé</th>
                  <th scope="col">control</th>
                </tr>
              </thead>
              {<DatVeItem />}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatVeListPage;
