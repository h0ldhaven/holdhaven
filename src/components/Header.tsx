import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return(
        <header className='relative overflow-clip'>
            <div className='flex items-center justify-center w-full h-full px-4 sm:px-8 md:px-16 bg-blue-500'>
                <div className='flex flex-col items-center justify-center w-full md:pt-8 md:pb-8 leading-none text-center text-white font-roboto uppercase z-10'>
                    <Link to='/' aria-label="Bouton retour a l'acceuil" role='button'>
                        <img
                            className='w-[90%] h-[90%] max-w-36 sm:max-w-44 lg:max-w-48 pb-4 z-50'
                            src='images/profil.webp'
                            loading='lazy'
                            alt='Image de profil de holdhaven'
                            aria-hidden='true'
                        />
                    </Link>
                    <h1 className='text-[1em] sm:text[6em] md:text-[2em] lg:text-[2.5em]'>holdhaven</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;