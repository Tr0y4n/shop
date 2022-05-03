import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../../components/TypeBar/TypeBar";
import "./ShopPage.css";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes, fetchBrands, fetchDevices } from "../../http/deviceApi";
import {
  setBrandAction,
  setDeviceAction,
  setTypeAction,
} from "../../store/deviceReducer";
import Pages from "../../components/Pages/Pages";
import { setTotalAction } from "../../store/PagesReducer";

export default function ShopPage() {
  const goods = useSelector((state) => state.deviceReducer);
  const pagesState = useSelector((state) => state.pagesReducer);
  const dispatch = useDispatch();
  const deviceState = useSelector((state) => state.deviceReducer)

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypeAction(data)));
    fetchBrands().then((data) => dispatch(setBrandAction(data)));
    fetchDevices(null, null, 1, 2).then((data) => {
      dispatch(setDeviceAction(data.rows));
      dispatch(setTotalAction(data.count));
    });
  }, []);
  console.log("deviceState.selectedType = ", deviceState.selectedType)
  console.log("deviceState.selectedBrand = ", deviceState.selectedBrand)
  useEffect(() => {
    // console.log("pagesState.selectedType = ", pagesState.selectedType)
    // console.log("pagesState.selectedBrand = ", pagesState.selectedBrand)
      fetchDevices(deviceState.selectedType.id, deviceState.selectedBrand.id, pagesState.page, 4).then((data) => {
      dispatch(setDeviceAction(data.rows));
      dispatch(setTotalAction(data.count));
    });
  }, [pagesState.page, deviceState.selectedType.id, deviceState.selectedBrand.id]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
}
