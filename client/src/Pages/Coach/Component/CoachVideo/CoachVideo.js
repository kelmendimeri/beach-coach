import React from 'react';
import './CoachVideo.css';
import videoCoach from '../../../../assets/video/Beach_Coach_couple_snorkelling.mp4';

const CoachVideo = () => {

        return (
            <div className={"coach-video"} id={"coach-video"}>
                <video
                    playsInline={true}
                    autoPlay={true}
                    loop={true}
                    muted
                    controlsList={"nodownload"}
                    src={videoCoach}
                />
            </div>
        );
    }
;

export default CoachVideo;