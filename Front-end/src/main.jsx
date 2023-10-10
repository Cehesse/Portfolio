//REACT
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

//SASS
import "./sass/main.scss";

//PAGES
import Home from "./pages/Home"
import About from "./pages/About"
import Projet from "./pages/Projet"
import Error from "./pages/Error"


//LAYOUT
import Header from "./layout/Header"
import Footer from "./layout/Footer"

//ROUTE
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="/Portfolio">
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" component={<Home />} />
            <Route path="/About" component={<About />} />
            <Route path="/Projet/:Number" component={<Projet />} />
            <Route path="*" component={<Error />} />
          </Routes>
        <Footer />
      </div>
    </HashRouter>
  </React.StrictMode>,
);