import React from "react";

import { page, purchase } from "./Proxies.module.scss";
import { Form } from "./Form";

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
        <Form {...{ purchaseProxies }} />
      </div>
      <div>
        <h1>Proxies</h1>
      </div>
    </div>
  );
};
