import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CabinetContent from '../Components/Cabinet/CabinetContent';
import CabinetHeader from '../Components/Cabinet/CabinetHeader';
import CabinetProdaj from '../Components/Cabinet/CabinetProdaj';
import './Pages.css';

function CabinetPage() {
    const breadcrumb = useSelector(state => state.breadcrumb);
    const menu = useSelector(state => state.menu);
    return (
        <>
            <CabinetHeader />
            <div className="container2">
                <Breadcrumb style={{ marginTop: "30px", marginLeft: "30px" }} className="cabinet_breadcrumb">
                    <Breadcrumb.Item><Link to="/">Главная страница</Link></Breadcrumb.Item>
                    <Breadcrumb.Item style={{textTransform: "capitalize"}}>{menu?menu:"Для мужшин"}</Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/Рубашки">{breadcrumb?breadcrumb:"Рубашки"}</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Базовая рубашка</Breadcrumb.Item>
                </Breadcrumb>
                <div className="home_brend__header">
                    <p style={{ fontWeight: "500" }}>БАЗОВАЯ РУБАШКА</p>
                </div>
                <CabinetContent />

                <div className="home_brend__header">
                    <p style={{ fontWeight: "500" }}>ПОХОЖИ ТОВАРЫ</p>
                </div>
                <div className="cabinet_prodaj">
                    <CabinetProdaj />
                </div>
            </div>
        </>
    )
}

export default CabinetPage
