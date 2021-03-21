import React from 'react';
import content from "./signUpdata"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import illustration from "./Layer.png"
import logo from "../LandingPage/logo.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    BVN: yup.string().required("BVN is required").matches(/^[0-9]+$/, "Enter a valid BVN").min(11, "Enter a valid BVN").max(11),
    EmailAddress: yup.string().required("Enter a valid Email Address").email(),
    Password: yup.string().required("Password is required").min(8, 'Must be at least 8 character'),
    PasswordConfirm: yup.string().oneOf([yup.ref('Password'), null], 'Password does not match').required("Confirm password"),
})


export default function SignUpForm() {
    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);
    console.log(errors)
    return (
        <div className="signUp-container">
            <div className="sub-container">
                <div className="signIn-illustration1">
                    <img src={logo} alt="" />
                    <img src={illustration} alt="" />
                </div>
                <div className="form-body2">
                    <h2>Create Account</h2>
                    <p className="BVN">We use your BVN to ensure that your account belong to you. <br />(Dial *565*0# to view BVN)</p>
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

                        <button type="submit" className="btn btn-outline-none" value="submit">Create Account</button>
                        <p>Already a User? <Link to="/loginform"><a>Log in</a></Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}