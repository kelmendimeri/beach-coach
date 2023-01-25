import React from 'react';
import {HashLink} from "react-router-hash-link";
import GradientButton from "../../../Components/GradientButton";
import './WhenFollowSpot.css';
import mobileViewPhoneBackground from '../../../assets/images/Homepage/mobileViewPhoneBackground.svg';

const WhenFollowSpot = () => {
    return (
        <div id={"when-follow-spot"} className={"when-follow-spot"}>
            <div className={"when-follow-spot-header-text"}>
                <div className={"when-follow-spot-text-head-title"}>
                    <p>Search snorkelling conditions.</p>
                </div>
            </div>
            <div className={"when-follow-spot-text"}>
                <div className={"when-follow-spot-text-heading"}>
                    <p>PLAN YOUR SNORKELLING HOLIDAY</p>
                </div>
                <div className={"hr"}></div>
                <div className={"when-follow-spot-text-title"}>
                    <p>Find the best snorkelling condition, 5 days in advance, Australia wide.</p>
                </div>
                <div className={"when-follow-spot-text-describe"}>
                    <p>Check, locations, reviews, snorkelling conditions and weather before you go. Follow favourite
                        Beach</p>
                </div>
                <div className={"when-follow-spot-buttons"}>
                    <HashLink to={"/blog"} onClick={() => {
                        window.scrollTo(0, 0);
                    }}>
                        <GradientButton className={"when-follow-spot-gradient-btn"} text={"VIEW BLOG"}
                                        icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                    </HashLink>
                    {/*<HashLink to={"/blog#julianrocks"}>*/}
                    <GradientButton onClick={() => {
                        alert("The service is not available for the moment.")
                    }} className={"when-follow-spot-gray-btn"} text={"FOLLOW BEACH"}
                                    icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                    {/*</HashLink>*/}
                </div>
            </div>
            <img className={"mobileViewPhoneBackground"} src={mobileViewPhoneBackground} alt={"phone-background-svg"}/>
        </div>

    );
};

export default WhenFollowSpot;