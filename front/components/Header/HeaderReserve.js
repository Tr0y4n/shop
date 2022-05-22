import React from "react";
import { Button, Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";
import './Header.css';
import logo from '../../logo192.png';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import BasketPage from "../BasketPage/BasketPage";
import LoginPage from "../LoginPage/LoginPage";
import AboutPage from "../AboutPage/AboutPage";
import PromotionPage from "../PromotionPage/PromotionPage";
import { BsFillCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";


export default function Header() {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="Logo"/> Tyoma-shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto my-2 my-lg-0">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/promotion">Акции</Nav.Link>
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
                </Routes>
            </Router>
        </>
    )
}