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

  //console.log("DEVICE FROM PROPS = ", device);
  //console.log("INFO FROM PROPS = ", info);
  const [state, setState] = useState(info.description);
  const vpArr = [info.description.split(" ").shift() * 2, info.description.split(" ").shift() * 4]
  const opArr = [info.description.split(" ").shift() / 2, +info.description.split(" ").shift() + 4]
  const ekrArr = ["14''", "15.6''", "16''"]
  const procArr = ["Intel Core i3", "Intel Core i5", "Intel Core i7", "Intel Core i10"]
  const vidArr = ["Intel UHD Graphics", "GeForce gtx 1050", "GeForce gtx 1060", "GeForce gtx 1070"]

  switch (info.title) {
    case "Диск":
      return (
        <div className="ss1">
          <DropdownButton
            variant="secondary"
            size="sm"
            title={state}
          >
            <Dropdown.Item onClick={() => {setState(vpArr[0] + " Гб"); setFlag("bigger")}}>{vpArr[0]} Гб</Dropdown.Item>
            <Dropdown.Item onClick={() => {setState(vpArr[1] + " Гб"); setFlag("muchBigger")}}>{vpArr[1]} Гб</Dropdown.Item>
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
      case "Экран":
        return (
          <div className="ss1">
            <DropdownButton
              variant="secondary"
              size="sm"
              title={state}
            >
              <Dropdown.Item onClick={() => {info.description === ekrArr[0] ? (setState(ekrArr[0]), setFlag(null)) : (setState(ekrArr[0]), setFlag("lower"))}}>{ekrArr[0]}</Dropdown.Item>
            <Dropdown.Item onClick={() => {info.description === ekrArr[1] ? (setState(ekrArr[1]), setFlag(null)) : (setState(ekrArr[1]), setFlag("bigger"))}}>{ekrArr[1]}</Dropdown.Item>
            <Dropdown.Item onClick={() => {info.description === ekrArr[2] ? (setState(ekrArr[2]), setFlag(null)) : (setState(ekrArr[2]), setFlag("muchBigger"))}}>{ekrArr[2]}</Dropdown.Item>
           </DropdownButton>
          </div>
        );
    case "Процессор":
      return (
        <div className="ss1">
          <DropdownButton
            variant="secondary"
            size="sm"
            title={state}
          >
            <Dropdown.Item onClick={() => {info.description === procArr[0] ? (setState(procArr[0]), setFlag(null)) : (setState(procArr[0]), setFlag("lower"))}}>{procArr[0]}</Dropdown.Item>
            <Dropdown.Item onClick={() => {info.description === procArr[1] ? (setState(procArr[1]), setFlag(null)) : (setState(procArr[1]), setFlag("bigger"))}}>{procArr[1]}</Dropdown.Item>
            <Dropdown.Item onClick={() => {info.description === procArr[2] ? (setState(procArr[2]), setFlag(null)) : (setState(procArr[2]), setFlag("muchBigger"))}}>{procArr[2]}</Dropdown.Item>
            <Dropdown.Item onClick={() => {info.description === procArr[3] ? (setState(procArr[3]), setFlag(null)) : (setState(procArr[3]), setFlag("muchBigger"))}}>{procArr[3]}</Dropdown.Item>
          </DropdownButton>
        </div>
      );
      case "Видеокарта":
        return (
          <div className="ss1">
            <DropdownButton
              variant="secondary"
              size="sm"
              title={state}
            >
              <Dropdown.Item onClick={() => {info.description === vidArr[0] ? (setState(vidArr[0]), setFlag(null)) : (setState(vidArr[0]), setFlag("lower"))}}>{vidArr[0]}</Dropdown.Item>
              <Dropdown.Item onClick={() => {info.description === vidArr[1] ? (setState(vidArr[1]), setFlag(null)) : (setState(vidArr[1]), setFlag("bigger"))}}>{vidArr[1]}</Dropdown.Item>
              <Dropdown.Item onClick={() => {info.description === vidArr[2] ? (setState(vidArr[2]), setFlag(null)) : (setState(vidArr[2]), setFlag("muchBigger"))}}>{vidArr[2]}</Dropdown.Item>
              <Dropdown.Item onClick={() => {info.description === vidArr[3] ? (setState(vidArr[3]), setFlag(null)) : (setState(vidArr[3]), setFlag("muchBigger"))}}>{vidArr[3]}</Dropdown.Item>
            </DropdownButton>
        </div>
      );
    default:
      return <div>{info.description}</div>;
  }
}
