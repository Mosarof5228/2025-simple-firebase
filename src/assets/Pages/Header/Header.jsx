import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>This is header page</h2>
            <NavLink style={{"marginRight":"30px"}} to="login">Google Login</NavLink>
            <NavLink style={{"marginRight":"30px"}} to="">Home</NavLink>
            <NavLink to="/">Github Login</NavLink>
        </div>
    );
};

export default Header;