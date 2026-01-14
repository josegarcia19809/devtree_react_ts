import { Link } from "react-router-dom";

function RegisterView() {
    return (
        <>
            {/* Título */}
            <h1 className="text-3xl font-bold text-white text-center mb-6">
                Crear cuenta
            </h1>



            {/* Navegación */}
            <nav className="mt-6 text-center">
                <span className="text-slate-400 text-sm">
                    ¿Ya tienes cuenta?{" "}
                </span>
                <Link
                    to="/auth/login"
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                    Inicia sesión
                </Link>
            </nav>
        </>
    );
}

export default RegisterView;
