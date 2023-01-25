import React from 'react';
import './CreatorLastPost.css';
import creatorClovellyImg1 from '../../../../../assets/images/Creator/CreatorClovellyImg1.png';
import creatorClovellyImg2 from '../../../../../assets/images/Blog/clovlleyFishImg.png';
import creatorClovellyImg3 from '../../../../../assets/images/Creator/CreatorClovellyImg3.png';
import shellyBeachImg4 from '../../../../../assets/images/Blog/shellyBeachImg4.png';
import shellyBeachImg2 from '../../../../../assets/images/Blog/shellyBeachBlueGroper.png';
import shellyBeachImg3 from '../../../../../assets/images/Blog/shellyBeachSnorkerImg.png';
import gillesRockImg1 from '../../../../../assets/images/Blog/gordonBayGilesBaths.png';
import gillesRockImg2 from '../../../../../assets/images/Blog/gordonsBayImg2.png';
import gillesRockImg3 from '../../../../../assets/images/Blog/gordonsBaySwimming.png';
import offShoreImg1 from '../../../../../assets/images/Blog/creatorStoryHeroImg.png';
import offShoreImg2 from '../../../../../assets/images/Blog/julianRocksFishImg.png';
import offShoreImg3 from '../../../../../assets/images/Blog/julianRockImg3.png';
import {HashLink} from "react-router-hash-link";

const CreatorLastPost = () => {
    return (
        <div id={"creator-last-post"} className={"creator-last-post"}>
            <div className={"creator-last-post-text"}>
                <p className={"creator-last-post-text-title"}>Latest Post</p>
            </div>

            <div className={"creator-last-post-posts"}>
                <HashLink to={"/blog/julianrock"} onClick={()=>{window.scrollTo(0,0)}}>
                    <div className={"creator-last-post-post"}>
                        <div className={"creator-last-post-img"}>
                            <div className={"creator-last-post-img-row"}>
                                <img src={creatorClovellyImg1} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-clovelly-img1"}/>
                                <img src={creatorClovellyImg2} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-clovelly-img2"}/>
                            </div>
                            <img className={"creator-last-post-img-row-main-img"} src={creatorClovellyImg3}
                                 alt={"creator-clovelly-img3"}/>
                        </div>
                        <div className={"creator-last-post-post-describe"}><p>Learn to snorkel at Clovelly</p></div>
                    </div>
                </HashLink>
                <HashLink to={"/blog/shellybeach"} onClick={()=>{window.scrollTo(0,0)}}>
                    <div className={"creator-last-post-post"}>
                        <div className={"creator-last-post-img"}>
                            <div className={"creator-last-post-img-row"}>
                                <img src={shellyBeachImg4} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-shellybeach-img1"}/>
                                <img src={shellyBeachImg2} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-shellybeach-img2"}/>
                            </div>
                            <img className={"creator-last-post-img-row-main-img"} src={shellyBeachImg3}
                                 alt={"creator-shellybeach-img3"}/>
                        </div>
                        <div className={"creator-last-post-post-describe"}><p>Shelly Beach, one of Sydney’s top
                            snorkelling
                            destinations</p></div>
                    </div>
                </HashLink>
                <HashLink to={"/blog/gordonbay"} onClick={()=>{window.scrollTo(0,0)}}>
                    <div className={"creator-last-post-post"}>
                        <div className={"creator-last-post-img"}>
                            <div className={"creator-last-post-img-row"}>
                                <img src={gillesRockImg1} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-gillerock-img1"}/>
                                <img src={gillesRockImg2} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-gillerock-img2"}/>
                            </div>
                            <img src={gillesRockImg3} className={"creator-last-post-img-row-main-img"}
                                 alt={"creator-gillerock-img3"}/>
                        </div>
                        <div className={"creator-last-post-post-describe"}><p>Gordons Bay, Sydney’s hidden snorkelling
                            destination</p></div>
                    </div>
                </HashLink>
                <HashLink to={"/blog/clovelly"}>
                    <div className={"creator-last-post-post"}>
                        <div className={"creator-last-post-img"}>
                            <div className={"creator-last-post-img-row"}>
                                <img src={offShoreImg1} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-offshore-img1"}/>
                                <img src={offShoreImg2} className={"creator-last-post-img-row-secondary-img"}
                                     alt={"creator-offshore-img2"}/>
                            </div>
                            <img src={offShoreImg3} className={"creator-last-post-img-row-main-img"}
                                 alt={"creator-offshore-img3"}/>
                        </div>
                        <div className={"creator-last-post-post-describe"}><p>Julian Rocks snorkelling, where temperate
                            and
                            tropical seas meet.</p>
                        </div>
                    </div>
                </HashLink>
            </div>
        </div>
    );
};

export default CreatorLastPost;