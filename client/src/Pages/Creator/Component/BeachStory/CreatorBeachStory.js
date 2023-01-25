import React from 'react';
import creatorBeachStoryImg from '../../../../assets/images/Creator/creatorBeachStoryImg.png';
import './CreatorBeachStory.css';
import CreatorLastPost from "./CreatorLastPost/CreatorLastPost";

const CreatorBeachStory = () => {
    return (
        <div id={"creator-beach-story"} className={"creator-beach-story"}>
            <div className={"creator-beach-story-img"}>
                <img src={creatorBeachStoryImg} alt={"creator-beach-story-img"}/>
                <p className={"creator-beach-story-img-text"}>BEACH COACH STORIES FROM OUR CREATORS</p>
            </div>
            <CreatorLastPost/>
        </div>
    );
};

export default CreatorBeachStory;