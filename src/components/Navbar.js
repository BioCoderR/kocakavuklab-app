import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";

function NavBar() {
    const [click, setClick] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 960);
    const [linkDisabled] = useState(false); // Change this to false to enable the link
    const navbarRef = useRef(null);

    const handleClick = () => setClick(!click);

    // Close menu when clicking outside
    useEffect(() => {
        const closeMenu = (e) => {
            if (click && navbarRef.current && !navbarRef.current.contains(e.target)) {
                setClick(false);
            }
        };
        document.addEventListener("mousedown", closeMenu);
        return () => document.removeEventListener("mousedown", closeMenu);
    }, [click]);

    // Update state when window resizes
    useEffect(() => {
        const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 960);
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <nav ref={navbarRef} className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <NavLink to="/" className="nav-logo">
                    <img src="lablogowhite.svg" alt="Lab Logo" />
                </NavLink>

                {/* Hamburger Icon (Only on Small Screens) */}
                {isSmallScreen && (
                    <div className="nav-icon" onClick={handleClick} aria-label="Toggle Menu">
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                )}

                {/* Navbar Links with Correct Paths */}
                <ul className={`nav-menu ${click || !isSmallScreen ? "active" : ""}`}>
                    <li className="nav-item">
                        <NavLink to="/overview" className="nav-links" onClick={() => setClick(false)}>
                            Overview
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/members" className="nav-links" onClick={() => setClick(false)}>
                            Members
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/publications" className="nav-links" onClick={() => setClick(false)}>
                            Publications
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/network" className="nav-links" onClick={() => setClick(false)}>
                            Network
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/news" className="nav-links" onClick={() => setClick(false)}>
                            News
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        {linkDisabled ? (
                            <span className="nav-links text-gray-400 cursor-not-allowed">
                                Join Us
                            </span>
                        ) : (
                            <NavLink to="/joinus" className="nav-links" onClick={() => setClick(false)}>
                                Join Us
                            </NavLink>
                        )}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links" onClick={() => setClick(false)}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;