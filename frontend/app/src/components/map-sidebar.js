import React, { useEffect, useState, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import CurrentLocation from './CurrentLocation.js';
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { PropaneRounded } from "@mui/icons-material";
import '../Map.css';

const MapSidebar = props => {

    return (
        <>
            <h3 class="mb-3">{props.name}</h3>
            <h4 class="my-3">Address: {props.address}</h4>
            <h5>Rating: {props.rating}/5</h5>
            <h5 className="mt-3">This location is in {props.state}. Click {' '}
                <Link to={{
                    pathname: `/states`,
                }} state={props.state}
                    style={{ textDecoration: 'none' }}
                >
                    here
                </Link>{' '}
                to view {props.state}'s policies regarding abortion</h5>
        </>
    )
}

export default MapSidebar;
