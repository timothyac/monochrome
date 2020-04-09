import React from "react";

import { page, purchase } from "./Proxies.module.scss";

export default () => {
  return (
    <div className={page}>
      <div className={purchase}>
        <h1>Purchase</h1>
        <form>
          <select name="providers" id="providers">
            <option value="Ashburn">Ashburn</option>
          </select>
        </form>
      </div>
      <div>
        <h1>Proxies</h1>
      </div>
    </div>
  );
};
