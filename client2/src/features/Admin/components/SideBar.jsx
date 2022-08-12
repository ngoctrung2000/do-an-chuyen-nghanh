import React from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router";
function SideBar(props) {
  const history = useHistory();
  const changePage = (link) => {
    history.push(`/${link}`);
  };
  return (
    <div>
      <div className="vertical-nav bg-white" id="sidebar">
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <img
              src="https://tix.vn/app/assets/img/icons/cgv.png"
              alt="..."
              width={65}
              className="mr-3 rounded-circle img-thumbnail shadow-sm"
            />
            <div className="media-body">
              <h4 className="m-0">CGV</h4>
              <p className="font-weight-light text-muted mb-0">
                Web dat ve xem phim
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
          User Page
        </p>
        <ul className="nav flex-column bg-white mb-0">
          <li
            className="nav-item"
            onClick={() => {
              changePage("user");
            }}
          >
            <a href="#" className="nav-link text-dark font-italic bg-light">
              <i className="fa fa-th-large mr-3 text-primary fa-fw" />
              Home
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              changePage("user/lichChieuUser");
            }}
          >
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-address-card mr-3 text-primary fa-fw" />
              Lịch chiếu
            </a>
          </li>
        </ul>
        <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
          Admin Page
        </p>
        <ul className="nav flex-column bg-white mb-0">
          <li
            className="nav-item"
            onClick={() => {
              changePage("film");
            }}
          >
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-area-chart mr-3 text-primary fa-fw" />
              Quản lý phim
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              changePage("");
            }}
          >
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-bar-chart mr-3 text-primary fa-fw" />
              Quản lý Users
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              changePage("lichchieu");
            }}
          >
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-pie-chart mr-3 text-primary fa-fw" />
              Quản lý lịch chiếu
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              changePage("datve");
            }}
          >
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-line-chart mr-3 text-primary fa-fw" />
              Quản lý Đặt vé
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
