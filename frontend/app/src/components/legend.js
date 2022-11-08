import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Map.css';
import markerImage from '../Images/marker.png';
import contraImage from '../Images/contra-marker.png';
import StarOutline from '../Images/starwoutline.png';

const Legend = props => {

    return (
        <>
            <div id="legend" className="align-items-center justify-content-center">
                <img src={StarOutline} className="legendStarPic" />
                <h7 className="legendText">= Current Location</h7>
                <img src={markerImage} className="legendPic" />
                <h7 className="legendText">= Abortion Clinic</h7>
                <img src={contraImage} className="legendPic" />
                <h7 className="legendText">= Sells Contraceptives</h7>
            </div>
        </>
    )
}

export default Legend;
