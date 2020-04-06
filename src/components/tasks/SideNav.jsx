import React from "react";

import { sideNav, buttonBar, infoBar } from "./Tasks.module.scss";
import { Button, PrimaryButton } from "./Button";

export default () => {
  return (
    <div>
      <ul className={sideNav}>
        <li className={buttonBar}>
          <PrimaryButton>Create Tasks</PrimaryButton>
          <Button>Clear Tasks</Button>
          <Button>Start Tasks</Button>
          <Button>Stop Tasks</Button>
          <Button>Edit Tasks</Button>
          <Button>Captcha</Button>
        </li>
        <li className={infoBar}>
          <div>
            <p>Tasks</p>
            <p>5</p>
          </div>
          <div>
            <p>Proxies</p>
            <p>25</p>
          </div>
          <div>
            <p>Profiles</p>
            <p>3</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
