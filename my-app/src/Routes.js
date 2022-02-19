import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ElemonContextProvider from "./components/ElemonContext";
import MarketPlace from "./components/MarketPlace/Index";
import Elemon from "./components/Elemon";



function MyRoutes() {
  return (
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
  )
}

export default MyRoutes