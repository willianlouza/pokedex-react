import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./view/Home/index";
import Inspector from "./view/Inspector";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pokemon/:id" element={<Inspector />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
