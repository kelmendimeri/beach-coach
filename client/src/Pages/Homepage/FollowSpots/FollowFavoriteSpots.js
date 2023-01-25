import React from 'react';
import './FollowFavoriteSpots.css';
import {HashLink} from 'react-router-hash-link';
import GradientButton from "../../../Components/GradientButton";

const FollowFavoriteSpots = () => {
    return (
        <div id={"followFavoriteSpots"} className={"followFavoriteSpots"}>
            <div className={"followFavoriteSpots-headtext"}>
                <div className={"followFavoriteSpots-text-head-title"}>
                    <p>Follow your favourite spots</p>
                </div>
            </div>
            <div className={"followFavoriteSpots-text"}>
                <div className={"followFavoriteSpots-text-heading"}>
                    <p>FOLLOW YOUR FAVOURITE BEACH</p>
                </div>
                <div className={"hr"}></div>
                <div className={"followFavoriteSpots-text-title"}>
                    <p>Get alerts, see posts from others, track reviews.</p>
                </div>
                <div className={"followFavoriteSpots-text-describe"}>
                    <p>Keep up with the news from your favourite beach and spots through the experience of
                        others..</p>
                </div>
                <div className={"followFavoriteSpots-buttons"}>
                    <HashLink to={"/blog#julianrocks"}>
                        <GradientButton className={"followFavoriteSpots-gradient-btn"} text={"VIEW POSTS"}
                                        icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                    </HashLink>
                    <HashLink to={"/blog#julianrocks"}>
                        <GradientButton className={"followFavoriteSpots-gray-btn"} text={"FOLLOW BEACH"}
                                        icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default FollowFavoriteSpots;