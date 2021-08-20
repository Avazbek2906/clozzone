import React from 'react';
import './Home.css';
import Slider from "react-slick";
import homeImg from '../Images/homeSlider.png';

function HomeSlider() {
    const ArrowLeft = (props) => (
        <button {...props} className="home_prew">
            <svg width="35" height="35" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6194 2.31971C30.3784 3.0675 30.3778 4.29196 29.6182 5.0391L13.391 21L29.6186 36.9612C30.378 37.7082 30.3785 38.9323 29.6197 39.68C28.8768 40.412 27.6836 40.4116 26.9412 39.679L8 20.99L26.9409 2.31998C27.6836 1.58788 28.8765 1.58775 29.6194 2.31971Z" fill="#9E9E9E" />
            </svg>
        </button>
    );
    const ArrowRight = (props) => (
        <button {...props} className="home_next">
            <svg width="35" height="35" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3806 39.6803C11.6216 38.9325 11.6222 37.708 12.3818 36.9609L28.609 21L12.3814 5.03876C11.622 4.29181 11.6215 3.06765 12.3803 2.32004C13.1232 1.58801 14.3164 1.58843 15.0588 2.32099L34 21.01L15.0591 39.68C14.3164 40.4121 13.1235 40.4122 12.3806 39.6803Z" fill="#9E9E9E" />
            </svg>
        </button>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
    };
    return (
        <>
            <div className="home_slider">
                <Slider {...settings} >
                    <div>
                        <img src={homeImg} alt="error img" />
                    </div>
                    <div>
                        <img src="https://uzecom.com//uploads/product/77cf158243b2f8682344a06752a0bfc4.jpg" alt="error img" />
                    </div>
                    <div>
                        <img src="https://uzecom.com//uploads/product/3238379985e2a27255fb5e857e193487.jpg" alt="error img" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default HomeSlider



