import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import { setSelectedBrandAction } from "../../store/deviceReducer";
import './BrandBar.css'

export default function BrandBar() {
  const brands = useSelector((state) => state.deviceReducer.brands);
  //const [selected, setSelected] = useState({});
  const selected = useSelector((state) => state.deviceReducer.selectedBrand)
  const dispatch = useDispatch()

  return (
      <div className="rdow">
        {brands.map((item) => (
          <Card key={item.id} className="p-3 cardd" style={{cursor: "pointer"}} onClick={() => dispatch(setSelectedBrandAction(item))}  border={item.id === selected.id ? 'success' : 'info'}>
            {item.name}
          </Card>
        ))}
      </div>
  );
}
