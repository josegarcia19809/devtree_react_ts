import {Link} from "react-router-dom";

function LoginView() {
    return (
        <>
            <div className="text-3xl font-bold text-white text-center mb-6">
                Ingresa
            </div>

            <nav className="mt-6 text-center">
                <Link
                    to="/auth/register"
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                    ¿No tienes cuenta? Crea una aquí
                </Link>
            </nav>
        </>
    );
}

export default LoginView;
