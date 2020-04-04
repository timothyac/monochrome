import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../main/Main";

export default () => {
  return (
    <Switch>
      <Route>
        <Main />
      </Route>
    </Switch>
  );
};
