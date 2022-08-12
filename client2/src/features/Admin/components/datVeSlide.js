import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../../constants/storage-key";
import datveApi from "../../../api//datveApi";
export const getAllDatVe = createAsyncThunk(
  //reduxToolkit create async thunk
  "getAll", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const ListDatVe = await datveApi.getAll();
    //save data to local storage

    console.log("ket qua Dat ve: ", ListDatVe);
    return ListDatVe;
  }
);
export const getLichSuDatVe = createAsyncThunk(
  //reduxToolkit create async thunk
  "getLichSuDatVe", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const LichSuDatVe = await datveApi.getLichSuDatVe(payload);
    //save data to local storage

    console.log("lich su Dat ve: ", LichSuDatVe);
    return LichSuDatVe;
  }
);
const datVeSlice = createSlice({
  name: "datve",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, //state se lay du lieu tu local stronge ,nếu ko có thì lấy {} ,dùng để load trang ko phai đăng nhập lại khi state bi mất
    DatVeList: [],
    LichSuDatVe: [],
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
    [getAllDatVe.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.DatVeList = action.payload;
    },
    [getLichSuDatVe.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.LichSuDatVe = action.payload;
    },
  },
});
const { actions, reducer } = datVeSlice;
export const { logout } = actions;
export default reducer;
