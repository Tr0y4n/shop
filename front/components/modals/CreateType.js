import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";

export default function CreateType(props) {
    return(
<Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Введите название типа" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={props.onHide}>Сохранить</Button>
        <Button variant="outline-danger" onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
    )}