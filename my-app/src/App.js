import React from "react";
import "./App.css";
import Elemon from "./components/Elemon";
import SpeedDial from "./components/SpeedDial";
import ElemonContextProvider from "./components/ElemonContext";
function App() {
  return (
    <div className="App">
      <ElemonContextProvider>
      <Elemon />

      </ElemonContextProvider>
      <SpeedDial />

    </div>
  );
}

export default App;
