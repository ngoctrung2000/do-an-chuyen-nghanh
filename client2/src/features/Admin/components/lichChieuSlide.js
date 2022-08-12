import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../../constants/storage-key";
import lichchieuApi from "../../../api/lichchieuApi";
export const getAllLichChieu = createAsyncThunk(
  //reduxToolkit create async thunk
  "getAll", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const ListLichChieu = await lichchieuApi.getAll();
    //save data to local storage

    console.log("ket qua Lich Chieu: ", ListLichChieu);
    return ListLichChieu;
  }
);

const lichChieuSlice = createSlice({
  name: "LichChieu",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, //state se lay du lieu tu local stronge ,nếu ko có thì lấy {} ,dùng để load trang ko phai đăng nhập lại khi state bi mất
    LichChieuList: [],
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
    [getAllLichChieu.fulfilled]: (state, action) => {
      state.LichChieuList = action.payload;
    },
  },
});
const { actions, reducer } = lichChieuSlice;
export const { logout } = actions;
export default reducer;
