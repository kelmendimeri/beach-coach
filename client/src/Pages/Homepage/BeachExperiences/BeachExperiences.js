import React from 'react';
import './BeachExperiences.css';
import beachExperiences1Img from '../../../assets/images/Homepage/beachExperiences1Img.png';
import beachExperiences2Img from '../../../assets/images/Homepage/beachExperiences2Img.png';
import beachExperiences3Img from '../../../assets/images/Homepage/beachExperiences3Img.png';
import beachExperiences4Img from '../../../assets/images/Homepage/beachExperiences4Img.png';

const BeachExperiences = () => {
    return (
        <div id={"beach-experiences"} className={"beach-experiences"}>
            <div className={"beach-experiences-text"}>
                <div className={"beach-experiences-title"}>
                    <p>A lifetime of underwater beach experiences in one app.</p>
                </div>
            </div>
            <div className={"beach-experiences-image"}>
                <img className={"beachExperiences1Img"} src={beachExperiences1Img} alt={"beach-experiences-img"}/>
                <div className={"beach-experiences-image-row"}>
                    <img className={"beachExperiences2Img"} src={beachExperiences2Img} alt={"beach-experiences-img"}/>
                    <img className={"beachExperiences3Img"} src={beachExperiences3Img} alt={"beach-experiences-img"}/>
                </div>
                <img className={"beachExperiences4Img"} src={beachExperiences4Img} alt={"beach-experiences-img"}/>
            </div>
        </div>
    );
};

export default BeachExperiences;