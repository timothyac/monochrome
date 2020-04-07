import React from "react";

import { footer, copyright } from "./Footer.module.scss";
import Status from "./Status";

export default () => {
  // API call to server
  const status = "online";

  return (
    <footer className={footer}>
      <div className={copyright}>
        <p>
          copyright ® 2020 <span>monochrome</span>
        </p>
      </div>
      <div>
        <p>version 0.1.0.0</p>
      </div>
      <Status {...{ status }} />
    </footer>
  );
};
