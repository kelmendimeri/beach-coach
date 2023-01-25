import React from 'react';
import './SearchLocation.css';
import GMap from "./Components/GMap";

const SearchLocation = () => {
    return (
        <div id={"search-location"} className={"search-location"}>
            <GMap/>
        </div>
    );
};

export default SearchLocation;