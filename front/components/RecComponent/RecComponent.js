import React from "react";
import { Row } from "react-bootstrap";
import './RecComponent.css';
import DeviceItem from '../DeviceList/DeviceItem';

export default function RecComponent(props) {
 const recs = props.recs || []
 //console.log("recs in main = ", recs)
  return (
    <Row className="field">
    {recs.map(item => 
        <DeviceItem device={item} />)}
</Row>
  );
}
