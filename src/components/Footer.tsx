import { JSX } from 'react';
import { faGithub, faTwitch, faInstagram, faXTwitter, faThreads, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import IconLink from './reusable-ui/IconLink';
import { Link } from 'react-router-dom';

export default function Footer(): JSX.Element {
    const appName = import.meta.env.VITE_APP_NAME;
    const currentYear = new Date().getFullYear();
    const initialYear: number = 2025;

    return(
        <footer className='w-full px-4 py-6 mt-auto text-center flex flex-col items-center text-white dark:bg-cyan-800/90 bg-blue-800/80 transition-colors duration-300 ease-in-out'>
            <div className='flex flex-col-reverse md:flex-row max-w-7xl justify-center items-stretch w-auto'>

                {/* Left Footer */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-end text-center md:text-right px-4'>
                    <Link to={'/'} className='hover:underline'>
                    Mentions Légales
                    </Link>
                    <Link to={'/'} className='hover:underline'>
                        Contact
                    </Link>
                </div>

                {/* Séparation verticale sur desktop */}
                <div className='w-full h-px md:w-px md:h-auto bg-white/30 mx-auto my-4 md:my-0' />

                {/* Right Footer */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-cente text-center px-4'>
                    <h1 className='text-2xl font-extrabold md:text-3xl font-roboto'>
                        {appName}
                    </h1>

                    {/* Socials icons */}
                    <div className='flex flex-wrap items-center justify-center mt-2 space-x-0 space-y-0'>
                        {/* Twitch Icon */}
                        <IconLink label='Bouton de redirection vers la page dithub' link='https://github.com/h0ldhaven' icon={faGithub} className='hover:text-[#141414] text-white' />
                        {/* Twitch Icon */}
                        <IconLink label='Bouton de redirection vers la page Twitch' link='https://twitch.tv/h0ldhaven' icon={faTwitch} className='hover:text-[#9146FF] text-white' />
                        {/* Instagram Icon */}
                        <IconLink label='Bouton de redirection vers la page Instagram' link='https://instagram.com/holdhaven/' icon={faInstagram} className='hover:text-[#E1306C] text-white' />
                        {/* X Icon */}
                        <IconLink label='Bouton de redirection vers la page X' link='https://x.com/h0ldhaven' icon={faXTwitter} className='hover:text-[#171717] text-white' />
                        {/* Threads Icon */}
                        <IconLink label='Bouton de redirection vers la page Threads' link='https://threads.net/@holdhaven' icon={faThreads} className='hover:text-[#3C9EFC] text-white' />
                        {/* Tiktok Icon */}
                        <IconLink label='Bouton de redirection vers la page Tiktok' link='https://tiktok.com/@h0ldhaven' icon={faTiktok} className='hover:text-[#D6004C] text-white' />
                        {/* Youtube Icon */}
                        <IconLink label='Bouton de redirection vers la page Youtubee' link='https://youtube.com/@h0ldhaven' icon={faYoutube} className='hover:text-[#FF0000] text-white' />
                    </div>

                    <hr className='border-b-4 max-w-[75vw] w-auto mx-auto my-2 border-black/10' />

                    {/* Footer text */}
                    <p className='mt-1 text-base md:text-lg font-roboto' role='text'>
                        Copyright <span aria-hidden='true' >©</span> - {initialYear === currentYear ? currentYear : `${initialYear} - ${currentYear}`}
                    </p>
                    <p className='mt-1 text-sm italic md:text-base font- opacity-90'>
                        Tous droits réservés
                    </p>
                </div>
            </div>
        </footer>
    );
};