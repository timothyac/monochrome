import React from "react";
import { withRouter } from "react-router-dom";

import { app } from "./App.module.scss";
import Routes from "../router/Routes";

function App() {
  return (
    <div className={app}>
      <Routes />
    </div>
  );
}

export default withRouter(App);
