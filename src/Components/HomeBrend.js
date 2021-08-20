import React from 'react'
import './Home.css';
import Slider from "react-slick";
import clarins from '../Images/clarins-logo.png';
import elle from '../Images/elle-logo.png';
import mac from '../Images/mac-logo.png';
import nike from '../Images/nike-logo.png';
import penti from '../Images/penti-logo.png';
import vichy from '../Images/vichy-logo.png';
import zara from '../Images/zara-logo.png';

function HomeBrend() {
    const ArrowLeft = (props) => (
        <button {...props} className="btn prew-arrow ">
            <svg className="brend_arrow" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6194 2.31971C30.3784 3.0675 30.3778 4.29196 29.6182 5.0391L13.391 21L29.6186 36.9612C30.378 37.7082 30.3785 38.9323 29.6197 39.68C28.8768 40.412 27.6836 40.4116 26.9412 39.679L8 20.99L26.9409 2.31998C27.6836 1.58788 28.8765 1.58775 29.6194 2.31971Z" fill="#9E9E9E" />
            </svg>
        </button>
    );
    const ArrowRight = (props) => (
        <button {...props} className="btn next-arrow">
            <svg className="brend_arrow" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3806 39.6803C11.6216 38.9325 11.6222 37.708 12.3818 36.9609L28.609 21L12.3814 5.03876C11.622 4.29181 11.6215 3.06765 12.3803 2.32004C13.1232 1.58801 14.3164 1.58843 15.0588 2.32099L34 21.01L15.0591 39.68C14.3164 40.4121 13.1235 40.4122 12.3806 39.6803Z" fill="#9E9E9E" />
            </svg>
        </button>
    );
    const brendList = [
        { img: zara, text: "Zara" },
        { img: nike, text: "Nike" },
        { img: mac, text: "Mac" },
        { img: vichy, text: "Vichy" },
        { img: clarins, text: "Clarins" },
        { img: elle, text: "Elle" },
        { img: penti, text: "Penti" },
        { img: zara, text: "Zara" },
        { img: nike, text: "Nike" },
        { img: mac, text: "Mac" },
        { img: vichy, text: "Vichy" },
        { img: clarins, text: "Clarins" },
        { img: elle, text: "Elle" },
        { img: penti, text: "Penti" },
    ];
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        centerMode: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            } 
        ]
    };

    return (
        <>
            <div className="home_brend__section">
                <div className="home_brend__header">
                    <p>БРЕНДЫ</p>
                </div>
                <Slider {...settings} >
                    {
                        brendList.map(item => {
                            return <div className="home_brends__line">
                                <div className="home_brend_circle">
                                    <img src={item.img} alt="error img" />
                                </div>
                                <p>{item.text}</p>
                            </div>
                        })
                    }
                </Slider>
            </div>
        </>
    )
}

export default HomeBrend
