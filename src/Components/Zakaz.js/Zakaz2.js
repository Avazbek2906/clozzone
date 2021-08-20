import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, removeCart, removeCart_button } from '../../actions';
import './Zakaz.css';


function Zakaz2() {
    const cartList = useSelector(state => state.cart);
    const dispatch = useDispatch(); 

    const [Id, setId] = useState("");
    const [number, setNumber] = useState(1);
    const upNumber = (ID) => {
        setId(ID);
    } 
    return (
        <>
            <div className="zakaz_content">
                <div className="zakaz_content__header">
                    <ul>
                        <li>Наеменование</li>
                        <li>Количество</li>
                        <li>Цена</li>
                        <li style={{ marginRight: "-10px" }}>Цвет</li>
                        <li>Размер</li>
                    </ul>
                </div>
                <div className="zakaz_content__main">
                    {
                        cartList ? cartList.map(item => {
                            return <div className="zakaz_content__div">
                                <div className="zakaz_content__img"><img src={item.images[0].img} alt="error img" /></div>
                                <div className="zakaz_content__name">
                                    <h3>{item.brend}</h3>
                                    <p>{item.name}</p>
                                </div>
                                <div className="zakaz_content__count">
                                    <div className="cabinet_content__count">
                                        <div onClick={() => {
                                            upNumber(item.id);
                                            if (Id === item.id && item.count > 1) {
                                                item.count -= 1
                                                setNumber(number - 1);
                                            } else { }
                                        }} className="cabinet_count__lose">-</div>
                                        <div className="cabinet_count__result">{item.count} шт</div>
                                        <div onClick={() => {
                                            upNumber(item.id);
                                            if (Id === item.id) {
                                                item.count += 1;
                                                setNumber(number + 1);
                                            } else { }
                                        }} className="cabinet_count__lose cabinet_count__add">+</div>
                                    </div>
                                </div>
                                <div className="zakaz_content__price">
                                    { item.count * item.price } cум.
                                </div>
                                <div className="zakaz_content__color">
                                    <div className="collection_circle " style={{ border: `1px solid ${item.color}` }}><div style={{ backgroundColor: item.color }}></div></div>
                                </div>
                                <div className="zakaz_content_size">
                                    <p>{item.size}</p>
                                </div>
                                <svg onClick={() => { dispatch(removeCart(item.id)); dispatch(removeCart_button(item.id)); dispatch(decreament()) }} style={{ cursor: "pointer", marginLeft: "auto", display: "block", marginRight: "20px" }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1251 0.875025C12.6419 0.391758 11.8584 0.391712 11.3751 0.874923L6.99938 5.25L2.62484 0.875076C2.14161 0.391797 1.35808 0.391798 0.874845 0.875078C0.391669 1.3583 0.391669 2.1417 0.874844 2.62492L5.24954 7L0.874846 11.3751C0.39167 11.8583 0.391669 12.6417 0.874845 13.1249C1.35808 13.6082 2.14161 13.6082 2.62484 13.1249L6.99938 8.75L11.3751 13.1251C11.8584 13.6083 12.6419 13.6082 13.1251 13.125C13.6083 12.6417 13.6083 11.8583 13.1251 11.375L8.75046 7L13.1251 2.62498C13.6083 2.14173 13.6083 1.35827 13.1251 0.875025Z" fill="#003466" />
                                </svg>


                            </div>

                        }) : ""
                    }

                </div>

            </div>
        </>
    )
}

export default Zakaz2
