import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function GoToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ zIndex: 1000 }}
        >
            <FaArrowUp size={20} />
        </button>
    );
}

export default GoToTopButton;