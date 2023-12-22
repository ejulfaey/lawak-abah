import axios from "axios";

export const apiService = axios.create({
    baseURL: process.env.NEXT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
