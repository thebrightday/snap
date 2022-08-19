import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Reserve from "./Reserve";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/reserve" element={<Reserve />} />
    </Routes>
  );
}

export default App;
