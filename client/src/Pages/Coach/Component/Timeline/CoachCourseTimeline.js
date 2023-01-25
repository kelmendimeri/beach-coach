import React from 'react';
import './CoachCourseTimeline.css';

const CoachCourseTimeline = () => {

    return (
        <div id={"coach-course-timeline"} className={"coach-course-timeline"}>
            <div className={"coach-course-timeline-text"}>
                <p className={"coach-course-timeline-text-title"}>Course release dates</p>
            </div>
            <div className={"timeline-container"}>
                <div className={"event active"}>
                    <div className={"event-date active"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Early</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Snorkel safety</h2>
                        <p className={"event-content-describe"}>A beginners guide to snorkel safety</p>
                    </div>
                </div>
                <div className={"event active"}>
                    <div className={"event-date active"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Early</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Boat snorkels</h2>
                        <p className={"event-content-describe"}>A master class to boat snorkels</p>
                    </div>
                </div>

                <div className={"event inactive"}>
                    <div className={"event-date inactive"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Mid</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Snorkel spots</h2>
                        <p className={"event-content-describe"}>How to pick the ideal spot</p>
                    </div>
                </div>
                <div className={"event inactive"}>
                    <div className={"event-date inactive"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Mid</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Snorkel gear</h2>
                        <p className={"event-content-describe"}>What you will need to snorkel in comfort</p>
                    </div>
                </div>
                <div className={"event inactive"}>
                    <div className={"event-date inactive"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Mid</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Snorkel kayak</h2>
                        <p className={"event-content-describe"}>How to plan your sea kayaking and snorkel
                            expeditions</p>
                    </div>
                </div>
                <div className={"event inactive"}>
                    <div className={"event-date inactive"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Mid</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Snorkel wrecks</h2>
                        <p className={"event-content-describe"}>How to plan your sea kayaking and snorkel
                            expeditions</p>
                    </div>
                </div>
                <div className={"event inactive"}>
                    <div className={"event-date inactive"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Mid</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Snorkel kelp</h2>
                        <p className={"event-content-describe"}>Snorkeler’s guide to Kelp forests</p>
                    </div>
                </div>
                <div className={"event inactive"}>
                    <div className={"event-date inactive"}>
                        <span className={"year"}>2023</span>
                        <span className={"month"}>Mid</span>
                    </div>
                    <div className={"event-content"}>
                        <h2 className={"event-content-title"}>Snorkel winter</h2>
                        <p className={"event-content-describe"}>How to keep snorkeling comfortably in winter</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoachCourseTimeline;