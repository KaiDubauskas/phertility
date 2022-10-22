import React, { useEffect, useState, useRef} from "react";
import { useGeolocated } from "react-geolocated";


function CurrentLocation(){
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    useEffect(() =>{
        onChangeLat(coords.latitude);
    },[coords])

    const onChangeLat = e =>{
        setLat(e)
    }


return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : coords ? (
    <div>
        <li>
            latitude: {coords.latitude}
        </li>
        <li>
            longitude: {coords.longitude}

        </li>
        <li>
            lat: {lat}
            long: {long}
        </li>
    </div>
) : (
    <div>Getting the location data&hellip; </div>
);
};

export default CurrentLocation