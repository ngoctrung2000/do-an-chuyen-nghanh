import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import filmApi from "../../../api/filmApi";
import { useLocation } from "react-router";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router";
ListFilm.prototype = {
  list: PropTypes.array,
};
ListFilm.defaultProps = {
  list: [],
};
function ListFilm(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const list = useSelector((state) => {
    return state.film?.filmList;
  });

  return (
    <>
      {list?.map((item) => (
        <div className="col-6 col-md-4 col-xl-3 mt-3">
          <div className="newIn__img">
            <img className="img-fluid" src={item.hinhanh} alt="hinh2" />
            <div className="newIn__overlay" />
            <div className="newIn__play text-white">
              {/* <i className="fa fa-play d-block" /> */}
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

export default ListFilm;
