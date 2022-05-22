import React, { useState } from "react";
import { Nav, Image, InputGroup, FormControl } from "react-bootstrap";
import "./BasketPage.css";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../Utils/Consts";

export default function BasketItem(props) {
  console.log(props.item, " GOT AN ID: ", props.id)
  let devices = JSON.parse(localStorage.getItem("basketArr"));
  const [addAmount, setAddAmount] = useState(JSON.parse(localStorage.getItem("deviceAmount"))[props.id] || 1);
  const navigate = useNavigate();

//   const handleFormChange = (event) => {
//     const priceArr = JSON.parse(localStorage.getItem("priceArr"));
//     if (event.target.value > addAmount) {
//       let numb = event.target.value - addAmount;
//       while (numb > 0) {
//         priceArr.push(props.item.price);
//         --numb;
//       }
//     } else {
//         let numb = addAmount - event.target.value;
//       while (numb > 0) {
//         const i = priceArr.findIndex((item, index) => {
//             if (item === props.item.price) return index;
//           });
//           priceArr.splice(i, 1);
//         --numb;
//       }
//     }
//     localStorage.setItem("priceArr", JSON.stringify(priceArr));
//     console.log("localStorage", localStorage);
//     setAddAmount(+event.target.value);
//     console.log("SETTED addAmount = ", addAmount)
//     const deviceAmount = JSON.parse(localStorage.getItem("deviceAmount"))
      
//     console.log("DEVICEAMOUNT 0= ", deviceAmount)
//     deviceAmount[props.id] = addAmount + 1;
//     console.log("DEVICEAMOUNT 1= ", deviceAmount)
//     localStorage.setItem("deviceAmount", JSON.stringify(deviceAmount))
//     console.log("localStor ===== ", localStorage)
//     //window.location.reload();
//   };

  const handleMinus = () => {
    console.log("HUETA ", addAmount);
    if (addAmount > 1) {
      setAddAmount(addAmount - 1);
      const deviceAmount = JSON.parse(localStorage.getItem("deviceAmount"))
      
    console.log("DEVICEAMOUNT 0= ", deviceAmount)
    deviceAmount[props.id] = addAmount - 1;
    console.log("DEVICEAMOUNT 1= ", deviceAmount)
    localStorage.setItem("deviceAmount", JSON.stringify(deviceAmount))
    console.log("localStor ===== ", localStorage)

      const priceArr = JSON.parse(localStorage.getItem("priceArr"));
      const i = priceArr.findIndex((item, index) => {
        if (item === props.item.price) return index;
      });
      priceArr.splice(i, 1);
      localStorage.setItem("priceArr", JSON.stringify(priceArr));
      console.log("localStorage", localStorage);
      window.location.reload();
    }
  }

  const handlePlus = () => {
    console.log(addAmount);
    if (addAmount < 9) {
      setAddAmount(addAmount + 1);
      const deviceAmount = JSON.parse(localStorage.getItem("deviceAmount"))
      
    console.log("DEVICEAMOUNT 0= ", deviceAmount)
    deviceAmount[props.id] = addAmount + 1;
    console.log("DEVICEAMOUNT 1= ", deviceAmount)
    localStorage.setItem("deviceAmount", JSON.stringify(deviceAmount))
    console.log("localStor ===== ", localStorage)

      const priceArr = JSON.parse(localStorage.getItem("priceArr"));
      priceArr.push(props.item.price);
      localStorage.setItem("priceArr", JSON.stringify(priceArr));
      console.log("localStorage", localStorage);
      window.location.reload();
    }
  }

  const handleDelete = () => {
    let newDevices = [];
    for (let i = 0; i < devices.length; i++) {
      if (devices[i].id !== props.item.id) {
        newDevices.push(devices[i]);
      }
    }
    const priceArr = JSON.parse(localStorage.getItem("priceArr"));
    const newPriceArr = priceArr.filter(
      (item) => item !== props.item.price
    );
    localStorage.setItem("priceArr", JSON.stringify(newPriceArr));
    localStorage.setItem("basketArr", JSON.stringify(newDevices));
    window.location.reload();
  }

  return (
    <div className="mainRow mt-2">
      <Image
        width={250}
        height={250}
        src={"http://localhost:5000/" + props.item.img}
        className="point"
        onClick={() => navigate(DEVICE_ROUTE + "/" + `${props.item.id}`)}
      />
      <div
        className="name point"
        onClick={() => navigate(DEVICE_ROUTE + "/" + `${props.item.id}`)}
      >
        {props.item.name}
      </div>
      <InputGroup className="inp">
        <InputGroup.Text
          className="point"
          onClick={handleMinus}
        >
          -
        </InputGroup.Text>
        <FormControl
          type="text"
          value={addAmount}
        //   onChange={handleFormChange}
          disabled
          className="inp"
        />
        <InputGroup.Text
          className="point"
          onClick={handlePlus}
        >
          +
        </InputGroup.Text>
      </InputGroup>
      <div className="price">{props.item.price} ₽</div>
      <div className="bb">
        <Nav.Link>
          <BsFillTrashFill
            color="black"
            className="del"
            onClick={handleDelete}
          />
        </Nav.Link>
      </div>
    </div>
  );
}
