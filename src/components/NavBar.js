import React from 'react'


import {

    Link
} from "react-router-dom";

const NavBar = () => {




    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://www.iitp.ac.in/index.php/en-us/" target="_blank">IIT Patna</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://njackwinterofcode.github.io/" target="_blank">NWoC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.codepeak.tech/" target="_blank">CodePeak</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <Link className="navbar-brand mx-auto" to="/">NJACK</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
