import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import "./TypeBar.css";
import { setSelectedTypeAction } from "../../store/deviceReducer";

export default function TypeBar() {
  const types = useSelector((state) => state.deviceReducer.types);
  //const [selected, setSelected] = useState({});
  const selected = useSelector((state) => state.deviceReducer.selectedType);
  const dispatch = useDispatch();

  return (
    <div>
      <ListGroup>
        {types.map((item) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            key={item.id}
            active={item.id === selected.id}
            onClick={() => dispatch(setSelectedTypeAction(item))}
          >
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
