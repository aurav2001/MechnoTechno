import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { getCartCount, setIsCartOpen } = useCart();
    const cartCount = getCartCount();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchVal, setSearchVal] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
    };

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchVal.trim() !== '') {
            navigate(`/products?search=${encodeURIComponent(searchVal.trim())}`);
            setIsSearchOpen(false);
            setSearchVal('');
        }
    };

    const menuItems = [
        { title: 'Home', path: '/' },
        {
            title: 'Our Products',
            path: '/products',
            submenu: [
                { title: 'CNC Machining', path: '/cnc-machining', desc: 'Precision CNC machining solutions' },
                { title: 'Fabrication', path: '/fabrication', desc: 'Custom sheet metal fabrication' },
                { title: 'Special Purpose', path: '/special-purpose', desc: 'Specialized industrial equipment' }
            ]
        },
        { title: 'About Company', path: '/company' },
        { title: 'Contact', path: '/contact' }
    ];

    // Scroll-based class definitions (Always full width, smooth transition)
    const navClasses = isScrolled
        ? "fixed top-0 left-0 w-full px-8 py-3.5 md:px-16 flex justify-between items-center bg-white/95 border-b border-gray-200/80 backdrop-blur-md z-50 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out"
        : "fixed top-0 left-0 w-full px-8 py-5 md:px-16 flex justify-between items-center bg-white/70 border-b border-gray-100 backdrop-blur-md z-50 transition-all duration-300 ease-in-out";

    return (
        <>
            <nav className={navClasses}>
                {/* Brand Logo */}
                <div className="text-xl md:text-2xl font-display font-extrabold tracking-widest flex items-center gap-1.5 group select-none">
                    <Link to="/" className="flex items-center gap-1.5">
                        <span className="text-slate-900 group-hover:text-black transition-colors duration-300">MECHNO</span>
                        <span className="bg-gradient-to-r from-primary to-[#00c5be] bg-clip-text text-transparent group-hover:brightness-105 transition-all duration-300">TECHNO</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00f2ea]"></span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 list-none items-center m-0 p-0">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative group py-2">
                            {item.submenu ? (
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `uppercase tracking-widest text-[13px] font-bold transition-all duration-300 relative py-1.5 cursor-pointer ${
                                                isActive
                                                    ? 'text-primary drop-shadow-[0_0_5px_rgba(0,242,234,0.3)]'
                                                    : 'text-gray-600 hover:text-primary group-hover:text-primary'
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {item.title}
                                                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 shadow-[0_0_8px_#00f2ea] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                            </>
                                        )}
                                    </NavLink>
                                    <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180 text-gray-400 group-hover:text-primary" />
                                </div>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `uppercase tracking-widest text-[13px] font-bold transition-all duration-300 relative py-1.5 cursor-pointer ${
                                            isActive
                                                ? 'text-primary drop-shadow-[0_0_5px_rgba(0,242,234,0.3)]'
                                                : 'text-gray-600 hover:text-primary'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.title}
                                            <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 shadow-[0_0_8px_#00f2ea] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </>
                                    )}
                                </NavLink>
                            )}

                            {/* Dropdown Menu */}
                            {item.submenu && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                                    <div className="w-72 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-xl p-2 border border-gray-150 relative">
                                        <div className="flex flex-col gap-0.5 relative z-10">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.path}
                                                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors group/sub"
                                                >
                                                    <div className="font-semibold text-gray-800 group-hover/sub:text-primary transition-colors text-[13px] tracking-wide font-sans">
                                                        {subItem.title}
                                                    </div>
                                                    {subItem.desc && (
                                                        <div className="text-[11px] text-gray-500 font-normal mt-0.5">
                                                            {subItem.desc}
                                                        </div>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop Actions (Search + Cart + Phone) */}
                <div className="hidden md:flex items-center gap-3 relative">
                    {/* Search Trigger */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200 text-gray-750 hover:text-primary hover:border-primary/45 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm"
                            aria-label="Toggle Search"
                        >
                            {isSearchOpen ? <FaTimes className="text-xs" /> : <FaSearch className="text-xs" />}
                        </button>

                        {/* Search Popover */}
                        {isSearchOpen && (
                            <div className="absolute top-full right-0 mt-3 z-50 p-2.5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl border border-gray-150 w-64 animate-fadeIn">
                                <form onSubmit={handleSearchSubmit} className="flex items-center gap-1.5">
                                    <input
                                        type="text"
                                        placeholder="Search machines..."
                                        value={searchVal}
                                        onChange={(e) => setSearchVal(e.target.value)}
                                        className="flex-1 h-9 px-3 rounded-lg border border-gray-200 text-xs focus:border-primary focus:outline-none bg-gray-50/50"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        className="h-9 px-3.5 bg-slate-900 hover:bg-slate-950 text-white rounded-lg text-xs font-bold transition-colors"
                                    >
                                        Go
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Cart Trigger */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200 text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm group"
                        aria-label="Open Cart"
                    >
                        <FaShoppingCart className="text-sm text-gray-700 group-hover:text-primary transition-colors duration-300" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-secondary text-white font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white animate-[pulse_2s_infinite]">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Phone Trigger */}
                    <a
                        href="tel:+918130513030"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200 text-gray-700 hover:text-primary hover:border-primary/40 hover:bg-white transition-all duration-300 cursor-pointer shadow-sm"
                        aria-label="Call Us"
                        title="Call Us: +91 8130513030"
                    >
                        <FaPhoneAlt className="text-xs text-gray-700 hover:text-primary" />
                    </a>
                </div>

                {/* Mobile Actions Group */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200/50 text-gray-800 hover:text-primary transition-all duration-300 cursor-pointer"
                        aria-label="Open Cart"
                    >
                        <FaShoppingCart className="text-base" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-secondary text-white font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200/50 text-gray-900 hover:text-primary transition-colors cursor-pointer"
                        aria-label="Toggle Navigation Menu"
                    >
                        {isMenuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
                    </button>
                </div>

                {/* Mobile Drawer Overlay Backdrop */}
                {isMenuOpen && (
                    <div
                        onClick={toggleMenu}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                    />
                )}

                {/* Mobile Sidebar Drawer */}
                <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-slate-950 z-50 flex flex-col justify-between p-6 shadow-2xl transition-transform duration-300 md:hidden border-l border-white/10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                        <div className="text-lg font-display font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
                            MECHNOTECHNO
                        </div>
                        <button
                            onClick={toggleMenu}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white hover:text-primary hover:bg-white/10 transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Navigation list */}
                    <div className="flex-1 overflow-y-auto pr-2 py-2 flex flex-col gap-4">
                        {menuItems.map((item, index) => (
                            <div key={index} className="w-full">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => toggleSubmenu(index)}
                                            className="flex items-center justify-between w-full text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-primary transition-colors py-2.5 text-left border-b border-white/5"
                                        >
                                            {item.title}
                                            <FaChevronDown className={`text-xs transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180 text-primary' : 'text-gray-500'}`} />
                                        </button>
                                        <div className={`flex flex-col gap-2 pl-4 border-l border-white/10 mt-2 overflow-hidden transition-all duration-300 ${activeSubmenu === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.path}
                                                    onClick={toggleMenu}
                                                    className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <div className="font-semibold text-gray-300">{subItem.title}</div>
                                                    {subItem.desc && <div className="text-[11px] text-gray-500 font-normal mt-0.5">{subItem.desc}</div>}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={toggleMenu}
                                        className="block text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-primary transition-colors py-2.5 border-b border-white/5"
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Drawer Footer Contact details */}
                    <div className="border-t border-white/10 pt-4 mt-auto flex flex-col gap-3">
                        <a href="tel:+918130513030" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                            <FaPhoneAlt className="text-primary text-xs" />
                            <span className="text-xs font-semibold tracking-wider font-sans">+91 8130513030</span>
                        </a>
                        <div className="text-[11px] text-gray-500">
                            Email: info@mechnotechno.com
                        </div>
                        <div className="text-[11px] text-gray-500">
                            Address: NOIDA SEC-63, UP
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
