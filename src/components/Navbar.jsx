import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
    };

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const menuItems = [
        { title: 'Home', path: '/' },
        { title: 'Our Product', path: '/products' },
        {
            title: 'Company Projects',
            submenu: [
                { title: 'Industrial Automation', path: '/automation' },
                { title: 'Robotics Solutions', path: '/robotics' },
                { title: 'Warehouse Systems', path: '/warehouse' },
                { title: 'All Projects', path: '/projects' },
                { title: 'About Company', path: '/company' }
            ]
        },
        { title: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full px-8 py-4 md:px-16 md:py-6 flex justify-between items-center bg-white/70 backdrop-blur-md z-50 border-b border-gray-200 transition-all shadow-sm">
            <div className="text-2xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primary">
                <Link to="/">MECHNOTECHNO</Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 list-none items-center">
                {menuItems.map((item, index) => (
                    <li key={index} className="relative group">
                        {item.submenu ? (
                            <div className="group">
                                <button className="flex items-center gap-1 text-gray-600 uppercase tracking-widest text-sm font-medium transition-all duration-300 hover:text-black group-hover:text-primary cursor-pointer">
                                    {item.title}
                                    <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                {/* Dropdown */}
                                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl mt-4 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={subItem.path}
                                            className="block px-6 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors text-sm font-medium"
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                to={item.path}
                                className="text-gray-600 uppercase tracking-widest text-sm font-medium transition-all duration-300 hover:text-black hover:drop-shadow-[0_0_10px_rgba(0,242,234,0.5)] relative group"
                            >
                                {item.title}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-900 hover:text-primary transition-colors">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Sidebar */}
            <div className={`fixed top-[74px] right-0 h-[calc(100vh-74px)] w-full md:w-1/3 min-w-[300px] bg-black/95 z-40 flex flex-col items-start justify-start pt-8 pl-12 gap-6 shadow-2xl transition-transform duration-300 md:hidden overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Close Button Inside Sidebar */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-6 text-white text-2xl hover:text-primary transition-colors"
                >
                    <FaTimes />
                </button>

                {menuItems.map((item, index) => (
                    <div key={index} className="w-full pr-12">
                        {item.submenu ? (
                            <div>
                                <button
                                    onClick={() => toggleSubmenu(index)}
                                    className="flex items-center justify-between w-full text-xl font-display uppercase tracking-widest text-white hover:text-primary transition-colors border-b border-white/10 pb-4 text-left"
                                >
                                    {item.title}
                                    <FaChevronDown className={`text-base transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`flex flex-col gap-4 mt-4 pl-4 border-l border-white/20 overflow-hidden transition-all duration-500 ${activeSubmenu === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={subItem.path}
                                            onClick={toggleMenu}
                                            className="text-gray-400 hover:text-white transition-colors text-lg"
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                to={item.path}
                                onClick={toggleMenu}
                                className="block text-xl font-display uppercase tracking-widest text-white hover:text-primary transition-colors hover:pl-2 duration-300 w-full text-left border-b border-white/10 pb-4"
                            >
                                {item.title}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
