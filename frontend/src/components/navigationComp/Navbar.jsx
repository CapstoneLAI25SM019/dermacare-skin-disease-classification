import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-dermacare.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <NavLink to="/" className="logo-container" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Dermacare Logo" className="logo-image" />
                <span className="logo-text">Dermacare</span>
            </NavLink>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <NavLink
                    to="/"
                    end
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Beranda
                </NavLink>
                <NavLink
                    to="/prediksi"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Prediksi
                </NavLink>
                <NavLink
                    to="/artikel"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Artikel
                </NavLink>
                <NavLink
                    to="/tentangkami"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Tentang Kami
                </NavLink>
            </div>

            <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>

            {/* Optional overlay for background blur */}
            {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}
        </nav>
    );
};

export default Navbar;
