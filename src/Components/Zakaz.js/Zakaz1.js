import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Zakaz.css';
import Zakaz3 from './Zakaz3';


function Zakaz1() {
    const cartList = useSelector(state => state.cart);   
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
                                    {item.price * item.count} cум.
                                </div>
                                <div className="zakaz_content__color">
                                    <div className="collection_circle " style={{ border: `1px solid ${item.color}` }}><div style={{ backgroundColor: item.color }}></div></div>
                                </div>
                                <div className="zakaz_content_size">
                                    <p>{item.size}</p>
                                </div>


                            </div>

                        }) : <Zakaz3/>
                    }

                </div>

            </div>
        </>
    )
}

export default Zakaz1
