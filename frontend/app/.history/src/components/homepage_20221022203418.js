import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import { WomenHomepage } from '../images';
// import Map from "./map.js"


const Homepage = () => {
    return (
        <header class="container align-items-center float-xxl-none bg-">
            <div class="row flex-md-row-reverse bg- jumbot align-items-center">
                <div class="col-md-6 px-4">
                    {/* <img src={WomenHomepage} alt="" class="w-100" /> */}
                </div>
                <div class="col-md-6 mt-8 mt-md-0">
                    <h1 class="display-3 mb-3">
                        Increasing access to women's healthcare
                    </h1>
                    <p class="mb-8 fs-2">
                        Use our service to find clinic locations near you and see if you qualify for an abortion based on your state's laws.
                    </p>
                    <Link to={{
                        pathname: `/map`,

                    }}>
                        <button type="button" class="btnStart">Get Started</button>
                    </Link>
                </div>


            </div>

        </header>
    )
}

export default Homepage;