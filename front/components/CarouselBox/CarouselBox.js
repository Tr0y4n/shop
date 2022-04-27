import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import P1 from '../../assets/sliderProm1.png';
import P2 from '../../assets/sliderProm2.png';
import P3 from '../../assets/sliderProm3.png';
import './CarouselBox.css';

export default function CarouselBox() {
    return(
        <Carousel>
            <Carousel.Item>
                <img height={600} className='d-block w-100' src={P1} alt='Акция 1' />
                <Carousel.Caption>
                    <h3>Специальное предложение</h3>
                    <p>Для наших новых клиентов, только создавших аккаунт</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={600} className='d-block w-100' src={P2} alt='Акция 2' />
                <Carousel.Caption>
                    <h3>Акция для фанатов Iphone!</h3>
                    <p>Теперь появились альтернативные способы оплаты вашего любимого гаджета!</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img height={600} className='d-block w-100' src={P3} alt='Акция 3' />
                <Carousel.Caption>
                    <h3>Хотите прикупить себе новый MacBook?</h3>
                    <p>Сделайте это с максимальной выгодой в магазине Tyoma-shop!</p>
                    </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}