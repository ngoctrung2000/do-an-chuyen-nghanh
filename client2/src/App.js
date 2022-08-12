import "./App.css";

import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import NotFound from "./component/NotFound";

import "./App.css";

import Admin from "./features/Admin";
import UserClient from "./features/UserClient";

//styled-component  (css in js)
//neu ko co prop truyen vao thi color co mau xanh

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Redirect from="/admin" to="/" exact />
        <Route path="/user" component={UserClient} />
        <Route path="/" component={Admin} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

// switch chi render Route co path giong url dau tien ,cai thu 2 giong se ko render
// exact dung duong dan moi render ,ko exact se render voi url start with part  (todos/hhah/1)
export default App;
