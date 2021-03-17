import React from 'react'
import image from '../LandingPage/Layer3.png'

export default function Advantage() {
    return (
        <div className="main">
            <h1>Why Choose us</h1>
            <div className="sub-main">
                <div className="illustration">
                    <img src={image}></img>
                </div>
                <div className="reasons">
                    <div className="reason-card">
                        <h1>1</h1>
                        <h3>Enjoy Our Amazing Investment Offering</h3>
                        <p>With as low as 100,000, you can take advantage of our investment opportunities
                             and make your money work for you.</p>

                    </div>
                    <div className="reason-card">
                        <h1>2</h1>
                        <h3>Earn as much as 15% per annum</h3>
                        <p>Get the best-of-market returns by investing your funds in our low-risk fixed deposit investment.</p>

                    </div>
                    <div className="reason-card">
                        <h1>3</h1>
                        <h3>Manage your investment</h3>
                        <p>You can track and manage your interest and investment in properly as an ivestor with our real time-time
                        investment portal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
