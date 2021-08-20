import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CabinetHeader from '../Components/Cabinet/CabinetHeader';
import Zakaz1 from '../Components/Zakaz.js/Zakaz1';
import Zakaz3 from '../Components/Zakaz.js/Zakaz3';
import './Pages.css';

function ZakazPage() {
  return (
    <div className="zakazPage_section">
      <CabinetHeader />
      <div className="container">
        <Breadcrumb style={{ marginTop: "30px", marginLeft: "30px" }}>
          <Breadcrumb.Item><Link to="/">Главная страница</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>Мои заказы</Breadcrumb.Item>
        </Breadcrumb>

        <div className="home_brend__header">
          <p style={{ fontWeight: "500" }}>Мои заказы</p>
        </div>

        <div className="zakazpage_scroll">
          <p className="zakaz_header__name">Заказ № 5234</p>
          <div className="zakaz_page__content">
            <Zakaz1 />
            <button className="zakaz_see__button"><Link to="/Моизаказы">ПOСМОТРЕТЬ ЗАКАЗ</Link></button>
          </div>

          <p className="zakaz_header__name">Заказ № 5345</p>
          <div className="zakaz_page__content">
            <Zakaz3 />
            <button className="zakaz_see__button"><Link to="/Моизаказы">ПOСМОТРЕТЬ ЗАКАЗ</Link></button>
          </div>

          <p className="zakaz_header__name">Заказ № 5240</p>
          <div className="zakaz_page__content">
            <Zakaz3 />
            <button className="zakaz_see__button"><Link to="/Моизаказы">ПOСМОТРЕТЬ ЗАКАЗ</Link></button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ZakazPage
