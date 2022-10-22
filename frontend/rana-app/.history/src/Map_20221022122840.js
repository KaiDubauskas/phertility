import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { useGeolocated } from "react-geolocated";



function Map(){
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  const [long, setlong] = useState(0);
  const [lat, setlat] = useState(0);
    const defaultProps = {
        center: {
          lat: 39.8282,
          lng: -98.5795
        },
        zoom: 5
      };
      const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
      function getLocation(){
        if(coords){
          setlat(coords.latitude);
          setlong(coords.longitude);

        }
        return !isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
      ) : !isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
      ) : coords ? (
        <div>
        <h1> {coords.latitude} </h1>
        <h1> {coords.longitude} </h1>
        </div>
      ) : (
        <div>Getting the location data&hellip; </div>
      );
  };
      
  return (
    <div>
    <button id="submit"onClick={getLocation()}>Get Current Location</button>
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
    </GoogleMapReact>
  </div>
  </div>

  );
}

export default Map