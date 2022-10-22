import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map(){
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
    </GoogleMapReact>
  </div>

  );
}

export default Map