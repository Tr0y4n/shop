import React from "react";
import { Button } from "react-bootstrap";
import "./BasketPage.css";
import BasketItem from "./BasketItem";

export default function BasketFullAlternative() {
  let devices = JSON.parse(localStorage.getItem("basketArr"));
  console.log("localStorage = ", localStorage);
  console.log("devices = ", devices);
  let cardId = -1;

  const handleBuy = () => {
    localStorage.setItem("priceArr", JSON.stringify([]))
    localStorage.setItem("basketArr", JSON.stringify([]))
    localStorage.setItem("deviceAmount", JSON.stringify([]))
    console.log("localStorage", localStorage);
    window.location.reload();
  }

  return (
    <div className="bfullcards">
      <div>
        {devices.map((item) => (
          <BasketItem item={item} id={++cardId}/>
        ))}
      </div>
      <div className="buyCard mt-2">
        <div className="itogo">
          <h3 className="d-flex justify-content-flex-start pt-1 pb-1 itogoTxt">
            Итого:
          </h3>
          <hr className="minMrgHr"/>
        </div>
        <div className="itogoTxt">
          <div className="stline">
            <p className="liltext">В корзине </p>
            <p className="liltext right bold">{JSON.parse(localStorage.getItem("priceArr")).length} {JSON.parse(localStorage.getItem("priceArr")).length === 1 ? "товар" : JSON.parse(localStorage.getItem("priceArr")).length < 5 ? "товара" : "товаров"}</p>
          </div>
          <div className="stline">
            <p className="liltext">К оплате </p>
            <p className="liltext right bold">{JSON.parse(localStorage.getItem("priceArr")).reduce((sum, curr) => sum + curr)}₽</p>
         </div> 
          <div className="ff">
            <Button variant="success" className="buyButton" onClick={handleBuy}>
              Оформить покупку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
