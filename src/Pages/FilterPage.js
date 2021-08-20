import React, { useState } from 'react';
import './Pages.css';
import Filter from '../Components/Filter/Filter'
import FilterHome from '../Components/Filter/FilterHome'
import { Breadcrumb, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FilterContent from '../Components/Filter/FilterContent';
import { useSelector } from 'react-redux';

function FilterPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const breadcrumb = useSelector(state => state.breadcrumb);
  const menu = useSelector(state => state.menu);
  return (
    <div className="filterpage_section">
      <FilterHome />
      <div className="container2" >
        <Breadcrumb style={{ marginTop: "30px", marginLeft: "30px" }} className="cabinet_breadcrumb">
          <Breadcrumb.Item><Link to="/">Главная страница</Link></Breadcrumb.Item>
          <Breadcrumb.Item style={{ textTransform: "capitalize" }}>{menu ? menu : "Для мужшин"}</Breadcrumb.Item>
          <Breadcrumb.Item active>{breadcrumb ? breadcrumb : "Рубашки"}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="home_brend__header filter_header__meadia">
          <p style={{ fontWeight: "500" }}>{breadcrumb ? breadcrumb : "РУБАШКИ"}</p>
          <div className="filter_media__div" onClick={handleShow}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.5C1 2.5 3 1.5 8 1.5C13 1.5 15 2.5 15 2.5L9.5 9V13.5L6.5 15V9L1 2.5Z" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Фильтр
          </div>
        </div>
        <div className="filter_content">
          <div className="filter_content__left">
            <Filter />
          </div>
          <div className="filter_content__right">
            <FilterContent />
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          <Filter />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default FilterPage
