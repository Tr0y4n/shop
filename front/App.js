import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import { useSelector, useDispatch } from "react-redux";
import { check } from "./http/userApi";
import { logInAction, registerAction } from "./store/authReducer";
import jwt_decode from "jwt-decode";
import { Spinner } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
    //Тут еще какого-то хуя он в user записывает true
    dispatch(registerAction(jwt_decode(localStorage.token)))
    dispatch(logInAction())
    // console.log("pagesState.selectedType = ", pagesState.selectedType)
    // console.log("pagesState.selectedBrand = ", pagesState.selectedBrand)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation="grow" />
  }

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
