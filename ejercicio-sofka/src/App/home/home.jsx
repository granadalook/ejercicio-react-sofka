import React from "react";

const Home = () => {
  return (
    <section>
      <h1 className="text-center fs-1 fw-bold mt-5">BIENVENIDOS</h1>
      <ul>
        <li className="fw-bold"> ¿Cansado que se te olviden las cosas?</li>
        <hr />
        <li className="fw-bold"> ¿Dejas todo para despues?</li>
        <hr />
        <li className="fw-bold"> ¿Tareas por completar?</li>
      </ul>
      <h2>Con TODOs list pordar agendar tus tareas pendientes en una lista </h2>
      <hr />
      <h2>
        Una vez realizada esta tarea podras selecionarla y dejarla como tarea
        realizada
      </h2>
    </section>
  );
};
export default Home;
