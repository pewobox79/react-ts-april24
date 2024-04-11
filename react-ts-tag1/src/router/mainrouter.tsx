import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUsPage";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import SingleUser from "../components/Users/components/SingleUser";
import LoginPage from "../pages/LoginPage";
import RegisterForm from "../components/Forms/RegisterForm";
import Employees from "@/components/Employees";
import Dashboard from "@/components/Dashboard";
import ProtectedRoutes from "@/layouts/ProtectedRoutes";
import FinanceSheet from "@/components/FinanceSheet";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterForm />} />

            <Route path="employees">
                <Route index element={<Employees/>}/>
            </Route>
            
            <Route path="dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="finance" element={<FinanceSheet/>}/>
            </Route>

            <Route path="users">
                <Route index element={<UsersPage/>} errorElement={<h3>fehler in der komponente</h3>}/>
                <Route path=":id" element={<SingleUser/>}/>
            </Route>

            <Route path="*" element={<h1>Error page</h1>}/>

        </Route>
    )
)