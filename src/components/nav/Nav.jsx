import React from "react";
import { useLocation, Link } from "react-router-dom";

import { nav, inner } from "./Nav.module.scss";
import NavLink from "./NavLink";

const pages = [
  { name: "dashboard", link: "/" },
  { name: "tasks" },
  { name: "proxies" },
  { name: "accounts" },
];

export default () => {
  const { pathname } = useLocation();

  return (
    <nav className={nav}>
      <div className={inner}>
        <h2>monochrome</h2>
        <ul>
          {pages.map((page, i) => {
            const pageLink = page.link ? `${page.link}` : `/${page.name}`;
            const active = pathname === pageLink;

            return (
              <Link key={i} to={pageLink}>
                <NavLink {...{ active }}>{page.name}</NavLink>
              </Link>
            );
          })}
        </ul>
        <div>
          <p>sunstro</p>
        </div>
      </div>
    </nav>
  );
};
