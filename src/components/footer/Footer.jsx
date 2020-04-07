import React from "react";

import { footer } from "./Footer.module.scss";
import Status from "./Status";

export default () => {
  // Should be replace by an API call
  const status = "online";

  return (
    <footer className={footer}>
      <Status {...{ status }} />
    </footer>
  );
};
