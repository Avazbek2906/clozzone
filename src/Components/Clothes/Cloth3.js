import React from 'react'
import cloth1 from '../../Images/cloth1.png';
import cloth2 from '../../Images/cloth2.png';
import cloth3 from '../../Images/cloth3.png';
import cloth4 from '../../Images/cloth4.png';
import cloth5 from '../../Images/cloth5.png';
import cloth6 from '../../Images/cloth6.png';
import Slider from 'react-slick';
function Cloth3() {
    const ArrowLeft = (props) => (
        <button {...props} className="cloth_prew">
            <svg width="18" height="18" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6194 2.31971C30.3784 3.0675 30.3778 4.29196 29.6182 5.0391L13.391 21L29.6186 36.9612C30.378 37.7082 30.3785 38.9323 29.6197 39.68C28.8768 40.412 27.6836 40.4116 26.9412 39.679L8 20.99L26.9409 2.31998C27.6836 1.58788 28.8765 1.58775 29.6194 2.31971Z" fill="#9E9E9E" />
            </svg>
        </button>
    );
    const ArrowRight = (props) => (
        <button {...props} className="cloth_next">
            <svg width="18" height="18" viewBox="0 0 42 42" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3806 39.6803C11.6216 38.9325 11.6222 37.708 12.3818 36.9609L28.609 21L12.3814 5.03876C11.622 4.29181 11.6215 3.06765 12.3803 2.32004C13.1232 1.58801 14.3164 1.58843 15.0588 2.32099L34 21.01L15.0591 39.68C14.3164 40.4121 13.1235 40.4122 12.3806 39.6803Z" fill="#9E9E9E" />
            </svg>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
    };
    const clothList = [
        {
            id: 1,
            images: [
                { img: cloth1 },
                { img: cloth1 },
                { img: cloth1 },
                { img: cloth1 },
            ]

        },
        {
            id: 2,
            images: [
                { img: cloth2 },
                { img: cloth2 },
                { img: cloth2 },
                { img: cloth2 },
            ]

        },
        {
            id: 3,
            images: [
                { img: cloth3 },
                { img: cloth3 },
                { img: cloth3 },
                { img: cloth3 },
            ]

        },
        {
            id: 4,
            images: [
                { img: cloth4 },
                { img: cloth4 },
                { img: cloth4 },
                { img: cloth4 },
            ]

        },
        {
            id: 5,
            images: [
                { img: cloth5 },
                { img: cloth5 },
                { img: cloth5 },
                { img: cloth5 },
            ]

        },
        {
            id: 6,
            images: [
                { img: cloth6 },
                { img: cloth6 },
                { img: cloth6 },
                { img: cloth6 },
            ]

        },
    ]
    return (
        <>
            {
                clothList.map(item => {
                    if (item.id === 3) {
                        return <>
                            <div className="collection_cloth_div">
                                <div className="collection_img__div">
                                    <Slider {...settings} >
                                        {
                                            item.images.map(item => {
                                                return <img src={item.img} alt="error img" className="collection_img" />
                                            })
                                        }
                                    </Slider>
                                </div>
                                <div className="collection_content__body">
                                    <h4>Zara</h4>
                                    <p>Рубашка с контрастным дизайном</p>
                                    <h6>100 000 cум</h6>
                                    <div className="collection_body__circles">
                                        <div className="collection_circle collection_circle2_1"><div></div></div>
                                        <div className="collection_circle collection_circle3_2"><div></div></div>
                                        <div className="collection_circle collection_circle3"><div></div></div>
                                        <div className="collection_circle collection_circle4"><div></div></div>
                                    </div>
                                    <button className="collection_button">Добавить в корзину</button>
                                </div>
                            </div>
                        </>
                    }
                })
            }
        </>
    )
}

export default Cloth3
