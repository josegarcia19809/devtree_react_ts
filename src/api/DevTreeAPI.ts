import api from "../config/axios.ts";
import {isAxiosError} from "axios";
import type { User} from "../types";


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

export async function updateProfile(formData: User) {
    try {
        const {data} = await api.patch<string>("/user", formData);
        return data

    } catch (err) {
        if (isAxiosError(err) && err.response) {
            throw new Error(err.response.data.error)
        }
    }
}

export async function uploadImage(file: File) {
    let formData = new FormData();
    formData.append("file", file);
    try {
        const {data: {image}}: {
            data: { image: string }
        } = await api.post("/user/image", formData);
        return image;
    } catch (err) {
        if (isAxiosError(err) && err.response) {
            throw new Error(err.response.data.error)
        }
    }
}