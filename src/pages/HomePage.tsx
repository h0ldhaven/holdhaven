import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeImageCard from '../data/homeImageCard.json';
import { ImageCard } from '../interfaces/ImageCard';

const HomePage: React.FC = () => {

    const slides: ImageCard[] = homeImageCard;

    return (
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out' role='main'>
            <Header />
            <div className='flex flex-col justify-center items-center text-center mt-8 px-4'>
                {/* Section Presentation */}
                <section className='bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full'>
                    <div className='flex flex-col md:flex-row md:justify-center items-start md:items-stretch text-gray-700 dark:text-gray-200 text-lg gap-6'>
                        {/* Texte gauche */}
                        <div className='md:w-1/2 max-w-2xl mx-auto md:mx-0 px-2'>
                            <h1 className='font-bold text-2xl mb-2 text-center md:text-left'>Bienvenue !</h1>
                            <p className='leading-relaxed text-left'>
                                Je m'appelle Paul, je suis Concepteur Développeur Web/Applications, Je développe des solutions web complètes, du côté client comme du côté serveur, adaptées à vos besoins. 
                                <br />
                                Mon expertise couvre l'ensemble du cycle de développement, de la conception à la mise en production.
                                <br />
                                Au-delà du code, je privilégie la compréhension des enjeux métier pour proposer des solutions efficaces, évolutives et durables.
                                <br />
                                Mon approche repose sur l'optimisation et la flexibilité, permettant d'assurer une grande réactivité face aux besoins des utilisateurs tout en garantissant une évolutivité à long terme.
                            </p>
                        </div>

                        {/* Ligne décorative */}
                        <div className='hidden md:flex justify-center items-stretch px-4'>
                            <div className='w-px bg-gray-500 dark:bg-gray-400 h-full opacity-40'></div>
                        </div>

                        {/* Texte droite avec ul/li */}
                        <div className='md:w-1/2 max-w-2xl mx-auto md:mx-0 px-2'>
                            <h1 className='font-bold text-2xl mb-2 text-center md:text-left'>Points clés :</h1>
                            <ul className='list-none list-outside pl-6 space-y-2 text-left leading-tight'>
                                <li>🎯 Je m’adapte à vos besoins, que ce soit pour une landing page, un site vitrine, une boutique en ligne, un projet front-end ou back-end seul, ou une application web complète sur mesure. L’essentiel ? Trouver la bonne solution, au bon niveau, pour votre projet.</li>
                                <li>🔗 Formé au travail Agile (Scrum), je peux m'intégrer facilement aux équipes et contribuer à une gestion de projet organisée et collaborative.</li>
                                <li>🔍 Je travaille avec rigueur, autonomie et clarté. Curieux et pragmatique, j’apprends vite et m’adapte aux aspects techniques comme aux besoins métier.</li>
                                <li>🧠 Je reste prêt à explorer de nouvelles technologies ou approches.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section Slides */}
                <section className='bg-gray-300 dark:bg-gray-700 p-6 my-4 rounded-lg shadow-md w-full'>
                    <h1 className='font-bold text-2xl mb-2 text-left'>Mes qualités :</h1>
                    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center'>
                        {slides.map(({ image, title, description }, index) => (
                            <div
                                key={index}
                                className='relative rounded-lg shadow-md overflow-hidden max-w-[250px] w-full h-[300px] flex items-end hover:scale-105 transform transition-transform duration-200'
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {/* Overlay */}
                                <div className='absolute inset-0 bg-black/50 dark:bg-black/60 z-0' />
                                {/* Text content */}
                                <div className='relative z-10 text-white text-center p-4'>
                                    <h3 className='text-lg font-semibold mb-2'>{title}</h3>
                                    <p className='text-sm'>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section Développeur */}
                <section className='flex flex-col md:flex-row justify-between items-center my-4 bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg'>
                    <div className='flex flex-col justify-center items-center md:w-1/2 w-full mb-8 md:mb-0'>
                        <img 
                            src='/images/webp/dev_background.webp' 
                            alt='Image de développeur'
                            className='w-full max-w-3xs md:max-w-2xs lg:max-w-xs xl:max-w-md h-auto rounded-lg'
                        />

                        <div className='flex flex-col items-baseline justify-baseline px-6'>
                            <h1 className='mt-6 text-xl'>Mes stacks :</h1>

                            {/* Badges des stacks */}
                            <div className='flex flex-wrap justify-start items-start gap-4 mt-2'>
                                {/* Frontend */}
                                <div className='flex flex-wrap gap-4'>
                                    <img src='https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white' alt='React' />
                                    <img src='https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white' alt='TypeScript' />
                                    <img src='https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white' alt='Vite' />
                                    <img src='https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white' alt='Tailwind CSS' />
                                    <img src='https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white' alt='Bootstrap' />
                                    <img src='https://img.shields.io/badge/-Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black' alt='Vanilla JS' />
                                    <img src='https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=html5&logoColor=white' alt='HTML' />
                                    <img src='https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=css3&logoColor=white' alt='CSS' />
                                    <img src='https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white' alt='SASS' />
                                </div>

                                {/* Backend */}
                                <div className='flex flex-wrap gap-4'>
                                    <img src='https://img.shields.io/badge/-Laravel-EF4135?style=flat-square&logo=laravel&logoColor=white' alt='Laravel' />
                                    <img src='https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white' alt='PHP' />
                                    <img src='https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white' alt='Java' />
                                </div>

                                {/* Base de données */}
                                <div className='flex flex-wrap gap-4'>
                                    <img src='https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white' alt='MySQL' />
                                    <img src='https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' alt='MongoDB' />
                                </div>

                                {/* DevOps */}
                                <div className='flex flex-wrap gap-4'>
                                    <img src='https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white' alt='Git' />
                                    <img src='https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white' alt='GitHub' />
                                    <img src='https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white' alt='GitHub Actions' />
                                    <img src='https://img.shields.io/badge/-Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white' alt='Cloudflare' />
                                    <img src='https://img.shields.io/badge/-OVH%20Hosting-1D9C6A?style=flat-square&logo=ovh&logoColor=white' alt='OVH Hosting' />
                                    <img src='https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white' alt='Vercel' />
                                    <img src='https://img.shields.io/badge/-GitHub%20Pages-222222?style=flat-square&logo=github-pages&logoColor=white' alt='GitHub Pages' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full md:text-left text-center'>
                        <h2 className='text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>
                            Concepteur Développeur d'Applications
                        </h2>
                        <p className='text-xl mb-4 text-gray-700 dark:text-gray-200'>
                            Je suis Concepteur Développeur d'Applications, spécialisé dans la création de solutions logicielles sur mesure, adaptées aux besoins spécifiques de mes clients. Mon expertise couvre l'ensemble du cycle de développement, de la conception à la mise en production.
                        </p>
                        <p className='text-lg mb-4 text-gray-700 dark:text-gray-200'>
                            Je m'efforce de fournir des applications performantes, évolutives et modulaires, avec un focus sur l'expérience utilisateur et la gestion robuste des données.
                        </p>
                        <p className='text-lg mb-8 text-gray-700 dark:text-gray-200'>
                            Mon approche repose sur l'optimisation et la flexibilité, permettant d'assurer une grande réactivité face aux besoins des utilisateurs tout en garantissant une évolutivité à long terme.
                        </p>
                        <a
                            href='/projects'
                            className='px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold transition transform hover:scale-105'
                        >
                            Découvrez mes projets
                        </a>
                    </div>
                </section>

                {/* Message de construction */}
                <p className='text-lg mt-8 mb-8 italic text-gray-700 dark:text-gray-300'>
                    ⚠️ Le site est en pleine construction, merci de revenir bientôt pour plus de contenu !
                </p>
            </div>
            <Footer />
        </main>
    );
};

export default HomePage; 