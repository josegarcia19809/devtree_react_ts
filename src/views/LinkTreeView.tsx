import {useState} from "react";
import {social} from "../data/social.ts";
import DevTreeInput from "../components/DevTreeInput.tsx";
import * as React from "react";


const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social)

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        console.log(e.target.name)
    }
    return (
        <>
            <div className="space-y-3">
                {devTreeLinks.map((item) => (
                    <DevTreeInput
                        key={item.name}
                        item={item}
                        handleUrlChange={handleUrlChange}/>
                ))}
            </div>
        </>
    )
}

export default LinkTreeView