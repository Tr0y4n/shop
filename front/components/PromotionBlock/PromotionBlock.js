import React from "react";
import "./PromotionBlock.css";
import prom2 from "../../assets/promotionBlock2.jpg";

export default function PromotionBlock() {
  let handleClick = () => {
    alert("OU NIGGA U GAY!!!");
  };
  return (
    <div className="grid">
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
      <div className="block" onClick={handleClick}>
        <img src={prom2} alt="brr" className="img" />
        <h4 className="title">Я гей!</h4>
        <p className="description">
          Написал вчера в директ, Огонек, типа респект, Может погуляем ночью?
          Хочешь, сделай мне конспект.
        </p>
      </div>
    </div>
  );
}
