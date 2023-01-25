import React from 'react';
import './UpCommingCourse.css';
import snorkelSaftelyCourseImg from '../../../../assets/images/Coach/snorkelSaftelyCourseImg.png';
import snorkelSpotCourseImg from '../../../../assets/images/Coach/snorkelSpotCourseImg.png';
import snorkelGearCourseImg from '../../../../assets/images/Coach/snorkelGearCourseImg.png';
import snorkelKayakCourseImg from '../../../../assets/images/Coach/snorkelKayakCourseImg.png';
import boarSnorkelCourseImg from '../../../../assets/images/Coach/boarSnorkelCourseImg.png';
import snorkelWreckCourseImg from '../../../../assets/images/Coach/snorkelShipWreckCourseImg.png';
import snorkelKelpCourseImg from '../../../../assets/images/Coach/snorkelKelpCourseImg.png';
import snorkelWinterCourseImg from '../../../../assets/images/Coach/snorkelWinterCourseImg.png';

const UpCommingCourse = () => {
    return (
        <div id={"up-comming-course"} className={"up-comming-course"}>
            <div className={"up-comming-course-text"}>
                <p className={"up-comming-course-text-title"}>Upcoming coaching programs</p>
            </div>
            <div className={"up-comming-course-list"}>
                <div className={"up-comming-course-list-row"}>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={snorkelSaftelyCourseImg} alt={"snorkel-safety-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Snorkel safety</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>01</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                A beginners guide to snorkel safety
                            </p>
                        </div>
                    </div>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={snorkelSpotCourseImg} alt={"snorkel-spot-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Snorkel spots</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>02</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                How to pick the ideal spot
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"up-comming-course-list-row"}>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={snorkelGearCourseImg} alt={"snorkel-gear-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Snorkel gear</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>03</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                What you will need to snorkel in comfort
                            </p>
                        </div>
                    </div>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={snorkelKayakCourseImg} alt={"snorkel-kayak-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Snorkel kayak</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>04</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                How to plan your sea kayaking and snorkel expeditions
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"up-comming-course-list-row"}>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={boarSnorkelCourseImg} alt={"boat-snorkel-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Boat snorkels</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>05</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                A master class to boat snorkels
                            </p>
                        </div>
                    </div>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={snorkelWreckCourseImg} alt={"snorkel-wreck-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Snorkel shipwreck</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>06</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                A guide to the best wreck snorkels
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"up-comming-course-list-row"}>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={snorkelKelpCourseImg} alt={"snorkel-kelp-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Snorkel kelp</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>07</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                Snorkeler’s guide to Kelp forests
                            </p>
                        </div>
                    </div>
                    <div className={"up-comming-couse-list-course"}>
                        <img src={snorkelWinterCourseImg} alt={"snorkel-winter-up-comming-course-img"}/>
                        <div className={"up-comming-couse-list-course-text"}>
                            <div className={"up-comming-course-list-text-details"}>
                                <p className={"up-comming-course-list-details-text-name"}>Snorkel winter</p>
                                <div className={"hr"}></div>
                                <p className={"up-comming-course-list-details-text-number"}>08</p>
                            </div>
                            <p className={"up-comming-course-list-text-description"}>
                                How to keep snorkelling comfortably in winter
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpCommingCourse;