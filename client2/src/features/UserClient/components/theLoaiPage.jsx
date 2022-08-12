import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import filmApi from "../../../api/filmApi";
import { useRouteMatch, useLocation } from "react-router";
import { Link, NavLink, useHistory } from "react-router-dom";
import { deleteUser } from "../../Auth/userSlice";
TheLoaiPage.prototype = {
  list: PropTypes.array,
};
TheLoaiPage.defaultProps = {
  list: [],
};
function TheLoaiPage(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  let dataList = [];
  const match = useRouteMatch();

  let number = Math.floor(Math.random() * 3) + 1;
  let end = number + 2;
  const datalist = useSelector((state) => {
    return state.film?.ListLoai;
  });

  useEffect(() => {
    (async () => {
      try {
        dataList = await filmApi.getLoai("xemnhieu");

        console.log("xem nhieu", dataList);
        //console.log(`data: ${data} paganation ${pagination}`);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, []);

  return (
    <>
      {datalist?.map((item) => (
        <div className="col-6 col-md-3 mt-3">
          <div className="newIn__img">
            <img className="img-fluid" src={item.hinhanh} alt="hinh2" />
            <div className="newIn__overlay" />
            <div className="newIn__play text-white">
              <NavLink
                to={`${match.url}/detail/${item.id}`}
                activeClassName="active"
              >
                <a className="d-block text-white" href="">
                  Mua vé
                </a>
              </NavLink>
              <span>{item.theloai}</span>
            </div>
          </div>
          <div className="newIn__name">
            <p>{item.tenphim}</p>
            <div className="movie__stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star text-secondary" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TheLoaiPage;
