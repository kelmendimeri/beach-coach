import React from 'react';
import './SearchBeachFeature.css';
import searchBeachFeatureImage from '../../../../assets/images/Locations/searchBeachFeatureImage.png';

const SearchBeachFeature = () => {
        return (
            <div id={"search-beach-feature"} className={"search-beach-feature"}>
                <div className={"search-beach-feature-container"}>
                    <div className={"search-beach-feature-container-text"}>
                        <p className={"search-beach-feature-container-text-title"}>Search over 2,500 beaches and snorkelling
                            spots</p>
                        <p className={"search-beach-feature-container-text-describe"}>Search for the right snorkelling
                            location according to the criteria that matters most to you.</p>
                    </div>
                    <div className={"search-beach-feature-container-card-container"}>
                        <div className={"search-beach-feature-container-card"}>
                            <div className={"search-beach-feature-container-card-icon-details"}>
                                <div className={"icon"}>
                                    <i className={"bi bi-star-fill"}></i>
                                    <i className={"bi bi-star-fill"}></i>
                                    <i className={"bi bi-star-fill"}></i>
                                </div>
                                <p className={"icon-text"}>Star ratings</p>
                            </div>
                            <p className={"search-beach-feature-container-card-describe"}>Search by 4 or 5 star ratings</p>
                        </div>
                        <div className={"search-beach-feature-container-card"}>
                            <div className={"search-beach-feature-container-card-icon-details"}>
                                <div className={"icon"}>
                                    <i className={"bi bi-geo-alt-fill"}></i>
                                </div>
                                <p className={"icon-text"}>Location</p>
                            </div>
                            <p className={"search-beach-feature-container-card-describe"}>Search for beaches by post code or
                                latitude and longitude</p>
                        </div>
                        <div className={"search-beach-feature-container-card"}>
                            <div className={"search-beach-feature-container-card-icon-details"}>
                                <div className={"icon"}>
                                    <svg width="43" height="44" viewBox="0 0 43 44" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect y="0.5" width="43" height="43" fill="url(#pattern0)"/>
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_1102_4099" transform="scale(0.0232558)"/>
                                            </pattern>
                                            <image id="image0_1102_4099" width="43" height="43"
                                                   xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXISIgAAAAndFJOUwAECAwQFBggJCgsMDRAUFRgZ3B9f4CLj5Obn6Wnr7u/w8fP19/v96r8T90AAAAJcEhZcwAAFxEAABcRAcom8z8AAAFlSURBVEhL1ZPdUsMgEEaxUqMiMUZrdS2iKfi9/xu6wNI000SvdKbnhl043S4/UWeO1hIo1ci4CIGVlV2xGp3MLdGCjT3CBf+ql7lFBrQ3AO4s/NjOAg2CeseH8rAyc8o1PZc6hI3pbJ96WeINeMyBjtwCEH84hh3wVKIuu5uSzHK7e1lLGFgNh41dyTiiN95tJXbseonVK/aXEgp9abLNybF7xfG9xEL6W6bsfVL3E1/TLkxREXM2cdcPdRtCh1w4pMeQXFfdZsvNDaU1gXiVIXQpc9DiylmXEkKIfZrqQSkbXZtNXshZAS5fgCnK6PZIhePkvm3TgQY0xqRsdLlvdkMoe6506F1ta3TDQMndThqedw0ou7yYF4RZVwdLfJBBD5O3XF1jrfVoMfCYmieYGIpyoLppL5WB5//LtUTk4QMckVxqZs4tH80pf+UGrTXBxsijqIvuMfXizs1t2t+RJ3hGKPUNK59gLIEpWU4AAAAASUVORK5CYII="/>
                                        </defs>
                                    </svg>
                                </div>
                                <p className={"icon-text"}>Skill match</p>
                            </div>
                            <p className={"search-beach-feature-container-card-describe"}>Find spots and beaches that best
                                meet your skill set, beginner, intermediate and advanced</p>
                        </div>
                        <div className={"search-beach-feature-container-card"}>
                            <div className={"search-beach-feature-container-card-icon-details"}>
                                <div className={"icon"}>
                                    <img alt={"icon-tsunali-fill"}
                                         src={"data:image/svg+xml,%3Csvg width='43' height='44' viewBox='0 0 43 44' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect y='0.5' width='43' height='43' fill='url(%23pattern0)'/%3E%3Cdefs%3E%3Cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0_1102_4104' transform='translate(0 -0.0135135) scale(0.027027)'/%3E%3C/pattern%3E%3Cimage id='image0_1102_4104' width='37' height='38' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAMAAAB01KKfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMFRskAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAABcRAAAXEQHKJvM/AAAA8UlEQVQ4T+2Saw6EIAyERUCKPMr9T7sFB4OKe4DNfj8kTCcwtSx/5qgtcik5rNhPMamALz6CpWEh3tlRBxryFYdqh2eXbihWojYuF4fKwCq9dXwVVMqtMKIiHAKrJtnyuNLDUQnQ8r3NMdTrP9BDqFeXuZhmvQk3U2HoVzKqJ9MrH67pcJ4u3lAaeLpkRkY6t7S789iZS8Bb673kwvEYEMejlLCta3dtug7OkqursmTrLXpzpsmTiF/Qbk9ZchqKHLxdLSUOZLT1TYbrJT0403Mkqnll9TV+ChRkapy8yN21Hq/O4OwWWtTWk+Rp319nWT6QHRhEIEcv1AAAAABJRU5ErkJggg=='/%3E%3C/defs%3E%3C/svg%3E%0A"}/>
                                </div>
                                <p className={"icon-text"}>Natural features</p>
                            </div>
                            <p className={"search-beach-feature-container-card-describe"}>Choose by rock pools, bays,
                                beaches, rock platforms, islands</p>
                        </div>
                        <div className={"search-beach-feature-container-card"}>
                            <div className={"search-beach-feature-container-card-icon-details"}>
                                <div className={"icon"}>
                                    <div className={"favourites-icon"}>
                                        <i className={"bi bi-star-fill"}></i>
                                    </div>
                                </div>
                                <p className={"icon-text"}>Favourites</p>
                            </div>
                            <p className={"search-beach-feature-container-card-describe"}>Search by beaches marked as
                                favourites</p>
                        </div>
                    </div>
                </div>
                <div className={"search-beach-feature-image"}>
                    <img src={searchBeachFeatureImage} alt={"search-beach-feature-img"}/>
                </div>
            </div>
        );
    }
;

export default SearchBeachFeature;