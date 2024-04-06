import { useState } from "react";
import ColorPickerContainer from "./assets/componentes/ColorPickerContainer";
import TodoListContainer from "./assets/componentes/TodoListContainer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Ejecicios Avanzados 2</h1>
        <hr />
        <h2>Color Picker</h2>
        <h3>Ejercicio 1</h3>
        <ColorPickerContainer></ColorPickerContainer>
        <hr />
        <h2>Todo List</h2>
        <h3>Ejercicio 2</h3>
        <TodoListContainer></TodoListContainer>
      </div>
    </>
  );
}

export default App;
