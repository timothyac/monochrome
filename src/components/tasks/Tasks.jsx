import React from "react";

import { tasks } from "../../tasks.json";

import { page, taskContainer } from "./Tasks.module.scss";
import { Task, Header } from "./Task";
import SideNav from "./SideNav";

export default () => {
  return (
    <div className={page}>
      <SideNav />
      <div className={taskContainer}>
        <h1>Tasks</h1>
        <div>
          <Header />
          {tasks.map((task, index) => (
            <Task key={index} {...{ task }} />
          ))}
        </div>
      </div>
    </div>
  );
};
