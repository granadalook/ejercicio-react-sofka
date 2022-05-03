import React from "react";

import Home from "./home/home";
import Navbar from "./Navbar/Navbar";
import TodoComponent from "./TodoComponent/TodoComponent";

function AppUI() {
  return (
    <div>
      <Navbar />

      <Home />
      <TodoComponent />
    </div>
  );
}

export { AppUI };
