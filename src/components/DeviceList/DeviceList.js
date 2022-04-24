import React from "react";
import { Row } from "react-bootstrap";
import DeviceItem from './DeviceItem'
import { useSelector } from "react-redux";

export default function DeviceList() {
    const devices = useSelector((state) => state.deviceReducer.devices);
    return (
        <Row className="d-flex">
            {devices.map(item => 
                <DeviceItem key={item.id} device={item} />)}
        </Row>
    );
}