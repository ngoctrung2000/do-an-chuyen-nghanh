import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import filmApi from "../../../api/filmApi";
import { useLocation, useRouteMatch } from "react-router";
import { Link, NavLink, useHistory } from "react-router-dom";
CarouselHome.prototype = {
  list: PropTypes.array,
};
CarouselHome.defaultProps = {
  list: [],
};
function CarouselHome(props) {
  const list = props.List;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [xoa, setXoa] = useState(0);

  let number = Math.floor(Math.random() * 3) + 1;
  let end = number + 2;

  const deleteFilm = async (id) => {
    console.log("item delete: ", id);
    await filmApi.Delete(id);
    window.location.reload();
  };
  const changePage = (link) => {
    history.push(`/${link}`);
    window.location.reload();
  };
  return (
    <>
      {list?.map((item) => (
        <div className="carousel-item  hinh2">
          <img className="carousel-image" src={item.hinhanh} />
          <div className="carousel-item__overlay" />
          <div className="container carousel-caption d-md-block">
            <p>{item.theloai}</p>
            <h2 className="display-4">{item.tenphim}</h2>

            <p>{item.mota}</p>
            <div className="carousel-item__trailer mt-4">
              <button
                className="btn-playTrailer"
                onClick={() => {
                  changePage(`user/detail/${item.id}`);
                }}
              >
                Mua vé
                <div className="btn__overlay" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarouselHome;
