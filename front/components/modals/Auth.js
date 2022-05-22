import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './Auth.css'

export default function Auth(props) {
    // !ㅤ! невидимый символ
    const [isLogin, setIsLogin] = useState(true)
  return (
    <Modal show={props.show} onHide={props.onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {isLogin ? "Авторизация" : "Регистрация"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control className='mt-3' placeholder="Введите адрес электронной почты" />
          <Form.Control className='mt-3' placeholder="Введите пароль" />
          <div className="lower">
              {isLogin ?        
          <div className="tog">
                Нет аккаунта?
                <div className="link" style={{cursor: "pointer"}} onClick={() => setIsLogin(false)}>Зарегистрируйтесь!</div>
              </div>
                : <div className="tog">
                Есть аккаунт?
                <div className="link" style={{cursor: "pointer"}} onClick={() => setIsLogin(true)}>Войдите!</div>
              </div>
              }
              <div className="ass">
          <Button className="btnn" variant='dark' onClick={props.onHide}>{isLogin ? "Войти" : "Регистрация"}</Button>
          </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
