import {useState} from "react";
import {social} from "../data/social.ts";
import DevTreeInput from "../components/DevTreeInput.tsx";


const LinkTreeView = () => {
    const [devTreeLinks, setDevTreeLinks] = useState(social)
    return (
        <>
            <div className="space-y-3">
                {devTreeLinks.map((item) => (
                    <DevTreeInput
                        key={item.name}
                        item={item}/>
                ))}
            </div>
        </>
    )
}

export default LinkTreeView