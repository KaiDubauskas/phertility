import React, { useEffect, useState, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import markerImage from './marker.png';
import MapSidebar from "./components/map-sidebar.js";
import CurrentLocation from "./CurrentLocation";
import './Map.css';




function Map() {
  let [lat, setLat] = useState(39.8282);
  let [long, setLong] = useState(-98.5795);
  let [centerCoords, setCenterCoords] = useState([lat, long]);
  let [allData, setallData] = useState([]);
  let [city, setCity] = useState('');
  let [cityNames, setCityNames] = useState([]);
  const [clinicName, setClinicName] = useState("");
  const [clinicAdd, setClinicAdd] = useState("");
  const [clinicRating, setClinicRating] = useState(0);
  const [clinicState, setClinicState] = useState("");
  const [clinicLong, setClinicLong] = useState(0);
  const [clinicLat, setClinicLat] = useState(0);
  const [distToClinic, setDistToClinic] = useState(0);
  const [canChangeSidebar, setCanChangeSidebar] = useState(true);

  const defaultProps = {
    center: {
      lat: 39.8282,
      lng: -98.5795
    },
    zoom: 5
  };

  useEffect(() => {
    setLat(lat);
  }, [lat])

  useEffect(() => {
    setLong(long);
    getData();
  }, [long])

  useEffect(() => {
    setDistToClinic(calcDistance1(lat, long, clinicLat, clinicLong));
    //console.log(clinicLat + " " + clinicLong + " " + calcDistance1(lat, long, clinicLat, clinicLong) + " " + clinicRating);

  }, [clinicLat])


  function getData() {
    if (lat !== 39.8282 && long !== -98.5795) {
      axios.get(`https://phertility-app.herokuapp.com/api/clinics/${lat}/${long}`)
        .then(responseArr => {
          setallData(responseArr.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  function handleMouseEnter(e) {
    let parent = e.target.parentElement;
    for (let i = 0; i < allData.length; ++i) {
      if (allData[i].formatted_address == parent.getAttribute('address')) {
        console.log(i)
        const tmp = allData[allData.length - 1];
        allData[allData.length - 1] = allData[i];
        allData[i] = tmp;
        break;
      }
    }
    if (canChangeSidebar) {
      let clinicNameTmp = parent.querySelector(".loc-name");
      setClinicName(clinicNameTmp);
      setClinicRating(parent.getAttribute('rating'));
      setClinicAdd(parent.getAttribute('address'));
      //console.log(parent.getAttribute('address'));
      //console.log(allLocations);

      setClinicLat(parent.getAttribute('lat'));
      setClinicLong(parent.getAttribute('long'));
      //parent.style.zindex = 1;
      //console.log(clinicLat);
      //console.log(clinicLong);
      //setDistToClinic(calcDistance(lat, long, clinicLat, clinicLong));

      //console.log(calcDistance(lat, long, clinicLat, clinicLong));
      // console.log(distToClinic);

      const lastWord = parent.getAttribute('state').split(' ');
      setClinicState(lastWord[lastWord.length - 1]);
      if (lastWord[lastWord.length - 1] == "Carolina" || clinicState == "Dakota" || clinicState == "York"
        || clinicState == "Hampshire" || clinicState == "Island" || clinicState == "Mexico") {
        let tmp = lastWord[lastWord.length - 2] + " " + lastWord[lastWord.length - 1];
        setClinicState(tmp);
      }

    }
  }


  function calcDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  function handleClick(e) {
    handleMouseEnter(e);
    setCanChangeSidebar(!canChangeSidebar);
  }


  function calcDistance1(lat1, lon1, lat2, lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    if (d > 1) return Math.round(d);
    else if (d <= 1) return Math.round(d * 1000);
    return d;
  }

  function bring_to_front(target_elem) {
    const all_z = [];
    document.querySelectorAll("*").forEach(function (elem) {
      all_z.push(elem.style.zIndex)
    })
    const max_index = Math.max.apply(null, all_z.map((x) => Number(x)));
    const new_max_index = max_index + 1;
    target_elem.style.zIndex = new_max_index;
  }

  /*
  function getCity(){
    if(lat!==39.8282 && long!==-98.5795){
  axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4`)
  .then(responseArr => {
    setCityNames(responseArr.data.results);
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
    }
}
*/
  const iconBase = "https://www.clipartmax.com/png/middle/297-2978379_doctor-symbol-clipart-hospital-hospital-location-icon.png"


  let allLocations = allData.map((data, i) => {
    if (allData.length > 0) {
      return (
        <div
          key={i}
          lat={data.geometry.location.lat}
          lng={data.geometry.location.lng}
        >
          <div className="marker-image d-flex"
            state={data.plus_code.compound_code}
            rating={data.rating}
            address={data.formatted_address}
            lat={data.geometry.location.lat}
            long={data.geometry.location.lng}
          >
            <div class="details d-flex">
              <div class="containerIcon">
                <div class="block my-auto">
                  <p className="loc-name"> {data.name} </p>
                  {
                    canChangeSidebar ?
                      <p class="loc-add"> Click to lock info to sidebar</p> :
                      <p class="loc-add"> Click to unlock info on sidebar</p>
                  }

                </div>
              </div>
            </div>
            <img src={markerImage} class="theImg" onMouseEnter={handleMouseEnter} onClick={handleClick} />

          </div>
        </div>
      );
    }
  });



  return (
    <div className="container">
      <div className="row flex-md-row-reverse align-items-center py-3">
        <div class="col-md-8 mt-8 mt-md-0 mapContainer ">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyABwhex9_657N1iBjfVgYt3kA1zus0evx4" }}
            center={{ lat: lat, lng: long }}
            zoom={defaultProps.zoom}
          >
            {allLocations}
          </GoogleMapReact>
        </div>

        <div class="col-md-4 px-4">
          <div class="container-fluid">
            {clinicName ?
              <div>
                {
                  canChangeSidebar ?
                    <></> :
                    <div className="justify-content-center my-1">
                      <div class="lockOrUnlocked" />
                    </div>
                }
                <MapSidebar
                  name={clinicName}
                  address={clinicAdd}
                  rating={clinicRating}
                  state={clinicState}
                />
              </div>
              :
              <div id="welcomeSideBar">
                <h3 class="mb-2">welcome</h3>
                <CurrentLocation lat={lat} setLat={setLat} long={long} setLong={setLong} />
                <p class="mt-2">Hover over clinics to get more information</p>
              </div>
            }

          </div>
        </div>

      </div>
    </div>

  );
}

export default Map
