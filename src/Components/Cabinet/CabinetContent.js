import React, { useState } from 'react';
import './Cabinet.css';  
import { Button, ButtonGroup, ButtonToolbar, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function CabinetContent() {
    const cabinetList = useSelector(state => state.cabinet); 
    const [count, setCount] = useState(1);
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    } 
    const [color, setColor] = useState("cadetblue");
    const buttonList = [
        { name: "cadetblue" },
        { name: "slategray" },
        { name: "blue" },
        { name: "gold" },
    ]
    const [size, setSize] = useState("XS")
    const sizeList = [
        { size: "XS", id: 1, },
        { size: "S", id: 2, },
        { size: "M", id: 3, },
        { size: "L", id: 4, },
        { size: "XL", id: 5, },
        { size: "XXL", id: 6, },
    ]

    const [pic, setPic] = useState("")
    const changePic = (img) => {
        console.log(img);
        setPic(img)
    }
    return (
        <>
            {
                cabinetList ? cabinetList.map(item => {
                    return <div className="cabinet_content">
                        <div className="cabinet_content__left">
                            <div className="cabinet_images__left">
                                {
                                    item.images.map(res => {
                                        return <>
                                            <div onClick={() => changePic(res.img)} className="cabinet_images__img">
                                                <img src={res.img} alt="error img" />
                                            </div>
                                        </>
                                    })
                                }
                            </div>
                            <div className="cabinet_images__right">
                                <img src={pic ? pic : item.images[0].img} alt="error img" />
                            </div> 
                        </div>
                        <div className="cabinet_content__right">
                            <h3>{item.brend}</h3>
                            <ul className="cabinet_content__ul">
                                <li><p>SKU:</p> 685813</li>
                                <li><p>Посадка:</p> высокая посадка</li>
                                <li><p>Крой:</p> средняя посадка</li>
                                <li><p>Состав:</p> 100% хлопок</li>
                            </ul>
                            <div className="cabinet_content__line"></div>
                            <p className="cabinet_content__inform">Рубашка с контрастным дизайном Свитшот из мягкого футера. Довольно свободная модель с заниженной линией плеча. Рельефная трикотажная резинка по горловине, низу рукавов и нижнему краю.</p>
                            <div className="cabinet_content__pricediv">
                                <div className="cabinet_content__price">
                                    Цена:
                                    <p className="cabinet_content__sum">{item.price * count} cум</p>
                                </div>
                                <div className="cabinet_content__countdiv">
                                    <p>Количество:</p>
                                    <div className="cabinet_content__count">
                                        <div onClick={decrease} className="cabinet_count__lose">-</div>
                                        <div className="cabinet_count__result">{count} шт</div>
                                        <div onClick={increase} className="cabinet_count__lose cabinet_count__add">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cabinet_content__colors">
                                <p className="cabinet_color__header">Color:</p> <p className="cabinet_color__name">{color}</p>
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                    <ButtonGroup style={{ flexWrap: "wrap", display: "inline-block" }}>
                                        {
                                            buttonList ? buttonList.map(item => {
                                                return <Button style={{ backgroundColor: item.name, }} onClick={() => setColor(item.name)} className="cabinet_color__button" ></Button>
                                            }) : ""
                                        }
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </div>
                            <div className="cabinet_content__colors cabinet_content__sizes ">
                                <p className="cabinet_color__header">Размер:</p> <p className="cabinet_color__name">{size}</p>
                                <Form>
                                    <div key="inline-radio" className="mr-2 cabinet_color__div">
                                        {
                                            sizeList ? sizeList.map(item => {
                                                return <div className="form-check" onClick={() => setSize(item.size)}>
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault1${item.id}`} />
                                                    <label className="form-check-label" for={`flexRadioDefault1${item.id}`}>
                                                        {item.size}
                                                    </label>
                                                </div>
                                            }) : ""
                                        }

                                    </div>
                                </Form>
                            </div>
                            <button className="cobinet_content__kupit">КУПИТЬ</button>

                        </div>
                    </div>
                }) : ""
            }

        </>
    )
}

export default CabinetContent
