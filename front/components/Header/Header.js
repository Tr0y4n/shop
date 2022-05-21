import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";
import "./Header.css";
import logo from "../../assets/logo192.png";
import { BsFillCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  ABOUT_ROUTE,
  PROMOTION_ROUTE,
  DEVICE_ROUTE,
  MAIN_ROUTE,
  KATALOG_ROUTE,
} from "../../Utils/Consts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction, registerAction } from "../../store/authReducer";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceApi";
import {
  setBrandAction,
  setDeviceAction,
  setTypeAction,
} from "../../store/deviceReducer";
import { setTotalAction } from "../../store/PagesReducer";
//import Auth from "../modals/Auth";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const user = useSelector((state) => state.authReducer.user);
  const deviceStore = useSelector((state) => state.deviceReducer);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logOutAction());
    dispatch(registerAction({}));
  };
  //const [showLogin, setShowLogin] = useState(false)

  const handleSearch = () => {                                      // ВРОДЕ НОРМ, НО НЕ РЕРЕНДЕРИТСЯ ПОИСК ИЗ ОДНОГО ТОВАРА В ДРУГОЙ
    if (deviceStore.devices.length < 8) {                          // И НЕ УДАЕТСЯ ОЧИСТИТЬ СТРОКУ ПОИСКА ПОСЛЕ ЗАПРОСА
      fetchTypes().then((data) => dispatch(setTypeAction(data)));
      fetchBrands().then((data) => dispatch(setBrandAction(data)));
      fetchDevices(null, null, null, 100).then((data) => {        // 100 - кол-во зафетченных девайсов
        console.log("fetch типа working");
        dispatch(setDeviceAction(data.rows));
        dispatch(setTotalAction(data.count));
      });
    }
    deviceStore.devices.forEach((item) =>
      item.name === search ? navigate(DEVICE_ROUTE + "/" + item.id) : "-"
    );
    console.log("STORE)) = ", deviceStore.devices);
    //setSearch("")   из-за этого ублюдка все перестает фетчиться
  };

  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Container className="container">
          <Navbar.Brand className="logo" href="/">
            <img src={logo} height="30" width="30" alt="Logo" />
            Tyoma-shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="lin">
              <Nav.Link className="mrg" onClick={() => navigate(MAIN_ROUTE)}>
                Главная
              </Nav.Link>
              <Nav.Link onClick={() => navigate(KATALOG_ROUTE)}>
                Каталог
              </Nav.Link>
              <Nav.Link               
                className="mrg"
                onClick={() => navigate(PROMOTION_ROUTE)}
              >
                Акции
              </Nav.Link>
              <Nav.Link onClick={() => navigate(ABOUT_ROUTE)}>О нас</Nav.Link>
              {isLoggedIn && user.role === "ADMIN" ? (
                <Nav.Link className="mrg" onClick={() => navigate(ADMIN_ROUTE)}>
                  Администратор
                </Nav.Link>
              ) : (
                "-"
              )}
              {isLoggedIn ? (
                <Nav.Link className="" onClick={logOut}>
                  Выйти
                </Nav.Link>
              ) : (
                "-"
              )}
            </Nav>
            <Form className="d-flex">
              <FormControl
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Поиск"
                className="me-2"
              />
              <Button variant="outline-info" onClick={handleSearch}>
                Поиск
              </Button>
            </Form>
            <Nav className="icons">
              <Nav.Link onClick={() => navigate(BASKET_ROUTE)}>
                <BsFillCartFill color="white" size="1.5em" />
              </Nav.Link>
              <Nav.Link
                onClick={
                  () => navigate(LOGIN_ROUTE)
                  //() => setShowLogin(true)
                }
              >
                <BsPersonFill color="white" size="1.5em" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Auth show={showLogin} onHide={() => setShowLogin(false)}/> */}
        </Container>
      </Navbar>
    </div>
  );
}
