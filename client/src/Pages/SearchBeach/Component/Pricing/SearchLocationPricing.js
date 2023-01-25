import React from 'react';
import './SearchLocationPricing.css';
import GradientButton from "../../../../Components/GradientButton";
import {HashLink} from "react-router-hash-link";

const SearchLocationPricing = () => {
    return (
        <div id={"search-location-pricing"} className={"search-location-pricing"}>
            <div className={"search-location-pricing-text"}>
                <p className={"search-location-pricing-text-title"}>Be one of the first to use the Beach Coach app</p>
                <p id={"search-location-pricing-text-describe"} className={"search-location-pricing-text-describe"}>
                    Join our wait list and be the first to use when the product goes live in 2023</p>
            </div>
            <div className={"search-location-pricing-select-option"}>
                <div id={"search-location-pricing-option"} className={"search-location-pricing-option"}>
                    <div className={"search-location-pricing-option-header"}>
                        <p className={"search-location-pricing-option-header-heading"}>Basic</p>
                        <p className={"search-location-pricing-option-header-title"}>Free beach and location snorkel
                            search</p>
                        <p className={"search-location-pricing-option-header-price"}>Free</p>
                    </div>
                    <div className={"hr"}></div>
                    <div className={"search-location-pricing-option-body"}>
                        <ul>
                            <li><span>Free beach and location snorkel search</span></li>
                            <li><span>Private pins for your favourite spots</span></li>
                            <li><span>Follow your favorite spot</span></li>
                            <li><span>Get alerts and interact with the community</span></li>
                        </ul>
                        <HashLink to={'/when#subscribe'}>
                            <GradientButton text={"WAIT LIST"} className={"gradient-btn-pricing"}
                                            icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                        </HashLink>
                    </div>
                </div>
                <div className={"search-location-pricing-option"}>
                    <div className={"search-location-pricing-option-popular-now"}>POPULAR NOW</div>
                    <div className={"search-location-pricing-option-header"}>
                        <p className={"search-location-pricing-option-header-heading"}>Premium</p>
                        <p className={"search-location-pricing-option-header-title"}>Snorkel and weather conditions. for
                            beaches and snorkel spots</p>
                        <p className={"search-location-pricing-option-header-price"}><span>$25</span> $15</p>
                        <p className={"search-location-pricing-option-header-annual"}>Annual fee</p>
                    </div>
                    <div className={"hr"}></div>
                    <div className={"search-location-pricing-option-body"}>
                        <ul>
                            <li><span>Swell, guide to snorkel, swim and surf</span></li>
                            <li><span>Tide, high to low tide and peak snorkel time</span></li>
                            <li><span>Weather, temperature and rain forecasts</span></li>
                            <li><span>Wind, chop and snorkeling</span></li>
                        </ul>
                        <HashLink to={'/when#subscribe'}>
                            <GradientButton text={"WAIT LIST"} className={"gradient-btn-pricing"}
                                            icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                        </HashLink>
                    </div>
                </div>
                <div className={"search-location-pricing-option"}>
                    <div className={"search-location-pricing-option-header"}>
                        <p className={"search-location-pricing-option-header-heading"}>Exclusive</p>
                        <p className={"search-location-pricing-option-header-title"}>Access to all app features and
                            connection to Apple Dive watch</p>
                        <p className={"search-location-pricing-option-header-price"}><span>$100</span> $50</p>
                        <p className={"search-location-pricing-option-header-annual"}>Annual fee</p>
                    </div>
                    <div className={"hr"}></div>
                    <div className={"search-location-pricing-option-body"}>
                        <ul>
                            <li><span>All the features and benefits of premium plus</span></li>
                            <li><span>Linking the data from your Apple Dive watch to the app</span></li>
                        </ul>
                        <HashLink to={'/when#subscribe'}>
                            <GradientButton text={"WAIT LIST"} className={"gradient-btn-pricing"}
                                            icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                        </HashLink>
                    </div>
                </div>
                <div className={"search-location-pricing-option"}>
                    <div className={"search-location-pricing-option-header"}>
                        <p className={"search-location-pricing-option-header-heading"}>Partner</p>
                        <p className={"search-location-pricing-option-header-title"}>Become a partner and contribute to
                            the community.</p>
                        <p className={"search-location-pricing-option-header-price"}>Contact Us</p>
                    </div>
                    <div className={"hr"}></div>
                    <div className={"search-location-pricing-option-body"}>
                        <ul>
                            <li>
                                <span>Beach Coach welcomes partners to bring additional benefits to the community.</span>
                            </li>
                        </ul>
                        <HashLink to={'/when#subscribe'}>
                            <GradientButton text={"WAIT LIST"} className={"gradient-btn-pricing"}
                                            icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchLocationPricing;