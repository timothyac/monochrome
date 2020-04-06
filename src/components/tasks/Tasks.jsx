import React from "react";

import { page } from "./Tasks.module.scss";
import SideNav from "./SideNav";

export default () => {
  return (
    <div className={page}>
      <SideNav />
      <div></div>
    </div>
  );
};
