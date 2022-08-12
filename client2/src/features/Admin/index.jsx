import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Header from "../../component/header";
import UserListPage from "./pages/userListPage";
import FilmListPage from "./pages/FilmListPage";
import "./pages/css/myCSS.css";
import LichChieuListPage from "./pages/LichChieuListPage";
import DatVeListPage from "./pages/DatVeListPage";
Admin.propTypes = {};

function Admin(props) {
  const match = useRouteMatch();
  return (
    //   pt={4}  pading-top
    <>
      <Header />
      <Box pt={4}>
        <Switch>
          <Route path={match.url} exact component={UserListPage}></Route>
          <Route path={"/film"} exact component={FilmListPage}></Route>
          <Route path={"/datve"} exact component={DatVeListPage}></Route>
          <Route
            path={"/lichchieu"}
            exact
            component={LichChieuListPage}
          ></Route>
        </Switch>
      </Box>
    </>
  );
}

export default Admin;
