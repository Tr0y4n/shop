import React from "react";
import { Button, Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";
import './Header.css';
import logo from '../../assets/logo192.png';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import PromotionPage from "../pages/PromotionPage/PromotionPage";
import { BsFillCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";


export default function Header() {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container className="container">
                    <Navbar.Brand className="logo" href="/">
                        <img src={logo} height="30" width="30" alt="Logo"/>
                        Tyoma-shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="lin">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link className="mrg" href="/promotion">Акции</Nav.Link>
                            <Nav.Link href="/about">О нас</Nav.Link>
                        </Nav>
                        <Form className="d-flex" >
                            <FormControl type="text" placeholder="Поиск" className="me-2"/>
                            <Button variant="outline-info">Поиск</Button>
                        </Form>
                        <Nav className="icons">
                            <Nav.Link href="/basket"><BsFillCartFill color="white" size="1.5em" /></Nav.Link>
                            <Nav.Link href="/login"><BsPersonFill color="white" size="1.5em" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/promotion' element={<PromotionPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/basket' element={<BasketPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='promotion/promo1' element={<MainPage />} />
                    <Route path='promotion/promo2' element={<MainPage />} />
                    <Route path='promotion/promo3' element={<MainPage />} />
                    <Route path='promotion/promo4' element={<MainPage />} />
                    <Route path='promotion/promo5' element={<MainPage />} />
                    <Route path='promotion/promo6' element={<MainPage />} />
                    <Route path='promotion/promo7' element={<MainPage />} />
                    <Route path='promotion/promo8' element={<MainPage />} />
                </Routes>
            </Router>
        </div>
    )
}