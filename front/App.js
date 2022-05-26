import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { useSelector, useDispatch } from 'react-redux';
import { check } from './http/userAPI';
import { logInAction, registerAction } from './store/authReducer';
import jwt_decode from 'jwt-decode';
import { Spinner } from 'react-bootstrap';

function App() {
 const dispatch = useDispatch();
 const user = useSelector((state) => state.authReducer);
 const [loading, setLoading] = useState(false);

//  useEffect(() => {
//   check()
//    .then((data) => {
//     //Тут еще какого-то хуя он в user записывает true
//     console.log("data token = ", data)
//     if (localStorage.token != "undefined") {
//     dispatch(registerAction(jwt_decode(localStorage.token)));
//     } else {console.log("tOKEN GOVNO")}
//     dispatch(logInAction());
//     // console.log("pagesState.selectedType = ", pagesState.selectedType)
//     // console.log("pagesState.selectedBrand = ", pagesState.selectedBrand)
//    })
//    .finally(() => setLoading(false));
//  }, []);

 if (loading) {
  return <Spinner animation='grow' />;
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
