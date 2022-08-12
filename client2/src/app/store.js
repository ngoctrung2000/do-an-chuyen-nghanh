import userReducer from "../features/Auth/userSlice";

import filmReducer from "../features/Admin/components/filmSlice";
import lichChieuSlide from "../features/Admin/components/lichChieuSlide";
import datVeSlide from "../features/Admin/components/datVeSlide";
import lichChieuUserSlide from "../features/UserClient/components/lichChieuUserSlide";
import { createSlice } from "@reduxjs/toolkit";
const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
  user: userReducer,

  film: filmReducer,
  lichChieu: lichChieuSlide,
  datve: datVeSlide,
  lichChieuUser: lichChieuUserSlide,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
