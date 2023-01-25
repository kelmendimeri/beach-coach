import React from 'react';
import './JulianRock.css';
import creatorStoryHeroImg from "../../../../assets/images/Blog/creatorStoryHeroImg.png";
import julianRocksFishImg from "../../../../assets/images/Blog/julianRocksFishImg.png";
import julianRocksImg2 from "../../../../assets/images/Blog/julianRocksImg2.png";
import julianRocksMap from "../../../../assets/images/Blog/julianRocksMap.png";
import julianRockImg3 from "../../../../assets/images/Blog/julianRockImg3.png";
import julianRocksCalendar from "../../../../assets/images/Blog/julianRockCalendar.png";
import julianRocksStingFish from "../../../../assets/images/Blog/julianRocksStingFish.png";
import {Link} from "react-router-dom";

const JulianRock = () => {
    return (
        <div id={"julian-rock"} className={"julian-rock"}>
            <div className={"julian-rock-header"}>
                <div className={"julian-rock-title"}>
                    <p>Julian Rocks snorkelling, where temperate and tropical seas meet.</p>
                </div>
                <div className={"julian-rock-story-hero-img"}>
                    <img src={creatorStoryHeroImg} alt={"creator-story-banner-img"}/>
                </div>
                <div className={"julian-rock-coordinates"}>
                    <p className={"location"}>JULIAN ROCKS, BYRON BAY</p>
                    <p className={"cords"}>153.5980° E, 28.6500° S.</p>
                </div>
            </div>
            <div className={"julian-rock-text-content"}>
                <div className={"julian-rock-text-content-paragraph"}>
                    <p>Considered one of Australia’s top snorkelling spots on par with the Great Barrier Reef,
                        Julian Rocks, a rocky outcrop, is situated 3 kilometres offshore from Byron Bay. It is a
                        colourful and diverse marine paradise.</p>
                    <p>Fast moving clouds and ribbons of fish, envelope the snorkeller in numbers impossible to
                        count. With teaming fish, streaming in all directions, snorkellers experience a vast
                        kaleidoscope of species and colours.</p>
                    <p>Fast moving clouds and ribbons of fish, envelope the snorkeller in numbers impossible to
                        count. With teaming fish, streaming in all directions, snorkellers experience a vast
                        kaleidoscope of species and colours.</p>
                    <p>Julian Rocks is comprised of two small granite islands, created from a volcanic eruption 20
                        million years ago. The rocks above are barren, except for the rookeries of giant seabirds,
                        while underneath lurks an amazing underwater world.</p>
                    <p>The underwater landscape of pinnacles, caves, trenches, and boulders are covered with a
                        colourful display of plant life including corals, such as the prized black coral, sea
                        anemones and sponges, all food for the abundant sea life.</p>
                </div>
                <div className={"julian-rock-text-content-img"}>
                    <img src={julianRocksFishImg} alt={"Julian-Rocks-Fish-Img"}/>
                </div>

                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>A sanctuary for endangered species</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Located in a 4,000-hectare reserve, Julian Rocks is home to over 500 species, 70 per cent
                            of which are tropical. Julian Rocks is a sanctuary for protected and endangered species
                            including the non-aggressive Grey Nurse Shark, Estuary Cod and Queensland Groper. The
                            sanctuary covers a 1500 metre radius from the rocks for most of the year, providing
                            enough time for fish populations to replenish.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Where two seas meetspecies</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>The outstanding beauty and biological diversity of Julian Rocks is born from its unique
                            position on the nexus of two seas, the Coral Sea of the north and the Tasman Sea of the
                            south. The interface of these two seas, represents the overlap of two marine ecologies:
                            tropical and temperate. Unlike coral sea fish populations, which remain static, the
                            changing currents of these different seas, bring in a vast array of different seasonal
                            fish throughout the year.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Snorkelling conditions</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Water temperatures range at Julian Rocks range from 18 degrees to a cosy 22 degrees
                            Celsius. Julian Rocks’ sheltered location provides excellent visibility, which ranges
                            from 5 to 30 metres.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-img"}>
                    <img src={julianRocksImg2} alt={"Julian-Rocks-Img-2"}/>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Getting to Julian Rocks</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>There are two ways people access Julian Rocks, a 10-minute boat trip or a
                            20-to-40-minute paddle for very experienced surf skiers or kayakers. Paddling to Julian
                            Rocks is only recommended for highly experienced paddlers who are fully versed in local
                            safety precautions.</p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Prime snorkelling spots at Julian Rocks</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Different areas of Julian Rocks attract different species of sea life, areas popular with
                            snorkellers include: </p>
                        <div className={"julian-rock-text-content-subtext-describe-table-and-img"}>
                            <div className={"julian-rock-text-content-subtext-describe-img"}>
                                <img src={julianRocksMap} className={"julian-rock-text-img-map"}
                                     alt={"Julian-Rocks-Img-2"}/>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Snorkelling spot</th>
                                    <th>Fish</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Julian Rocks reef</td>
                                    <td>Rays, Giant Cuttle Fish, Lionfish</td>
                                </tr>
                                <tr>
                                    <td>The Nursery</td>
                                    <td>Rainbow Parrot fish, Sea Anemones and Clown Fish, Silver Snapper, Lionfish
                                    </td>
                                </tr>
                                <tr>
                                    <td>The Needles</td>
                                    <td>Crayfish, Moray Ells, Black corals, Nudibranch and Leopard sharks</td>
                                </tr>
                                <tr>
                                    <td>Hugo’s Trench</td>
                                    <td>Turtles, Wobbegongs</td>
                                </tr>
                                <tr>
                                    <td>Cod Hole</td>
                                    <td>Grey Nurse sharks, Blue Gropers</td>
                                </tr>
                                <tr>
                                    <td>Cray Cave</td>
                                    <td>Turtles, Grey Nurse Sharks, Cod</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={"julian-rock-text-content-img"}>
                    <img src={julianRockImg3} alt={"Julian-Rocks-Img-3"}/>
                </div>

                <div className={"julian-rock-text-content-subtitle"}>
                    <p>The changing seasonal experiences at Julian Rocks</p>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Swim with the turtles</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Snorkellers will see 3 types of turtles all year round at Julian Rocks; the vulnerable
                            Green and Hawksbill turtles and the endangered Loggerhead turtle. As reptiles, turtles
                            hold their breath to dive and come up for air, making them easy to spot in the water.
                            Turtles are not shy, so snorkellers often swim with them in close range.
                        </p><br/>
                        <p>The Green turtle are herbivores and feed on sea grasses, the Hawkebill turtle feeds on
                            sea squirts and anemones, while the giant Loggerhead turtles feed on molluscs and crabs.
                            The giant Loggerhead turtles have a lifespan of up to 50 years, reaching up to 100
                            kilograms.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Spot the Wobbegong sharks</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>The Wobbegong are placid, non-aggressive sharks who can be found resting motionless at
                            the bottom of the ocean, often seen stacked on top of each other. The most frequently
                            spotted variety is the Dwarf Ornate Wobbegong, with a body length of up to 3 metres,
                            other Wobbegongs at Julian Rocks include the Spotted, Ornate and Banded Wobbegong.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Giant Cuttlefish’s disappearing act</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Snorkellers can find the Giant Cuttlefish, hovering in pairs, just above the ocean floor.
                            If you are lucky eough, you may catch them as they ‘disappear’. As masters of disguise,
                            Giant Cuttlefish change colour when threatened, to camouflage themselves against the
                            environment.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Swarms of hunting fish</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Hunting fish, known as Pelagics, are attracted to the abundant food sources at Julian
                            Rocks. These include the Yellow Tail Kingfish, Mulloway and Trevally. Big Eye, Golden
                            and Blue Fin Trevally, can be seen swarming in schools at Julian Rocks, seeking food.
                        </p>
                    </div>
                </div>

                <div className={"julian-rock-text-content-subtitle"}>
                    <p>The calendar of visiting fish at Julian Rocks </p>
                </div>
                <div className={"julian-rock-text-content-img"}>
                    <img src={julianRocksCalendar} alt={"Julian-Rocks-Img-3"}/>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Grey Nurse Sharks = May to November</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>The placid non-aggressive, Grey Nurse Sharks are safe to snorkel alongside. Growing up to
                            3.2 metres, they feed at night on fish, squid and crustaceans. Sadly, because of their
                            fearsome looks, these sharks were hunted as man eaters, almost to the point of
                            extinction. Julian Rocks is a critical sanctuary for the recovery of this endangered
                            population. Grey Nurse Sharks like deeper waters of about 20 metres and are found on the
                            north side of Julian Rocks.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Humpback whales - May to September</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Humpback whales were hunted to near extinction, but today populations are estimated to
                            have reached 20,000. Humpback whales pass Julian Rocks on their annual migratory journey
                            from the Antarctic to the subtropics.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Tropical species - October to November</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Warmer weather brings tropical fish to Julian Rocks who inhabit the coral outcrops.
                            Snorkellers will find anemone fish including the Barrier Reef Anemonefish, Blue-lip
                            Anemonefish immersed in the anemone. Butterfly fish, such as the Dusky Butterflyfish and
                            Half-circled Angelfish, Blue Tang Surgeonfish are often seen feeding amongst the coral
                            polyps. Other fish regularly seen in the warmer water include; Headband Humbugs,
                            Threadfin and Vagabond.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Leopard Sharks - December to May</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Julian Rocks is renowned as one of the world’s largest populations of endangered Leopard
                            Sharks. Leopard Sharks arrive at Julian Rocks, just as the water temperature reaches a
                            peak in January, staying until May, when waters begin to cool. At 2.5 metres long the
                            shark is easily identified by the snorkellers by its leopard-like spots. The Leopard
                            Shark can be found lying in groups on the sandy floor. As these sharks are harmless,
                            snorkellers can swim safely amongst them.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Manta Rays - December to May</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Manta Rays have a huge wingspan of up to 7 metres and are gentle giants, who do not have
                            a stinging barb. They feed on zooplankton, and due to their large brain are highly
                            intelligent and regularly engage with snorkellers. Despite their friendly nature, be
                            sure not to touch a Manta Ray, as doing so can make them suspectable to infection. Manta
                            Rays are classified as a vulnerable species.
                        </p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-img"}>
                    <img src={julianRocksStingFish} alt={"julian-rocks-sting-fish"}/>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Stingrays - December to May</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>Julian Rocks attracts several types of stingrays most notably, the Black Stingrays, Blue
                            Spotted Stingray, Cowtail Stingray and the Smooth Stingray. With wingspans of 2 metres,
                            stingrays are a sight to behold, especially when spotted swimming in formation. White
                            Spotted Eagle Rays are stingrays known to grow up to 8.8m in depth. Despite having a
                            venomous spine, which are not fatal to humans, these rays are not aggressive and not
                            considered harmful. White Spotted Eagle Rays are noted for their ability to leap out of
                            the water.</p>
                    </div>
                </div>
                <div className={"julian-rock-text-content-subtext"}>
                    <div className={"julian-rock-text-content-subtext-subtitle"}>
                        <p>Electric Ray - March to May</p>
                    </div>
                    <div className={"julian-rock-text-content-subtext-describe"}>
                        <p>The Electric Ray earned its name from its ability to give an electric shock to its prey.
                            While it can also give a shock to unsuspecting swimmers, they are non-aggressive and not
                            considered a threat to humans. The Electric Ray can be found dwelling on the sandy
                            floor, where they bury themselves waiting for prey.</p>
                    </div>
                </div>

                <div className={"julian-rock-text-content-links"}>
                    <div>
                        <p>To plan your snorkelling trip at Julian Rocks visit our satellite view.</p>
                        <p><Link to={""}>www.beachcoach.app/julian-rocks-location</Link></p>
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

export default JulianRock;