import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from '../../assets/star.svg';
import './DeviceListItem.css';
import {useNavigate} from 'react-router-dom';  
import {DEVICE_ROUTE} from '../../Utils/Consts';

export default function DeviceList(props) {
  const navigate = useNavigate();
  return (
    <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + props.device.id)}>
      <Card style={{ width: 250, cursor: "pointer" }} border={"black"}>
        <Image width={150} height={150} src={props.device.img} />
        <div className="cardTxt">
            <div>Samsung..</div>
            <div className="d-flex align-items-center">
                <div>{props.device.rating}</div>
                <Image width={18} height={18} src={star} />
            </div>
        </div>
        <div>{props.device.name}</div>
      </Card>
    </Col>
  );
}
