import axios from "axios";

const HttpClient = axios.create({
    baseURL: "http://localhost:3030/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});

export default HttpClient;