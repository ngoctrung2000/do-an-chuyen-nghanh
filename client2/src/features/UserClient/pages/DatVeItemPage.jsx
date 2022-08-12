import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import datveApi from "../../../api/datveApi";
import { Link, NavLink } from "react-router-dom";
import StorageKeys from "../../../constants/storage-key";
import { useSnackbar } from "notistack";
import classnames from "classnames";
import "../pages/css/style.css";
import { useHistory, useLocation } from "react-router";
import formatPrice from "../../../utils/common";
DatVeItemPage.prototype = {
  list: PropTypes.array,
};
DatVeItemPage.defaultProps = {
  list: [],
};
function DatVeItemPage(props) {
  const { list } = props;
  console.log("list item datve ", list[0].movie.tenphim);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const userId = JSON.parse(localStorage.getItem(StorageKeys.USERID));
  const [xoa, setXoa] = useState(0);
  const changePage = (link) => {
    history.push(`/${link}`);
  };
  const [ve, setVe] = useState({
    soluong: 1,
    tenphim: list[0].movie.tenphim,
    giochieu: list[0].giochieu,
    ngaychieu: list[0].ngaychieu,
    rapchieu: list[0].rapchieu,
    userId: userId,
    giave: 40000,
    soghe: 0,
    idghe: 0,
  });
  const handleSubmit = () => {
    try {
      datveApi.creatDatVe(ve);
      console.log("value dat ve", ve);
      enqueueSnackbar("đặt vé thành công", { variant: "success" });
    } catch (error) {}
  };
  const handleChangeVe = (event) => {
    const { name, value } = event.target;
    const gia = value * 40000;
    setVe({
      ...ve, // để đủ thuộc tính
      giave: gia,
      [name]: value,
    });

    console.log(ve);
  };
  const handleChangeChonGhe = (value) => {
    console.log("ve ", ve.soghe);
    console.log("value ghe ", value.soghe);
    if (value.soghe !== ve.soghe) {
      setVe({
        ...ve, // để đủ thuộc tính
        soghe: value.soghe,
        idghe: value.id,
      });
    } else {
      setVe({
        ...ve, // để đủ thuộc tính
        soghe: 0,
        idghe: 0,
      });
    }

    console.log(ve);
  };

  return (
    <>
      <section className="container ">
        <div style={{ textAlign: "center" }}>
          <h1>chọn ghế</h1>
          <div className="row listGhe">
            {list[0]?.ghes.map((item, index, listDatVe) => (
              <Button
                className={classnames({
                  "col-3": true,
                  "m-1": true,
                  gheChuaDat: item.trangthai === "chuadat",
                  gheDaDat: item.trangthai === "dadat",
                  gheDangChon: ve.soghe === item.soghe,
                })}
                // className="gheDaDat"
                disabled={item.trangthai === "dadat"}
                onClick={() => {
                  handleChangeChonGhe(item);
                }}
              >
                {item.soghe}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <form
        className="dang-ky"
        style={{ margin: "10px 30%" }}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">tên phim</label>
          <input
            type="text"
            value={list[0].movie.tenphim}
            name="tenphim"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Giờ chiếu</label>
          <input
            type="text"
            name="giochieu"
            value={list[0].giochieu}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Ngày chiếu</label>
          <input
            type="text"
            name="ngaychieu"
            value={list[0].ngaychieu}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Rạp chiếu</label>
          <input
            type="text"
            name="rapchieu"
            value={list[0].rapchieu}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Số lượng vé</label>
          <input
            type="number"
            name="soluong"
            onChange={handleChangeVe}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tổng tiền</label>
          <input
            type="text"
            name="tongtien"
            value={formatPrice(ve.giave)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Đặt vé
        </button>
      </form>
    </>
  );
}

export default DatVeItemPage;
