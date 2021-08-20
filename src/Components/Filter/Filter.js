import React, { useState } from 'react'
import './Filter.css';
import { Accordion, Form } from 'react-bootstrap';
import InputRange from "react-input-range";

import 'react-input-range/lib/css/index.css';
import "./Slider.css"

function Filter() {
    const [value, setValue] = useState({
        min: 50000,
        max: 1000000
    });
    const changeDiapazon = (range) => {
        console.log(range);
        setValue(range)
    }
    return (
        <>
            <div className="filter_main">
                <div className="filter_search__div">
                    <input className="filter_search__button" placeholder="Поиск..." />
                    <svg style={{ cursor: "pointer" }} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7536 14.4753L11.9212 11.463C12.835 10.2211 13.3309 8.68756 13.329 7.10882C13.329 5.70283 12.9382 4.32841 12.2059 3.15937C11.4736 1.99033 10.4327 1.07918 9.21492 0.54113C7.99714 0.00308012 6.65713 -0.137698 5.36434 0.136597C4.07155 0.410893 2.88404 1.08794 1.952 2.08213C1.01995 3.07631 0.385212 4.34299 0.12806 5.72196C-0.129092 7.10094 0.00288761 8.53028 0.507309 9.82925C1.01173 11.1282 1.86594 12.2385 2.96191 13.0196C4.05789 13.8007 5.3464 14.2176 6.66452 14.2176C8.14459 14.2196 9.58229 13.6907 10.7465 12.7159L13.5706 15.7372C13.6481 15.8204 13.7402 15.8865 13.8417 15.9317C13.9432 15.9768 14.0521 16 14.1621 16C14.2721 16 14.381 15.9768 14.4825 15.9317C14.584 15.8865 14.6761 15.8204 14.7536 15.7372C14.8317 15.6545 14.8936 15.5563 14.9359 15.448C14.9782 15.3397 15 15.2236 15 15.1062C15 14.9889 14.9782 14.8728 14.9359 14.7645C14.8936 14.6562 14.8317 14.5579 14.7536 14.4753ZM1.66613 7.10882C1.66613 6.05433 1.95928 5.02352 2.50851 4.14674C3.05774 3.26996 3.83838 2.58659 4.75172 2.18305C5.66506 1.77952 6.67007 1.67393 7.63966 1.87965C8.60925 2.08538 9.49988 2.59316 10.1989 3.3388C10.898 4.08444 11.374 5.03444 11.5669 6.06868C11.7597 7.10291 11.6607 8.17492 11.2824 9.14914C10.9041 10.1234 10.2635 10.9561 9.44148 11.5419C8.6195 12.1277 7.65311 12.4404 6.66452 12.4404C5.33887 12.4404 4.06751 11.8787 3.13013 10.8788C2.19275 9.87897 1.66613 8.52285 1.66613 7.10882Z" fill="#003466" />
                    </svg>
                </div>

                <div className="filter_sortirovka">
                    <ul><li>Сортиковка по</li>
                        <li>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.249015 0.638233C0.0386768 0.838031 0.0386768 1.16197 0.249015 1.36177L5.20008 6.06474C5.30283 6.16235 5.43678 6.21227 5.57144 6.21451C5.71256 6.21696 5.8545 6.16704 5.96218 6.06475L10.9132 1.36178C11.1236 1.16198 11.1236 0.838039 10.9132 0.638241C10.7029 0.438442 10.3619 0.438442 10.1515 0.638241L5.58113 4.97963L1.01072 0.638233C0.800379 0.438435 0.459353 0.438434 0.249015 0.638233Z" fill="#666666" />
                            </svg>
                        </li>
                    </ul>
                </div>

                <div className="filter_acardion">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Для мужшин</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>- Рубашки</li>
                                    <li>- Свитшоты</li>
                                    <li>- Джинсы</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Для женшин</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>- Рубашки</li>
                                    <li>- Свитшоты</li>
                                    <li>- Джинсы</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Для детей</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Для мальчиков</Accordion.Header>
                                        <Accordion.Body>
                                            <ul><li>- Футболки</li></ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Для девочек</Accordion.Header>
                                        <Accordion.Body>
                                            <ul><li>- Платья</li></ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>


                <div className="filter_check__header">
                    <p>Филтр по размером</p>
                </div>
                <Form>
                    <div key="checkbox" className="mb-3 mt-2">
                        <Form.Check
                            label="XS"
                            type="checkbox"
                            id="checkbox-1"
                        />
                        <Form.Check
                            label="S"
                            type="checkbox"
                            id="checkbox-2"
                        />
                        <Form.Check
                            label="L"
                            type="checkbox"
                            id="checkbox-3"
                        />
                        <Form.Check
                            label="M"
                            type="checkbox"
                            id="checkbox-4"
                        />
                        <Form.Check
                            label="XL"
                            type="checkbox"
                            id="checkbox-5"
                        />
                        <Form.Check
                            label="XXL"
                            type="checkbox"
                            id="checkbox-6"
                        />
                    </div>
                </Form>

                <div className="filter_check__header">
                    <p>Диапазон цена</p>
                </div>
                <div className="filter_diapazon">
                    <InputRange
                        draggableTrack
                        minValue={50000}
                        maxValue={1200000}
                        step={10000}
                        onChange={(value) => changeDiapazon(value)}
                        value={value}
                    />
                </div>

                <div className="filter_check__header">
                    <p>Филтр по брендам.</p>
                </div>
                <Form>
                    <div key="checkbox" className="mb-3 mt-2">
                        <Form.Check
                            label="Zara"
                            type="checkbox"
                            id="checkbox-10"
                        />
                        <Form.Check
                            label="Legendr"
                            type="checkbox"
                            id="checkbox-11"
                        />
                        <Form.Check
                            label="ABB"
                            type="checkbox"
                            id="checkbox-12"
                        />
                        <Form.Check
                            label="Navigator"
                            type="checkbox"
                            id="checkbox-13"
                        />
                        <Form.Check
                            label="TELFOR"
                            type="checkbox"
                            id="checkbox-14"
                        />
                        <Form.Check
                            label="Wago"
                            type="checkbox"
                            id="checkbox-15"
                        />
                        <Form.Check
                            label="UniVersal"
                            type="checkbox"
                            id="checkbox-15"
                        />
                    </div>
                </Form>

                <div className="filter_pair__buttons">
                    <button className="filter_sbros">Сбросить</button>
                    <button className="filter_filter">Фильтр</button>
                </div>
            </div>
        </>
    )
}

export default Filter
