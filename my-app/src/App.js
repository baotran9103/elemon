import React,{useState} from "react";
import "./App.css";
import SpeedDial from "./components/SpeedDial";
import MyRoutes from "./Routes";
import Navbar from "./components/Navbar/Index";
function App() {
  return (
    <div className="App">
    
  
      <Navbar />
      <MyRoutes />
      <SpeedDial />

     

    </div>
  );
}

export default App;
