import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import filmApi from "../../../api/filmApi";
import {
  getLichChieuTheLoai,
  getLichChieuPhimle,
  getLichChieuPhimKinhdi,
} from "../components/lichChieuUserSlide";
import { useHistory, useLocation } from "react-router";
LichChieuThLoai.prototype = {
  list: PropTypes.array,
};
LichChieuThLoai.defaultProps = {
  list: [],
};
function LichChieuThLoai(props) {
  const { loai } = props;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [xoa, setXoa] = useState(0);
  const changePage = (link) => {
    history.push(`/${link}`);
  };
  const [filmUpdate, setFilmUpdate] = useState({
    tenphim: "",
    mota: "",
    theloai: "",
    hinhanh: null,
  });
  const list = useSelector((state) => {
    if (loai === "xemnhieu") {
      return state.lichChieuUser?.LichChieuListXemNhieu;
    } else if (loai === "phimle") {
      return state.lichChieuUser?.LichChieuListPhimLe;
    } else if (loai === "kinhdi") {
      return state.lichChieuUser?.LichChieuListPhimKinhDi;
    }
  });
  const deleteFilm = async (id) => {
    console.log("item delete: ", id);
    await filmApi.Delete(id);
    window.location.reload();
  };
  useEffect(() => {
    (async () => {
      try {
        console.log("heellooo");
        const xemnhieu = "xemnhieu";
        if (loai === "xemnhieu") {
          dispatch(getLichChieuTheLoai(loai));
        } else if (loai === "phimle") {
          dispatch(getLichChieuPhimle(loai));
        } else if (loai === "kinhdi") {
          dispatch(getLichChieuPhimKinhdi(loai));
        }
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, []);
  return (
    <>
      {list?.map((item) => (
        <div className="row py-5">
          <div className="newIn__img col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
            <img className="img-fluid" src={item.hinhanh} alt />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10 movie__details">
            <p>{item.theloai}</p>
            <h3>{item.tenphim}</h3>
            <p>{item.mota}</p>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-9">
                <span className="mr-2 viewing-time">
                  <i className="fa fa-clock mr-2" />
                  suất chiếu
                </span>
                {item.lichchieus?.map((lich) => (
                  <button
                    className="btn  mx-1"
                    onClick={() => {
                      changePage(`user/datveUser/${lich.id}`);
                    }}
                  >
                    <a href="">{lich.giochieu}</a>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LichChieuThLoai;
