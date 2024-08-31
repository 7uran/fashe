import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const ScrollButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showScrollButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 hover:bg-main transition bg-[#787878] opacity-95 text-white p-2 rounded-md shadow-lg hover:bg-opacity-80 transition"
            >
                <MdKeyboardDoubleArrowUp size={24} />
            </button>
        )
    );
};

export default ScrollButton;
