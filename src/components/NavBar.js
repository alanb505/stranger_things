import {Link} from "react-router-dom"

const NavBar = () => { 
    return (
     <nav className="flex-nav">
        <div>
            <Link to="/">Home</Link>
        </div>
        <div className="flex-nav-links">
        <Link to="/register">register</Link>
        <Link to="/login">log in</Link>
        <Link to="/logout">log out</Link>
        <Link to="/posts">posts</Link>
        </div>

    </nav>)
}

export default NavBar