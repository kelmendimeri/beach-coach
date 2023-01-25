import React from 'react';
import './LevelSkills.css'

const LevelSkills = () => {
    return (
        <div id={"level-skills"} className={"level-skills"}>
            <div className={"level-skills-row"}>
                <div className={"level-skills-begginer"}>
                    <p className={"level-skills-number"}>01</p>
                    <p className={"level-skills-describe"}>Beginner experiences and tips</p>
                </div>
                <div className={"level-skills-advanced"}>
                    <p className={"level-skills-number"}>03</p>
                    <p className={"level-skills-describe"}>Advanced level experiences and tips</p>
                </div>
            </div>
            <div className={"level-skills-row"}>
                <div className={"level-skills-intermediate"}>
                    <p className={"level-skills-number"}>02</p>
                    <p className={"level-skills-describe"}>Intermediate experiences and tips</p>
                </div>
                <div className={"level-skills-custom"}>
                    <p className={"level-skills-number"}>04</p>
                    <p className={"level-skills-describe"}>Kayak snorkel experiences and tips</p>
                </div>
            </div>
        </div>
    );
}

export default LevelSkills;