import React from 'react'
import './Filter.css';
import img from '../../Images/filter_img.png'

function FilterHome() {
    return (
        <div className="filter_home__section">
            <img src={img} alt="error img" />
            <div className="filter_home__content ">
                <div className="filter_home_main container">
                    <h1>NEW STYLE</h1>
                    <p>uzecom.com</p>
                </div>
            </div>
        </div>
    )
}

export default FilterHome
