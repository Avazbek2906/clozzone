import React, { useState } from 'react';
import './Zakaz.css';


function Zakaz3() {
    const [Id, setId] = useState("");
    const [number, setNumber] = useState(1);
    const upNumber = (ID) => {
        setId(ID);
    } 
    const zakazList = [
        {
            img: "https://i.postimg.cc/sfthmyHs/cloth1.png",
            count: 1,
            price: "100000",
            color: "#3F679D",
            size: "XL"
        },
        {
            img: "https://i.postimg.cc/43BcQ9qS/cloth2.png",
            count: 1,
            price: "120000",
            color: "#A9A7BD",
            size: "XXL"
        },
        {
            img: "https://i.postimg.cc/3xh9L2f8/cloth3.png",
            count: 1,
            price: "150000",
            color: "#CBD6EE",
            size: "M"
        },
    ]
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
                        zakazList ? zakazList.map(item => {
                            return <div className="zakaz_content__div">
                                <div className="zakaz_content__img"><img src={item.img} alt="error img" /></div>
                                <div className="zakaz_content__name">
                                    <h3>ZARA рубашка</h3>
                                    <p>Рубашка с контрастным дизайном</p>
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
                                    {item.price} cум.
                                </div>
                                <div className="zakaz_content__color">
                                    <div className="collection_circle " style={{ border: `1px solid ${item.color}` }}><div style={{ backgroundColor: item.color }}></div></div>
                                </div>
                                <div className="zakaz_content_size">
                                    <p>{item.size}</p>
                                </div>


                            </div>

                        }) : ""
                    }

                </div>

            </div>
        </>
    )
}

export default Zakaz3
