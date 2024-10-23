import axios from "axios";

const API_URL = "https://akademia108.pl/api/social-app/user";

const login = (username: string, password: string) => {
    return axios
    .post(`${API_URL}/login`, {
        username: username,
        password: password
    })
    .then((res) => res.data)
    .catch((err) => {
        console.error(err);
    })
}

const logout = () => {
    return axios
    .post(`${API_URL}/logout`)
    .then((res) => res.data)
    .catch((err) => {
        console.error(err);
    })
}

export default {login, logout};