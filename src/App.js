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
          <h1>987654231</h1>
        </div>
        <div className="botones">
          <div className="uno"><button className="tecla">1</button></div>
          <div className="dos"><button className="tecla">2</button></div>
          <div className="tres"><button className="tecla">3</button></div>
          <div className="cuatro"><button className="tecla">4</button></div>
          <div className="cinco"><button className="tecla">5</button></div>
          <div className="seis"><button className="tecla">6</button></div>
          <div className="siete"><button className="tecla">7</button></div>
          <div className="ocho"><button className="tecla">8</button></div>
          <div className="nueve"><button className="tecla">9</button></div>
          <div className="cero"><button className="tecla">0</button></div>
          <div className="sum"><button className="tecla">+</button></div>
          <div className="res"><button className="tecla">-</button></div>
          <div className="mul"><button className="tecla">x</button></div>
          <div className="divi"><button className="tecla">/</button></div>
          <div className="reset"><button className="tecla">res</button></div>
          <div className="igual"><button className="tecla">=</button></div>
          <div className="del"><button className="tecla">{`<-`}</button></div>
          <div className="punto"><button className="tecla">.</button></div>
        </div>
      </div>

      {/* calculadora */}
    </div>
  );
}

export default App;
