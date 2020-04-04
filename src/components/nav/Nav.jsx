import React from "react";

import { nav, inner } from "./Nav.module.scss";
import NavLink from "./NavLink";

export default () => {
  return (
    <nav className={nav}>
      <div className={inner}>
        <h2>monochrome</h2>
        <ul>
          <NavLink {...{ active: true }}>dashboard</NavLink>
          <NavLink>tasks</NavLink>
          <NavLink>proxies</NavLink>
          <NavLink>accounts</NavLink>
        </ul>
        <div>
          <p>sunstro</p>
        </div>
      </div>
    </nav>
  );
};
