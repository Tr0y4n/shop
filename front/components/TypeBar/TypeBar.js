import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import "./TypeBar.css";

export default function TypeBar() {
  const types = useSelector((state) => state.deviceReducer.types);
  const [selected, setSelected] = useState({});
  return (
    <div>
      <ListGroup>
        {types.map((item) => (
          <ListGroup.Item style={{cursor: "pointer"}} key={item.id} active={item.id === selected} onClick={() => setSelected(item.id)}>
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
