import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";
import "./css/style.css";
import datveApi from "../../../api/datveApi";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Auth/userSlice";
import filmApi from "../../../api/filmApi";
import { getAllFilm, getTheLoai } from "../../Admin/components/filmSlice";
import { getLichChieuChiTiet } from "../components/lichChieuUserSlide";
import ListFilm from "./ListFilm";
import CarouselHome from "../components/carouselHome";
import Carouselactive from "../components/caroulselactive";
import { useParams } from "react-router-dom";
import TheLoaiPage from "../components/theLoaiPage";
import HeaderPage from "./HeaderPage";
import DatVeItemPage from "./DatVeItemPage";
import StorageKeys from "../../../constants/storage-key";
import LichChieuTheLoai from "./LichChieuTheLoai";
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

function DatVeUserPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const userId = JSON.parse(localStorage.getItem(StorageKeys.USERID));
  const [loading, setLoading] = useState(true);
  const [postve, setPostVe] = useState(false);

  const { id } = useParams();
  const [ve, setVe] = useState({
    soluong: 0,
    tenphim: "",
    giochieu: "",
    ngaychieu: "",
    rapchieu: 0,
    userId: userId,
  });
  let dataList = [];
  let number = Math.floor(Math.random() * 3) + 1;
  let end = number + 2;
  console.log("id lich chieu: ", id);
  useEffect(() => {
    (async () => {
      try {
        dispatch(getAllFilm());
        dispatch(getLichChieuChiTiet(id));
        console.log(dataList);
        //console.log(`data: ${data} paganation ${pagination}`);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
    setLoading(false);
  }, []);
  const listDatVe = useSelector((state) => {
    return state.lichChieuUser?.LichChieuChiTiet;
  });
  const list = useSelector((state) => {
    return state.film?.filmList;
  });
  const listFirst = useSelector((state) => {
    return state.film?.filmList[4];
  });

  if (postve) {
    datveApi.creatDatVe(ve);
  }

  console.log("listDatVe", ve);
  return (
    <>
      <div>
        <HeaderPage />
        <section className="movieCarousel">
          {/* data-ride="carousel" */}
          <div
            id="movieCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators container"></ol>
            <div className="carousel-inner">
              <Carouselactive List={listFirst} />
              <CarouselHome List={list} />
            </div>
            {/* thẻ a là mũi tên 2 bên */}
            <a
              className="carousel-control-prev"
              href="#movieCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#movieCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>

        {/* <DatVeItemPage list={listDatVe} /> */}
        {listDatVe?.map((item, index, listDatVe) => (
          <DatVeItemPage list={listDatVe} />
        ))}
        <footer className="pt-5">
          <div className="container">
            <div className="row pt-2">
              <div className="col-sm-12 col-md-3">
                <div className="col-detail">
                  <h5>GET IN TOUCH</h5>
                  <ul>
                    <li>
                      <a href>FAQs</a>
                    </li>
                    <li>
                      <a href>Give us feedback</a>
                    </li>
                    <li>
                      <a href>Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="col-detail">
                  <h5>ABOUT MOVIE STAR</h5>
                  <ul>
                    <li>
                      <a href>About us</a>
                    </li>
                    <li>
                      <a href>Find us</a>
                    </li>
                    <li>
                      <a href>Scheduel</a>
                    </li>
                    <li>
                      <a href>News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="col-detail">
                  <h5>LEGAL STUFF</h5>
                  <ul>
                    <li>
                      <a href>Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href>Privacy policy</a>
                    </li>
                    <li>
                      <a href>Cookie policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="col-detail">
                  <h5>CONNECT WITH US</h5>
                  <ul>
                    <li>
                      <a href>
                        <i className="fab fa-facebook-f" />
                        <span className="px-3">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i className="fab fa-twitter" />
                        <span className="px-3">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i className="fab fa-google-plus-g" />
                        <span className="px-3">Google</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default DatVeUserPage;
