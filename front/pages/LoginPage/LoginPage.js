import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './LoginPage.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
 LOGIN_ROUTE,
 MAIN_ROUTE,
 REGISTRATION_ROUTE,
} from '../../Utils/Consts';
import { check, login, registration } from '../../http/userAPI';
import { useSelector, useDispatch } from 'react-redux';
import { logInAction, registerAction } from '../../store/authReducer';

export default function LoginPage() {
 const navigate = useNavigate();
 const user = useSelector((state) => state.authReducer);
 const dispatch = useDispatch();
 const location = useLocation();
 const isLogin = location.pathname === '/login';
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 //console.log("STORE = ", user)
 const click = async () => {
  try {
   let data;
   if (isLogin) {
    data = await login(email, password);
    //console.log("data in LoginPage login", data);
   } else {
    data = await registration(email, password);
    //console.log("data in LoginPage registration", data);
   }
   dispatch(registerAction(data)); //ТУТ ЧЕТ ЧТО-ТО НЕ ТАК
   dispatch(logInAction());
   navigate(MAIN_ROUTE);
  } catch (e) {
   console.log('Error ===', e);
   //alert(e.response.data.message)
  }
 };

 return (
  <Container className='cont' style={{ height: window.innerHeight - 60 }}>
   <Card>
    <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
    <Form className='form'>
     <Form.Control
      className='inputs'
      placeholder='Введите адрес электронной почты'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
     <Form.Control
      className='inputs'
      placeholder='Введите пароль'
      type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
     <Row className='row'>
      {isLogin ? (
       <div>
        Нет аккаунта?{' '}
        <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
       </div>
      ) : (
       <div>
        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
       </div>
      )}
      <Button className='inputs align-self-end' variant='dark' onClick={click}>
       {isLogin ? 'Войти' : 'Регистрация'}
      </Button>
     </Row>
    </Form>
   </Card>
  </Container>
 );
}
