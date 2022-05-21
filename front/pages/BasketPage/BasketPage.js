import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BasketPage.css";
import { MAIN_ROUTE } from "../../Utils/Consts";
import BasketFullAlternative from "./BasketFullAlternative"

export default function BasketPage() {
  const navigate = useNavigate();
  let devices = JSON.parse(localStorage.getItem("basketArr"));
  console.log("localStorage = ", localStorage);
  console.log("devices = ", devices);

  return (
    <Row className="d-flex">
      {devices.length > 0  ? (
        <BasketFullAlternative />
      ) : (
        <div className="emptyBask">
          <Col>
            <h3>В корзине нет товаров</h3>
          </Col>
          <Col className="lilTxt">
            Найдите то, что вам нужно в каталоге или при помощи поиска
          </Col>
          <Col className="mt-4">
            <Button variant="outline-dark" onClick={() => navigate(MAIN_ROUTE)}>
              Вернуться на главную
            </Button>
          </Col>
        </div>
      )}
    </Row>
  );
}
