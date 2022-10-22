import React, { useEffect, useState, useRef} from "react";
import { useGeolocated } from "react-geolocated";
import axios from 'axios';


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
            getCurrentCity();
        }
    },[coords])

    function getCurrentCity(){
        if(coords){
          axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.long}&key=AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4`)
          .then(responseArr => {
            console.log(responseArr);
          })
          .catch(err => {
            console.log(err);
          });
    }
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
    </div>
) : (
    <div>Getting the location data&hellip; </div>
);
};

export default CurrentLocation