import axios from "axios"

export const api = axios.create({
    baseURL: "http://SEUIP:3333",
    timeout: 700
})