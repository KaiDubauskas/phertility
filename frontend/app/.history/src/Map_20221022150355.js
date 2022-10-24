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
    let [cityNames, setCityNames] = useState([]); 
      useEffect(()=> {
        setLat(lat);
      }, [])
      useEffect(()=> {
        setLong(long);
        getData();
        getCity();

      }, [])

      useEffect(()=>{
        getCity()
      }, [])

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
    axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4`)
    .then(responseArr => {
      console.log(responseArr.data.results);
      setCityNames(responseArr.data.results);
      console.log(cityNames);
    })
    .catch(err => {
      console.log(err);
    });
    console.log("hello here");
    console.log(cityNames);
    for(let i=0; i<cityNames.length; i++){
      for(let j=0; j<cityNames[i].address_components.length; j++){
        for(let k=0; k<cityNames[i].address_components[j].types.length; k++){
          if(cityNames[i].address_components[j].types[k]=== "locality"){
            setCity(cityNames[i].address_components[j].long_name);
          }
        }
      }
    }
    console.log(city);
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
    <CurrentLocation lat={lat} setLat={setLat} long={long} setLong={setLong}/>
    Showing Abortion Clinics within a 1,000 mile radius of {city}
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4" }}
      defaultCenter={{lat: 39.8282, lng: -98.5795}}
      defaultZoom={6}
    >
      {allLocations}
    </GoogleMapReact>
    
  </div>
  </div>

  );
}

export default Map