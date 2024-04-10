import { NavLink } from "react-router-dom"

const Navigation = () => {


    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </nav>
    )
}

export default Navigation
