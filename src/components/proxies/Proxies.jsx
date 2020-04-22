import React from "react";

import { page, purchase } from "./Proxies.module.scss";
import { Button } from "../tasks/Button";

export default () => {
  const purchaseProxies = (e) => {
    // Ignore form submit
    e.preventDefault();

    console.log("purchased");

    // TODO: Grab state of form components
  };

  return (
    <div className={page}>
      <div className={purchase}>
        <h1>Purchase</h1>
        <form onSubmit={purchaseProxies}>
          <div>
            <p>Location</p>
            <select name="providers" id="providers">
              <option value="Ashburn">Ashburn</option>
              <option value="Boston">Boston</option>
              <option value="Chicago">Chicago</option>
              <option value="New York">New York</option>
            </select>
          </div>
          <div>
            <p>Amount (Max. 99)</p>
            <input type="tel" maxLength="2" />
          </div>
          <div>
            <p>Profile</p>
            <select name="profiles" id="profiles">
              <option value="AMEX 1">AMEX 1</option>
              <option value="Dad 1">Dad 2</option>
              <option value="Dad 2">Dad 2</option>
              <option value="Privacy">Privacy</option>
            </select>
          </div>
          <Button>Purchase</Button>
        </form>
      </div>
      <div>
        <h1>Proxies</h1>
      </div>
    </div>
  );
};
