import React, { useState, useEffect } from "react";
//Router
import { Route, Switch } from "react-router-dom";
import "./components/styles/App.css";
import Tempos from "./components/Tempos";
import Tarefas from "./components/Tarefas";
import Notas from "./components/Notas";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import HistoricoPorDia from "./components/HistoricoPorDia";
import AllHistory from "./components/AllHistory";
import Footer from "./components/Footer";
import audio from "./audio/audio.wav";
import criarHistorico from "./auxiliar";

function App() {


  const timerBetween =  1000;
  const reset25 = 25 * 60 * 1000;
  const reset5 = 5 * 60 * 1000;
  const reset15 = 15 * 60 * 1000;
  const audioObj = new Audio(audio);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    getHistoricoFromLocal();
  }, []);

  const getHistoricoFromLocal = () => {
    if (localStorage.getItem("historico") !== null) {
      setHistorico(JSON.parse(localStorage.getItem("historico")));
    }
  };

  const setHistoricoInLocal = () => {
    localStorage.setItem("historico", JSON.stringify(historico));
  };



  const [temporizador, setTemporizador] = useState({
    iniciado: false,
    tempo: reset25,
    isNext: true,
    objectivo: 0,
  });

  const [descanso5min, setDescanso5min] = useState({
    iniciado: false,
    tempo: reset5,
    checkmark: 0,
    isNext: false,
    objectivo: 0,
  });
  const [descanso15min, setDescanso15Min] = useState({
    iniciado: false,
    tempo: reset15,
    isNext: false,
    objectivo: 0,
  });



  useEffect(() => {
    const escolhas = setTimeout(() => {
      escolha();
    }, timerBetween);
    setHistoricoInLocal();
    return () => clearTimeout(escolhas);
  });

  function cronometro(tempo, setTempo, reset) {
    // se temporizador atingir os 0segundos faz reset
    let agora = new Date();
    agora = agora.getTime();

    //se o tempo actual for menor do que o tempo actual e o tempo a correr for igual a verdadeiro
    if (tempo.objectivo < agora && tempo.iniciado === true) {
      audioObj.play();
      setTempo((previous) => {
        return {
          ...previous,
          iniciado: false,
          tempo: reset,
          isNext: false,
          objectivo: 0,
        };
      });
      if (tempo === temporizador) {
        if (descanso5min.checkmark < 3) {
          setDescanso5min((previous) => {
            return {
              ...previous,
              isNext: true,
              checkmark: previous.checkmark + 1,
            };
          });
        } else {
          setDescanso5min({ ...descanso5min, checkmark: 0 });
          setDescanso15Min({ ...descanso15min, isNext: true });
        }
        criarHistorico(historico, setHistorico);
        localStorage.setItem("historico", JSON.stringify(historico));
      } else {
        setTemporizador({ ...temporizador, isNext: true });
      }
    } else if (tempo.iniciado === true) {
      setTempo((previous) => {
        return { ...previous, tempo: tempo.objectivo - agora };
      });
    }
  }



  function escolha() {
    if (temporizador.iniciado === true) {
      cronometro(temporizador, setTemporizador, reset25);
    } else if (descanso15min.iniciado === true) {
      cronometro(descanso15min, setDescanso15Min, reset15);
    } else {
      cronometro(descanso5min, setDescanso5min, reset5);
    }
  }



  return (
    <div className="App">
      <Navbar></Navbar>{" "}
      <div className="min-heigh">
        <Switch>
          <Route exact path="/">
            <Tempos
              temporizador={temporizador}
              setTemporizador={setTemporizador}
              descanso15min={descanso15min}
              setDescanso15Min={setDescanso15Min}
              descanso5min={descanso5min}
              setDescanso5min={setDescanso5min}
            ></Tempos>
            <div className="notas-tarefas">
              <Tarefas />
              <Notas />
            </div>
          </Route>{" "}
          <Route exact path="/about">
            <Description />
          </Route>{" "}
          <Route exact path="/daily-tomato">
            <HistoricoPorDia historico={historico} />{" "}
          </Route>{" "}
          <Route exact path="/all-your-tomatos">
            <AllHistory historico={historico} />
          </Route>
        </Switch>{" "}
      </div>
      <Footer> </Footer>{" "}
    </div>
  );
}

export default App;
