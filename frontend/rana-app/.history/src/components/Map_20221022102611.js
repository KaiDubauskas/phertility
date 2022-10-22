import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

function Map(){
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBEP3aTAxNz_xOdIbK5ulQWCoqlGCUC_uA' }}
      defaultCenter={{lat: 28.04997, lng: 0.61011}}
      defaultZoom={3}
    />
  </div>

  )
}

export default Map