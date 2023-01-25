import   React from 'react';
import SearchLocationBanner from "./Component/Banner/SearchLocationBanner";
import SearchLocationPricing from "./Component/Pricing/SearchLocationPricing";
import SearchBeachFeature from "./Component/SearchBeachFeature/SearchBeachFeature";
import SimpleSlider from "./Component/Carousel/SimpleSlider";
import SearchLocation from "./Component/Locations/SearchLocation";

const SeachBeach = () => {
    return (
        <div id={"search-beach"} className={"search-beach"}>
            <SearchLocationBanner/>
            <SearchBeachFeature/>
            <SimpleSlider/>
            <SearchLocation/>
            <SearchLocationPricing/>
        </div>
    );
};

export default SeachBeach;