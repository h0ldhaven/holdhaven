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

    return(
        <header className='relative bg-blue-800/80 dark:bg-cyan-800/90' ref={menuRef}>
            <div className='flex items-center justify-between px-4 py-4'>
                {/* Logo */}
                <Link to='/'>
                    <img
                        className='w-16 sm:w-24 md:w-32 rounded-full'
                        src='images/png/profil.png'
                        alt='Logo'
                    />
                </Link>

                {/* Burger + menu wrapper */}
                <div className='relative'>
                    <button onClick={toggleMenu} className='text-white z-30 relative'>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Desktop / MD+ collé au bouton */}
                    {menuOpen && (
                        <div className='hidden md:block absolute top-full right-0 w-auto border-1 bg-blue-800/80 dark:bg-cyan-700/90 rounded-md shadow-lg'>
                            <ul className='flex flex-col gap-4 py-4 px-8 text-white uppercase'>
                                <li>
                                    <Link to='/' onClick={() => setMenuOpen(false)}>Accueil</Link>
                                </li>
                                <li>
                                    <Link to='/legal' onClick={() => setMenuOpen(false)}>À propos</Link>
                                </li>
                                <li>
                                    <Link to='/projects' onClick={() => setMenuOpen(false)}>Projets</Link>
                                </li>
                                <li>
                                    <Link to='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>
                                </li>
                                <li>
                                    <SwitchButton firstIcon={FaMoon} secondIcon={FaSun} />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile / SM full width sous le header */}
            {menuOpen && (
                <div className='block md:hidden absolute top-full left-0 w-screen border-1 border-neutral-400 bg-blue-800/80 dark:bg-cyan-700/90 shadow-lg z-20'>
                    <ul className='flex flex-col gap-4 py-6 px-4 text-white uppercase text-center items-center'>
                        <li>
                            <Link to='/' onClick={() => setMenuOpen(false)}>Accueil</Link>
                        </li>
                        <li>
                            <Link to='/legal' onClick={() => setMenuOpen(false)}>À propos</Link>
                        </li>
                        <li>
                            <Link to='/projects' onClick={() => setMenuOpen(false)}>Projets</Link>
                        </li>
                        <li>
                            <Link to='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>
                        </li>
                        <li>
                            <SwitchButton firstIcon={FaMoon} secondIcon={FaSun} />
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;