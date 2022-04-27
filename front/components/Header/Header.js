import React, { useState } from "react";
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
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE, PROMOTION_ROUTE, MAIN_ROUTE, KATALOG_ROUTE } from "../../Utils/Consts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import Auth from "../modals/Auth";


export default function Header() {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  const navigate = useNavigate();
  //const [showLogin, setShowLogin] = useState(false)
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
              <Nav.Link onClick={() => navigate(KATALOG_ROUTE)}>Каталог</Nav.Link>
              <Nav.Link className="mrg" onClick={() => navigate(PROMOTION_ROUTE)}>
                Акции
              </Nav.Link>
              <Nav.Link  onClick={() => navigate(ABOUT_ROUTE)}>О нас</Nav.Link>
              { isLoggedIn?
              <Nav.Link className="mrg" onClick={() => navigate(ADMIN_ROUTE)}>Администратор</Nav.Link>
                : "-"}
            </Nav>
            <Form className="d-flex">
              <FormControl type="text" placeholder="Поиск" className="me-2" />
              <Button variant="outline-info">Поиск</Button>
            </Form>
            <Nav className="icons">
              <Nav.Link onClick={() => navigate(BASKET_ROUTE)}>
                <BsFillCartFill color="white" size="1.5em" />
              </Nav.Link>
              <Nav.Link onClick={
              () => navigate(LOGIN_ROUTE)
              //() => setShowLogin(true)
              }>
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
