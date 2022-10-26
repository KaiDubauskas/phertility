import React, { useEffect, useState, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import CurrentLocation from '../CurrentLocation.js';
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { PropaneRounded } from "@mui/icons-material";

const MapSidebar = props => {

    return (
        <>
            <h3 class="mb-3">{props.name.innerHTML}</h3>
            <h4 class="my-3">Address: {props.address.innerHTML}</h4>
            <h5>Rating: {props.rating}/5</h5>
            <h5>This clinic is in {props.state}. Click {' '}

                <Link to={{
                    pathname: `/states`,
                }} state={props.state}
                >
                    here
                </Link>{' '}
                to view {props.state}'s policies regarding abortion</h5>
        </>
    )
}

export default MapSidebar;
