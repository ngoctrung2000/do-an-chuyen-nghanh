import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../../constants/storage-key";
import filmApi from "../../../api/filmApi";
export const getAllFilm = createAsyncThunk(
  //reduxToolkit create async thunk
  "getAll", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const dataList = await filmApi.getAll();
    //save data to local storage

    console.log("ket qua Film: ", dataList);
    return dataList;
  }
);
export const getTheLoai = createAsyncThunk(
  //reduxToolkit create async thunk
  "theloai", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const dataList = await filmApi.getLoai("phimle");
    //save data to local storage

    console.log("ket qua Film: ", dataList);
    return dataList;
  }
);
const filmSlice = createSlice({
  name: "film",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, //state se lay du lieu tu local stronge ,nếu ko có thì lấy {} ,dùng để load trang ko phai đăng nhập lại khi state bi mất
    filmList: [],
    ListLoai: [],
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
    [getAllFilm.fulfilled]: (state, action) => {
      state.filmList = action.payload;
    },
    [getTheLoai.fulfilled]: (state, action) => {
      state.ListLoai = action.payload;
    },
  },
});
const { actions, reducer } = filmSlice;
export const { logout } = actions;
export default reducer;
