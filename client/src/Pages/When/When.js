import React from 'react';
import WhenBanner from "./Components/WhenBanner";
import WhenFeatures from "./Components/WhenFeatures";
import Subscribe from "../../Components/Subscribe/Subscribe";
import SearchLocationPricing from "../SearchBeach/Component/Pricing/SearchLocationPricing";
import WhenFollowSpot from "./Components/WhenFollowSpot";

const When = () => {
    return (
        <div id={"when"} className={"when"}>
            <WhenBanner/>
            <Subscribe title={"SHARE YOUR FAVOURITE SNORKEL SPOT"}
                       describe={"Add your favourite spot to our snorkel map and conditions report."}/>
            <WhenFeatures/>
            <WhenFollowSpot/>
            <SearchLocationPricing/>
        </div>
    );
};

export default When;