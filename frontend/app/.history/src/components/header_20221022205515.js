import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';


const Header = () => {
    return (
        <nav class="sticky-top py-3 py-lg-7 bg-">
            <div class="d-block">
                <div class="container">
                    <div class="row align-items-center justify-content-between pt-2 pb-3 brdr">
                        <div class="col-5 logo-title">
                            Phertility
                        </div>
                        <div class="col-7 text-end">
                            Get Started
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;