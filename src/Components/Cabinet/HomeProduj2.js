import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { addCart, addCart_button, changeCabinet, increament, proceedCart, proceedCart_button, removeAll } from '../../actions';
import Zakaz1 from '../Zakaz.js/Zakaz1';
import './Cabinet.css';
import clothList from '../../home.json';

const HomeProdaj2 = () => {
    const activeList = useSelector(state => state.button);
    const dispatch = useDispatch();
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const handleShow = () => { setModal1(true) };
    const handleShow2 = () => { setModal2(true) };
    const handleClose = () => { setModal1(false) };
    const handleClose2 = () => { setModal2(false) };
    const ArrowLeft = (props) => (
        <button {...props} className="cloth_prew">
            <svg width="18" height="18" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6194 2.31971C30.3784 3.0675 30.3778 4.29196 29.6182 5.0391L13.391 21L29.6186 36.9612C30.378 37.7082 30.3785 38.9323 29.6197 39.68C28.8768 40.412 27.6836 40.4116 26.9412 39.679L8 20.99L26.9409 2.31998C27.6836 1.58788 28.8765 1.58775 29.6194 2.31971Z" fill="#9E9E9E" />
            </svg>
        </button>
    );
    const ArrowRight = (props) => (
        <button {...props} className="cloth_next">
            <svg width="18" height="18" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3806 39.6803C11.6216 38.9325 11.6222 37.708 12.3818 36.9609L28.609 21L12.3814 5.03876C11.622 4.29181 11.6215 3.06765 12.3803 2.32004C13.1232 1.58801 14.3164 1.58843 15.0588 2.32099L34 21.01L15.0591 39.68C14.3164 40.4121 13.1235 40.4122 12.3806 39.6803Z" fill="#9E9E9E" />
            </svg>
        </button>
    );
    const [isMore, setMore] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
    };
    return (
        <>
            <div className="home_prodaj__section">
                <div className="home_brend__header">
                    <p>ХИТЫ ПРОДАЖ</p>
                </div>
                <div className="home_prodaj__content">
                    {
                        isMore ? clothList.map(item => {
                            return <>
                                <div className="collection_cloth_div">
                                    <div className="collection_img__div">
                                        <Slider {...settings} >
                                            {
                                                item.images.map(res => {
                                                    return <div><Link to="/БАЗОВАЯ"><img onClick={() => dispatch(changeCabinet(item))} src={res.img} alt="error img" className="collection_img" /></Link></div>
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className="collection_content__body">
                                        <h4>{item.brend}</h4>
                                        <p>Рубашка с контрастным дизайном</p>
                                        <h6>{item.price} cум</h6>
                                        <div className="collection_body__circles">
                                            <div className="collection_circle collection_circle1"><div></div></div>
                                            <div className="collection_circle collection_circle2"><div></div></div>
                                            <div className="collection_circle collection_circle3"><div></div></div>
                                            <div className="collection_circle collection_circle4"><div></div></div>
                                        </div>
                                        <Button onClick={() => { dispatch(addCart(item)); dispatch(addCart_button(item.id)); dispatch(increament()); handleShow(); }} disabled={activeList.includes(item.id) ? true : false} variant="warning" className="collection_button">{activeList.includes(item.id) ? "В корзине" : "Добавить в корзину"}</Button>
                                    </div>
                                </div>
                            </>
                        })
                            : clothList.map(item => {
                                if (item.id % 2 === 1) {
                                    return <>
                                        <div className="collection_cloth_div" style={{ marginBottom: "50px" }}>
                                            <div className="collection_img__div">
                                                <Slider {...settings} >
                                                    {
                                                        item.images.map(res => {
                                                            return <div><Link to="/БАЗОВАЯ"><img onClick={() => dispatch(changeCabinet(item))} src={res.img} alt="error img" className="collection_img" /></Link></div>
                                                        })
                                                    }
                                                </Slider>
                                            </div>
                                            <div className="collection_content__body">
                                                <h4>{item.brend}</h4>
                                                <p>Рубашка с контрастным дизайном</p>
                                                <h6>{item.price} cум</h6>
                                                <div className="collection_body__circles">
                                                    <div className="collection_circle collection_circle1"><div></div></div>
                                                    <div className="collection_circle collection_circle2"><div></div></div>
                                                    <div className="collection_circle collection_circle3"><div></div></div>
                                                    <div className="collection_circle collection_circle4"><div></div></div>
                                                </div>
                                                <Button onClick={() => { dispatch(addCart(item)); dispatch(addCart_button(item.id)); dispatch(increament()); handleShow(); }} disabled={activeList.includes(item.id) ? true : false} variant="warning" className="collection_button">{activeList.includes(item.id) ? "В корзине" : "Добавить в корзину"}</Button>
                                            </div>
                                        </div>
                                    </>
                                }
                            })




                    }
                </div>

                {
                    isMore ? "" : <div className="collection_button__div"> <button onClick={() => setMore(true)} className="collection_button home_prodaj__button">Eщё</button> </div>
                }
            </div>
            <Modal show={modal1} onHide={handleClose} centered className="add_small__modal">
                <Modal.Body className="add_corzina__modal">
                    <svg onClick={() => handleClose()} style={{ cursor: "pointer", marginLeft: "auto", display: "block" }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1251 0.875025C12.6419 0.391758 11.8584 0.391712 11.3751 0.874923L6.99938 5.25L2.62484 0.875076C2.14161 0.391797 1.35808 0.391798 0.874845 0.875078C0.391669 1.3583 0.391669 2.1417 0.874844 2.62492L5.24954 7L0.874846 11.3751C0.39167 11.8583 0.391669 12.6417 0.874845 13.1249C1.35808 13.6082 2.14161 13.6082 2.62484 13.1249L6.99938 8.75L11.3751 13.1251C11.8584 13.6083 12.6419 13.6082 13.1251 13.125C13.6083 12.6417 13.6083 11.8583 13.1251 11.375L8.75046 7L13.1251 2.62498C13.6083 2.14173 13.6083 1.35827 13.1251 0.875025Z" fill="#003466" />
                    </svg>
                    <p>ТОВАР ДОБАВЛЕН В КОРЗИНУ</p>
                    <button onClick={() => { handleShow2(); handleClose() }}>ПЕРЕЙТИ В КОРЗИНУ</button>
                    <button onClick={() => handleClose()} style={{ backgroundColor: "black" }}>ПРОДОЛЖИТЬ ПОКУПКИ</button>
                </Modal.Body>
            </Modal>
    
            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modal2}
                onHide={handleClose2}
                className="nav_main__card"
            >
                <Modal.Body className="add_corzina__modal">
                    <p className="nav_main__card__p">
                        ТОВАР ДОБАВЛЕН В КОРЗИНУ
                        <svg onClick={() => handleClose2()} style={{ cursor: "pointer", position: "absolute", top: "33px", right: "33px" }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1251 0.875025C12.6419 0.391758 11.8584 0.391712 11.3751 0.874923L6.99938 5.25L2.62484 0.875076C2.14161 0.391797 1.35808 0.391798 0.874845 0.875078C0.391669 1.3583 0.391669 2.1417 0.874844 2.62492L5.24954 7L0.874846 11.3751C0.39167 11.8583 0.391669 12.6417 0.874845 13.1249C1.35808 13.6082 2.14161 13.6082 2.62484 13.1249L6.99938 8.75L11.3751 13.1251C11.8584 13.6083 12.6419 13.6082 13.1251 13.125C13.6083 12.6417 13.6083 11.8583 13.1251 11.375L8.75046 7L13.1251 2.62498C13.6083 2.14173 13.6083 1.35827 13.1251 0.875025Z" fill="#003466" />
                        </svg>
                    </p>
                    <Zakaz1 />
                    <div className="nav_card__line"></div>
                    <div className="nav_card__buttons" style={{display: "flex"}}>
                        <button onClick={() => handleClose2()} className="nav_oform__button"><Link to="/Оформление">ОФОРМИТЬ ЗАКАЗ</Link></button>
                        <button onClick={() => { handleClose2(); dispatch(proceedCart()); dispatch(proceedCart_button()); dispatch(removeAll()) }} className="nav_card__clear">CLEAR</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default HomeProdaj2
