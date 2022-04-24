import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
