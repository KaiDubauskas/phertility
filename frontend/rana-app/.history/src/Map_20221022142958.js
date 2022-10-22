import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import CurrentLocation from './CurrentLocation';
import axios from 'axios';
import { useGeolocated } from "react-geolocated";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";




function Map(){
    let [lat, setLat] = useState(39.8282);
    let [long, setLong] = useState(-98.5795);
    let [centerCoords, setCenterCoords] = useState([lat, long]);
    let [allData, setallData] = useState([]);
    let [city, setCity] = useState('');
    const defaultProps = {
        center: {
          lat: 39.8282,
          lng: -98.5795
        },
        zoom: 5
      };   
      useEffect(()=> {
        setLat(lat)
      }, [lat])
      useEffect(()=> {
        setLong(long)
      }, [long])

      useEffect(()=>{
        getCity()
      }, [lat])
    function getData(){
        if(lat!==39.8282 && long!==-98.5795){
      axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=Abortion%20Clinic&location=${lat}%2C${long}&radius=10000&key=AIzaSyA0n3haKfBhghSIKvFgf506RXJk8JwLnwc`)
      .then(responseArr => {
        setallData(responseArr.data.results);
      })
      .catch(err => {
        console.log(err);
      });
        }
    }
    function getCity(){
      if(lat!==39.8282 && long!==-98.5795){
    axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=36.1430966,-86.8058588&key=AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4`)
    .then(responseArr => {
      console.log(responseArr);
    })
    .catch(err => {
      console.log(err);
    });
      }
  }
    
    const allLocations= allData.map((data, i) => {
      if(allData.length>0){
      return (
          <div
              lat={data.geometry.location.lat}
              lng={data.geometry.location.lng}
              text="marker"
              style={{
                  color: "red",
                  backgroundColor: "#FFF",
                  height: "25px",
                  width: "40px",
                  textAlign: "center",
                  borderRadius: "30%",
                  type: "circle"
              }}
              >
                  <img height="10px" src={data.icon_mask_base_uri} />
                  <br />
                  {data.name}
                  {data.formatted_address}
                  </div>
    );
  }
  });
  
  return (
    <div>
    <div style={{ height: '100vh', width: '100%' }}>
    <CurrentLocation lat={lat} setLat={setLat} long={long}/>

    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4" }}
      defaultCenter={{lat: lat, lng: long}}
      defaultZoom={6}
    >
      {allLocations}
    </GoogleMapReact>
    {getData()}
    lat: {lat}
    long: {long}
  </div>
  </div>

  );
}

export default Map