import React from 'react';
import {HashLink} from "react-router-hash-link";
import GradientButton from "../../../Components/GradientButton";
import whenBannerVideo from '../../../assets/video/WhenBannerVideo.mp4';
import './WhenBanner.css';

const WhenBanner = () => {
    return (
        <div id={"when-banner"} className={"when-banner-banner"}>
            <div className={"when-banner-text"}>
                <p className={"when-banner-text-title"}>Beach Coach APP</p>
                <div className={"hr"}></div>
                <p className={"when-banner-text-describe"}>Know when to go snorkelling.</p>
                <HashLink to={"/when#subscribe"}>
                    <GradientButton text={"WAIT LIST"} icon={<i className={"bi bi-arrow-up-right"}></i>}
                                    className={"gradient-btn-search-beaches"}/>
                </HashLink>
            </div>
            <div className={"when-banner-img"}>
                <video src={whenBannerVideo} loop autoPlay={true} muted={true}></video>
            </div>
        </div>
    );
};

export default WhenBanner;