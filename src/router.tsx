import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginView from "./views/LoginView.tsx";
import RegisterView from "./views/RegisterView.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginView/>}/>
                    <Route path='/auth/register' element={<RegisterView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;