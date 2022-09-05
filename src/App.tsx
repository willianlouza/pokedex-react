import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams, HashRouter } from "react-router-dom";
import Home from "./view/Home/index";
import Inspector from "./view/Inspector";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pokemon/:id" element={<Inspector />} /> */}
      </Routes>
    </HashRouter>

  );
}

export default App;
