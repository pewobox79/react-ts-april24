import { UserContext } from "@/store/context"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
    
 const user = useContext(UserContext)

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <><Outlet/></>
}

export default ProtectedRoutes
