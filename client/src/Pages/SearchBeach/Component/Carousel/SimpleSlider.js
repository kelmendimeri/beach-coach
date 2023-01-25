import React, {useRef} from 'react';
import Slider from 'react-slick'
import './SimpleSlider.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import beachCoachGirlLookImg1 from '../../../../assets/images/Locations/Carousel/beachCoachGirlLookImg1.png'
import shellyBeachSnorkelImg2 from '../../../../assets/images/Locations/Carousel/shellyBeachSnorkelImg2.png'
import beachCoachKidSnorkImg3 from '../../../../assets/images/Locations/Carousel/beachCoachKidSnorkImg3.png'
import carouselImg4 from '../../../../assets/images/Locations/Carousel/carouselImg4.png'
import carouselImg5 from '../../../../assets/images/Locations/Carousel/carouselImg5.png'

const SimpleSlider = () => {
    const slider = useRef(null);

    const sliderSettings = {
        // autoplay: true,
        duration: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        initialSlide: 0,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 468,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 279,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div id={"simple-slider"} className={"simple-slider"}>
            <div className={"header"}>
                <h2>See 5 star results</h2>
                <div className={"slider-buttons"}>
                    <button onClick={() => slider?.current?.slickPrev()}><i className={"bi bi-caret-left-fill"}></i>
                    </button>
                    <button onClick={() => slider?.current?.slickNext()}><i className={"bi bi-caret-right-fill"}></i>
                    </button>
                </div>
            </div>
            <Slider ref={slider}{...sliderSettings}>
                <div className={"items"}>
                    <div className={"figure"}>
                        <img src={beachCoachGirlLookImg1} alt={"beach-coach-girl-look-img"}/>
                        <div className={"figure-curent-details"}>
                            <p>BEGINNER SPOTS NEAR SYDNEY</p>
                        </div>
                        <p className={"figure-description"}>BEGINNER SPOTS NEAR SYDNEY</p>
                    </div>
                </div>
                <div className={"items"}>
                    <div className={"figure"}>
                        <img alt={"shelly-Beach-Snorkel-Img"} src={shellyBeachSnorkelImg2}/>
                        <div className={"figure-curent-details"}>
                            <p>5 STAR, SHELLEY BEACH</p>
                        </div>
                        <p className={"figure-description"}>5 STAR, SHELLEY BEACH</p>
                    </div>
                </div>
                <div className={"items"}>
                    <div className={"figure"}>
                        <img alt={"carousel-Img-4"} src={carouselImg4}/>
                        <div className={"figure-curent-details"}>
                            <p>ROCK POOLS FOR KIDS</p>
                        </div>
                        <p className={"figure-description"}>ROCK POOLS FOR KIDS</p>
                    </div>
                </div>
                <div className={"items"}>
                    <div className={"figure"}>
                        <img alt={"beach-Coach-Kid-Snorkel-Img"} src={beachCoachKidSnorkImg3}/>
                        <div className={"figure-curent-details"}>
                            <p>5 STAR GREEN ISLAND, GREAT BARRIER REEF</p>
                        </div>
                        <p className={"figure-description"}>5 STAR GREEN ISLAND, GREAT BARRIER REEF</p>
                    </div>
                </div>
                <div className={"items"}>
                    <div className={"figure"}>
                        <img alt={"carousel-Img-5"} src={carouselImg5}/>
                        <div className={"figure-curent-details"}>
                            <p>5 STAR, TURQUOISE BAY, NINGALOO</p>
                        </div>
                        <p className={"figure-description"}>5 STAR, TURQUOISE BAY, NINGALOO</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SimpleSlider;