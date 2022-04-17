import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ElemonContextProvider from "./components/ElemonContext";
import MarketPlace from "./components/MarketPlace/Index";
import Elemon from "./components/Elemon";
import PetSimulation from './components/PetSimulation/Index.jsx'
import Challenge from './components/Challenge/Index.jsx'
import Rank from './components/rank/index'
function MyRoutes() {
  return (
    <Routes>
    <Route
      path="/"
      element={<PetSimulation />} 
    />

    <Route path="/market" element={<MarketPlace />} />
    <Route path="/rank" element={<Rank />} />
    <Route path="/challenge" element={<Challenge />} />

    <Route
      path="*"
      element={<div>There is nothing ! Go back to front page !</div>}
    />
  </Routes>
  )
}

export default MyRoutes