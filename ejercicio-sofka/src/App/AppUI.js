import React from "react";
import Footer from "./footer/footer";
import Home from "./home/home";
import Navbar from "./Navbar/Navbar";
import TodoComponent from "./TodoComponent/TodoComponent";

function AppUI() {
  return (
    <div>
      <Navbar />

      <Home />
      <TodoComponent />
      <Footer />
    </div>
  );
}

export { AppUI };
