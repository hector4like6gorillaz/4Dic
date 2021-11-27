import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
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
        {dataRecibida !== null ? (
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
          <img alt="logo" src={logo} />
        )}
      </header>
    </div>
  );
}

export default App;
