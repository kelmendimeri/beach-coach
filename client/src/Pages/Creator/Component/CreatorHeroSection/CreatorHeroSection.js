import React from 'react';
import './CreatorHeroSection.css';
import heroSectionImg from '../../../../assets/images/Creator/heroSectionImg.png';

const CreatorHeroSection = () => {
    return (
        <div id={"creator-hero-section"} className={"creator-hero-section"}>
            <div className={"creator-hero-section-img"}>
                <img src={heroSectionImg} alt={"creator-hero-hection-img"}/>
            </div>
            <div className={"creator-hero-section-text"}>
                <p className={"creator-hero-section-text-title"}>Beach Coach creators share their snorkel experiences
                    from
                    all over Australia</p>
                <p className={"creator-hero-section-text-describe"}>In addition to an active community of snorkellers
                    reviewing content, we have a team of content creators, bringing you their snorkelling insights and
                    experiences. Follow creators to keep up with their recent adventures.</p>
            </div>
        </div>
    );
};

export default CreatorHeroSection;