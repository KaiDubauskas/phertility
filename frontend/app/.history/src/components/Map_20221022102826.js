import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

function Map(){
  return (
    <div>
        {process.env.API_KEY}
    </div>
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: `${process.env.API_KEY}` }}
      defaultCenter={{lat: 28.04997, lng: 0.61011}}
      defaultZoom={3}
    />
  </div>

  )
}

export default Map