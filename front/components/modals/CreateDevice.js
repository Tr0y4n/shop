import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createDevice, fetchTypes } from "../../http/deviceApi";
import { fetchBrands } from "../../http/deviceApi";
import { setTypeAction,setBrandAction, setSelectedBrandAction, setSelectedTypeAction } from "../../store/deviceReducer";

export default function CreateDevice(props) {
  const deviceStore = useSelector((state) => state.deviceReducer);
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const brand = deviceStore.selectedBrand;
  const type = deviceStore.selectedType
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then(data => dispatch(setTypeAction(data)));
    fetchBrands().then(data => dispatch(setBrandAction(data)));
  }, [])

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0])
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', brand.id)
    formData.append('typeId', type.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(() => props.onHide())
  }

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3 mb-2">
            <Dropdown.Toggle>{type.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore.types.map((type) => (
                <Dropdown.Item onClick={() => dispatch(setSelectedTypeAction(type))} key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3 mb-2">
            <Dropdown.Toggle>{brand.name || "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore.brands.map((brand) => (
                <Dropdown.Item onClick={() => dispatch(setSelectedBrandAction(brand))} key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <FormControl
            className="mt-3"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Введите название устройства"
          />
          <FormControl
            className="mt-3"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <FormControl className="mt-3" type="file" onChange={selectFile}/>
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={4}>
                <FormControl value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <FormControl value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addDevice}>
          Сохранить
        </Button>
        <Button variant="outline-danger" onClick={props.onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
}