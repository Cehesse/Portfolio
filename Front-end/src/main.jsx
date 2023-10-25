//REACT
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//SASS
import "./sass/main.scss";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Error from "./pages/Error";

//LAYOUT
import Header from "./layout/Header";
import Footer from "./layout/Footer";

//ROUTE
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/Portfolio">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects/:Number" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
