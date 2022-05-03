import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch m-5"
      placeholder="Ingresa una tarea a realizar"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
