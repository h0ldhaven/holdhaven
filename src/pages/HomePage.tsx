import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeImageCard from '../data/homeImageCard.json';
import homeStacks from '../data/homeStacks.json';
import { ImageCard } from '../interfaces/ImageCard';
import type { CarouselCard } from '../types/CarouselCard';
import CarouselCards from '../components/reusable-ui/CarouselCards';

const HomePage: React.FC = () => {

    const slides: ImageCard[] = homeImageCard;

    const stackData: CarouselCard[] = homeStacks;

    return (
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out' role='main'>
            <Header />
            <div className='flex flex-col justify-center items-center text-center mt-8 px-4'>
                {/* Section Presentation */}
                <section className='bg-gray-300 dark:bg-gray-700 my-4 p-6 rounded-lg shadow-lg w-full'>
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

                {/* Section Stacks */}
                <section className='w-full bg-gray-300 dark:bg-gray-700 p-6 my-4 rounded-lg shadow-md flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold mb-4'>Mes stacks</h2>
                    <CarouselCards items={stackData} speed={50} />
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default HomePage; 