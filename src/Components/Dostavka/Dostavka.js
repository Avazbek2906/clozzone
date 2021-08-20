import React from 'react'; 
import './Dostavka.css';

function Dostavka() { 
    return (
        <>
            <div className="dostavka_section">
                <div className="container dostavka_content">

                    <div className="dostavka_left">
                        <h3>ВЫБЕРИТЕ ВАРИАНТ ДОСТАВКИ</h3>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                <h4>Забрать самостоятельно на складе</h4>
                                <p>Доступно - сегодня(кроме выходных)</p>
                                
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                <h4>Бесплатная доставка  автотранспортом.</h4>
                                <p>Для заказов от 400 000 сум.</p>
                                
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                            <label className="form-check-label" for="flexRadioDefault3">
                                <h4>Платная доставка автотранспортом.</h4>
                                <p>Для заказов не сумму мене 200 000сум.</p>
                                
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                            <label className="form-check-label" for="flexRadioDefault4">
                                <h4>Доступно в регионы Узбекистан</h4>
                                <p>Стоимость доставки оговаривается отделно.</p>
                                
                            </label>
                        </div>
                    </div>

                    <div className="dostavka_right">
                        <h3>УКАЖИТЕ ВАШИ ДАННЫЕ</h3>
                        <input type="text" placeholder="ФИО" />
                        <input type="number" placeholder="Номер телефон" />
                        <input type="email" placeholder="Ваш е-mail" />
                        <input type="text" placeholder="Ваш Город" />
                        <input type="text" placeholder="Адресс доставки" />
                    </div>
                </div>
                <div className="dostovka_oform__button">ОФОРМИТЬ ЗАКАЗ</div>
            </div>
        </>
    )
}

export default Dostavka
