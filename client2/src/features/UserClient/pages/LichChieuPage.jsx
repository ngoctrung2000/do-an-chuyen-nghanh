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
import "./css/style.css";
import userApi from "../../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Auth/userSlice";
import filmApi from "../../../api/filmApi";
import { getAllFilm, getTheLoai } from "../../Admin/components/filmSlice";
import ListFilm from "./ListFilm";
import CarouselHome from "../components/carouselHome";
import Carouselactive from "../components/caroulselactive";
import TheLoaiPage from "../components/theLoaiPage";
import HeaderPage from "./HeaderPage";
import LichChieuTheLoai from "../pages/LichChieuTheLoai";
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

function LichChieuPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  let dataList = [];
  let number = Math.floor(Math.random() * 3) + 1;
  let end = number + 2;
  useEffect(() => {
    (async () => {
      try {
        dispatch(getAllFilm());

        console.log(dataList);
        //console.log(`data: ${data} paganation ${pagination}`);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
    setLoading(false);
  }, []);
  const list = useSelector((state) => {
    return state.film?.filmList;
  });
  const listFirst = useSelector((state) => {
    return state.film?.filmList[4];
  });
  console.log("listFilmCrasel", list);
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
        <section className="showTimes container py-5">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#xemnhieu"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                xem nhiều
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#phimle"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Phim lẻ
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#kinhdi"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Kinh dị
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="xemnhieu"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <LichChieuTheLoai loai={"xemnhieu"} />
            </div>
            <div
              className="tab-pane fade"
              id="phimle"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <LichChieuTheLoai loai={"phimle"} />
            </div>
            <div
              className="tab-pane fade"
              id="kinhdi"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <LichChieuTheLoai loai={"kinhdi"} />
            </div>
          </div>
        </section>

        <section className="comingSoon">
          <div className="comingSoon__bg" />
          <div className="comingSoon__content container">
            <h2 className="content__after position-relative py-4"> SẮP CÓ</h2>
            <div className="row d-flex align-items-center py-5">
              <div className="col-12 col-md-6 col-lg-6 coming__detail">
                <p>COMEDY, CRIME</p>
                <h3>The Hangover Part III</h3>
                <p>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span className="coming__date">
                    <i className="fa fa-calendar" />
                    30 September, 2017
                  </span>
                </p>
                <p>
                  When one of their own is kidnapped by an angry gangster, the
                  Wolf Pack must track down Mr. Chow, who has escaped from
                  prison and is on the run.
                </p>
                <a href>
                  MORE INFO <i className="fa fa-angle-right" />
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="comingSoon__trailer">
                  <img
                    className="img-fluid"
                    src="../img/slide-3-video.png"
                    alt
                  />
                  <span className="d-inline-block rounded-circle">
                    <i className="fa fa-play" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
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

export default LichChieuPage;
