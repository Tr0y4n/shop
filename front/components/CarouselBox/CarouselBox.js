import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import P1 from '../../assets/Карусель1.png';
import P2 from '../../assets/Карусель2.png';
import P3 from '../../assets/Карусель3.png';
import './CarouselBox.css';

export default function CarouselBox() {
    return(
        <Carousel>
            <Carousel.Item>
                <img height={600}  className='d-block w-100' src={P1} alt='Акция 1' />
                <Carousel.Caption >
                <h3 className='clr'>Акция для фанатов Iphone!</h3>
                    <p className='clr'>Теперь появились альтернативные способы оплаты вашего любимого гаджета!</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={600} className='d-block w-100' src={P2} alt='Акция 2' />
                <Carousel.Caption>
                    <h3 className='clr'>Хотите играть в современные видеоигры?</h3>
                    <p className='clr'>Покупайте ноутбуки компании Asus и забудьте о проблемах с железом!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={600} className='d-block w-100' src={P3} alt='Акция 3' />
                <Carousel.Caption>
                    <h3 className='clr'>Давно хотите прикупить новый телевизор?</h3>
                    <p className='clr'>На нашем сайте вы найдете большой выбор телевизоров Samsung!</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}