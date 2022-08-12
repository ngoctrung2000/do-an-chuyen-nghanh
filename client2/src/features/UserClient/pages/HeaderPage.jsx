import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavLink, useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Register from "../../Auth/components/Register";
import { AccountCircleOutlined, Close, ShoppingCart } from "@material-ui/icons";
import Login from "../../../features/Auth/components/Login";
import { Badge, Box, Menu, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Auth/userSlice";
import datveApi from "../../../api/datveApi";
import { getLichSuDatVe } from "../../Admin/components/datVeSlide";
import formatPrice from "../../../utils/common";
import { Route, Switch, useRouteMatch } from "react-router";
import StorageKeys from "../../../constants/storage-key";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

export default function HeaderPage() {
  const MODE = {
    LOGIN: "login",
    REGISTER: "register",
  };
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const LichSuVe = useSelector((state) => {
    return state.datve?.LichSuDatVe;
  });
  console.log("lich Su dat ve: ", LichSuVe[0]);
  console.log("loggged", loggedInUser);
  const isLoggedIn = JSON.parse(localStorage.getItem(StorageKeys.USER)) || 0;
  const [open, setOpen] = useState(false);
  const [openDatVe, setOpenDatVe] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickDatVeOpen = () => {
    setOpenDatVe(true);
  };
  const handleClickDatVeClose = () => {
    setOpenDatVe(false);
  };
  const userID = JSON.parse(localStorage.getItem(StorageKeys.USERID)) || 0;
  useEffect(() => {
    (async () => {
      try {
        dispatch(getLichSuDatVe(userID));
        //console.log(`data: ${data} paganation ${pagination}`);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
    setLoading(false);
  }, []);
  const handleCartClick = () => {
    history.push("/cart");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const changePage = (link) => {
    history.push(`/${link}`);
    // window.location.reload();
  };
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const deleteVe = async (id) => {
    console.log("item delete: ", id);
    await datveApi.Delete(id);
    window.location.reload();
  };
  const handleLogOutClick = () => {
    const action = logout();
    handleCloseMenu();
    dispatch(action);
    window.location.reload();
  };
  const classes = useStyles();
  const match = useRouteMatch();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Button
              className={classes.link}
              onClick={() => {
                changePage("user");
              }}
            >
              <img
                src="https://tix.vn/app/assets/img/icons/cgv.png"
                alt="..."
                width={65}
                className="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
            </Button>
          </Typography>

          <Button
            onClick={() => {
              changePage("user/lichChieuUser");
            }}
            color="inherit"
          >
            Mua vé
          </Button>
          {/* </NavLink> */}
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}

          {isLoggedIn && (
            <>
              <Button
                onClick={() => {
                  changePage("admin");
                }}
                color="inherit"
              >
                Admin
              </Button>
              <IconButton onClick={handleUserClick}>
                <AccountCircleOutlined />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* menu */}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)} //anchorEl co gia tri thi tra ve true,ko thi false
        onClose={handleCloseMenu}
        //chinh popever
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>{isLoggedIn}</MenuItem>
        <MenuItem onClick={handleClickDatVeOpen}>Vé đã đặt</MenuItem>
        <MenuItem onClick={handleLogOutClick}>Logout</MenuItem>
      </Menu>

      {/* dialog */}
      <Dialog
        disableEscapeKeyDown //khi nhan esc dialog se ko tat
        disableBackdropClick // khi nhan ra ngoai dialog se ko tat
        open={open}
        onClose={handleClose} //ham dung de dong dialog
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose}></Register>
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose}></Login>
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Lich su7
       dat ve */}
      <Dialog
        disableEscapeKeyDown //khi nhan esc dialog se ko tat
        disableBackdropClick // khi nhan ra ngoai dialog se ko tat
        open={openDatVe}
        onClose={handleClose} //ham dung de dong dialog
        aria-labelledby="form-dialog-title"
      >
        <IconButton
          className={classes.closeButton}
          onClick={handleClickDatVeClose}
        >
          <Close />
        </IconButton>
        <DialogContent>
          {LichSuVe?.map((item, index, listDatVe) => (
            <>
              <h2>
                {item.name}{" "}
                <span class="badge badge-secondary">{item.email}</span>
              </h2>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">mã vé</th>
                    <th scope="col">tên phim</th>
                    <th scope="col">số ghế</th>
                    <th scope="col">Ngày chiếu</th>
                    <th scope="col">Giờ chiếu</th>
                    <th scope="col">Rạp chiếu</th>
                    <th scope="col">giá vé</th>
                    <th scope="col">Control</th>
                  </tr>
                </thead>
                <tbody>
                  {item.datves?.map((itemCon, index, listDatVe) => (
                    <tr>
                      <th scope="row">{itemCon.id}</th>
                      <td>{itemCon.tenphim}</td>
                      <td>{itemCon.soghe}</td>
                      <td>{itemCon.ngaychieu}</td>
                      <td>{itemCon.giochieu}</td>
                      <td>{itemCon.rapchieu}</td>
                      <td>{formatPrice(itemCon.giave)}</td>
                      <td>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              deleteVe(itemCon.id);
                            }}
                            className="btn btn-outline-danger"
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDatVeClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
