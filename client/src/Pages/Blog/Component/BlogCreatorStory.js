import React, {useState} from 'react';
import './BlogCreatorStory.css';
import Modal from 'react-modal';
import {HashLink} from "react-router-hash-link";
import julianRockImg3 from "../../../assets/images/Blog/julianRockImg3.png";
import julianRocksImg2 from "../../../assets/images/Blog/julianRocksImg2.png";
import creatorStoryHeroImg from "../../../assets/images/Blog/creatorStoryHeroImg.png";
import shellyBeachSnorkerImg from "../../../assets/images/Blog/shellyBeachSnorkerImg.png";
import shellyBeachImg4 from "../../../assets/images/Blog/shellyBeachImg4.png";
import shellyBeachBlueGroper from "../../../assets/images/Blog/shellyBeachBlueGroper.png";
import gordonsBaySwimming from "../../../assets/images/Blog/gordonsBaySwimming.png";
import gordonsBayImg2 from "../../../assets/images/Blog/gordonsBayImg2.png";
import gordonsBayGilesBathsImg2 from "../../../assets/images/Blog/gordonsBayGilesBathsImg2.png";
import clovellyStoryHeroImg from "../../../assets/images/Blog/clovellyStoryHeroImg.png";
import clovlleyFishImg from "../../../assets/images/Blog/clovlleyFishImg.png";
import clovlleyBeachImg from "../../../assets/images/Blog/clovlleyBeachImg.png";

const BlogCreatorStory = () => {
    const [sideBar, setSideBar] = useState(false);

    const onRequestClose = () => {
        setSideBar(false);
    }

    return (
        <div id={"blog-example"} className={"blog-example"}>
            {sideBar === false ? (
                <>
                    <div className={"blog-example-nav-open"} onClick={() => {
                        setSideBar(true)
                    }}>
                        <button className={"blog-example-nav-open-btn"}>
                            <i className={"bi bi-list"}></i>
                        </button>
                    </div>
                    <div className={"blog-example-scroll"}>
                        <div className={"blog-example-scroll-title"}>
                            <p>Beach Coach APP</p>
                            <div className={"hr"}></div>
                        </div>
                        <div className={"blog-example-scroll-blogs-title"}><p>LATEST POSTS</p></div>
                        <div className={"blog-example-scroll-blogs-list"}>
                            <div className={"blog-example-scroll-blogs-blog"}>
                                <HashLink to={"/blog/julianrock"} className={"blog-example-hashlink"}>
                                    <div className={"blog-pictures"}>
                                        <div className={"blog-pictures-small"}>
                                            <img src={julianRockImg3} alt={"julian-rock-img-3"}/>
                                            <img src={julianRocksImg2} alt={"julian-rock-img-2"}/>
                                        </div>
                                        <div className={"blog-pictures-big"}>
                                            <img src={creatorStoryHeroImg} alt={"creator-story-hero-img"}/>
                                        </div>
                                    </div>
                                    <div className={"blog-title"}>Julian Rock</div>
                                </HashLink>
                            </div>
                            <div className={"blog-example-scroll-blogs-blog"}>
                                <HashLink to={"/blog/shellybeach"} className={"blog-example-hashlink"}>
                                    <div className={"blog-pictures"}>
                                        <div className={"blog-pictures-small"}>
                                            <img src={shellyBeachSnorkerImg} alt={"julian-rock-img-3"}/>
                                            <img src={shellyBeachImg4} alt={"julian-rock-img-2"}/>
                                        </div>
                                        <div className={"blog-pictures-big"}>
                                            <img src={shellyBeachBlueGroper} alt={"creator-story-hero-img"}/>
                                        </div>
                                    </div>
                                    <div className={"blog-title"}>Shelly Beach</div>
                                </HashLink>
                            </div>

                            <div className={"blog-example-scroll-blogs-blog"}>
                                <HashLink to={"/blog/gordonbay"} className={"blog-example-hashlink"}>
                                    <div className={"blog-pictures"}>
                                        <div className={"blog-pictures-small"}>
                                            <img src={gordonsBayImg2} alt={"julian-rock-img-3"}/>
                                            <img src={gordonsBaySwimming} alt={"julian-rock-img-2"}/>
                                        </div>
                                        <div className={"blog-pictures-big"}>
                                            <img src={gordonsBayGilesBathsImg2} alt={"creator-story-hero-img"}/>
                                        </div>
                                    </div>
                                    <div className={"blog-title"}>Gordons Bay</div>
                                </HashLink>
                            </div>
                            <div className={"blog-example-scroll-blogs-blog"}>
                                <HashLink to={"/blog/clovelly"} className={"blog-example-hashlink"}>
                                    <div className={"blog-pictures"}>
                                        <div className={"blog-pictures-small"}>
                                            <img src={clovellyStoryHeroImg} alt={"julian-rock-img-3"}/>
                                            <img src={clovlleyFishImg} alt={"julian-rock-img-2"}/>
                                        </div>
                                        <div className={"blog-pictures-big"}>
                                            <img src={clovlleyBeachImg} alt={"creator-story-hero-img"}/>
                                        </div>
                                    </div>
                                    <div className={"blog-title"}>Clovelly Bay</div>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </>
            ) : <Modal
                isOpen={sideBar}
                onRequestClose={onRequestClose}
                contentLabel="Blog Nav Modal"
                className={"blog-example-nav-modal"}
                ariaHideApp={false}
                appElement={document.getElementById('root')}
            >
                <i className={"bi bi-x"} onClick={() => {
                    setSideBar(false)
                }}></i>

                <ul>
                    <li className={"blog-example-nav-modal-title"}><HashLink to={"/blog"} onClick={() => {
                        setSideBar(false)
                    }}>All Featured Spots</HashLink>
                    </li>
                    <li>
                        <HashLink to={"/blog/julianrock"} onClick={() => {
                            setSideBar(false);
                        }}><span>Julian Rocks</span></HashLink>
                    </li>
                    <li>
                        <HashLink onClick={() => {
                            setSideBar(false);
                        }} to={"/blog/shellybeach"}><span>Shelly Beach</span></HashLink>
                    </li>
                    <li>
                        <HashLink onClick={() => {
                            setSideBar(false);
                        }} to={"/blog/gordonbay"}><span>Gordon’s Bay</span></HashLink>
                    </li>
                    <li>
                        <HashLink onClick={() => {
                            setSideBar(false);
                        }} to={"/blog/clovelly"}><span>Clovelly’s Bay</span></HashLink>
                    </li>
                </ul>
            </Modal>}
        </div>
    );
};

export default BlogCreatorStory;