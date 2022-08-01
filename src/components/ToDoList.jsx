import React from "react";
import { useState } from "react";
import "../stylesheet/ToDoList.css";
import { Formulario } from "./Formulario";
import { Tarea } from "./Tarea";

export const ToDoList = () => {
  const [todo, setTodo] = useState([]);

  const handleDelete = (id) => {
    const newArr = todo.filter((item) => item.id !== id);

    setTodo(newArr);
  };

  return (
    <div className="todo-container">
      <h1>Mis tareas</h1>
      <Formulario onSubmit={setTodo} />

      <ol>
        {todo.map((item) => (
          <li>
            <Tarea
              handleDelete={handleDelete}
              texto={item.text}
              key={item.id}
              id={item.id}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
