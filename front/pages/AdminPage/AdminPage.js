import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../../components/modals/CreateBrand';
import CreateDevice from '../../components/modals/CreateDevice';
import CreateType from '../../components/modals/CreateType';
import './AdminPage.css'

export default function AdminPage() {
    const [showBrand, setShowBrand] = useState(false);
    const [showType, setShowType] = useState(false);
    const [showDevice, setShowDevice] = useState(false);
    return(
        <Container className='btns'>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={() => setShowBrand(true)}>Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={() => setShowType(true)}>Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={() => setShowDevice(true)}>Добавить устройство</Button>
            <CreateBrand show={showBrand} onHide={() => setShowBrand(false)}/>
            <CreateType show={showType} onHide={() => setShowType(false)} />
            <CreateDevice show={showDevice} onHide={() => setShowDevice(false)} />
        </Container>
    )
}