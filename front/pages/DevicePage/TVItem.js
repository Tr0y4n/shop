import React, { useState } from "react";
import { Form, DropdownButton, Dropdown, Button } from "react-bootstrap";
import "./DevicePage.css";

export default function TVItem(props) {
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
  const vpArr = ["60 Гц", "90 Гц", "120 Гц"]
  const opArr = [info.description.split(" ").shift() / 2, +info.description.split(" ").shift() + 4]

  switch (info.title) {
      case "Цвет":
        return (
          <div className="ss1">
            <Form.Control type="color" id="colorInput" defaultValue={state} onChange={(e) => setState(e.target.value)}/>
          </div>
        );
    case "Частота обновления":
      return (
        <div className="ss1">
          <DropdownButton
            variant="secondary"
            size="sm"
            title={state}
          >
            <Dropdown.Item onClick={() => {info.description === vpArr[0] ? (setState(vpArr[0]), setFlag(null)) : (setState(vpArr[0]), setFlag("lower"))}}>{vpArr[0]}</Dropdown.Item>
            <Dropdown.Item onClick={() => {info.description === vpArr[1] ? (setState(vpArr[1]), setFlag(null)) : (setState(vpArr[1]), setFlag("bigger"))}}>{vpArr[1]}</Dropdown.Item>
            <Dropdown.Item onClick={() => {info.description === vpArr[2] ? (setState(vpArr[2]), setFlag(null)) : (setState(vpArr[2]), setFlag("muchBigger"))}}>{vpArr[2]}</Dropdown.Item>
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
              <Dropdown.Item onClick={() => {setState("Пластик/Стекло"); setFlag("bigger")}}>Пластик/Стекло</Dropdown.Item>
              <Dropdown.Item onClick={() => {setState("Металл"); setFlag("muchBigger")}}>Металл</Dropdown.Item>
              <Dropdown.Item onClick={() => {setState(info.description); setFlag(null)}}>{info.description}</Dropdown.Item>
            </DropdownButton>
          </div>
        );
    default:
      return <div>{info.description}</div>;
  }
}
