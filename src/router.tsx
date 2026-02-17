import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginView from "./views/LoginView.tsx";
import RegisterView from "./views/RegisterView.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import ProfileView from "./views/ProfileView.tsx";
import LinkTreeView from "./views/LinkTreeView.tsx";
import HandleView from "./views/HandleView.tsx";
import NotFoundView from "./views/NotFoundView.tsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginView/>}/>
                    <Route path='/auth/register' element={<RegisterView/>}/>
                </Route>
                <Route path="/admin" element={<AppLayout/>}>
                    <Route path="profile" element={<ProfileView/>}/>
                    <Route index={true} element={<LinkTreeView/>}/>
                </Route>

                <Route path="/:handle" element={<AuthLayout/>}>
                    <Route element={<HandleView/>} index={true}/>
                </Route>

                <Route path="/404" element={<AuthLayout/>}>
                    <Route element={<NotFoundView/>} index={true}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;