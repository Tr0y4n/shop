import React, { useEffect } from "react";
import { Col, Image } from "react-bootstrap";
import star from "../../assets/star.svg";
import "./DeviceListItem.css";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../Utils/Consts";

export default function DeviceItem(props) {
  const navigate = useNavigate();
  const nameArr = props.device.name.split(" ");
  const index = props.device.name.indexOf(" ");
  const nameMas = props.device.name.slice(index);
  let rate =
    String(props.device.rating).slice(0, 1) +
    "." +
    String(props.device.rating).slice(1, 2);

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => {
        navigate(DEVICE_ROUTE + "/" + props.device.id);
        const watchedArr =
          JSON.parse(localStorage.getItem("watchedArr")) !== null
            ? JSON.parse(localStorage.getItem("watchedArr"))
            : [];
        let flag = true;
        watchedArr.forEach(element => {
          element.id === props.device.id ? flag = false : ''
        });
        if (flag) {
          watchedArr.length > 3 ? watchedArr.shift() : null
          watchedArr.push(props.device);
          localStorage.setItem(`watchedArr`, JSON.stringify(watchedArr));
          }
      }}
    >
      <div className="carddy">
        <Image
          width={190}
          height={190}
          src={"http://localhost:5000/" + props.device.img}
        />
        <div className="cardTxt">
          <div>{nameArr[0]}</div>
          <div className="d-flex align-items-center">
            <div>{rate}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{nameMas}</div>
      </div>
    </Col>
  );
}
