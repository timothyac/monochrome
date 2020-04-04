import React from "react";

import { main } from "./Main.module.scss";

export default ({ children }) => {
  return <main className={main}>{children}</main>;
};
