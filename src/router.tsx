import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginView from "./views/LoginView.tsx";
import RegisterView from "./views/RegisterView.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import ProfileView from "./views/ProfileView.tsx";
import LinkTreeView from "./views/LinkTreeView.tsx";

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
            </Routes>
        </BrowserRouter>
    );
}

export default Router;