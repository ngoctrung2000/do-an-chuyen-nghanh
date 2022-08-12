import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-key";
// First, create the thunk
export const register = createAsyncThunk(
  //reduxToolkit create async thunk
  "user/register123", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const data = await userApi.register(payload);
    //save data to local storage
    // localStorage.setItem(StorageKeys.TOKEN, JSON.stringify(data.token));
    console.log("ket qua dang nhap: ", data);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.email)); //object phai dung JSON
    return data.email;
  }
);
export const login = createAsyncThunk(
  //reduxToolkit create async thunk
  "user/login", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const data = await userApi.login(payload);
    //save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, JSON.stringify(data.token));
    console.log("ket qua login: ", data);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.email)); //object phai dung JSON
    localStorage.setItem(StorageKeys.USERID, JSON.stringify(data.userId));
    return data.email;
  }
);
export const getAllUser = createAsyncThunk(
  //reduxToolkit create async thunk
  "getAll", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const dataList = await userApi.getAll();
    //save data to local storage

    console.log("ket qua login: ", dataList);
    return dataList;
  }
);
export const deleteUser = createAsyncThunk(
  //reduxToolkit create async thunk
  "delete", //action type
  async (payload, thunkAPI) => {
    //thunkAPI dung de dispatch function khac
    //call API to register
    const result = await userApi.Delete(payload);
    //save data to local storage

    console.log("delete result: ", result);
    return result;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, //state se lay du lieu tu local stronge ,nếu ko có thì lấy {} ,dùng để load trang ko phai đăng nhập lại khi state bi mất
    settings: {},
    userList: [],
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USERID);
      state.current = {};
    },
  }, // auto dinh nghia action type
  extraReducers: {
    // phai tu dinh nghia action type ,o day la user/register
    [register.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.current = action.payload;
    },
    [getAllUser.fulfilled]: (state, action) => {
      // [register.fulfilled] = user/register123
      state.userList = action.payload;
    },
  },
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
