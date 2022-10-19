import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Product from "./components/Product";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<div>LogIn or SignUp Please!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
