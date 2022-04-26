import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "./LoginPage.css";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../Utils/Consts";

export default function LoginPage() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  return (
    <Container className="cont" style={{ height: window.innerHeight - 60 }}>
      <Card>
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="form">
          <Form.Control
            className="inputs"
            placeholder="Введите адрес электронной почты"
          />
          <Form.Control className="inputs" placeholder="Введите пароль" />
          <Row className="row">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button className="inputs align-self-end" variant="dark">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
