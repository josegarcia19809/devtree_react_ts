
import api from "../config/axios.ts";
import {isAxiosError} from "axios";


export async function getUser() {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
        const {data} = await api("/user",{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return data

    } catch (err) {
        if (isAxiosError(err) && err.response) {
           throw new Error(err.response.data.error)
        }
    }
}