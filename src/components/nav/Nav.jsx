import React from "react";

import { nav, inner } from "./Nav.module.scss";

export default () => {
  return (
    <nav className={nav}>
      <div className={inner}>
        <h2>monochrome</h2>
        <ul>
          <li>dashboard</li>
          <li>tasks</li>
          <li>proxies</li>
          <li>accounts</li>
        </ul>
        <div>
          <p>sunstro</p>
        </div>
      </div>
    </nav>
  );
};
