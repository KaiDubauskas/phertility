import React, { useEffect, useState, useRef} from "react";
import { useGeolocated } from "react-geolocated";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


function CurrentLocation(props){
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    useEffect(() =>{
        if(coords){
            props.setLat(coords.latitude);
            props.setLong(coords.longitude);
        }
    },[coords])


return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : coords ? (
    <>
    <div>
        You're current location is: 
        <li>
            latitude: {coords.latitude}
        </li>
        <li>
            longitude: {coords.longitude}

        </li>
    </div>
    <div class="mt-2">
        Showing clinics within a 1,000 mile radius of your current location.
    </div>
    </>
    
) : (
    <div>Getting the location data&hellip; </div>
);
};

export default CurrentLocation