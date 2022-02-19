import React,{useState} from "react";
import "./App.css";
import SpeedDial from "./components/SpeedDial";
import MyRoutes from "./Routes";
import Navbar from "./components/Navbar/Index";
function App() {
  const [open, setopen] = useState(false)
  return (
    <div className="App">
    
  
      <Navbar />
      <MyRoutes />
      <SpeedDial />

     

    </div>
  );
}

export default App;
