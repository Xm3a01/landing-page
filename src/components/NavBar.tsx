import {TfiAlignJustify} from "react-icons/tfi";
import {useEffect, useState} from "react";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`px-5 sticky top-0 z-50 transition-colors duration-300,
            ${scrolled ? 'bg-white border-b' : 'bg-[#f4f6f8]'}`
        }>
            <div className="flex justify-between pt-6 pb-4 lg:px-72">
                <h1 className="text-2xl font-semibold font-sans">Mohamed</h1>
                <div className="block lg:hidden border-gray-300 border p-1 rounded-lg shadow">
                    <TfiAlignJustify className="w-8 h-7 text-gray-500"/>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-x-4 font-semibold">
                        <li>About</li>
                        <li>Service</li>
                        <li>Skill</li>
                        <li>Service</li>
                        <li>Skill</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;