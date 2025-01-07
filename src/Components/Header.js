import React, {useState, useEffect} from "react";
import image9 from "./images/image 9.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        if (menuVisible) {
        document.addEventListener('click', closeMenu);
        } else {
        document.removeEventListener('click', closeMenu);
        }

        return () => {
        document.removeEventListener('click', closeMenu);
        };
    }, [menuVisible]);

    const handleMenuClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div>
            <div className="header-css">
                <NavLink to="/" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Home
                </NavLink>
                <NavLink to="/tournaments" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Tournaments
                </NavLink>
                <NavLink to="/press-corner" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Press Corner
                </NavLink>
                <img src={image9} className="header-logo" alt="logo" />
                <NavLink to="/initiatives" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Initiatives
                </NavLink>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? "current-page" : ""}>
                    About Us
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? "current-page" : ""}>
                    Login
                </NavLink>
            </div>
            <div className="header2-css">
                <img src={image9} className="header-logo" alt="logo" />
                <p>Football Junction</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={(e) => { e.stopPropagation(); toggleMenu(); }}>
                    <path d="M5 17H19M5 12H19M5 7H19" stroke="#245069" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {menuVisible && (
                <div className="menu" onClick={handleMenuClick}>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/tournaments')}>Tournaments</li>
                        <li onClick={() => navigate('/press-corner')}>Press Corner</li>
                        <li onClick={() => navigate('/initiatives')}>Initiatives</li>
                        <li onClick={() => navigate('/about-us')}>About Us</li>
                        <li onClick={() => navigate('/login')}>Login</li>
                    </ul>
                </div>
            )}



        </div>
    );
}
