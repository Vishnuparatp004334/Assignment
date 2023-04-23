import React from "react";
import "./App.css";
import Home from "./component/Home";
import Password from "./component/Password";
import Personal from "./component/Personal";
import Interest from "./component/Interest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/Interest" element={<Interest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
