import React from 'react';
import './GordonBay.css';
import gordonsBaySwimming from "../../../../assets/images/Blog/gordonsBaySwimming.png";
import gordonsBayImg2 from "../../../../assets/images/Blog/gordonsBayImg2.png";
import gordonsBayMapImg from "../../../../assets/images/Blog/gordonsBayMapImg.png";
import gordonBayOldWives from "../../../../assets/images/Blog/gordonBayOldWives.png";
import gordonsBayGilesBaths from '../../../../assets/images/Blog/gordonBayGilesBaths.png';
import gordonsBayGilesBathsImg2 from '../../../../assets/images/Blog/gordonsBayGilesBathsImg2.png'
import {Link} from "react-router-dom";

const GordonBay = () => {
    return (
        <div id={"gordon-bay"} className={"gordon-bay"}>
            <div className={"gordon-bay-header"}>
                <div className={"gordon-bay-title"}>
                    <p>Shelly Beach, one of Sydney’s top snorkelling destinations</p>
                </div>
                <div className={"gordon-bay-story-hero-img"}>
                    <img src={gordonsBaySwimming} alt={"gordon-bay-snorkel-imgs"}/>
                </div>
                <div className={"gordon-bay-coordinates"}>
                    <p className={"location"}>GORDONS BAY, SYDNEY</p>
                    <p className={"cords"}>34.12° S, 151.25° E.</p>
                </div>
            </div>
            <div className={"gordon-bay-text-content"}>
                <div className={"gordon-bay-text-content-paragraph"}>
                    <p>Nestled between Clovelly and Coogee, lies Gordon’s Bay, a lesser-known snorkelling
                        destination,
                        home to Sydney’s only underwater snorkelling trail. Accessible only by foot or water,
                        Gordons
                        Bay sits within two rocky heads, set 500 metres apart.</p>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Getting there</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>The best way to access Gordon’s Bay is at the north end. Visitors walk in on an
                            established
                            coastal walking track. Snorkellers typically launch into the water from the outcrop on
                            the
                            north side at high tide, or at low tide direct from a small sandy beach.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>The bay only has a small section of sand, while the shore itself is covered by the local
                            fishing club’s tin boats, which are lined up on wooden racks. The arms of the bay are
                            surrounded by rocky outcrops, a popular resting place for swimmers and snorkellers, who
                            use it as a launch pad to enter the water.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Protected waters</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Gordons Bay is part of the Bronte Coogee Aquatic Reserve, declared in 2002. The reserve
                            extends 100 metres offshore and spans 4,000 metres of coastline from the rock baths at
                            Coogee, to the southern end of Bronte. Gordons Bay is a reef protected cove, sheltered
                            from the bigger seas by Wedding Cake Island, a rocky reef located 800 metres offshore.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-img"}>
                    <figure>
                        <img src={gordonsBayImg2} alt={"gordon-bay-img-2"}/>
                        <figcaption>Gordons Bay can only be accessed by foot, boat or by swimming.</figcaption>
                    </figure>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Snorkelling conditions</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Snorkelling conditions at Gordons Bay are better than surrounding beaches, as the water
                            is calmer and clearer for snorkelling. The water temperature peaks at 21°C in summer,
                            falling to 14-18°C during winter. While warmer weather can be more comfortable to snorkel
                            in temperature, winter snorkelling is better for visibility.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>The underwater snorkelling trail</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Gordon’s Bay Scuba Diving Club developed an underwater snorkelling scuba trail in 1990,
                            to help snorkellers and scuba divers interpret the underwater world around them. Steele
                            plaques placed 20 metres apart, describe the surrounding sea life and the trail typically
                            takes 40 minutes to complete. Reaching 14 metres in depths and traversing a course of 500
                            metres, the trail passes rocky reefs, sand flats and Cray weed kelp forests. The temperate
                            marine habitats of Gordons Bay vary across terrains including intertidal, boulder slope,
                            rocky reef, and sandy bottoms.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-img"}>
                    <figure>
                        <img src={gordonsBayMapImg} alt={"gordon-bay-map-img"}/>
                    </figure>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>The many types of fish at Gordons Bay which include:</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Wrasse</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Snorkellers can expect to see many of the18 species of sea life that regularly inhabit
                            the
                            bay. The most famous fish of the area is the friendly and inquisitive Eastern Blue
                            Groper.
                            The Eastern Blue Gropers are a female fish population, with one dominant male. When the
                            male
                            dies, one of the females will change colour and sex, to become the presiding dominant
                            male.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Goatfish</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>The Spotted Goatfish are an eating fish, which are found on the sandy bottom</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Garfish</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>The Eastern Garfish, an eating fish, which grows to 52 centimetres and are typically seen
                            swimming close to the surface.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtitle"}>
                    <p>Nonaggressive sharks</p>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Ornate Wobbegongs</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Nocturnal sharks, native to Australia, they are found lying on sandy and weedy bottoms or
                            under rock ledges.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Port Jackson sharks</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Growing up to 1.65 metres, the Port Jackson prefers to lurk in rocky areas, and becomes
                            active in evenings and early morning.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Blind Sharks</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>As bottom dwelling nocturnal creatures, these sharks can be seen in sea grass beds next to
                            rocky areas.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-img"}>
                    <figure>
                        <img src={gordonBayOldWives} alt={"gordon-bay-old-wives-img"}/>
                        <figcaption>Old Wives at Gordons Bay</figcaption>
                    </figure>
                </div>
                <div className={"gordon-bay-text-content-subtitle"}>
                    <p>Rocky ledge dwellers</p>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Mado</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>A 20-centimetre stripped fish, one of the most common species of fish in New South Wales, can
                            be regularly spotted amongst the rocks.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Eastern Pomfred</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>A schooling fish found under sheltered rocky ledges.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Common bullseye</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>A small fish of around 10 cm, found lurking under rocky overhangs.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Old wife</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>A black and white stripped small fish found swimming in schools or pairs, near rocky reefs
                            and sea grass beds. They are endemic to the temperate Australian waters.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Giant cuttlefish</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Not a fish but an invertebrate related to the squid, Giant Cuttlefish are found in caves and
                            rock crevices.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Tidal environments</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Sydney rock oysters and blue snails are found at the highest intertidal level at Gordons Bay,
                            while deeper down, starfish live within the anemone and brown and red algae.</p>
                        <p>Kelp appears at lowest tidal levels, alongside sponges and algae. The kelp offers shelter for
                            Abalone, Crayfish, Weedy Sea Dragon, and larger fish such as Gropers and Blackfish. The kelp
                            forests of Gordon Bay are known as Crayweed. Once locally extinct, Crayweed kelp forests
                            have been reintroduced to boost the biodiversity of Sydney’s coastline.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Fishing at Gordons Bay</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>Gordons Back rocky outcrops provide the perfect spot for rock fishing. Line fishing is
                            permitted in the marine reserve, except for protected fish which include the Blue Groper.
                            The fishing permissions are published as part of the marine reserve guidelines, which also
                            prohibit spearfishing, but allows for the collection of eastern and southern rock lobsters.
                            By law you will require life jacket protection to fish at Gordons Bay. The best time and
                            place to fish is on the southern side just before dawn, catches include Trevally, Bream, Sea
                            bass, Rock Cod and Rockfish. Crustaceans are best collected at low tide. If you do catch a
                            Blue Groper while line fishing, it is mandatory to set them free.</p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-img"}>
                    <figure>
                        <img src={gordonsBayGilesBaths} alt={"gordon-bay-old-wives-img"}/>
                        <figcaption>Giles Baths, on the Coogee side of the Gordons Bay walking trail.</figcaption>
                    </figure>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>If you are new to snorkelling, and looking for a more entry level experience, the best place
                            to start is at Giles Baths, at the foot of the northern end of Coogee. You can reach Giles
                            Baths by walking over the rocky foreshore at low tide or from the coastal walk, which
                            connects Coogee to Gordons Bay. Giles Baths is a naturally occurring rock pool.
                            The entry portico dating from the early 1900’s "Giles Gym and Baths” has been preserved
                            from the time when Giles Baths was a men’s only swimming spot. Giles Baths is the perfect
                            place for kids, or people new to snorkelling, to have their first snorkelling experience.
                            It also a great place to seek the protection of choppy water on windy days. Giles Baths
                            is set within giant boulders, great to lounge about on or jump in at high tide. You will
                            see plenty of small fish in Giles Baths and many smaller crustacean and starfish,
                            including some bright colourful corals. </p>
                    </div>
                </div>
                <div className={"gordon-bay-text-content-img"}>
                    <figure>
                        <img src={gordonsBayGilesBathsImg2} alt={"gordon-bay-baths-img-2"}/>
                        <figcaption>Giles Baths, a natural rock pool full of tiny natural treasures.</figcaption>
                    </figure>
                </div>
                <div className={"gordon-bay-text-content-subtext"}>
                    <div className={"gordon-bay-text-content-subtext-subtitle"}>
                        <p>Tidal environments</p>
                    </div>
                    <div className={"gordon-bay-text-content-subtext-describe"}>
                        <p>The rock platform at the north end of Coogee, is also a good spot for snorkelling,
                            recommended for more experienced snorkellers. Snorkelling conditions at the rock platform at
                            Coogee’s north end are protected by the rocky reef of Wedding Cake Island. The water around
                            rocks on the north end of Coogee reaches up to 19 metres, with the visibility regularly at
                            10 metres.</p>
                        <p>Gordons Bay is an ideal snorkelling location to learn more about the underwater world.</p>
                    </div>
                </div>

                <div className={"gordon-bay-text-content-links"}>
                    <div>
                        <p>To plan your snorkelling trip at Gordons Bay visit our satellite view.</p>
                        <p><Link to={""}>www.beachcoach.app/shelly-beaches-location</Link></p>
                    </div>
                    <div>
                        <p>Got some stories, updates or images to share with the community, send them to <Link
                            to={"/creator"}>editor@beachcoach.app</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GordonBay;