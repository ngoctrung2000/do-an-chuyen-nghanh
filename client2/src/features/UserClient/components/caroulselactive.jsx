import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useEffect, useState } from "react";
import filmApi from "../../../api/filmApi";
import { useLocation, useRouteMatch } from "react-router";
import { useHistory } from "react-router-dom";

Carouselactive.prototype = {
  list: PropTypes.array,
};
Carouselactive.defaultProps = {
  list: [],
};
function Carouselactive(props) {
  const list = props.List;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [xoa, setXoa] = useState(0);
  let dataList = [];
  const [filmUpdate, setFilmUpdate] = useState({
    tenphim: "",
    mota: "",
    theloai: "",
    hinhanh: null,
  });
  let number = Math.floor(Math.random() * 3) + 1;
  let end = number + 2;

  const changePage = (link) => {
    history.push(`/${link}`);
    window.location.reload();
  };
  return (
    <>
      {
        <div className="carousel-item active  hinh2">
          <img className="carousel-image" src={list?.hinhanh} />
          <div className="carousel-item__overlay" />
          <div className="container carousel-caption d-md-block">
            <p>{list?.theloai}</p>
            <h2 className="display-4">{list?.tenphim}</h2>

            <p>{list?.mota}</p>
            <div className="carousel-item__trailer mt-4">
              <button
                className="btn-playTrailer"
                onClick={() => {
                  changePage(`user/detail/${list?.id}`);
                }}
              >
                Mua vé
                <div className="btn__overlay" />
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Carouselactive;
