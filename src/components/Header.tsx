import React from 'react';
import { Link } from 'react-router-dom';
import SwitchButton from './reusable-ui/SwitchButton';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header: React.FC = () => {

    return(
        <header className='relative overflow-clip'>
            <div className='w-full h-full px-4 sm:px-8 md:px-16 dark:bg-cyan-800/90 bg-blue-800/80 transition-colors duration-300 ease-in-out'>
                <div className='flex flex-col items-center justify-center w-full h-full md:pt-8 md:pb-8 leading-none text-center text-white font-roboto uppercase z-10'>
                    <Link to='/' aria-label="Bouton retour a l'acceuil" role='button'>
                        <img
                            className='max-w-28 sm:max-w-34 lg:max-w-42 object-contain p-2 z-50 rounded-full'
                            src='images/png/profil.png'
                            loading='lazy'
                            alt='Image de profil de holdhaven'
                            aria-hidden='true'
                        />
                    </Link>
                    <h1 className='text-[1em] sm:text[4em] md:text-[2em] lg:text-[2.5em]'>holdhaven</h1>
                    <SwitchButton 
                        firstIcon={FaMoon} 
                        secondIcon={FaSun} 
                        className='fixed left-1/100 top-1/100'
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;