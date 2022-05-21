import React, { useEffect, useState } from "react";
import { Container, Col, Card, Image, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOneDevice } from "../../http/deviceApi";
import { BASKET_ROUTE } from "../../Utils/Consts";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import "./DevicePage.css";

export default function DevicePage() {
  const [device, setDevice] = useState({ info: [] });
  const [baskBut, setBaskBut] = useState("Добавить в корзину");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("device: ", device);
  const rate =
    String(device.rating).slice(0, 1) + "." + String(device.rating).slice(1, 2);

  const handleAddBasket = () => {
    if (baskBut === "Добавить в корзину") {
      const basketArr =
        JSON.parse(localStorage.getItem("basketArr")) !== null
          ? JSON.parse(localStorage.getItem("basketArr"))
          : [];
      basketArr.push(device);
      localStorage.setItem(`basketArr`, JSON.stringify(basketArr));

      const priceArr =
        JSON.parse(localStorage.getItem("priceArr")) !== null
          ? JSON.parse(localStorage.getItem("priceArr"))
          : [];
      priceArr.push(device.price);
      localStorage.setItem(`priceArr`, JSON.stringify(priceArr));
      console.log("localStorage = ", localStorage);

      const deviceAmount =
        JSON.parse(localStorage.getItem("deviceAmount")) !== null
          ? JSON.parse(localStorage.getItem("deviceAmount"))
          : [];
      deviceAmount.push(1);
      localStorage.setItem("deviceAmount", JSON.stringify(deviceAmount));

      setBaskBut("Перейти в корзину");
    } else {
      navigate(BASKET_ROUTE);
    }
  };

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <Image
            width={300}
            height={300}
            src={"http://localhost:5000/" + device.img}
          />
        </div>
        <div className="row">
          <div className="nameBlock">
            <h2>{device.name}</h2>
            <BsStarFill className="rate" />
            <BsStarFill className="rate" />
            <BsStarFill className="rate" />
            <BsStarFill className="rate" />
            <BsStarHalf className="rate" />
            <div className="ratingNumb">{rate}</div>
            <h3>Характеристики</h3>
            <div>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
              fontSize: 17,
            }}
          >
            <div className="har">
              <div className="ss">{info.title}:</div>
              <div>{info.description}</div>
            </div>
          </Row>
        ))}
        </div>
          </div>
        </div>
        <Card className="cardoch">
          <div className="prices">
          <h3 className="price1">{device.price}₽</h3> <h3 className="price2">{device.price + (device.price / 100) * 20}₽</h3>
          </div>
          <Button onClick={handleAddBasket} variant={"success"} className="buttonka">
            {baskBut}
          </Button>
        </Card>
      </div>

      <div className="d-flex flex-column mt-4">
        {/* <h3>Характеристики</h3>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
              fontSize: 17,
            }}
          >
            <div className="har">
              <div className="ss">{info.title}:</div>
              <div>{info.description}</div>
            </div>
          </Row>
        ))} */}
      </div>
    </Container>
  );
}