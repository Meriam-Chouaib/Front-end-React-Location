import React from "react";
import './RegisterForm.scss'
import Input from "../input/Input";
import {useEffect, useState} from "react";
import {User, UserloginProps} from "../../interfaces/User";
import axios from "axios";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import AuthService from "../../services/auth.service";
import {useNavigate} from "react-router-dom";
import {validationSchema} from "../validationInputs/ValidateFormLogin";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import {STRINGS} from "../../core/enums/strings";

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();
    const [initalState, setInitalState] = useState<User>({
        username: "",
        email: "",
        password: "",

        role: ["user"]
    })
    const [user, setUser] = useState<User>(initalState);
    const handleChange = (e: any): void => {
        setUser((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            })
        );


    }
    const onSubmitHandler = async (e: any) => {
        e.preventDefault()
        console.log("from submiting", user)
        // const data: User = {
        //     username: user.username,
        //     email:user.email,
        //     password: user.password,
        //
        //     role:user.role
        // }
        // console.log("data is : " + data + "user is :"+user)

        try {

            const res = await axios.post(`http://localhost:5000/api/auth/signup`,
                user,
            )
            console.log(res.data);


        } catch (e) {
            console.log(e)
        }



    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 pt-3 form-signup">
                        <Formik initialValues={initalState} onSubmit={onSubmitHandler}
                                validationSchema={validationSchema}>

                            {({resetForm}) => (

                                <Form className="annonce-form"
                                      onSubmit={(e) => onSubmitHandler}
                                >
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">
                                            {STRINGS.SIGNUP.EMAIL}

                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            value={user.email}
                                            onChange={(e: any) => handleChange(e)}
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="small"
                                            className="text-danger"
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="username">
                                            {STRINGS.SIGNUP.USERNAME}
                                        </label>
                                        <Field
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="form-control"
                                            value={user.username} placeholder={"Username"}
                                            onChange={(e: any) => handleChange(e)}
                                        />
                                        <ErrorMessage
                                            name="username"
                                            component="small"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">
                                            {STRINGS.SIGNUP.PASSWORD}
                                        </label>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control"
                                            value={user.password} placeholder={"Password"}
                                            onChange={(e: any) => handleChange(e)}

                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="small"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="confirmPassword">
                                            {STRINGS.SIGNUP.CONFIRM}
                                        </label>
                                        <Field
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="confirmPassword"
                                            component="small"
                                            className="text-danger"
                                        />
                                    </div>
                                    <div className="form-group d-flex justify-content-end gap-3">
                                        <div className="form-group form-check mb-5">
                                            <Field
                                                name="acceptTerms"
                                                type="checkbox"
                                                className="form-check-input"
                                                id={"checkbox-id"}
                                            />
                                            <label
                                                htmlFor="acceptTerms"
                                                className="form-check-label"
                                            >
                                                {STRINGS.SIGNUP.CONFIRM}
                                            </label>
                                            <ErrorMessage
                                                name="acceptTerms"
                                                component="small"
                                                className="text-danger d-block"
                                            />
                                        </div>
                                    </div>
                                        <div className="form-group d-flex justify-content-end gap-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary disabled "
                                                onClick={onSubmitHandler}
                                                id={"signup-btn"}

                                            >
                                                {STRINGS.SIGNUP.BTNREGISTER}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => resetForm}
                                                className="btn btn-danger"
                                            >
                                                {STRINGS.SIGNUP.CANCEL}
                                            </button>
                                        </div>

                                </Form>

                            )}


                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegisterForm