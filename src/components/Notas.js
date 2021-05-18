import React, { useEffect, useState } from "react";

const Notas = () => {
  const [notas, setNotas] = useState([]);

  const adicionarNota = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      let nota = {
        id: Math.floor(Math.random() * 1000),
        value: e.target[0].value,
      };
      setNotas([...notas, nota]);
      e.target[0].value = "";
    }
  };
  const deleteNota = (e) => {
    let id = parseInt(e.target.id);
    setNotas(
      notas.filter((nota) => {
        return nota.id !== id;
      })
    );
  };

  const setToLocalNotas = () => {
    localStorage.setItem("notas", JSON.stringify(notas));
  };
  const getLocalNotas = () => {
    if (localStorage.getItem("notas") != null) {
      setNotas(JSON.parse(localStorage.getItem("notas")));
    }
  };

  useEffect(() => {
    getLocalNotas();
  }, []);

  useEffect(() => {
    setToLocalNotas();
  });

  return (
    <div className="tarefas">
      <h3>Notes</h3>
      <ul className="tasks">
        {notas.map((nota) => {
          return (
            <li key={nota.id}>
              {" "}
              {nota.value}{" "}
              <button onClick={deleteNota} id={nota.id} className="deleteBtn">
                X
              </button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={adicionarNota}>
        <input type="text" placeholder="Add Note" />
        <button>Save Note</button>
      </form>
    </div>
  );
};

export default Notas;
