import React, { useState } from "react";
import { Row } from "react-bootstrap";
import DeviceItem from './DeviceItem'
import { useSelector } from "react-redux";

export default function DeviceList() {
    const devices = useSelector((state) => state.deviceReducer.devices) || [];
    const pagesState = useSelector((state) => state.pagesReducer);
    const priceDevices = [];
    for (let i = 0; i < devices.length; i++) {
        //console.log("devices[i].price: ", devices[i].price, "> +pagesState.otValue: ", +pagesState.otValue, "&& devices[i].price < +pagesState.doValue: ", +pagesState.doValue)
        if (devices[i].price > (+pagesState.otValue || 1) && devices[i].price < (+pagesState.doValue || 999999)) priceDevices.push(devices[i])
    }

    console.log("priceDevices = ", priceDevices)

    return (
        <Row className="d-flex">
            {priceDevices.map(item => 
                <DeviceItem key={item.id} device={item} />)}
        </Row>
    );
}