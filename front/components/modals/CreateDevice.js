import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, FormControl, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function CreateDevice(props) {
    const states = useSelector(state => state.deviceReducer);
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(item => item.number !== number))
    }
    return(
<Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-3 mb-2'>
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                  {states.types.map(type => 
                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
              </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3 mb-2'>
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                  {states.brands.map(brand => 
                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
              </Dropdown.Menu>
          </Dropdown>
          <FormControl className='mt-3' placeholder='Введите название устройства'/>
          <FormControl className='mt-3' placeholder='Введите стоимость устройства' type='number'/>
          <FormControl className='mt-3' type='file'/>
          <hr />
          <Button variant='outline-dark' onClick={addInfo}>Добавить новое свойство</Button>
          {info.map(i => 
              <Row className="mt-3" key={i.number}>
                <Col md={4}>
                    <FormControl placeholder='Введите название свойства'/>
                </Col>
                <Col md={4}>
                    <FormControl placeholder='Введите описание свойства'/>
                </Col>
                <Col md={4}>
                    <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Удалить</Button>
                </Col>
              </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={props.onHide}>Сохранить</Button>
        <Button variant="outline-danger" onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )}