import React from 'react';
import './Banner.css';
import GradientButton from "../../../Components/GradientButton";
import bannerImg from '../../../assets/images/Homepage/bannerImg.png';
import {HashLink} from "react-router-hash-link";

const Banner = () => {
    return (
        <div id={"banner"} className={"banner"}>
            <div className={"banner-text"}>
                <div className={"banner-text-title"}>
                    <h4>Know where & when to snorkel</h4>
                </div>
                <div className={"banner-text-description"}><p>Use Beach Coach app to discover the reviews, location and
                    conditions of Australian snorkel spots.</p>
                </div>
                <HashLink to={"/blog#julianrocks"}>
                    <GradientButton className={"banner-gradient-btn"} text={"Discover Spots"}/>
                </HashLink>
            </div>
            <div className={"banner-img"}>
                <img src={bannerImg} alt={"banner-img"}/>
            </div>
        </div>
    );
};

export default Banner;