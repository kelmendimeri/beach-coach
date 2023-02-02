import React from 'react';
import './ShellyBeach.css';
import shellyBeachSnorkerImg from "../../../../assets/images/Blog/shellyBeachSnorkerImg.png";
import {Link} from "react-router-dom";
import shellyBeachImg2 from "../../../../assets/images/Blog/shellyBeachImg2.png";
import shellyBeachBlueGroper from "../../../../assets/images/Blog/shellyBeachBlueGroper.png";
import shellyBeachImg3 from "../../../../assets/images/Blog/shellyBeachImg3.png";
import shellyBeachImg4 from "../../../../assets/images/Blog/shellyBeachImg4.png";

const ShellyBeach = () => {
    return (
        <div className={"shelly-beach"} id={"shelly-beach"}>
            <div className={"shelly-beach-header"}>
                <div className={"shelly-beach-title"}>
                    <p>Shelly Beach, one of Sydney’s top snorkelling destinations</p>
                </div>
                <div className={"shelly-beach-story-hero-img"}>
                    <img src={shellyBeachSnorkerImg} alt={"shelly-beach-snorkel-imgs"}/>
                </div>
                <div className={"shelly-beach-coordinates"}>
                    <p className={"location"}>SHELLY BEACH, MANLY</p>
                    <p className={"cords"}>-33.8003° S, 151.2833° E.</p>
                </div>
            </div>
            <div className={"shelly-beach-text-content"}>
                <div className={"shelly-beach-text-content-paragraph"}>
                    <p>Shelly Beach, Manly, is a bucket list snorkelling destination, rich in sea life and pristine
                        clear water. A temperate and sub-tropical environment, Shelly Beach is rated as one of the
                        top
                        snorkelling locations south of the Great Barrier Reef.</p>
                    <p>Shelly Beach’s outstanding snorkelling is due to its high-level of protection. The key
                        factors
                        protecting Shelly Beach are:</p>
                    <div className={"shelly-beach-text-content-paragraph-list"}>
                        <ul>
                            <li>a west facing beach, not impacted by onshore winds</li>
                            <li>its position, safely nestled within Cabbage Tree Bay</li>
                            <li>a ‘no take’ marine park status which protects sea life and</li>
                            <li>protection from big waves due to Fairy Bower’s surf break</li>
                        </ul>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-img"}>
                    <figure>
                        <img src={shellyBeachImg2} alt={"shelly-beach-img-2"}/>
                        <figcaption>Shelly Beach, is a protected marine reserve.</figcaption>
                    </figure>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>A west facing beach</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>Shelly Beach is one of a handful of beaches on the east coast of Australia which face
                            west.
                            As a west facing beach it is only impacted by westerly and north westerly winds, which
                            means
                            there is minimal interference on local sea life.
                        </p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>Cabbage Tree Bay</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>Cabbage Tree Bay is north facing and contains two beaches, the north facing beach known as
                            Halfway Beach and Shelly beach which faces west. Snuggled inside of Cabbage Tree Bay,
                            Shelly Beach has little exposure to high seas and storms, which carry fish habitats out to
                            sea.</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>Fairy Bower surf break</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>Fairy Bower surf break protects Shelly Beach from the impact of big ocean swells. At this
                            break, Cabbage Bay’s calm waters shift to deeper sea life. Fairy Bower, a prime surfing
                            destination, is rated 17 out 200 top Australian surf spots and was declared a world
                            surfing reserve in 2011 for its outstanding value as a surfing destination. Fairy Bower is
                            one of four surf breaks which wrap around the point, under the right conditions, all four
                            can be surfed as one. The 4 breaks extend from Deadman’s break to Winkipop, at the point,
                            and finishes at the Fairy Bower rock pool.</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>When snorkellers swim over the Fairy Bower break into deeper waters, they can see tribes
                            of
                            fish such as Trevally. Trevally often put on an impressive display, massing into schools
                            of
                            up to 5,000 fish, all swimming in synchronicity, on a high-speed hunting run. Other fish
                            common over the Bower includes King fish, Australian Tuna and Australian Salmon. </p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>As you snorkel out from Shelly beach into open water, you can also see an abundance of
                            seagrass such as Paddle weed, big rays and bigger, non-aggressive sharks. These sharks
                            hang at the point on south end round to Shelly’s rocky crags. The local sharks include the
                            non-aggressive Wobbegong the non-aggressive Dusty Whalers, which have no teeth. The
                            Dusty Whaler reaches up to 4 to 5 foot long and swims with babies in winter. The non-
                            aggressive Port Jacksons and Grey Nurses, which are winter sharks, come in when the water is
                            colder. In addition to sharks, you can spot the occasional whale when you snorkel out past
                            the Bower</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-img"}>
                    <figure>
                        <img src={shellyBeachBlueGroper} alt={"shelly-beach-blue-groper-img"}/>
                    </figure>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>Fairy Bower Rock Platform</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>A tidal rock pool, known as the Fairy Bower, is located at Cabbage Tree Bay‘s north
                            facing,
                            Halfway beach. Built in 1929, the rock pool is next to a tidal rock platform, which
                            offers
                            one of the best snorkelling experiences in the area. High tide is best time to snorkel
                            the
                            rock platform, as the higher water line makes gives snorkellers enough elevation to move
                            freely over the platform. The Fairy Bower rock platform is home to 50 invertebrate
                            species
                            including; Eastern Rock Lobsters, Abalones, and Sea Urchins. Blackfish, Drummer, Giant
                            cuttle fish and Blue Gropers are also found at the Fairy Bower Rock Platform.</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtitle"}>
                    <p>Cabbage Tree Bay Aquatic Reserve</p>
                </div>
                <div className={"shelly-beach-text-content-img"}>
                    <figure>
                        <img src={shellyBeachImg3} alt={"shelly-beach-img-3"}/>
                        <figcaption className={"copyright"}><i className={"bi bi-c-circle"}></i>
                            Copyright Beach Coach App 2023
                        </figcaption>
                    </figure>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>Cabbage Tree Bay Aquatic Reserve</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>In 2002, Cabbage Tree Bay was declared a ‘no take’ marine park, which included a ban
                            on
                            fishing and any collection of any marine life, such as empty shells. The park, which
                            covers
                            20 hectares, conserves the area’s natural habitat, home to over 160 known species of
                            fish
                            which include Blue Gropers, Crimson Banded Wrasse, Orange Banded Wrasse, Black Cod,
                            Common
                            Water Dragons, Yellow-fin Bream, Mullet, Luderick and Giant Cuttle Fish. </p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>Snorkelling conditions</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>The calm and clear waters of Shelly Beach range from 2 metres to 12 metres in depth and reach
                            temperatures of 23 degrees Celsius in summer, down to 14 degrees in winter. Winter
                            is the ideal snorkel season, when clear water provides the greatest visibility, reaching up
                            to 15 metres in ideal conditions. In summer, when an easterly swell churns up cloudy water,
                            visibility can be reduced to 0.5 metres.</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-img"}>
                    <figure>
                        <img src={shellyBeachImg4} alt={"shelly-beach-blue-groper-img"}/>
                        <figcaption>Shelly beach is in a pristine state due to its ‘no take’ marine park policy.
                        </figcaption>
                    </figure>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>Ocean swimming</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>Every morning, the world famous, free to join, Bold and Beautiful swim club, swim the
                            Manly to Shelly, 1.5 km there and back, swim route. The club has 18,000 registered members
                            and 1500 active members, many of whom are daily swimmers. The Bold and Beautiful swimmers
                            are
                            well acquainted with the endemic sea life and the occasional visitors that swim in with
                            currents or seasonal migration. Many of the Bold and Beautiful swimmers, freedive while on
                            route, for up-close encounters in the under-water world below.</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-subtitle"}>
                        <p>Visiting sea life</p>
                    </div>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>Shelly Beach is a popular destination for visiting sea life, with more exotic fish
                            from
                            faraway places such as Africa, coming in from time to time, and regular annual
                            visitors
                            such
                            as; Blue Bottles, pink jelly fish and Salp.</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>Blue bottles drift into Shelly on the north easterly winds. They spawn in the coral
                            sea near Fiji, not far from Australian waters. Swimmers keep clear the water when blue
                            bottles arrive to avoid their sting, but for the local turtles, they are a welcomed feast.
                        </p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>The beautiful pink jelly fish, known as the Jimble, puts on a spectacular performance
                            during its annual visit. As it swims, the Jimble moves it 4 tentacles, in what appears to
                            be an elegant dance in the water. Curious by nature, the Jimble will approach snorkellers,
                            who can easily shoo them away. The Jimble only visits in Winter, swimming over sand, so if
                            you snorkel over the rocky platform, you will miss them.</p>
                    </div>
                </div>
                <div className={"shelly-beach-text-content-subtext"}>
                    <div className={"shelly-beach-text-content-subtext-describe"}>
                        <p>In certain currents and swells, Salp, a harmless to humans, semitransparent marine animal,
                            floats in. Many snorkellers find Salp an enjoyable experience, like swimming in pulsating
                            sago or marshmallow. Salp lives in all layers of the sea and feds on plankton and algae.
                            Salp can grow rapidly in length and will increases its population size dramatically
                            when
                            there is an abundance of food.</p>
                    </div>
                </div>

                <div className={"shelly-beach-text-content-links"}>
                    <div>
                        <p>To plan your snorkelling trip at Shelly Beach visit our satellite view.</p>
                        <p><Link to={""}>www.beachcoach.app/shelly-beach-location</Link></p>
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

export default ShellyBeach;