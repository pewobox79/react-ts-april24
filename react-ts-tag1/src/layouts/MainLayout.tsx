import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

type ChildrenType={
    children?: React.ReactElement[] | React.ReactElement
}
const MainLayout = ({ children }:ChildrenType) => {

    return <div>
        <Header />
        {children}
        <Outlet/>
        <Footer />
    </div>
}
export default MainLayout