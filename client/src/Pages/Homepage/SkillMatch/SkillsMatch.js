import React from 'react';
import './SkillsMatch.css';
import skillMatchImg from '../../../assets/images/Homepage/skillsMatchImg.png';
import LevelSkills from "./Component/LevelSkills";
import GradientButton from "../../../Components/GradientButton";
import {HashLink} from "react-router-hash-link";

const SkillsMatch = () => {
    return (
        <div id={"skillsMatch"} className={"skillsMatch"}>
            <div className={"skillMatchDiv"}>
                <div className={"skillsMatch-text"}>
                    <div className={"skillsMatch-text-heading"}>
                        <p>MATCH TO YOUR SKILLS</p>
                        <div className={"hr"}></div>
                    </div>
                    <div className={"skillsMatch-text-title"}>
                        <p>Match experience and skills using the Beach Coach app.</p>
                    </div>
                </div>
                <div className={"skillsMatch-image"}>
                    <img src={skillMatchImg} alt={"skills-match-img"}/>
                </div>
                <div className={"skillsMatch-level-skills"}>
                    <LevelSkills/>
                </div>
                <div className={"skillsMatch-button-gradient"}>
                    <HashLink to={"/contact#send-mail"}>
                        <GradientButton className={"skillsMatch-button-gradient-btn"} text={"DOWNLOAD"}
                                        icon={<i className={"bi bi-arrow-up-right"}></i>}/>
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default SkillsMatch;