import {Link} from "react-router-dom";

function Logo() {
    return (
        <>
            <Link
                className="w-full block"
                to="/">
                <img src="/logo.svg" className="w-full block" alt="logo"/>
            </Link></>
    );
}

export default Logo;