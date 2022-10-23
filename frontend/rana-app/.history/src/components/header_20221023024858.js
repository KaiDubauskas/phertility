import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';


const Header = () => {
    return (
        <nav class="sticky-top py-3 py-lg-7 bg-">
            <div class="d-block">
                <div class="container">
                    <div class="container-fluid d-inline-flex flex-column flex-md-row align-items-center justify-content-between pt-2 pb-3 brdr">
                        <div class="col-5 logo-title">
                            Phertility
                        </div>
                        {/* <div class="container-fluid"> */}
                        <div class="container-fluid col-7 text-end d-inline-flex flex-column">
                            {/* <div class=""> */}
                            <h6>Get Started</h6>
                            <Link to={{
                                pathname: `/states`,

                            }}>
                            <h6>View States</h6>
                
                            </Link>
                            {/* </div> */}
                        {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;