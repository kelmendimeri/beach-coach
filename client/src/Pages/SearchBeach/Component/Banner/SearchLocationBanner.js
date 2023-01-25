import React from 'react';
import './SearchLocationBanner.css';
import {HashLink} from 'react-router-hash-link';
import GradientButton from "../../../../Components/GradientButton";
import WhereBannerImg from './../../../../assets/images/Locations/WhereBannerImg.png'

const SearchLocationBanner = () => {
    return (
        <div id={"search-location-banner"} className={"search-location-banner"}>
            <div className={"search-location-banner-text"}>
                <p className={"search-location-banner-text-title"}>Beach Coach APP</p>
                <div className={"hr"}></div>
                <p className={"search-location-banner-text-describe"}>Maps and reviews created by the snorkelling
                    community.</p>
                <HashLink to={"#search-location"}>
                    <GradientButton text={"SEARCH BEACHES"} icon={<i className={"bi bi-arrow-up-right"}></i>}
                                    className={"gradient-btn-search-beaches"}/>
                </HashLink>
            </div>
            <div className={"search-location-banner-img"}>
                <img src={WhereBannerImg} alt={"where-banner-Img"}/>
            </div>
        </div>
    );
};

export default SearchLocationBanner;