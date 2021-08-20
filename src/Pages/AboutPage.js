import React from 'react';
import './Pages.css';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CabinetHeader from '../Components/Cabinet/CabinetHeader';
import img from '../Images/about_img.png';

function AboutPage() {
    return (
        <>
            <CabinetHeader />
            <div className="container">
                <Breadcrumb style={{ marginTop: "30px" }}>
                    <Breadcrumb.Item><Link to="/">Главная страница</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>О Нac</Breadcrumb.Item>
                </Breadcrumb>

                <div className="home_brend__header" style={{margin: "40px 0 50px"}}>
                    <p style={{marginBottom: "0"}}>О НАС</p>
                </div>

                <div className="about_content">
                    <div className="about_left">
                        <img src={img} alt="error img" />
                    </div>
                    <div className="about_right">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
