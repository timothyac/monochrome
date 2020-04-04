import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

export default ({ component: C, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Fragment>
        <Nav />
        <Main>
          <C {...props} />
        </Main>
        <Footer />
      </Fragment>
    )}
  />
);
