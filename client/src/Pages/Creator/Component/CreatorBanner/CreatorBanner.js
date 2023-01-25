import React from 'react';
import './CreatorBanner.css';
import creatorBannerImg from '../../../../assets/images/Creator/creatorBannerImg.png';

const CreatorBanner = () => {
    return (
        <div id={"creator-banner"} className={"creator-banner"}>
            <div className={"creator-banner-text"}>
                <p className={"creator-banner-text-title"}>Snorkel Australia stories, experiences and reviews</p>
                <p className={"creator-banner-text-describe"}>Follow master snorkellers. Follow your favourite beach. Share snorkel adventures.</p>
            </div>
            <div className={"creator-banner-img"}>
                <img src={creatorBannerImg} alt={"creator-baner-img"}/>
            </div>
        </div>
    );
};

export default CreatorBanner;