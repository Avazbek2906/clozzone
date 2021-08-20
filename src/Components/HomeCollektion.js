import React from 'react';
import './Home.css';
import collection1 from '../Images/collection1.png';
import collection2 from '../Images/collection2.png';
import collection3 from '../Images/collection3.png';
import collection4 from '../Images/collection4.png'; 
import newyork1 from '../Images/newyork1.png';
import newyork2 from '../Images/newyork2.png';
import newyork3 from '../Images/newyork3.png';  
import HomeClothes from './Cabinet/HomeClothes';



function HomeCollektion() {
  
    const collectionList = [
        { img: collection1, text: "Общее" },
        { img: collection2, text: "Для женщин" },
        { img: collection3, text: "Для мужчин" },
        { img: collection4, text: "Для детей" },
    ]

    return (
        <>
            <div className="component" style={{ marginTop: "20px" }}>
                <div className="home_brend__header">
                    <p>НОВАЯ КОЛЛЕКЦИЯ</p>
                </div>
                <div className="collection_content">
                    {
                        collectionList.map(item => {
                            return <div className="collection_content__div" style={{ backgroundImage: `url(${item.img})` }}>
                                <div className="collection_content_wrap">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="collection_content__clothes">
                    <HomeClothes />
                    {/* <Cloth1 />
                    <Cloth2 />
                    <Cloth3 />
                    <Cloth1 /> */}
                </div>

                <div className="collection_content__img">
                    <div className="collection__img__left">
                        <div className="collection_img1">
                            <img src={newyork1} alt="error img" />
                        </div>
                        <div className="collection_img2">
                            <img src={newyork2} alt="error img" />
                        </div>
                    </div>
                    <div className="collection_img__rigth">
                        <img src={newyork3} alt="error img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCollektion
