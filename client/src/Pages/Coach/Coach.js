import React from 'react';
import CoachBanner from "./Component/Banner/CoachBanner";
import CoachVideo from "./Component/CoachVideo/CoachVideo";
import Subscribe from "../../Components/Subscribe/Subscribe";
import CoachSkillSnorkel from "./Component/CoachSkillSnorkel/CoachSkillSnorkel";
import UpCommingCourse from "./Component/UpCommingCourse/UpCommingCourse";
import CoachCourseTimeline from "./Component/Timeline/CoachCourseTimeline";

const Coach = () => {
    return (
        <div id={"coach"} className={"coach"}>
            <CoachBanner/>
            <CoachVideo/>
            <CoachSkillSnorkel/>
            <Subscribe title={"FOLLOW OUR COURSES"}
                       describe={"Sign up to get Beach Coach latest course releases."}/>
            <UpCommingCourse/>
            <CoachCourseTimeline/>
        </div>
    );
};

export default Coach;