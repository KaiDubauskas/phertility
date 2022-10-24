import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import CurrentLocation from './CurrentLocation';
import axios from 'axios';
import { useGeolocated } from "react-geolocated";




function Map(){
    let [lat, setLat] = useState(0);
    let [long, setLong] = useState(0);
    let [allData, setallData] = useState([]);
    const defaultProps = {
        center: {
          lat: 39.8282,
          lng: -98.5795
        },
        zoom: 5
      };   
    function getData(){
        if(lat!==0 && long!==0){
      axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=Abortion%20Clinic&location=${lat}%2C${long}&radius=10000&key=AIzaSyA0n3haKfBhghSIKvFgf506RXJk8JwLnwc`)
      .then(responseArr => {
        console.log(responseArr);
      })
      .catch(err => {
        console.log(err);
      });
        }
    }
  return (
    <div>
    <div style={{ height: '100vh', width: '100%' }}>
      <CurrentLocation lat={lat} setLat={setLat} long={long} setLong={setLong}/>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
    </GoogleMapReact>
    {getData()}
  </div>
  </div>

  );
}

export default Map