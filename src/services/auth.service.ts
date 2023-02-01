import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {

    /*********************************************************Login user**********************************************************/
    login(username:string, password:string) {
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    /*********************************************************Logout user**********************************************************/
    logout() {
        localStorage.removeItem("user");
    }

    /*********************************************************register user**********************************************************/
    register(username:string, email:string, password:string) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    /*********************************************************get user connected**********************************************************/
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user") || '{}');;
    }
}

export default new AuthService();