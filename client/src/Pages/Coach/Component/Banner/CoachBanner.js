import React from 'react';
import './CoachBanner.css';
import {HashLink} from 'react-router-hash-link';
import coachBannerProfileImg from '../../../../assets/images/Coach/coachbannerProfileImg.svg';
import GradientButton from "../../../../Components/GradientButton";

const CoachBanner = () => {
    return (
        <div id={"coach-banner"} className={"coach-banner"}>
            <div className={"coach-banner-text-section"}>
                <div className={"coach-banner-text"}>
                    <p className={"coach-banner-text-tile"}>Snorkel coaching in the app</p>
                    <p className={"coach-banner-text-describe"}>Improve your form, know when and where to go</p>
                </div>
                <div className={"hr"}></div>
                <HashLink to={"/where#search-location-pricing-option"}>
                    <GradientButton className={"coach-banner-gradient-btn"} text={"DISCOVER PRICING"}
                                    icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                </HashLink>
            </div>
            <img src={coachBannerProfileImg} alt={"coach-banner-img"}/>
        </div>
    );
};

export default CoachBanner;