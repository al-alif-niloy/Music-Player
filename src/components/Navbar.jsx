import {Link} from "react-router";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className="brand-link" to="/">
                Music Player
                </Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>All Songs</Link>
                 <Link to="/playLists"className={`nav-link ${location.pathname === "/playLists" ? "active" : ""}`}>
                 PlayLists
                 </Link>

            </div>
        </nav>
    );
};