import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

function Map(){
  return (
    <div>
        <h1> map </h1>
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4' }}
      defaultCenter={{lat: 28.04997, lng: 0.61011}}
      defaultZoom={3}
    />
  </div>
  </div>

  )
}

export default Map