import { JSX } from 'react';
import { faTwitch, faInstagram, faXTwitter, faThreads, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import IconLink from './reusable-ui/IconLink';

export default function Footer(): JSX.Element {
    const appName = import.meta.env.VITE_APP_NAME;
    const currentYear = new Date().getFullYear();
    const initialYear: number = 2025;

    return(
        <footer className='w-full px-4 py-6 mt-auto text-center text-white bg-cyan-800'>

            <h1 className='text-2xl font-extrabold md:text-3xl font-roboto'>
                {appName}
            </h1>

            {/* Socials icons */}
            <div className='flex flex-wrap items-center justify-center mt-2 space-x-0 space-y-0'>
                {/* Twitch Icon */}
                <IconLink label="Bouton de redirection vers la page Twitch de l'évènement La voie pailletée" link='https://twitch.tv/h0ldhaven' icon={faTwitch} className='hover:text-[#9146FF] text-white' />
                {/* Instagram Icon */}
                <IconLink label="Bouton de redirection vers la page Instagram de l'évènement La voie pailletée" link='https://instagram.com/holdhaven/' icon={faInstagram} className='hover:text-[#E1306C] text-white' />
                {/* X Icon */}
                <IconLink label="Bouton de redirection vers la page X de l'évènement La voie pailletée" link='https://x.com/h0ldhaven' icon={faXTwitter} className='hover:text-[#171717] text-white' />
                {/* Threads Icon */}
                <IconLink label="Bouton de redirection vers la page Threads de l'évènement La voie pailletée" link='https://threads.net/@holdhaven' icon={faThreads} className='hover:text-[#3C9EFC] text-white' />
                {/* Tiktok Icon */}
                <IconLink label="Bouton de redirection vers la page Tiktok de l'évènement La voie pailletée" link='https://tiktok.com/@h0ldhaven' icon={faTiktok} className='hover:text-[#D6004C] text-white' />
                {/* Youtube Icon */}
                <IconLink label="Bouton de redirection vers la page Youtube de l'évènement La voie pailletée" link='https://youtube.com/@h0ldhaven' icon={faYoutube} className='hover:text-[#FF0000] text-white' />
            </div>

            <hr className='border-b-4 max-w-[75vw] w-auto mx-auto my-5 border-black/10' />

            {/* Footer text */}
            <p className='mt-1 text-base md:text-lg font-roboto' role='text'>
                Copyright <span aria-hidden='true' >©</span> - {initialYear === currentYear ? currentYear : `${initialYear} - ${currentYear}`}
            </p>
            <p className='mt-2 text-sm italic md:text-base font- opacity-90'>
                Tous droits réservés
            </p>
        </footer>
    );
};