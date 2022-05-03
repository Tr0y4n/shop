import React from "react";
import { Col, Image } from "react-bootstrap";
import star from '../../assets/star.svg';
import './DeviceListItem.css';
import {useNavigate} from 'react-router-dom';  
import {DEVICE_ROUTE} from '../../Utils/Consts';

export default function DeviceItem(props) {
  const navigate = useNavigate();
  return (
    <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + props.device.id)}>
      <div className="carddy" >
        <Image width={190} height={190} src={"http://localhost:5000/" + props.device.img} />
        <div className="cardTxt">
            <div>Samsung..</div>
            <div className="d-flex align-items-center">
                <div>{props.device.rating}</div>
                <Image width={18} height={18} src={star} />
            </div>
        </div>
        <div>{props.device.name}</div>
      </div>
    </Col>
  );
}