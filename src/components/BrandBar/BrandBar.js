import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import './BrandBar.css'

export default function BrandBar() {
  const brands = useSelector((state) => state.deviceReducer.brands);
  const [selected, setSelected] = useState({});
  return (
      <div className="rdow">
        {brands.map((item) => (
          <Card key={item.id} className="p-3 cardd" style={{cursor: "pointer"}} onClick={() => setSelected(item.id)}  border={item.id === selected ? 'success' : 'black'}>
            {item.name}
          </Card>
        ))}
      </div>
  );
}
