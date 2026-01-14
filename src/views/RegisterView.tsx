import {Link} from "react-router-dom";

function RegisterView() {
    return (
        <>
            <div>
                Registrate
            </div>
            <nav>
                <Link to="/auth/login">
                    ¿Ya tienes cuenta? Inicia
                </Link>
            </nav>
        </>
    );
}

export default RegisterView;