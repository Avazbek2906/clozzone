import React from 'react';
import './Cabinet.css';
import cabinet from '../../Images/cabinet_header.png';

function CabinetHeader() {
    return (
        <>
            <div className="cabinet_header__img">
                <div className="cabinet_header__wrap"></div>
                <img src={cabinet} alt="error img" />
            </div>
        </>
    )
}

export default CabinetHeader
