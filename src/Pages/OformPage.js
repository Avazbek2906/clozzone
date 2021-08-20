import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CabinetHeader from '../Components/Cabinet/CabinetHeader';
import Dostavka from '../Components/Dostavka/Dostavka';
import Oform from '../Components/Zakaz.js/Oform';
import './Pages.css';

function OformPage() {
    return (
        <>
            <CabinetHeader />
            <div className="container">
                <Breadcrumb style={{ marginTop: "30px", marginLeft: "30px" }} className="cabinet_breadcrumb">
                    <Breadcrumb.Item><Link to="/">Главная страница</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Оформление заказа</Breadcrumb.Item>
                </Breadcrumb>

                <div className="home_brend__header">
                    <p>ОФОРМЛЕНИЕ ЗАКАЗА</p>
                </div>
                <Oform />
            </div>
            <Dostavka />
        </>
    )
}

export default OformPage
