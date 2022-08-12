import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Header from "../../component/header";
import HomePage from "./pages/HomePage";
import LichChieuPage from "./pages/LichChieuPage";
import FilmDetailItemPage from "./pages/FilmDetailItemPage";
import DatVeUserPage from "./pages/DatVeUserPage";
UserClient.propTypes = {};

function UserClient(props) {
  const match = useRouteMatch();
  return (
    //   pt={4}  pading-top
    <>
      <Box pt={4}>
        <Switch>
          <Route path={match.url} exact component={HomePage}></Route>
          <Route
            path={`${match.url}/detail/:id`}
            exact
            component={FilmDetailItemPage}
          ></Route>
          <Route
            path={`${match.url}/datveUser/:id`}
            exact
            component={DatVeUserPage}
          ></Route>
          <Route
            path={`${match.url}/lichChieuUser`}
            component={LichChieuPage}
          ></Route>
        </Switch>
      </Box>
    </>
  );
}

export default UserClient;
