import {Link} from "react-router-dom";

function HomeNavigation() {
    return (
        <>
        <Link
            className="text-white p-2 uppercase font-black text-xs cursor-pointer"
            to="/auth/login">Iniciar sesión</Link></>
    );
}

export default HomeNavigation;