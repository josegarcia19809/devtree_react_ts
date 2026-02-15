import {useState} from "react";
import {social} from "../data/social.ts";
import DevTreeInput from "../components/DevTreeInput.tsx";
import * as React from "react";
import {isValidUrl} from "../utils";
import {toast} from "sonner";
import {useMutation} from "@tanstack/react-query";
import {updateProfile} from "../api/DevTreeAPI.ts";


const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social)

    const {mutate} = useMutation({
        mutationFn: updateProfile,
        onError: (err) => {
            toast.error(err.message)
        },
        onSuccess: () => {
            toast.success("Actualizado com sucesso!")
        }
    })


    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedLinks = devTreeLinks.map((link) => link.name === e.target.name ? {
            ...link,
            url: e.target.value
        } : link);

        setDevTreeLinks(updatedLinks);
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
         transform hover:scale-105 active:scale-95">
                    Guardar
                </button>
            </div>
        </>
    )
}

export default LinkTreeView