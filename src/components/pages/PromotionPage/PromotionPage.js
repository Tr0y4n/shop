import React from "react";
import "./PromotionPage.css";
import promo1 from "../../../assets/promo1.jpg";
import promo2 from "../../../assets/promo2.jpg";
import promo3 from "../../../assets/promo3.jpg";
import promo4 from "../../../assets/promo4.jpg";
import promo5 from "../../../assets/promo5.jpg";
import promo6 from "../../../assets/promo6.jpg";
import promo7 from "../../../assets/promo7.jpg";
import promo8 from "../../../assets/promo8.jpg";

export default function PromotionBlock() {
  return (
    <div className="grid">
      <div className="block" onClick={event =>  window.location.href='/promotion/promo1'}>
        <img src={promo1} alt="brr" className="img" />
        <h4 className="title">Киберскидки до 30%</h4>
        <p className="description">На некоторые выды товаров</p>
        <p className="date">До 7 февраля</p>
      </div>
      <div className="block" onClick={event =>  window.location.href='/promotion/promo2'}>
        <img src={promo2} alt="brr" className="img" />
        <h4 className="title">Скидки на товары от OnePlus!</h4>
        <p className="description">Теперь еще выгоднее</p>
        <p className="date">До 12 февраля</p>
      </div>
      <div className="block" onClick={event =>  window.location.href='/promotion/promo3'}>
        <img src={promo3} alt="brr" className="img" />
        <h4 className="title">Распродажа Xiaomi!</h4>
        <p className="description">Топ за еще меньшие деньги</p>
        <p className="date">До 14 февраля</p>
      </div>
      <div className="block" onClick={event =>  window.location.href='/promotion/promo4'}>
        <img src={promo4} alt="brr" className="img" />
        <h4 className="title">Товары в рассрочку!</h4>
        <p className="description">Без процентов и переплат</p>
        <p className="date">До 15 февраля</p>
      </div>
      <div className="block" onClick={event =>  window.location.href='/promotion/promo5'}>
        <img src={promo5} alt="brr" className="img" />
        <h4 className="title">Скидки на товары недели!</h4>
        <p className="description">Особые предложения каждую неделю</p>
        <p className="date">До 15 марта</p>
      </div>
      <div className="block" onClick={event =>  window.location.href='/promotion/promo6'}>
        <img src={promo6} alt="brr" className="img" />
        <h4 className="title">Будьте всегда первыми!</h4>
        <p className="description">С нашими особыми предложениями</p>
        <p className="date">До 8 февраля</p>
      </div>
      <div className="block" onClick={event =>  window.location.href='/promotion/promo7'}>
        <img src={promo7} alt="brr" className="img" />
        <h4 className="title">Чехол в подарок!</h4>
        <p className="description">За покупку смартфонов Xiaomi от 19.999 рублей</p>
        <p className="date">До 21 февраля</p>
      </div>
      <div className="block" onClick={event =>  window.location.href='/promotion/promo8'}>
        <img src={promo8} alt="brr" className="img" />
        <h4 className="title">Приходите с детьми!</h4>
        <p className="description">И покупайте товары со скидкой 5%</p>
      </div>   
    </div>
  );
}
