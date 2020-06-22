import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Exporte from "./Pages/Explore";
import ShowInfo from "./Components/ShowInfo";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/home" component={Home} />
        <Route path="/explore" component={Exporte} />
        <Route path="/drinksInfo" component={ShowInfo} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
