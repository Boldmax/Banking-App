import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../LandingPage/Ellipse2.png";
import image2 from "../LandingPage/Ellipse3.png";
import image3 from "../LandingPage/Ellipse4.png";

export default function Testimonies() {
    return (
        <div className="testimony-main">
            <h2>What our investors are saying</h2>
            <div className="content-position">
                <div className="testimony-prop">
                    <div className="testimony">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={image1} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <blockquote className="blockquote">
                                    <p class="card-text"><q>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</q></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <blockquote className="blockquote">
                                    <p class="card-text"><q>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</q></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <blockquote className="blockquote">
                                    <p class="card-text"><q>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</q></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
