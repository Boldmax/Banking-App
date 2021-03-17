import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../LandingPage/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <div>
            <nav style={{ backgroundColor: "#fff" }} className="navbar navbar-expand-lg navbar-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" style={{ width: "8rem", height: "3.5rem", marginLeft: "-5rem", paddingLeft: "0" }} className="d-inline-block align-top" />

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-list text-primary" style={{ fontSize: "2.9rem" }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-auto">
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">FAQs</a>
                            <a className="nav-link" href="#">Blog</a>
                        </div>
                        <div className="nav-buttons">
                            <Link to="/loginform">
                                <button style={{ fontSize: "1.1rem" }} type="button" class="btn btn-outline-primary">Log in</button>
                            </Link>
                            <Link to="/dashboard">
                                <button style={{ fontSize: "1.1rem" }} type="button" class="btn btn-outline-primary">Start investing</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
