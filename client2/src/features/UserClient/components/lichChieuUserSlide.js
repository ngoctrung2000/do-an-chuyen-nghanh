import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../../constants/storage-key";
import filmApi from "../../../api/filmApi";
import lichchieuApi from "../../../api/lichchieuApi";
export const getLichChieuTheLoai = createAsyncThunk(
  //reduxToolkit create async thunk
  "getLichChieuTheLoai", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    console.log(payload);
    const dataList = await lichchieuApi.getLichChieuTheLoai(payload);
    //save data to local storage

    console.log("ket qua lich chieu the loai ", dataList);
    return dataList;
  }
);
export const getLichChieuPhimle = createAsyncThunk(
  //reduxToolkit create async thunk
  "getLichChieuPhimle", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    console.log(payload);
    const dataList = await lichchieuApi.getLichChieuTheLoai(payload);
    //save data to local storage

    console.log("ket qua lich chieu phim le ", dataList);
    return dataList;
  }
);
export const getLichChieuPhimKinhdi = createAsyncThunk(
  //reduxToolkit create async thunk
  "getLichChieuPhimKinhdi", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    console.log(payload);
    const dataList = await lichchieuApi.getLichChieuTheLoai(payload);
    //save data to local storage

    console.log("ket qua lich chieu phim le ", dataList);
    return dataList;
  }
);
export const getLichChieuChiTiet = createAsyncThunk(
  //reduxToolkit create async thunk
  "getLichChieuChiTiet", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const ListLichChieuChiTiet = await lichchieuApi.getChiTietLichChieu(
      payload
    );
    //save data to local storage

    console.log(" Lich Chieu Chi tiet: ", ListLichChieuChiTiet);
    return ListLichChieuChiTiet;
  }
);
export const getLichChieuPhimChiTiet = createAsyncThunk(
  //reduxToolkit create async thunk
  "getLichChieuPhimChiTiet", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const ListLichChieuPhimChiTiet = await lichchieuApi.getChiTietPhimLichChieu(
      payload
    );
    //save data to local storage

    console.log(" Phim Chi tiet: ", ListLichChieuPhimChiTiet);
    return ListLichChieuPhimChiTiet;
  }
);
const LichChieuUserSlice = createSlice({
  name: "lichchieuUser",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, //state se lay du lieu tu local stronge ,nếu ko có thì lấy {} ,dùng để load trang ko phai đăng nhập lại khi state bi mất
    LichChieuListXemNhieu: [],
    LichChieuListPhimLe: [],
    LichChieuListPhimKinhDi: [],
    LichChieuChiTiet: [],
    LichChieuPhimChiTiet: [],
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      state.current = {};
    },
  }, // auto dinh nghia action type
  extraReducers: {
    // phai tu dinh nghia action type ,o day la user/register
    [getLichChieuTheLoai.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.LichChieuListXemNhieu = action.payload;
    },
    [getLichChieuPhimle.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.LichChieuListPhimLe = action.payload;
    },
    [getLichChieuPhimKinhdi.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.LichChieuListPhimKinhDi = action.payload;
    },
    [getLichChieuChiTiet.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.LichChieuChiTiet = action.payload;
    },
    [getLichChieuPhimChiTiet.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.LichChieuPhimChiTiet = action.payload;
    },
  },
});
const { actions, reducer } = LichChieuUserSlice;
export const { logout } = actions;
export default reducer;
