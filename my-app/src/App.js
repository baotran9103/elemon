import React,{useState,useEffect} from "react";
import "./App.css";
import SpeedDial from "./components/SpeedDial";
import MyRoutes from "./Routes";
import Navbar from "./components/Navbar/Index";
function App() {
  useEffect(() => {
    return ()=>{
    }
    

  }, [])
  
  return (
    <div className="App">
    
  
      <Navbar />
      <MyRoutes />
      <SpeedDial />

     

{/* <AdSense.Google
  client='ca-pub-9931528230275578'
  slot='8299203368'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
  data-adtest="on"
/> */}
{/* <ins className = "adsbygoogle"
format='auto'
responsive='true'
data-adtest="on"
                style = { {display:"flex",width:"100%",height:'90px'} }
                data-ad-client = "ca-pub-9931528230275578"
                data-ad-slot = "8299203368"></ins> */}

    </div>
  );
}

export default App;
