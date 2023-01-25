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

                    <input type="radio" id="bays" name="snorkelSelectBestBeach" value="Bays"/>
                    <label htmlFor="bays">Bays</label>

                    <input type="radio" id="beach" name="snorkelSelectBestBeach" value="Beach"/>
                    <label htmlFor="beach">Archived</label>

                    <input type="radio" id="ocean-swim" name="snorkelSelectBestBeach" value="Ocean-Swim"/>
                    <label htmlFor="ocean-swim">Ocean Swim</label>

                    <input type="radio" id="stream" name="snorkelSelectBestBeach" value="Stream"/>
                    <label htmlFor="stream">Stream</label>

                </div>
            </div>
        </div>
    );
};

export default SnorkelBestBeaches;