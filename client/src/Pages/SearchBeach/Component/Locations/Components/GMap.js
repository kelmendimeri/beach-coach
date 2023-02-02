import React, {useEffect, useRef, useState} from 'react';
import {Circle, Marker, GoogleMap, useLoadScript} from '@react-google-maps/api';
import data from "../../../../../assets/data/beachesLocation.json";
import './GMap.css';
import $ from "jquery";

const GMap = () => {
    const mapRef = useRef();
    const [getLocationApproval] = useState(sessionStorage.getItem('location-approved'));
    const [openModalGoogleMap, setOpenModalGoogleMap] = useState(false);
    const [locationData] = useState(data);
    const [mapZoom, setMapZoom] = useState(4.3);
    const [centerMap, setCenterMap] = useState({lat: -30.88200609215634, lng: 140.0344279878923});
    const [filteredResult] = useState([]);
    const [circleCenter, setCircleCenter] = useState({lat: -30.88200609215634, lng: 140.0344279878923});
    const [showCircle, setShowCircle] = useState(false);
    const [nearestBeach] = useState([]);
    const [searchByName, setSearchByName] = useState(false);
    const [searchNameRight, setSearchNameRight] = useState(false);
    const [searchLocationModal, setSearchLocationModal] = useState(false);
    const [myPos, setMyPos] = useState({lat: -30.88200609215634, lng: 140.0344279878923});

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCKUFsyljd91YonyWZiaF4f92R7pcvWUkA'
    });

    useEffect(() => {
        (getLocationApproval === null) ? setOpenModalGoogleMap(true) : setOpenModalGoogleMap(false);
        (getLocationApproval === null) ? setSearchLocationModal(false) : setSearchLocationModal(true);
    }, [getLocationApproval, locationData]);

    useEffect(() => {
        if (sessionStorage.getItem('location-approved') === "true") {
            getGeoLocation();
            setCircleCenter(myPos);
            setCenterMap(myPos);
        }
    }, [myPos.lat, myPos.lng]);

    const loadHandler = (map) => {
        mapRef.current = map;
    };

    const circleOptions = {
        fillColor: "transparent",
        fillOpacity: 0.3,
        strokeWeight: 3,
        strokeColor: "coral",
        clickable: false,
        editable: false,
        zIndex: 1,
    };

    const getGeoLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setMyPos({lat: position.coords.latitude, lng: position.coords.longitude});
            setShowCircle(true);
        });

        return null;
    };

    const near5Km = () => {
        setCenterMap(circleCenter);
        getGeoLocation();

        nearestBeach.length = 0;
        // IP address - Melbourn: 128.250.204.118; Sydney: 49.189.126.141
        // lat: -55 -> - 10   lng: 159.1 -> 73 Austria edges geolocaiton
        if ((myPos.lat > -55 && myPos.lat < -10) && (myPos.lng < 159.1 && myPos.lng > 73)) {
            setShowCircle(true);

            setCircleCenter({
                lat: myPos.lat,
                lng: myPos.lng
            });

            setCenterMap({
                lat: myPos.lat,
                lng: myPos.lng
            });
            let latituteUp = myPos.lat + 0.1;
            let latituteDown = myPos.lat - 0.1;
            let longitudeRight = myPos.lng + 0.1;
            let longitudeLeft = myPos.lng - 0.1;

            Object.values(locationData).filter((values) => {
                    if ((latituteUp >= values['LATITUDE'] && latituteDown <= values['LATITUDE']) &&
                        (longitudeRight >= values['LONGITUDE'] && longitudeLeft <= values['LONGITUDE'])) {
                        nearestBeach.push(values);
                    }
                    return null;
                }
            );
            nearestBeach.length > 0 ? mapRef.current.zoom = 9 : mapRef.current.zoom = 4.3;
        } else {
            setShowCircle(false);
            setMapZoom(4.3);
            sessionStorage.getItem('location-approved') !== true && alert("There no beches.");
        }
    };

    const nameSearching = (value) => {
        filteredResult.length = 0;
        Object.values(locationData).filter((filtering) => {
            filtering.NAME.toLowerCase().match(value) && filteredResult.push(filtering);
            return null;
        });
    };

    const onClickMarkerZoom = (latitude, longitude) => {
        mapRef.current.setZoom(17);
        setCenterMap({lat: latitude, lng: longitude});
        return null;
    }

    return (
        <div className={"gmap"} id={"gmap"} style={{height: "700px"}}>
            {isLoaded &&
                <GoogleMap
                    onLoad={loadHandler}
                    mapTypeId={"hybrid"}
                    // mapTypeId={"satellite"}
                    center={centerMap}
                    zoom={mapZoom}
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%",
                        position: "relative"
                    }}
                >}
                    {showCircle &&
                        <Circle
                            center={circleCenter}
                            radius={8500}
                            options={circleOptions}
                        />}
                    {searchByName ?
                        (filteredResult.length > 0 ? (
                            filteredResult.map((marker, index) => {
                                return <Marker
                                    key={index}
                                    onClick={() => {
                                        onClickMarkerZoom(marker['LATITUDE'], marker['LONGITUDE']);
                                    }}
                                    icon={"https://maps.google.com/mapfiles/ms/icons/blue.png"}
                                    position={{lat: marker['LATITUDE'], lng: marker['LONGITUDE']}}
                                />
                            })) : null)
                        :
                        (nearestBeach.length > 0 ? (
                                nearestBeach.map((marker, index) => {
                                    return <Marker
                                        key={index}
                                        label={{
                                            color: '#ffffff',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            text: nearestBeach.length > 0 ? `${marker.NAME}` : null
                                        }}
                                        onClick={() => {
                                            onClickMarkerZoom(marker['LATITUDE'], marker['LONGITUDE'])
                                        }}
                                        icon={"https://maps.google.com/mapfiles/ms/icons/blue.png"}
                                        position={{lat: marker['LATITUDE'], lng: marker['LONGITUDE']}}
                                    />
                                })) : null
                        )
                    }

                    <div className={"google-map-modal"} style={{
                        display: openModalGoogleMap === true ? "flex" : "none",
                    }}>
                        <div className={"google-map-modal-title"}>
                            <p>Share your location to discover local snorkel locations</p>
                        </div>
                        <div className={"google-map-modal-buttons"}>
                            <button onClick={() => {
                                sessionStorage.setItem('location-approved', 'true');
                                setOpenModalGoogleMap(false);
                                setSearchLocationModal(true);
                            }}>Allow
                            </button>

                            <button onClick={() => {
                                sessionStorage.setItem('location-approved', 'false');
                                setOpenModalGoogleMap(false);
                                // setSearchLocationModal(true);
                                setShowCircle(false);
                                setMapZoom(4.3);
                            }}>Don't Allow
                            </button>
                        </div>
                    </div>
                    <div
                        className={`google-map-search-location-modal ${searchNameRight === true ? "searchNameRight" : ""}`}
                        style={{
                            display: searchLocationModal === true ? "flex" : "none",
                        }}>
                        <div className={"google-map-search-location-modal-title"}>
                            <p>Your closest beach</p>
                            <i className={"bi bi-x"} onClick={() => {
                                setSearchLocationModal(false);
                                setSearchNameRight(false);
                            }}></i>
                        </div>
                        <div className={"google-map-search-location-modal-select"}>
                            <select onChange={(event) => {
                                if (event.target.value === "near") {
                                    setCenterMap(circleCenter);
                                    setSearchLocationModal(false);
                                    setSearchNameRight(false);
                                    setSearchByName(false);
                                    near5Km();
                                    $('.google-map-search-location-modal').removeClass('searchNameRight');
                                } else if (event.target.value === 'name') {
                                    mapRef.current.zoom = 4.3
                                    filteredResult.length = 0;
                                    setShowCircle(false);
                                    setSearchByName(true);
                                    setSearchLocationModal(false);
                                    setSearchNameRight(true);
                                    $('.google-map-search-location-modal').removeClass('');
                                } else {
                                    setSearchByName(false);
                                    $('.google-map-search-location-modal').removeClass('searchNameRight');
                                    setSearchNameRight(false);
                                }
                            }}>
                                <option>Search options</option>
                                <option value={"name"}>Beach Name</option>
                                <option value={"near"}
                                        disabled={sessionStorage.getItem('location-approved') === 'false'}>
                                    Beaches near me
                                </option>
                            </select>
                        </div>
                        <div className="input-group google-map-search-location-modal-input">
                            {searchByName === true &&
                                <>
                                    <input className="form-control border-secondary" type="search"
                                           placeholder={"Beaches names"}
                                           aria-label={"search_beach"} onChange={(event) => {
                                        setCenterMap({lat: -30.88200609215634, lng: 140.0344279878923});
                                        nearestBeach.length = 0;
                                        let inputName = event.target.value.toLowerCase();
                                        if (event.target.value === '') {
                                            filteredResult.length = 0;
                                        } else {
                                            nameSearching(inputName);
                                        }
                                    }}/>
                                    <div className="input-group-append">
                                        <span>
                                            <i className="bi bi-search"></i>
                                        </span>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className={"closed-search-modal"}
                         style={{display: searchLocationModal === true ? 'none' : 'flex'}}
                         onClick={() => {
                             filteredResult.length = 0;
                             setSearchLocationModal(true);
                         }}>
                        <i className="bi bi-search"></i>
                    </div>
                </GoogleMap>}
        </div>
    );
};

export default GMap;