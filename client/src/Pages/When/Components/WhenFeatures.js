import React from 'react';
import searchBeachFeatureImage from "../../../assets/images/When/whenFeatureImg.png";
import './WhenFeature.css';

const WhenFeatures = () => {
    return (
        <div id={"when-feature"} className={"when-feature"}>
            <div className={"when-feature-container"}>
                <div className={"when-feature-container-text"}>
                    <p className={"when-feature-container-text-title"}>Track peak snorkelling conditions for
                        over 2500 locations.</p>
                    <p className={"when-feature-container-text-describe"}>Add new spots to track. Track up to 5 days in
                        advance. Beach Coach factors in the direction beaches face, to give to the world's first
                        automated snorkelling condition report.
                    </p>
                </div>
                <div className={"when-feature-container-card-container"}>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <i className={"bi bi-compass"}></i>
                            </div>
                            <p className={"icon-text"}>Wind direction</p>
                        </div>
                    </div>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <i className={"bi bi-wind"}></i>
                            </div>
                            <p className={"icon-text"}>Wind Strength</p>
                        </div>
                    </div>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <i className={"bi bi-flag-fill"}></i>
                            </div>
                            <p className={"icon-text"}>Wind Exposure</p>
                        </div>
                    </div>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <img className={"icon-icon-tsunami"} alt={"icon-tsunali-fill"}
                                     src={"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 43 44' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect y='0.5' width='43' height='43' fill='url(%23pattern0)'/%3E%3Cdefs%3E%3Cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0_1102_4104' transform='translate(0 -0.0135135) scale(0.027027)'/%3E%3C/pattern%3E%3Cimage id='image0_1102_4104' width='37' height='38' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAMAAAB01KKfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAAA8UlEQVQ4T+2Saw6EIAyERUCKPMr9T7sFB4OKe4DNfj8kTCcwtSx/5qgtcik5rNhPMamALz6CpWEh3tlRBxryFYdqh2eXbihWojYuF4fKwCq9dXwVVMqtMKIiHAKrJtnyuNLDUQnQ8r3NMdTrP9BDqFeXuZhmvQk3U2HoVzKqJ9MrH67pcJ4u3lAaeLpkRkY6t7S789iZS8Bb673kwvEYEMejlLCta3dtug7OkqursmTrLXpzpsmTiF/Qbk9ZchqKHLxdLSUOZLT1TYbrJT0403Mkqnll9TV+ChRkapy8yN21Hq/O4OwWWtTWk+Rp319nWT6QHRhEIEcv1AAAAABJRU5ErkJggg=='/%3E%3C/defs%3E%3C/svg%3E%0A"}/>
                            </div>
                            <p className={"icon-text"}>Swell</p>
                        </div>
                    </div>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <i className={"bi bi-moon-stars-fill"}></i>
                            </div>
                            <p className={"icon-text"}>Tide</p>
                        </div>
                    </div>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <i className={"bi bi-cloud-lightning-rain-fill"}></i>
                            </div>
                            <p className={"icon-text"}>Rain impact</p>
                        </div>
                    </div>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <i className={"bi bi-sun-fill"}></i>
                            </div>
                            <p className={"icon-text"}>Temperature</p>
                        </div>
                    </div>
                    <div className={"when-feature-container-card"}>
                        <div className={"when-feature-container-card-icon-details"}>
                            <div className={"icon"}>
                                <i className={"bi bi-droplet-fill"}></i>
                            </div>
                            <p className={"icon-text"}>Water Temperature</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"when-feature-image"}>
                <img src={searchBeachFeatureImage} alt={"when-feature-img"}/>
            </div>
        </div>
    );
};

export default WhenFeatures;