
import api from "../config/axios.ts";
import {isAxiosError} from "axios";


export async function getUser() {
    try {
        const {data} = await api("/user")
        console.log(data)

    } catch (err) {
        if (isAxiosError(err) && err.response) {
            console.log(err.response.data.error)
        }
    }
}