
import api from "../config/axios.ts";
import {isAxiosError} from "axios";


export async function getUser() {
    try {
        const {data} = await api("/user")
        return data

    } catch (err) {
        if (isAxiosError(err) && err.response) {
           throw new Error(err.response.data.error)
        }
    }
}