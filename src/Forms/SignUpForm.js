import React from 'react';
import content from "./signUpdata"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import illustration from "./Layer.png"
import logo from "../LandingPage/logo.png"

export default function SignUpForm() {
    return (
        <div className="signUp-container">
            <div className="sub-container">
                <div className="signIn-illustration1">
                    <img src={logo} />
                    <img src={illustration} />
                </div>
                <div className="form-body2">
                    <h2>Create Account</h2>
                    <p className="BVN">We use your BVN to ensure that your account belong to you</p>
                    <div className="form">
                        {content.inputs.map((input, key) => {
                            return (
                                <div className="fContent" key={key}>
                                    <label for={input.label}>{input.label}</label>
                                    <input
                                        type={input.type}
                                        name={input.name}
                                    />
                                </div>
                            )
                        })}

                        <button type="button" className="btn btn-outline-none">Create Account</button>
                        <p>Already a User? <Link to="/loginform"><a>Log in</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}