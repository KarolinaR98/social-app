import axios from "axios";

const API_URL = "https://akademia108.pl/api/social-app/post";

const getLatestPosts = () => {
    return axios
    .post(`${API_URL}/latest`)
    .then((res) => res.data)
    .catch((err) => {
        console.error(err);
    })
}

const getNextPosts = (latestPostDate: string) => {
    return axios
    .post(`${API_URL}/older-then`, {
        date: latestPostDate
    })
    .then((res) => res.data)
    .catch((err) => {
        console.error(err);
    })
}

export default {getLatestPosts, getNextPosts};