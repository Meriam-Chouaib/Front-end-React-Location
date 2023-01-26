import React, {useEffect, useState} from "react";
import {UserloginProps} from "../../interfaces/User";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import FormLogin from "../../components/formLogin/FormLogin";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const LoginPage: React.FC = () => {
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


    const onSubmitLoginUser = async (e: any) => {
        e.preventDefault()
        console.log("i'm gonna work now!")

        const data: UserloginProps = {
            username: user.username,
            password: user.password
        }
        console.log("data" + data)

        try {
            // AuthService.login(data.username,data.password).then((res) => {
            //     console.log(res);
            //     if (res.status === 200) {
            //   navigate("home")
            //     }
            // });
            const userLoged = await axios.post(`http://localhost:5000/api/auth/signin`,
                data,
            )
            console.log(userLoged.data);


        } catch (e) {
            console.log(e)
        }


    }
    const connect = (e: any) => {
        e.preventDefault()
        console.log("i'm gonna work now!")
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
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 pt-3">
                        <FormLogin onSubmitLoginUser={onSubmitLoginUser}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}
export default LoginPage
