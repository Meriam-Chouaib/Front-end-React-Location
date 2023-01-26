import React, {useEffect, useState} from "react";
import {IPropsFomLogin, UserloginProps} from "../../interfaces/User";
import axios from "axios";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import AuthService from "../../services/auth.service";
import {useNavigate} from "react-router-dom";
import {validationSchema} from "../validationInputs/ValidateFormLogin";
import {STRINGS} from "../../core/enums/strings";


const FormLogin: React.FC<IPropsFomLogin> = ({onSubmitLoginUser}) => {
    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();
    const [initalState, setInitalState] = useState<UserloginProps>({
        username: "",
        password: "",
        loading: true,
        message: ""
    })
    const [user, setUser] = useState<UserloginProps>(initalState);
    const handleChange = (e: any): void => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    }

    const resetForm = () => {
        setInitalState({
            username: "",
            password: "",
            loading: true,
            message: ""
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 pt-3">


                        <Formik initialValues={initalState} onSubmit={onSubmitLoginUser}
                                validationSchema={validationSchema}>

                            {({resetForm}) => (

                                <Form className="annonce-form"
                                      onSubmit={(e) => onSubmitLoginUser}
                                >

                                    <div className="form-group mb-3">
                                        <label htmlFor="username">
                                            {STRINGS.SIGNIN.USERNAME}

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
                                            {STRINGS.SIGNIN.PASSWORD}
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

                                    <div className="form-group d-flex justify-content-end gap-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={onSubmitLoginUser}
                                        >
                                            {STRINGS.SIGNIN.BTNCONNECT}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => resetForm}
                                            className="btn btn-danger"
                                        >
                                            {STRINGS.SIGNIN.CANCEL}
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
export default FormLogin
