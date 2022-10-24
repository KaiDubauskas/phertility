import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { useGeolocated } from "react-geolocated";
import CurrentLcation from './CurrentLocation';



function Map(){
    const defaultProps = {
        center: {
          lat: 39.8282,
          lng: -98.5795
        },
        zoom: 5
      };   
  return (
    <div>
    <div style={{ height: '100vh', width: '100%' }}>
      <CurrentLocation/>
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