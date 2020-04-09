import React from "react";
import { Switch } from "react-router-dom";

import Settings from "../settings/Settings";
import Proxies from "../proxies/Proxies";
import Tasks from "../tasks/Tasks";
import Route from "./Route";

export default () => {
  return (
    <Switch>
      <Route path="/settings" component={Settings} />
      <Route path="/accounts" component={Settings} />
      <Route path="/proxies" component={Proxies} />
      <Route path="/" component={Tasks} />
    </Switch>
  );
};
