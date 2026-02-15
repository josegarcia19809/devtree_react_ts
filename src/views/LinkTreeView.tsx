import {useEffect, useState} from "react";
import {social} from "../data/social.ts";
import DevTreeInput from "../components/DevTreeInput.tsx";
import * as React from "react";
import {isValidUrl} from "../utils";
import {toast} from "sonner";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateProfile} from "../api/DevTreeAPI.ts";
import type {SocialNetwork, User} from "../types";


const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social)
    const queryClient = useQueryClient();
    const user: User = queryClient.getQueryData(['user'])!

    const {mutate} = useMutation({
        mutationFn: updateProfile,
        onError: (err) => {
            toast.error(err.message)
        },
        onSuccess: () => {
            toast.success("Actualizado com sucesso!")
        }
    })

    useEffect(() => {
        const updatedData = devTreeLinks.map(item => {
            const userLink = JSON.parse(user.links)
                .find((link: SocialNetwork) => link.name === item.name)
            if (userLink) {
                return {...item, url: userLink.url, enabled: userLink.enabled}
            }
            return item
        })
        setDevTreeLinks(updatedData)
    }, [])


    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedLinks = devTreeLinks.map((link) => link.name === e.target.name ? {
            ...link,
            url: e.target.value
        } : link);

        setDevTreeLinks(updatedLinks);

        queryClient.setQueryData(['user'], (prevData: User) => {
            return {
                ...prevData,
                links: JSON.stringify(updatedLinks)
            }
        })
    }

    const handleEnableLink = (socialNetwork: string) => {
        const updatedLinks = devTreeLinks.map((link) => {
            if (link.name === socialNetwork) {
                if (isValidUrl(link.url)) {
                    return {...link, enabled: !link.enabled,}
                } else {
                    toast.error("URL no válida")
                }
            }
            return link
        });
        setDevTreeLinks(updatedLinks);
        queryClient.setQueryData(['user'], (prevData: User) => {
            return {
                ...prevData,
                links: JSON.stringify(updatedLinks)
            }
        })
    }

    return (
        <>
            <div className="space-y-3">
                {devTreeLinks.map((item) => (
                    <DevTreeInput
                        key={item.name}
                        item={item}
                        handleUrlChange={handleUrlChange}
                        handleEnableLink={handleEnableLink}
                    />
                ))}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                                 py-2 px-6 rounded-xl shadow-md w-full
                                 transition duration-300 ease-in-out
                                 transform hover:scale-105 active:scale-95"
                    onClick={() => mutate(user)}
                >
                    Guardar
                </button>
            </div>
        </>
    )
}

export default LinkTreeView