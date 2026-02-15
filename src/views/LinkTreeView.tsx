import {useState} from "react";
import {social} from "../data/social.ts";
import DevTreeInput from "../components/DevTreeInput.tsx";
import * as React from "react";
import {isValidUrl} from "../utils";
import {toast} from "sonner";


const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social)

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
            </div>
        </>
    )
}

export default LinkTreeView