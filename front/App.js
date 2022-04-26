import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div>
      <HashRouter>
        <Header /> 
        <AppRouter />
      </HashRouter>
    </div>
  );
}

export default App;
