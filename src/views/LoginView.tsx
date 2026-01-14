import {Link} from "react-router-dom";

function LoginView() {
    return (
        <>
            <div>
                Ingresa
            </div>
            <nav>
                <Link to="/auth/register">
                    ¿No tienes cuenta? Crea una aquí
                </Link>
            </nav>
        </>
    );
}

export default LoginView;