import React from 'react';
import GradientButton from '../../../../Components/GradientButton';
import {HashLink} from 'react-router-hash-link';
import './FollowUnderwaterMaster.css';
import sydneyHarbourImg from '../../../../assets/images/Homepage/girlInBlueSwimSuit.png';
import beachCoachStarImg from '../../../../assets/images/Homepage/beachCoachStarImg.png';
import beachCoachDeepDiveGirl from '../../../../assets/images/Homepage/beachCoachDeepDiveGirl.png';
import blueFishImg from '../../../../assets/images/Homepage/beachCoachBlueFishImg.png';
import pristineWaterImg from '../../../../assets/images/Homepage/beachCoachPristineWater.png';
import beachCoachDeepDives from '../../../../assets/images/Homepage/beachCoachDeepDives.png';

const FollowUnderwaterMaster = () => {
    return (
        <div id={"followUnderwaterMaster"} className={"followUnderwaterMaster"}>
            <div className={"followUnderwaterMaster-text"}>
                <div className={"followUnderwaterMaster-text-heading"}>
                    <p>CHECK SNORKEL CONDITIONS</p>
                </div>
                <div className={"hr"}></div>
                <div className={"followUnderwaterMaster-text-title"}>
                    <p>Peak snorkelling conditions for each location.</p>
                </div>
                <div className={"followUnderwaterMaster-text-describe"}>
                    <p>Beach Coach app factors in the direction each beach faces to give you and overview of peak times
                        to snorkel. Find seasonal fish. Tell us your favourite spot and Beach Coach will track
                        conditions.
                    </p>
                </div>
                <div className={"followUnderwaterMaster-buttons"}>
                    <HashLink to={"/blog#julianrocks"}>
                        <GradientButton className={"followUnderwaterMaster-buttons-gradient"} text={"LEARN MORE"}
                                        icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                    </HashLink>
                    <HashLink to={"/blog#julianrocks"}>
                        <GradientButton className={"followUnderwaterMaster-buttons-gray"} text={"TRACK MY SPOT"}
                                        icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                    </HashLink>
                </div>
            </div>
            <div className={"followUnderwaterMaster-image"}>
                <div className={"rowImage"}>
                    <div className={"col-sm-6 col-md-6 col-lg-6 image-holder"}>
                        <img src={sydneyHarbourImg} alt={"sydney-harbour-img"}/>
                        <p className={"image-description"}>VISIBILITY</p>
                    </div>
                    <div className={"col-sm-6 col-md-6 col-lg-6 image-holder"}>
                        <img src={beachCoachStarImg} alt={"beach-coach-start-img"}/>
                        <p className={"image-description"}>Temperature</p>
                    </div>
                </div>
                <div className={"rowImage"}>
                    <div className={"col-sm-6 col-md-6 col-lg-6 image-holder"}>
                        <img src={beachCoachDeepDives} alt={"beach-coach-deep-dive-img"}/>
                        <p className={"image-description"}>SWELL</p>
                    </div>
                    <div className={"col-sm-6 col-md-6 col-lg-6 image-holder"}>
                        <img src={blueFishImg} alt={"blue-fish-img"}/>
                        <p className={"image-description"}>FISH</p>
                    </div>
                </div>
                <div className={"rowImage"}>
                    <div className={"col-sm-6 col-md-6 col-lg-6 image-holder"}>
                        <img src={pristineWaterImg} alt={"pristine-water-img"}/>
                        <p className={"image-description black-letter"}>WIND</p>
                    </div>
                    <div className={"col-sm-6 col-md-6 col-lg-6 image-holder"}>
                        <p className={"image-description"}>TIDE</p>
                        <img src={beachCoachDeepDiveGirl} alt={"beach-coach-deep-dive-girl-img"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowUnderwaterMaster;