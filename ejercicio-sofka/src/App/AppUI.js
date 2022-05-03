import React, { Fragment } from "react";
import Footer from "./footer/footer";
import Home from "./home/home";
import Navbar from "./Navbar/Navbar";
import TodoComponent from "./TodoComponent/TodoComponent";

function AppUI() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <TodoComponent />
      <Footer />
    </Fragment>
  );
}

export { AppUI };
