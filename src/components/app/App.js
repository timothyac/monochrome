import React from "react";

import { app } from "./App.module.scss";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className={app}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
