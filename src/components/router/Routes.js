import React from "react";
import { Switch } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import Route from "./Route";

export default () => {
  return (
    <Switch>
      <Route component={Dashboard} />
    </Switch>
  );
};
