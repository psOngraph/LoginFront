import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./container";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
