import React, { useState, useEffect } from "react";
import "./styles/tarefas.css";

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    let input = e.target[0];
    if (input.value !== "") {
      let tarefa = {
        value: input.value,
        id: Math.floor(Math.random() * 1000),
      };
      setTarefas([...tarefas, tarefa]);
    }
    input.value = "";
  };

  const deleteTask = (e) => {
    let id = parseInt(e.target.id);
    setTarefas(
      tarefas.filter((tarefa) => {
        return tarefa.id !== id;
      })
    );
  };

  const setTarefasToLocal = () => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  };

  const getTarefasFromLocal = () => {
    if (localStorage.getItem("tarefas") !== null) {
      setTarefas(JSON.parse(localStorage.getItem("tarefas")));
    }
  };

  useEffect(() => {
    getTarefasFromLocal();
  }, []);

  useEffect(() => {
    setTarefasToLocal();
  });

  return (
    <div className="tarefas">
      <h3> Tasks </h3>

      <ul className="tasks">
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id}>
              {tarefa.value}{" "}
              <button onClick={deleteTask} id={tarefa.id} className="deleteBtn">
                X
              </button>
            </li>
          );
        })}
      </ul>

      <form onSubmit={adicionarTarefa}>
        <input type="text" placeholder="Add Task" />
        <button type="submit">Save Task </button>{" "}
      </form>
    </div>
  );
};

export default Tarefas;
