import React from 'react';
import content from "./signIndata"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import illustration from "./Group.png"
import logo from "../LandingPage/logo.png"

export default function SignInForm() {
    return (
        <div className="signIn-container">
            <div className="sub-container">
                <div className="signIn-illustration2">
                    <img src={logo} />
                    <img src={illustration} />
                </div>
                <div className="form-body1">
                    <h2>Log in</h2>
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
                        <a href="#">Forgot password?</a>
                        <button type="button" className="btn btn-outline-none">Log in</button>
                        <p>Don't have an account? <Link to="signupform"><a>Create an account</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
