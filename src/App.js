import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import "./calcu.css";

import { envAPI } from "./apiCalls";

function App() {
  const response = async (endp) => envAPI(endp);
  const [dataRecibida, setdataRecibida] = useState(null);

  useEffect(() => {
    async function loadapi() {
      const resp = await response("characters");
      const data = resp?.data;
      setdataRecibida(data);
      //console.log(data);
    }
    loadapi();
    return function cleanup() {
      loadapi();
    };
  }, []);

  //console.log(dataRecibida, "soy data")
  console.log(dataRecibida !== null ? dataRecibida : "es null");

  console.log("para visualizar en github");
  //dataRecibida !== null && console.log(dataRecibida[0].name);

  return (
    <div className="App">
      <header className="App-header">
        {false && dataRecibida !== null ? (
          <div className="grilla">
            {dataRecibida.map((item) => {
              console.log(item);
              return (
                <div className="Card">
                  <h1 className="h1nombre">{item.name}</h1>
                  <img
                    className="avatar"
                    alt="imagen personaje"
                    src={item.img}
                  />
                  <div className="div1">
                    <p className="datosP">{item.birthday}</p>
                    <h2 className="datosP">{item.status}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        {/* ejemplo de display:grid; */}
        {false && (
          <div className="padre">
            <div className="box1">menuuuu</div>
            <div className="box2">
              {dataRecibida !== null ? (
                <div className="tarjetas">
                  {dataRecibida.map((item) => {
                    console.log(item);
                    return (
                      <div className="Card">
                        <h1 className="h1nombre">{item.name}</h1>
                        <img
                          className="avatar"
                          alt="imagen personaje"
                          src={item.img}
                        />
                        <div className="div1">
                          <p className="datosP">{item.birthday}</p>
                          <h2 className="datosP">{item.status}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="box3">banner</div>
            <div className="box4">extra</div>
            <div className="box5">image</div>
          </div>
        )}
        {/* ejemplo de display:grid; */}
      </header>
      {/* calculadora */}
      <div className="calcu">
        <div className="pantalla">
          <h1 className="nums">987654231</h1>
        </div>
        <div className="botones">
          <div className="uno marbtn">
            <button className="tecla">1</button>
          </div>
          <div className="dos marbtn">
            <button className="tecla">2</button>
          </div>
          <div className="tres marbtn">
            <button className="tecla">3</button>
          </div>
          <div className="cuatro marbtn">
            <button className="tecla">4</button>
          </div>
          <div className="cinco marbtn">
            <button className="tecla">5</button>
          </div>
          <div className="seis marbtn">
            <button className="tecla">6</button>
          </div>
          <div className="siete marbtn">
            <button className="tecla">7</button>
          </div>
          <div className="ocho marbtn">
            <button className="tecla">8</button>
          </div>
          <div className="nueve marbtn">
            <button className="tecla">9</button>
          </div>
          <div className="cero marbtn">
            <button className="tecla">0</button>
          </div>
          <div className="sum marbtn">
            <button className="tecla">+</button>
          </div>
          <div className="res marbtn">
            <button className="tecla">-</button>
          </div>
          <div className="mul marbtn">
            <button className="tecla">x</button>
          </div>
          <div className="divi marbtn">
            <button className="tecla">/</button>
          </div>
          <div className="reset marbtn">
            <button className="tecla">res</button>
          </div>
          <div className="igual marbtn">
            <button className="tecla">=</button>
          </div>
          <div className="del marbtn">
            <button className="tecla">{`<-`}</button>
          </div>
          <div className="punto marbtn">
            <button className="tecla">.</button>
          </div>
        </div>
      </div>

      {/* calculadora */}
    </div>
  );
}

export default App;
