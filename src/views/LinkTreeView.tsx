import {useState} from "react";
import {social} from "../data/social.ts";


const LinkTreeView = () => {
  const [devTreeLinks, setDevTreeLinks] = useState(social)
  return (
    <div>LinkTreeView</div>
  )
}

export default LinkTreeView