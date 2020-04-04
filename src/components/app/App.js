import React from "react";
import { withRouter } from "react-router-dom";

import { app } from "./App.module.scss";
import Nav from "../nav/Nav";
import Routes from "../router/Routes";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className={app}>
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default withRouter(App);
