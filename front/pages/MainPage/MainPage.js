import React, { useEffect, useState } from "react";
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
  const [news, setNews] = useState([]);
  const watchedArr =
    JSON.parse(localStorage.getItem("watchedArr")) !== null
      ? JSON.parse(localStorage.getItem("watchedArr"))
      : [];
      console.log("watchedArr = ", watchedArr)
      console.log("localStorage = ", localStorage)

    const specialArr = watchedArr.map(item => { return {brandId: item.brandId, typeId: item.typeId}}) 
    console.log("specialArr == ", specialArr)
    const brandArr = [];
    const typeArr = [];
    specialArr.forEach(item => {brandArr.push(item.brandId); typeArr.push(item.typeId)})
    console.log("brandArr = ", brandArr)
    console.log("typeArr = ", typeArr)

    const countBrands = brandArr.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
      return acc;
    }, {});
    console.log("countBrands = ", countBrands)

    const countTypes = typeArr.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
      return acc;
    }, {});
    console.log("countTypes = ", countTypes)

    const biggestType = Object.values(countTypes).reduce((prev, curr) => curr > prev ? curr : prev, 0)
    console.log("biggestType = ", biggestType)

    let max = 0;
    let resBrand = {};
    let obKey = "";
    for (let key in countBrands) {
      console.log("countBrands[key] = ", countBrands[key])
      if (countBrands[key] > max) {resBrand = {[key]: countBrands[key]}; max = countBrands[key]; obKey = key}
    }
    console.log("resBrand === ", resBrand)
    console.log("obKey = ", obKey)
    let mightLike = devices.filter((item) => item.brandId === +obKey) || []
    console.log("mightLike = ", mightLike)
    let likeRec = []
    
     if (mightLike.length < 4) {
      const anotherKeys = Object.keys(countBrands).filter(item => item !== obKey) || []
      mightLike = mightLike.concat(devices.filter((item) => item.brandId === +anotherKeys[0]) || [])
      console.log("mightLike = ", mightLike)
     }
     if (mightLike.length > 4) {
      const temp = [];
      let prev3 = " ";
      let prevprev = " ";
      let prev = " ";
      for (let i = 0; i < 4; i++) {
        const r = randomInteger(0, mightLike.length - 1);
        console.log(mightLike.length)
        if (+prev !== r && +prevprev !== r && +prev3 !== r) {
          temp.push(mightLike[r]);
          prev3 = prevprev;
          prevprev = prev;
          prev = `${r}`;
        } else {
          i--;
          console.log("breakin iteration in useEffect MainPage");
        }
      }
      mightLike = temp
     }
    console.log("likeRec = ", likeRec)

  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypeAction(data)));
    fetchBrands().then((data) => dispatch(setBrandAction(data)));
    fetchDevices(null, null, 1, 12).then((data) => {
      dispatch(setDeviceAction(data.rows));
      dispatch(setTotalAction(data.count));
      const temp = [];
      let prev3 = " ";
      let prevprev = " ";
      let prev = " ";
      for (let i = 0; i < 4; i++) {
        const r = randomInteger(0, 3);
        if (+prev !== r && +prevprev !== r && +prev3 !== r) {
          temp.push(data.rows[r]);
          prev3 = prevprev;
          prevprev = prev;
          prev = `${r}`;
        } else {
          i--;
          console.log("breakin iteration in useEffect MainPage");
        }
      }
      setNews(temp);
    });
  }, []);

  console.log("devices in main = ", devices);

  return (
    <div>
      <CarouselBox />
      <h2 className="heads">Лучшие новинки</h2>
      <RecComponent recs={news} />
      <h2 className="heads">Смотрели ранее</h2>
      <RecComponent recs={watchedArr} />
      <h2 className="heads">Специально для Вас</h2>
      <RecComponent recs={likeRec} />
      {/* <button onClick={localStorage.setItem(`watchedArr`, JSON.stringify([]))} >очистить локал</button> */}
    </div>
  );
}
