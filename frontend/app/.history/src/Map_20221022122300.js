import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { useGeolocated } from "react-geolocated";



function Map(){
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
        return !isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
      ) : !isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
      ) : coords ? (
          <table>
              <tbody>
                  <tr>
                      <td>latitude</td>
                      <td>{coords.latitude}</td>
                  </tr>
                  <tr>
                      <td>longitude</td>
                      <td>{coords.longitude}</td>
                  </tr>
                  <tr>
                      <td>altitude</td>
                      <td>{coords.altitude}</td>
                  </tr>
                  <tr>
                      <td>heading</td>
                      <td>{coords.heading}</td>
                  </tr>
                  <tr>
                      <td>speed</td>
                      <td>{coords.speed}</td>
                  </tr>
              </tbody>
          </table>
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