import React from 'react';
import content from "./signIndata"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import illustration from "./Group.png"
import logo from "../LandingPage/logo.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    EmailAddress: yup.string().required("Enter a valid Email Address").email(),
    Password: yup.string().required("Password is required"),
})


export default function SignInForm() {
    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);
    console.log(errors)
    return (
        <div className="signIn-container">
            <div className="sub-container">
                <div className="signIn-illustration2">
                    <img src={logo} alt="" />
                    <img src={illustration} alt="" />
                </div>
                <div className="form-body1">
                    <h2>Log in</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        {content.inputs.map((input, key) => {
                            return (
                                <div className="fContent" key={key}>
                                    <>
                                        <label for={input.label}>{input.label}</label>
                                        <input
                                            type={input.type}
                                            name={input.name}
                                            ref={register}
                                        />
                                    </>
                                    <h6 className="error-message">{errors[input.name]?.message}</h6>
                                </div>
                            )
                        })}
                        <a href="#">Forgot password?</a>
                        <button type="submit" className="btn btn-outline-none" value="submit">Log in</button>
                        <p>Don't have an account? <Link to="signupform"><a>Create an account</a></Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
