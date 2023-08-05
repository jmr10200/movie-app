import React from "react";
import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/movie-detail" Component={Detail} />
      </Routes>
    </HashRouter>
  );
}

export default App;
