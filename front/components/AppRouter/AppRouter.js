import React from "react";
import { authRoutes, publicRoutes } from "../../Routes";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";

export default function AppRouter() {
  const dispatch = useDispatch();  // для изменения state     в функции тип onClick() {dispatch(logInAction(payload))}
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);  // просто взять инфу из хранилища
  //console.log('ISLOGGEDIN = ', isLoggedIn)
  return (
    <Routes>
      {isLoggedIn &&
        authRoutes.map(({ path, Component }) => {
        return(
          <Route key={path} path={path} element={<Component />} />)
        })}
      {publicRoutes.map(({ path, Component }) => {
        return(
        <Route key={path} path={path} element={<Component />} />)
      })}
      <Route path="*" element={<MainPage/>}/>
    </Routes>
  );
}
