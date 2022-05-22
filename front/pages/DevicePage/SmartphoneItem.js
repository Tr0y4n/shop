import React, { useState } from "react";
import { Form, DropdownButton, Dropdown, Button } from "react-bootstrap";
import "./DevicePage.css";

export default function DeviceItem(props) {
  const device = props.device;
  const info = props.info;
  let price = props.price;
  const setPrice = props.setPrice;
  const [flag, setFlag] = useState(null);
  if (flag === "lower") {
      price = +(props.price - props.price / 100 * 5).toFixed(0);
      setPrice(price);
      setFlag(null)
  } 
   if (flag === "bigger") {
      price = +(props.price + props.price / 100 * 5).toFixed(0)
      setPrice(price);
      setFlag(null)
  }
  if (flag === "muchBigger") {
    price = +(props.price + props.price / 100 * 8).toFixed(0);
    setPrice(price);
      setFlag(null)
}

  const [state, setState] = useState(info.description);
  const vpArr = [info.description.split(" ").shift() / 2, info.description.split(" ").shift() * 2]
  const opArr = [info.description.split(" ").shift() / 2, +info.description.split(" ").shift() + 4]


  switch (info.title) {
    case "Встроенная память":
      return (
        <div className="ss1">
          <DropdownButton
            variant="secondary"
            size="sm"
            title={state}
          >
            <Dropdown.Item onClick={() => {setState(vpArr[0] + " Гб"); setFlag("lower")}}>{vpArr[0]} Гб</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(vpArr[1] + " Гб"); setFlag("bigger")}}>{vpArr[1]} Гб</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(info.description); setFlag(null)}}>{info.description}</Dropdown.Item>
            </DropdownButton>
        </div>
      );    
      case "Цвет":
        return (
          <div className="ss1">
            <Form.Control type="color" id="colorInput" defaultValue={state} onChange={(e) => setState(e.target.value)}/>
          </div>
        );
    case "Оперативная память":
      return (
        <div className="ss1">
          <DropdownButton
            variant="secondary"
            size="sm"
            title={state}
          >
            <Dropdown.Item onClick={() => {setState(opArr[0] + " Гб"); setFlag("lower")}}>{opArr[0]} Гб</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(opArr[1] + " Гб"); setFlag("bigger")}}>{opArr[1]} Гб</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(info.description); setFlag(null)}}>{info.description}</Dropdown.Item>
          </DropdownButton>
        </div>
      );
      case "Материал":
        return (
          <div className="ss1">
            <DropdownButton
              variant="secondary"
              size="sm"
              title={state}
            >
              <Dropdown.Item onClick={() => {setState("Пластик/Стекло"); setFlag("lower")}}>Пластик/Стекло</Dropdown.Item>
              <Dropdown.Item onClick={() => {setState("Пластик"); setFlag("lower")}}>Пластик</Dropdown.Item>
              <Dropdown.Item onClick={() => {setState("Металл"); setFlag("bigger")}}>Металл</Dropdown.Item>
              <Dropdown.Item onClick={() => {setState(info.description); setFlag(null)}}>{info.description}</Dropdown.Item>
            </DropdownButton>
          </div>
        );
    case "Аккумулятор":
      return (
        <div className="ss1">
          <DropdownButton
            variant="secondary"
            size="sm"
            title={state}
          >
            <Dropdown.Item onClick={() => {setState(device.info[6].description.split(" ").shift() - 500 + " мАч"); setFlag("lower")}}>{device.info[6].description.split(" ").shift() - 500} мАч</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(+device.info[6].description.split(" ").shift() + 500 + " мАч"); setFlag("bigger")}}>{+device.info[6].description.split(" ").shift() + 500} мАч</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(+device.info[6].description.split(" ").shift() + 1000 + " мАч"); setFlag("muchBigger")}}>{+device.info[6].description.split(" ").shift() + 1000} мАч</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(info.description); setFlag(null)}}>{info.description}</Dropdown.Item>
          </DropdownButton>
        </div>
      );
    case "Камера":
      return (
        <div className="ss1">
          <DropdownButton
            variant="secondary"
            size="sm"
            title={state}
          >
            <Dropdown.Item onClick={() => {setState(device.info[7].description.split(" ").shift() - 8 + " Мп"); setFlag("lower")}}>{device.info[7].description.split(" ").shift() - 8} Мп</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(+device.info[7].description.split(" ").shift() + 4 + " Мп"); setFlag("bigger")}}>{+device.info[7].description.split(" ").shift() + 4} Мп</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(+device.info[7].description.split(" ").shift() + 8 + " Мп"); setFlag("muchBigger")}}>{+device.info[7].description.split(" ").shift() + 8} Мп</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(info.description); setFlag(null)}}>{info.description}</Dropdown.Item>
          </DropdownButton>
        </div>
      );
    default:
      return <div>{info.description}</div>;
  }
}
