import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { register, logout } from "../../userSlice";
import { useSnackbar } from "notistack";
function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar(); // dung de show thong bao noti stack

  const handleSubmit = async (values) => {
    try {

      console.log("form register: ", values);
      const action = register(values);
      const user = await dispatch(action).unwrap(); //redux toolkit createAsyncThunk Unwrapping Result Actions
      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      console.log("new user", user);
      dispatch(logout());
      enqueueSnackbar("register successfully", { variant: "success" }); //hien thi thong bao khi thanh cong
    } catch (error) {
      console.log("fail to register", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

Register.propTypes = {
  closeDialog: PropTypes.func,
};

export default Register;
