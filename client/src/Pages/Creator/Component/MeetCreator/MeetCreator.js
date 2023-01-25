import React from 'react';
import './MeetCreator.css';
import meetCreator1Img from '../../../../assets/images/Creator/meetCreator1Img.png';
import meetCreator2Img from '../../../../assets/images/Creator/meetCreator2Img.png';
import meetCreator3Img from '../../../../assets/images/Creator/meetCreator3Img.png';
import meetCreator4Img from '../../../../assets/images/Creator/meetCreator4Img.png';
import meetCreator5Img from '../../../../assets/images/Creator/meetCreator5Img.png';
import meetCreator6Img from '../../../../assets/images/Creator/meetCreator6Img.png';
import meetCreator7Img from '../../../../assets/images/Creator/meetCreator7Img.png';
import meetCreator8Img from '../../../../assets/images/Creator/meetCreator8Img.png';

const MeetCreator = () => {
    return (
        <div id={"meet-creator"} className={"meet-creator"}>
            <div className={"meet-creator-text"}>
                <p className={"meet-creator-text-title"}>Meet our creators</p>
                <p className={"meet-creator-text-describe"}>Beach Coach App creators represent the diverse interests of
                    the snorkelling community.</p>
            </div>
            <div className={"meet-creator-profiles"}>
                <div className={"creator-profile"}>
                    <img src={meetCreator1Img} className="rounded-circle" alt={"meet-creator-img-1"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Snorkel and swim</p>
                        <p className={"creator-profile-nickname"}>Snorkel and surf spots</p>
                    </div>
                </div>
                <div className={"creator-profile"}>
                    <img src={meetCreator2Img} className="rounded-circle" alt={"meet-creator-img-2"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Snorkel with kids</p>
                        <p className={"creator-profile-nickname"}>Busy mum</p>
                    </div>
                </div>
                <div className={"creator-profile"}>
                    <img src={meetCreator3Img} className="rounded-circle" alt={"meet-creator-img-3"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Snorkel off boat</p>
                        <p className={"creator-profile-nickname"}>Snorkel deeper water</p>
                    </div>
                </div>
                <div className={"creator-profile"}>
                    <img src={meetCreator4Img} className="rounded-circle" alt={"meet-creator-img-4"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Catch the slack tide</p>
                        <p className={"creator-profile-nickname"}>Calm water, calm mind</p>
                    </div>
                </div>
                <div className={"creator-profile"}>
                    <img src={meetCreator5Img} className="rounded-circle" alt={"meet-creator-img-5"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Rock Pool explorer</p>
                        <p className={"creator-profile-nickname"}>Mini wonder worlds</p>
                    </div>
                </div>
                <div className={"creator-profile"}>
                    <img src={meetCreator6Img} alt={"meet-creator-img-6"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Fish watching</p>
                        <p className={"creator-profile-nickname"}>Iconic snorkelling</p>
                    </div>
                </div>
                <div className={"creator-profile"}>
                    <img src={meetCreator7Img} className="rounded-circle" alt={"meet-creator-img-7"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Snorkel skills</p>
                        <p className={"creator-profile-nickname"}>From beginner to master</p>
                    </div>
                </div>
                <div className={"creator-profile"}>
                    <img src={meetCreator8Img} className="rounded-circle" alt={"meet-creator-img-8"}/>
                    <div className={"creator-profile-text"}>
                        <p className={"creator-profile-describe"}>Winter snorkelling</p>
                        <p className={"creator-profile-nickname"}>Crystal clear snorkels</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetCreator;