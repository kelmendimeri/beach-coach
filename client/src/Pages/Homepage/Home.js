import React from 'react';
import Banner from "./Banner/Banner";
import Snorkel from "./Snorkel/Snorkel";
import SkillsMatch from "./SkillMatch/SkillsMatch";
import BeachExperiences from "./BeachExperiences/BeachExperiences";
import Subscribe from "../../Components/Subscribe/Subscribe";
import FollowFavoriteSpots from "./FollowSpots/FollowFavoriteSpots";

const Home = () => {
    return (
        <div id={"home"} className={"home"}>
            <Banner/>
            <Snorkel/>
            <SkillsMatch/>
            <BeachExperiences/>
            <Subscribe title={'Join the waitlist'}
                       describe={`Share your email and we will keep you informed of great new posts 
                       and features added to Beach Coach.`}/>
            <FollowFavoriteSpots/>
        </div>
    );
};

export default Home;