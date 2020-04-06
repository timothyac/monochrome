import React from "react";
import { Switch } from "react-router-dom";

import Settings from "../settings/Settings";
import Tasks from "../tasks/Tasks";
import Route from "./Route";

export default () => {
  return (
    <Switch>
      <Route path="/settings" component={Settings} />
      <Route path="/accounts" component={Settings} />
      <Route path="/proxies" component={Settings} />
      <Route path="/" component={Tasks} />
    </Switch>
  );
};
