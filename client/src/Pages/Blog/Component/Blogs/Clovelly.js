import React from 'react';
import './Clovelly.css';
import {Link} from "react-router-dom";
import clovellyStoryHeroImg from "../../../../assets/images/Blog/clovellyStoryHeroImg.png";
import clovlleyFishImg from "../../../../assets/images/Blog/clovlleyFishImg.png";
import clovlleyBeachImg from "../../../../assets/images/Blog/clovlleyBeachImg.png";
import clovlleyBeachImg2 from "../../../../assets/images/Blog/clovlleyBeachImg2.png";

const Clovelly = () => {
    return (
        <div id={"clovelly"} className={"clovelly"}>
            <div className={"clovelly-header"}>
                <div className={"clovelly-title"}>
                    <p>Clovelly, the perfect snorkelling spot for beginners.</p>
                </div>
                <div className={"clovelly-story-hero-img"}>
                    <img src={clovellyStoryHeroImg} alt={"clovelly-story-hero-imgs"}/>
                </div>
                <div className={"clovelly-coordinates"}>
                    <p className={"location"}>CLOVELLY BEACH, SYDNEY</p>
                    <p className={"cords"}>-33.91° S, 151.27° E.</p>
                </div>
            </div>
            <div className={"clovelly-text-content"}>
                <div className={"clovelly-text-content-subtext"}>
                    <div className={"clovelly-text-content-subtext-subtitle"}>
                        <p>Protection creates exception visibility</p>
                    </div>
                    <div className={"clovelly-text-content-subtext-describe"}>
                        <p>Clovelly is one of the most protected of all Sydney’s beaches, perfect for snorkelling
                            and especially perfect for beginners. The protection of sea walls outside the pool area,
                            shields it from wave energy, providing exceptional visibility all year round, from 10
                            metres up to 30 metres. The water depth at Clovelly runs in a gradient from 2 to 6
                            metres deep.
                        </p>
                    </div>
                </div>
                <div className={"clovelly-text-content-subtext"}>
                    <div className={"clovelly-text-content-subtext-subtitle"}>
                        <p>Easy to see fish</p>
                    </div>
                    <div className={"clovelly-text-content-subtext-describe"}>
                        <p>The clear, shallow waters and the proximity to the sea, makes it easy to spot the many
                            different types of fish as they swim around you. The pool is a fish nursery, many
                            juvenile varieties of fish swimming are found swimming there. Fish commonly seen at
                            Clovelly include Toadfish, Whiting, Sand Whiting, Blue and Green Gropers, Morwongs and
                            the non-aggressive Port Jackson sharks.
                        </p>
                    </div>
                </div>
                <div className={"clovelly-text-content-img"}>
                    <figure>
                        <img src={clovlleyFishImg} alt={"clovlley-fish-Img-2"}/>
                        <figcaption>Clovelly is famous for its Blue Gropers</figcaption>
                    </figure>
                </div>
                <div className={"clovelly-text-content-subtext"}>
                    <div className={"clovelly-text-content-subtext-subtitle"}>
                        <p>Varieties of fish</p>
                    </div>
                    <div className={"clovelly-text-content-subtext-describe"}>
                        <p>You can find different types of creatures in different parts of the pool. Stingrays dwell
                            on the sandy bottoms while Moray Eels are often spotted within the rocks. Out into the
                            deeper section of the pool, snorkellers can see a vast array of sea creatures swimming by
                            including turtles, octopus and schools of fish such as Trevally, Whiting, Sole, Yellow Tail
                            and Bream.
                        </p>
                    </div>
                </div>
                <div className={"clovelly-text-content-subtext"}>
                    <div className={"clovelly-text-content-subtext-subtitle"}>
                        <p>Sections within the pool</p>
                    </div>
                    <div className={"clovelly-text-content-subtext-describe"}>
                        <p>The north side of the pool is the shallow side. The north side is teeming with life including
                            lobsters, prawns, and fish who live among the rock formations, sea grass and kelp beds.
                            As the pool transitions into deeper sea, the water reaches 8 metres depth. In these deeper
                            waters, snorkellers can explore a Crayweed kelp bed and spot Blue Gropers, Ornate Wobbegong
                            and Giant Cuttlefish. Just outside the bay is a colourful algal garden rich in
                            browns, reds and greens. The algae gardens are home to to sea snails, sea slugs, sea
                            anemones, crabs and starfish. In calm conditions, experienced snorkellers, snorkel
                            around the rock edges towards Gordons Bay.
                        </p>
                    </div>
                </div>
                <div className={"clovelly-text-content-img"}>
                    <figure>
                        <img src={clovlleyBeachImg} alt={"clovlley-beach-Img"}/>
                        <figcaption>Clovelly is a bay, a beach and a pool.</figcaption>
                    </figure>
                </div>
                <div className={"clovelly-text-content-subtext"}>
                    <div className={"clovelly-text-content-subtext-subtitle"}>
                        <p>Learn to ocean swim at Clovelly</p>
                    </div>
                    <div className={"clovelly-text-content-subtext-describe"}>
                        <p>Ocean swimming is a great way to see fish and exercise,. Clovelly is an ideal venue to do
                            both. The rocky shores and sea walls block the huge seas and rips, that can be a hazard at
                            other beaches. The water temperatures drop significantly in July when the colder currents
                            move into the water, but cold is no barrier to the daily swimmers at Clovelly, not is age.
                            The water temperatures drop significantly in July when the colder currents
                            move into the water.Ocean Swimmers at Clovelly are aged from 18 to 85 years, many have been
                            swimming for over 40 years.
                        </p>
                    </div>
                </div>
                <div className={"clovelly-text-content-img"}>
                    <figure>
                        <img src={clovlleyBeachImg2} alt={"clovlley-beach-Img2"}/>
                        <figcaption>Shark Point, Clovelly, a prized scuba diving destination.</figcaption>
                    </figure>
                </div>
                <div className={"clovelly-text-content-subtext"}>
                    <div className={"clovelly-text-content-subtext-subtitle"}>
                        <p>A diver's paradise</p>
                    </div>
                    <div className={"clovelly-text-content-subtext-describe"}>
                        <p>Clovelly pool is a great experience for divers, however their access to the pool is
                            restricted in warmer seasons, when it is reserved for swimmers and snorkellers. Divers
                            instead congregate at Gordons Bay and the star attraction diving location, Shark Point.
                            Shark Point is at the heads of Clovelly Beach and is a spot for only the most
                            experienced of scuba divers, divers take heed, rescues are not uncommon at Shark Point.
                        </p>
                    </div>
                </div>
                <div className={"clovelly-text-content-subtext"}>
                    <div className={"clovelly-text-content-subtext-subtitle"}>
                        <p>Winter swimming</p>
                    </div>
                    <div className={"clovelly-text-content-subtext-describe"}>
                        <p>While water temperatures can drop to 14 degrees Celsius in winter, it can be still warmer
                            than the outdoor air. The more you swim, the better your body is able to regulate its
                            temperature and generate its own internal heat in cooler waters. Regular winters swimmers
                            don’t typically wear a wetsuit in winter, a 3.5mm wetsuit will keep you comfortable in
                            termperatures between 9 to 15 degrees Celcius.
                        </p>
                    </div>
                </div>

                <div className={"clovelly-text-content-links"}>
                    <div>
                        <p>To plan your snorkelling trip at Julian Rocks visit our satellite view.</p>
                        <p><Link to={""}>www.beachcoach.app/clovellys-location</Link></p>
                    </div>
                    <div>
                        <p>We welcome community feedback. Got some stories, updates or images to share with the
                            community, send them to <Link to={"/creator"}>editor@beachcoach.app</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clovelly;