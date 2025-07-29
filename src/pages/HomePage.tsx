import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out' role='main'>
            <Header />
            <div className='flex flex-col justify-center items-center text-center mt-8 px-4'>
                {/* Section Presentation */}
                <section className='bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full md:text-left text-center break-all'>
                    <h1 className='font-bold text-4xl p-4 text-gray-900 dark:text-gray-100'>Bienvenue sur holdhaven.fr !</h1>
                    <p className='text-2xl p-4 text-gray-600 dark:text-gray-200'>Découvre mon univers et ce que je fais, que ce soit en tant que développeur ou streameur !</p>
                </section>

                {/* Section Slides */}
                <section className='bg-gray-100 dark:bg-gray-800 p-6 my-4 rounded-lg shadow-md w-full'>
                    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center'>
                        {[
                            {
                                image: '/images/png/slide_1.png',
                                title: 'Adaptabilité fullstack',
                                description: 'Je développe des solutions complètes, du front au back, en choisissant les bons outils pour chaque projet.',
                            },
                            {
                                image: '/images/png/slide_2.png',
                                title: 'Compréhension métier',
                                description: 'Je cherche à comprendre vos enjeux avant d’écrire une ligne de code, pour proposer une solution efficace et durable.',
                            },
                            {
                                image: '/images/png/slide_3.png',
                                title: 'Collaboration agile',
                                description: 'Habitué aux méthodes agiles, je m’intègre facilement à vos équipes pour avancer de façon fluide et structurée.',
                            },
                            {
                                image: '/images/png/slide_4.png',
                                title: 'Rigueur et évolution continue',
                                description: 'Je code avec précision, j’écris des tests, je documente, et je continue d’apprendre chaque jour.',
                            },
                        ].map((arg, index) => (
                            <div
                                key={index}
                                className='relative rounded-lg shadow-md overflow-hidden max-w-[250px] w-full h-[300px] flex items-end'
                                style={{
                                    backgroundImage: `url(${arg.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {/* Overlay */}
                                <div className='absolute inset-0 bg-black/50 dark:bg-black/60 z-0' />
                                {/* Text content */}
                                <div className='relative z-10 text-white text-center p-4'>
                                    <h3 className='text-lg font-semibold mb-2'>{arg.title}</h3>
                                    <p className='text-sm'>{arg.description}</p>
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

                {/* Section Streameur */}
                <section className='flex flex-col md:flex-row justify-between items-center my-12 bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg'>
                    <div className='flex flex-col justify-center items-center md:w-1/2 w-full mb-8 md:mb-0'>
                        <img 
                            src='/images/webp/twitch_background.webp' 
                            alt='Image de développeur'
                            className='w-full max-w-3xs md:max-w-2xs lg:max-w-xs xl:max-w-md h-auto rounded-lg'
                        />
                        {/* Badges des jeux */}
                        <div className='flex flex-wrap justify-start mt-6 gap-4'>
                            <div className='flex flex-wrap gap-2 items-center justify-center'>
                                <img src='https://img.shields.io/badge/-000000?style=flat-square&logo=steam&logoColor=white' className='w-12 h-12 object-cover rounded-full' alt='Steam' />
                                <img src='https://img.shields.io/badge/-313131?style=flat-square&logo=epicgames&logoColor=white' className='w-12 h-12 object-cover rounded-full' alt='Epic Games' />
                                <img src='https://img.shields.io/badge/-000000?style=flat-square&logo=ubisoft&logoColor=white' className='w-12 h-12 object-cover rounded-full' alt='Ubisoft' />
                                <img src='https://img.shields.io/badge/-FCAF17?style=flat-square&logo=rockstargames&logoColor=white' className='w-12 h-12 object-cover rounded-full' alt='Rockstar Games' />
                                <img src='https://img.shields.io/badge/-000000?style=flat-square&logo=ea&logoColor=white' className='w-12 h-12 object-cover rounded-full' alt='EA' />
                                <img src='https://img.shields.io/badge/-86328A?style=flat-square&logo=gog.com&logoColor=white' className='w-12 h-12 object-cover rounded-full' alt='GOG' />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full md:text-left text-center'>
                        <h2 className='text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>Streameur Gaming & Tech sur Twitch</h2>

                        <p className='text-xl mb-4 text-gray-700 dark:text-gray-200'>
                            Sur Twitch, je me nomme <strong>h0ldhaven</strong>, mais tout le monde m'appelle <strong>h0ldy</strong>.
                        </p>

                        <div className='w-24 mx-auto md:mx-0 mb-4 border-t-4 border-purple-700 rounded-full'></div>

                        <p className='text-xl mb-4 text-gray-700 dark:text-gray-200'>
                            J'ai commencé le stream en 2017. Depuis, je fais du multi-gaming, avec une préférence pour les jeux de survie, simulation & bac à sable.
                        </p>

                        <div className='w-24 mx-auto md:mx-0 mb-4 border-t-4 border-purple-700 rounded-full'></div>

                        <p className='text-lg mb-8 text-gray-700 dark:text-gray-200'>
                            Selon mes envies du moment, tu peux retrouver d'autres types de jeux, mais aussi des sessions de <strong>dev</strong> (codage) ou des discussions techniques. Même pendant le jeu, j’aime partager mon expérience, mes connaissances, et échanger avec la communauté — que ce soit sur le gameplay, la stratégie ou les aspects techniques.
                        </p>
                        <a
                            href='/streams'
                            className='px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-lg text-lg font-semibold transition transform hover:scale-105'
                        >
                            Ma page de stream
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