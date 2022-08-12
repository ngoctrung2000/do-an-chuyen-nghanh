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
import LichChieuItem from "./LichChieuItem";
import userApi from "../../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import { getAllLichChieu } from "../components/lichChieuSlide";
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

function LichChieuListPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        dispatch(getAllLichChieu());
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
    setLoading(false);
  }, []);
  // const list = useSelector((state) => {
  //   return state.user?.userList;
  // });
  //console.log("list: ", list);

  return (
    <>
      <SideBar />

      <div className="page-content p-5" id="content">
        <div className="separator" />
        <div className="row text-gray">
          <div className="col-12">
            <h1>Quản lý Lịch chiếu</h1>

            <table class="table">
              <thead class="thead-dark">
                <tr>
                  {/* <th scope="col">id</th> */}
                  <th scope="col">Giở chiếu</th>
                  <th scope="col">Ngày chiếu</th>
                  <th scope="col">Rạp chiếu</th>
                  <th scope="col">tên phim</th>
                  <th scope="col">control</th>
                </tr>
              </thead>
              {<LichChieuItem />}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LichChieuListPage;
