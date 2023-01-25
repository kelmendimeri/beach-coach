import React from 'react';
import SnorkelBestBeaches from "./Components/SnorkelBestBeaches";
import FollowUnderwaterMaster from "./Components/FollowUnderwaterMaster";

const Snorkel = () => {
    return (
        <div id={"snorkel"} className={"snorkel"}>
            <SnorkelBestBeaches/>
            <FollowUnderwaterMaster/>
        </div>
    );
};

export default Snorkel;