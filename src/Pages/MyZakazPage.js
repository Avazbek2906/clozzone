import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CabinetHeader from '../Components/Cabinet/CabinetHeader';
import Zakaz2 from '../Components/Zakaz.js/Zakaz2';
import './Pages.css';

function MyZakazPage() {
    return (
        <>
            <CabinetHeader />
            <div className="container" style={{marginBottom: "100px"}}>
                <Breadcrumb style={{ marginTop: "30px", marginLeft: "30px" }}>
                    <Breadcrumb.Item><Link to="/">Главная страница</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/заказы">Мои заказы</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Заказ</Breadcrumb.Item>
                </Breadcrumb>

                <div className="home_brend__header">
                    <p >Заказ № 5234</p>
                </div>

                <div className="myzakaz_content">
                    <div className="myzakaz_left">
                        <Zakaz2 />
                        <div className="myzakaz_line "></div>
                        <div className="myzakaz_all">
                            <div className="myzakaz_all__name">ИТОГ :</div>
                            <div className="myzakaz_all__count">3 шт</div>
                            <div className="myzakaz_all__price">370 000 сум</div>
                        </div>
                    </div>
                    <div className="myzakaz_right">
                        <h3>Личные данные</h3>
                        <ul>
                            <li>Бектаев Асадбек Абдухамидович</li>
                            <li>Узбекистан</li>
                            <li>г. Ташкент</li>
                            <li>Ул. Уртасарай Т 35</li>
                            <li>Completed</li>
                            <li>370 000 сум</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyZakazPage
