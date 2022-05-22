import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setDoAction, setOtAction } from "../../store/PagesReducer";
import './PriceFilter.css'

export default function PriceFilter() {
  const [otValue, setOtValue] = useState("1")
  const [doValue, setDoValue] = useState("9999999")
  const dispatch = useDispatch()
  // console.log("OtValue: ", otValue)
  // console.log("DoValue: ", doValue)

  const handleOt = (event) => {
    setOtValue(event.target.value)
    console.log("event.target.value = ", event.target.value)
    dispatch(setOtAction(event.target.value))
    console.log("sent ot ", event.target.value)
  }

  const handleDo = (event) => {
    setDoValue(event.target.value)
    dispatch(setDoAction(event.target.value))
    console.log("sent do ", event.target.value)
  }
  
  return (
      <div className="all">
        Цена ₽
      <InputGroup className="oo">
      <FormControl
          type="text"
          placeholder="от: 1₽"
          className="in left"
          // value={otValue}
          onChange={handleOt}
        />
        <FormControl
          type="text"
          placeholder="до: 999999₽"
          className="in"
          // value={doValue}
          onChange={handleDo}
        />
      </InputGroup>
      </div>
  );
}
