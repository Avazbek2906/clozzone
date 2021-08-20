import React from 'react';
import './Pages.css';
import HomeBrend from '../Components/HomeBrend'
import HomeSlider from '../Components/HomeSlider'
import HomeCollektion from '../Components/HomeCollektion';
// import HomeProdaj from '../Components/HomeProdaj';
import HomeProdaj2 from '../Components/Cabinet/HomeProduj2';

function HomePage() {
    return (
        <>
            <HomeSlider />
            <div className="container">
                <div className="home_page__components">
                    <HomeBrend />
                    <HomeCollektion />
                    {/* <HomeProdaj /> */}
                    <HomeProdaj2 />
                </div>
            </div>
        </>
    )
}

export default HomePage
