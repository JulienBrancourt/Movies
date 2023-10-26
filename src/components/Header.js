import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={lien => lien.isActive ? "nav-active":""}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coups-de-coeur" className={lien => lien.isActive ? "nav-active":""}>Coups de coeur</NavLink>
                    </li>
                </ul>
            </nav>
        
            <h1>Films</h1>
        </div>
    );
};

export default Header;