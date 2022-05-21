import React, { useEffect, useState } from "react";
import { Container, Card, Image, Row } from "react-bootstrap";
import { Button} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOneDevice } from "../../http/deviceApi";
import { BASKET_ROUTE } from "../../Utils/Consts";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import "./DevicePage.css";
import SmartphoneItem from "./SmartphoneItem";
import TVItem from "./TVItem";
import LaptopItem from "./LaptopItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../../http/deviceApi";
import DeviceItem from "../../components/DeviceList/DeviceItem";


export default function DevicePage() {
  const devices = useSelector((state) => state.deviceReducer.devices);
  console.log("devices in DevicePage == ", devices)
  const [price, setPrice] = useState(null)
  const priceSum = [];
  const [accessors, setAccessors] = useState([]);
  const [device, setDevice] = useState({ info: [] });
  const [baskBut, setBaskBut] = useState("Добавить в корзину");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const rate = String(device.rating).slice(0, 1) + "." + String(device.rating).slice(1, 2);
  console.log("accessors = ", accessors)

  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

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
    fetchOneDevice(id).then((data) => {setDevice(data); setPrice(data.price)});
    // setTimeout(() => window.location.reload(), 10000)
  }, []);

  useEffect(() => {
    fetchDevices(7, null, null, 8).then((data) => {
      console.log("DATA in useEffect and accessors=== ", data.rows);
      // setAccessors(data.rows);
      const temp = [];
      let prevprev = " ";
      let prev = " ";
      for (let i = 0; i < 3; i++) {
        const r = randomInteger(0, 5)
        console.log("r = ", r)
        console.log("prev = ", prev)
        console.log("prevprev = ", prevprev)
        if (+prev !== r && +prevprev !== r) {temp.push(data.rows[r]); console.log("pushin"); prevprev = prev;
        prev = `${r}`} else {i--; console.log("breakin"); }
      } 
      setAccessors(temp);
    });
  }, []);

  return (
    <Container className="mt-3">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <Image
            width={360}
            height={360}
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
            <div className="mt-3">
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
                    <div className="ss1">
                      {device.typeId === 2 ?
                      <SmartphoneItem device={device} info={info} price={price} setPrice={setPrice} priceSum={priceSum}/>
                      : device.typeId === 3 ? 
                      <TVItem device={device} info={info} price={price} setPrice={setPrice} priceSum={priceSum}/>
                    : device.typeId === 5 ? 
                    <LaptopItem device={device} info={info} price={price} setPrice={setPrice} priceSum={priceSum}/>
                  : "что-то пошло не так"}
                      </div>
                  </div>
                </Row>
              ))}
            </div>
          </div>
        </div>
        <Card className="cardoch">
          <h4 className="zag">Цена:</h4>
          <div className="prices">
            <h3 className="price1">{price}₽</h3>{" "}
            <h3 className="price2">
              {device.price + (device.price / 100) * 20}₽
            </h3>
          </div>
          <Button
            onClick={handleAddBasket}
            variant={"success"}
            className="buttonka"
          >
            {baskBut}
          </Button>
        </Card>
      </div>
      <h2 className="vsp">Вместе с этим покупают</h2>
      <Row className="recomends">
            {accessors.map(item => 
                <DeviceItem key={item.id} device={item} />)}
        </Row>
    </Container>
  );
}
