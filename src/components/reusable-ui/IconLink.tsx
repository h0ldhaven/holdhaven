import { JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { IconLinkProps } from '../../interfaces/IconLinkProps';

export default function IconLink({ link, icon, className, name, label }: IconLinkProps): JSX.Element {

    return (
        (<Link
            to={link}
            target='_blank'
            rel='noopener noreferrer'
            className={`flex items-center justify-center w-12 h-12 ${className ?? 'hover:text-[#47cdef] text-white'}`}
            title={name}
            aria-label={label}
        >
            <FontAwesomeIcon 
                icon={icon}
                className='w-8 h-8 text-3xl duration-500 ease-out md:text-4xl hover:scale-110'
            />
        </Link>)
    );
};