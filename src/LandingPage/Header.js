import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import growth from "../LandingPage/HeroImage.png";

export default function Header() {
    return (
        <div className="header-body">
            <div className="header-subBody">
                <div className="header-card1">
                    <h1>GROW YOUR WEALTH WITH MKOBO</h1>
                    <p>Earn fantastic return of up to <span>15%</span> per annum with the<span> High Yield Premiun Account</span>
                    (HYPA). HYPA is designed for investors looking to put their money to work in a safe and secure investment.</p>
                    <button style={{ fontSize: "1rem" }} type="button" className="btn btn-outline-none">Start Investing</button>
                </div>
                <div className="header-card2">
                    <img src={growth}></img>
                </div>
            </div>
        </div>
    )
}
