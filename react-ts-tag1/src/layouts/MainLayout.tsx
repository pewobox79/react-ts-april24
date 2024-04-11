import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useSearchParams } from "react-router-dom";
import { UserContext } from '../store/context';
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


type ChildrenType = {
    children?: React.ReactElement[] | React.ReactElement
}
const MainLayout = ({ children }: ChildrenType) => {

    const client = new QueryClient();

    const [userState, setUserState] = useState({
        isLogged: false,
        permissions: ["dashboard", "finance"]
    });

    return <div>
        <QueryClientProvider client={client}>
            <UserContext.Provider value={{ userState, setUserState }}>
                <Header />
                {children}
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </QueryClientProvider>
    </div>
}
export default MainLayout