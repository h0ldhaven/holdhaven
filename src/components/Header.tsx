import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwitchButton from './reusable-ui/SwitchButton';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const menuItems = [
        { label: 'Accueil', to: '/' },
        { label: 'À propos', to: '/legal' },
        { label: 'Projets', to: '/projects' },
        { label: 'Contact', to: '/contact' }
    ];

    const renderMenu = (isMobile: boolean) => (
        <ul className={`flex flex-col text-white uppercase ${isMobile ? 'py-6 px-4 text-center items-center' : 'py-4 px-8'}`}>
            {menuItems.map((item, index) => (
                <React.Fragment key={item.to}>
                    <li className='py-2 w-full'>
                        <Link to={item.to} onClick={() => setMenuOpen(false)} className='block w-full'>
                            {item.label}
                        </Link>
                    </li>

                    {/* Barre entre chaque lien sauf le dernier */}
                    {index < menuItems.length - 1 && (
                        <li className='w-full'>
                            <div className={`mx-auto ${isMobile ? 'w-1/2' : 'w-full'} border-t dark:border-neutral-400 border-neutral-800`}></div>
                        </li>
                    )}
                </React.Fragment>
            ))}

            {/* SwitchButton à la fin, sans barre après */}
            <li className='py-2 pt-4'>
                <SwitchButton firstIcon={FaMoon} secondIcon={FaSun} />
            </li>
        </ul>
    );

    return(
        <header className='relative bg-blue-800/80 dark:bg-cyan-800/90' ref={menuRef}>
            <div className='flex items-center justify-between px-4 py-4'>
                {/* Logo */}
                <Link to='/'>
                    <img
                        className='w-16 sm:w-24 md:w-32 rounded-full ml-20'
                        src='images/png/profil.png'
                        alt='Logo'
                    />
                </Link>

                {/* Burger + menu wrapper */}
                <div className='relative mr-20'>
                    <button onClick={toggleMenu} className='text-white z-30 relative'>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Desktop / MD+ collé au bouton */}
                    {menuOpen && (
                        <div className='hidden md:block absolute top-full right-0 w-auto border bg-blue-800/80 dark:bg-cyan-700/90 rounded-md shadow-lg'>
                            {renderMenu(false)}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile / SM full width sous le header */}
            {menuOpen && (
                <div className='block md:hidden absolute top-full left-0 w-screen border bg-blue-800/80 dark:bg-cyan-700/90 shadow-lg z-20'>
                    {renderMenu(true)}
                </div>
            )}
        </header>
    );
};

export default Header;