import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselBox from "../../components/CarouselBox/CarouselBox";
import RecComponent from "../../components/RecComponent/RecComponent";
import {
  setBrandAction,
  setDeviceAction,
  setTypeAction,
} from "../../store/deviceReducer";
import { setTotalAction } from "../../store/PagesReducer";
import { fetchTypes, fetchBrands, fetchDevices } from "../../http/deviceApi";
import "./MainPage.css";

export default function MainPage() {
  const devices = useSelector((state) => state.deviceReducer.devices);
  const dispatch = useDispatch();
  const recs = [];

    useEffect(() => {
      fetchTypes().then((data) => dispatch(setTypeAction(data)));
      fetchBrands().then((data) => dispatch(setBrandAction(data)));
      fetchDevices(null, null, 1, 20).then((data) => {
        dispatch(setDeviceAction(data.rows));
        dispatch(setTotalAction(data.count));
        for (let i = 0; i < 3; i++) {
          const rand = Math.floor(Math.random() * devices.length);
          const rValue = devices[rand];
          recs.push(rValue)
          // devices.splice(rand, 1)
          console.log(`random value ${i + 1}= `, rValue)
        }
      }).then(console.log("useEffect ended"));
    }, []);

  console.log("devices in main = ", devices);
  return (
    <div>
      <CarouselBox />
      <h2 className="heads">Лучшие новинки</h2>
      <h2 className="heads">Специально для Вас</h2>
      <RecComponent recs={recs}/>
    </div>
  );
}
