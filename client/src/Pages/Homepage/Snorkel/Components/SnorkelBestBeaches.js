import React from 'react';
import './SnorkerBestBeaches.css';
import snorkelBestBeachApp from '../../../../assets/images/Homepage/snorkelBestBeachApp.png';

const SnorkelBestBeaches = () => {
    return (
        <div id={"snorkelBestBeaches"} className={"snorkelBestBeaches row"}>
            <div className={"snorkelBestBeaches-image"}>
                <img src={snorkelBestBeachApp} alt={"snorkel-best-beaches-app"}/>
            </div>
            <div className={"snorkelBestBeaches-text"}>
                <div className={"snorkelBestBeaches-text-heading"}>
                    <p>ULTIMATE MAP OF BEACH SNORKEL AND SWIM</p>
                </div>

                <div className={"hr"}></div>

                <div className={"snorkelBestBeaches-text-title"}>
                    <p>Snorkel and swim the best of Australian beaches.</p>
                </div>
                <div className={"snorkelBestBeaches-text-describe"}>
                    <p>Search over 2,500 beaches and spots on an earth view map. Find the best of snorkel and swim near
                        you. Learn from the community who shares and reviews their experiences.</p>
                </div>
                <div className={"snorkelBestBeaches-options"}>
                    <input type="radio" id="rock-pools" name="snorkelSelectBestBeach" defaultChecked={true} value="Rock-Pools"/>
                    <label htmlFor="rock-pools">Rock Pools</label>

                    <input type="radio" id="beaches" name="snorkelSelectBestBeach" value="Beaches"/>
                    <label htmlFor="beaches">Beaches</label>

                    <input type="radio" id="bays" name="snorkelSelectBestBeach" value="Bays"/>
                    <label htmlFor="bays">Bays</label>

                    <input type="radio" id="islands" name="snorkelSelectBestBeach" value="Islands"/>
                    <label htmlFor="islands">Islands</label>

                    <input type="radio" id="ship-wrecks" name="snorkelSelectBestBeach" value="Ship-Wrecks"/>
                    <label htmlFor="ship-wrecks">Ship Wrecks</label>

                    <input type="radio" id="fresh-water" name="snorkelSelectBestBeach" value="Fresh-Water"/>
                    <label htmlFor="fresh-water">Fresh Water</label>

                    <input type="radio" id="rocky-outcrops" name="snorkelSelectBestBeach" value="Rocky Outcrops"/>
                    <label htmlFor="rocky-outcrops">Rocky Outcrops</label>

                    <input type="radio" id="marine-parks" name="snorkelSelectBestBeach" value="Marine Parks"/>
                    <label htmlFor="marine-parks">Marine Parks</label>
                </div>
            </div>
        </div>
    );
};

export default SnorkelBestBeaches;