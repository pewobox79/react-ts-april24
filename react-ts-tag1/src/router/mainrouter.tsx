import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUsPage";
import MainLayout from "../layouts/MainLayout";
import Employees from "../components/Employees";
import UsersPage from "../pages/UsersPage";
import SingleUser from "../components/Users/components/SingleUser";
import LoginPage from "../pages/LoginPage";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="login" element={<LoginPage/>}/>

            <Route path="employees">
                <Route index element={<Employees/>}/>
            </Route>

            <Route path="users">
                <Route index element={<UsersPage/>} errorElement={<h3>fehler in der komponente</h3>}/>
                <Route path=":id" element={<SingleUser/>}/>
            </Route>

            <Route path="*" element={<h1>Error page</h1>}/>

        </Route>
    )
)