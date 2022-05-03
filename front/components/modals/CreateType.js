import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceApi";

export default function CreateType(props) {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      props.onHide();
    });
  };

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Введите название типа"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addType}>
          Сохранить
        </Button>
        <Button variant="outline-danger" onClick={props.onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
