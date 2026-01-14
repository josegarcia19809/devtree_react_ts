import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

function RegisterView() {

    const {register, watch, handleSubmit, formState: {errors}} = useForm()
    return (
        <>
            {/* Título */}
            <h1 className="text-3xl font-bold text-white text-center mb-6">
                Crear cuenta
            </h1>

            <form
                onSubmit={() => {
                }}
                className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
            >
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu Nombre"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="email"
                           className="text-2xl text-slate-500">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="handle"
                           className="text-2xl text-slate-500">Handle</label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="Nombre de usuario: sin espacios"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password"
                           className="text-2xl text-slate-500">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password_confirmation"
                           className="text-2xl text-slate-500">Repetir Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                </div>

                <input
                    type="submit"
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'
                />
            </form>


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
