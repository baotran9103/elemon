import React from "react";
import "./App.css";
import Elemon from "./components/Elemon";
import SpeedDial from "./components/SpeedDial";
import ElemonContextProvider from "./components/ElemonContext";
import MarketPlace from "./components/MarketPlace/Index";
import Navbar from "./components/Navbar/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
      <Router>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ElemonContextProvider>
                <Elemon />
              </ElemonContextProvider>
            }
          />

          <Route path="/market" element={<MarketPlace />} />

          <Route
            path="*"
            element={<div>There is nothing ! Go back to front page !</div>}
          />
        </Routes>
      <SpeedDial />

      </Router>

    </div>
  );
}

export default App;
