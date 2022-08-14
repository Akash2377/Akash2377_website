import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="*" exact element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
