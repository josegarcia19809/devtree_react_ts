
import api from "../config/axios.ts";
import {isAxiosError} from "axios";
import type {ProfileForm, User} from "../types";


export async function getUser() {
    try {
        const {data} = await api<User>("/user")
        return data

    } catch (err) {
        if (isAxiosError(err) && err.response) {
           throw new Error(err.response.data.error)
        }
    }
}

export async function updateProfile(formData: ProfileForm) {
    try {
        const {data} = await api.patch<string>("/user", formData);
        return data

    } catch (err) {
        if (isAxiosError(err) && err.response) {
            throw new Error(err.response.data.error)
        }
    }
}