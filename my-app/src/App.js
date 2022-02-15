import React from "react";
import "./App.css";
import Elemon from "./components/Elemon";
import SpeedDial from "./components/SpeedDial";
import ElemonContextProvider from "./components/ElemonContext";
import MarketPlace from './components/MarketPlace/Index'
import Navbar from './components/Navbar/Index'
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ElemonContextProvider>
      <Elemon />

      </ElemonContextProvider> */}
      <MarketPlace />
      <SpeedDial />

    </div>
  );
}

export default App;
