import React from 'react';
import CreatorBanner from "./Component/CreatorBanner/CreatorBanner";
import CreatorHeroSection from "./Component/CreatorHeroSection/CreatorHeroSection";
import MeetCreator from "./Component/MeetCreator/MeetCreator";
import CreatorBeachStory from "./Component/BeachStory/CreatorBeachStory";

const Creator = () => {
    return (
        <div id={"creator"} className={"creator"}>
            <CreatorBanner/>
            <CreatorHeroSection/>
            <MeetCreator/>
            <CreatorBeachStory/>
        </div>
    );
};

export default Creator;