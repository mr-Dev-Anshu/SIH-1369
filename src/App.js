import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/Home";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Tem from "./A-components/Tem";
import Upload_Project from "./Pages/Upload_Project";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path= "/tem" element={<Tem/>}/>
          <Route path="/upload" element={<Upload_Project/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
