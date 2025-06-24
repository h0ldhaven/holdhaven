import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitchPlayer from '../components/reusable-ui/TwitchPlayer';
import { Link } from 'react-router-dom';

const StreamPage: React.FC = () => {
    return(
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out'>
            <Header />
            <div className='flex flex-col justify-center items-center text-center mt-8 font-roboto'>
                <section className='max-w-4xl mx-auto p-6'>
                    {/* Presentation */}
                    <div className='bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl shadow-lg mb-8'>
                        <div className='flex items-center gap-4'>
                            <img
                                src='https://static-cdn.jtvnw.net/jtv_user_pictures/d78c4fa2-7eea-41cc-816e-80ffa5634c1f-profile_image-70x70.png'
                                alt='H0ldhaven Avatar'
                                className='rounded-full w-16 h-16'
                            />
                            <div className='text-left'>
                                <h2 className='text-xl font-bold text-zinc-800 dark:text-zinc-200'>@h0ldhaven <span className='text-sm text-zinc-500'>(alias h0ldy)</span></h2>
                                <p className='text-sm text-zinc-700 dark:text-zinc-400 mt-1'>
                                    Streamer depuis 2017 — passionné de jeux sandbox, simulation et survie. 
                                    <br />
                                    Partage et jeux selon les envies du moment 🎮
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className='text-left mt-4 text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed space-y-3'>
                            <p>
                                Bienvenue ! Je suis h0ldhaven (<strong>h0ldy</strong> pour les intimes), joueur curieux et développeur web dans la vraie vie 🧑‍💻
                            </p>
                            <p>
                                Ici, on parle de <strong>multi-gaming</strong> (avec une grosse préférence pour les jeux de <strong>survie</strong>, <strong>simulation</strong> et <strong>bac à sable</strong>), mais aussi parfois de <strong>développement</strong> en direct quand je bosse sur des projets persos ou pro.
                            </p>
                            <p>
                                Le <strong>partage</strong> est au centre de tout ce que je fais : j’adore expliquer, apprendre, et échanger avec la communauté — que ce soit en mode gaming ou dev.
                            </p>
                            <p>
                                Mes lives ont souvent lieu le <strong>week-end</strong>, et parfois en semaine à partir de <strong>15h/15h30</strong>.
                                <br />
                                Tu peux cliquer sur le bouton ci-dessous pour <strong>me rejoindre en direct sur Twitch</strong> et <strong>participer au chat</strong> 💬
                                <br />
                                Juste en dessous, le lecteur Twitch te permet de voir si je suis <strong>en live</strong> ou non en un clin d'œil 👇
                            </p>
                        </div>

                        {/* Button to redirect on channel */}
                        <div className='flex justify-center flex-wrap items-center mt-4 gap-4'>
                            <Link
                                to='https://twitch.tv/h0ldhaven'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transform transition-transform duration-200'
                            >
                                🔴 Suivre le live sur Twitch
                            </Link>
                            <Link
                                to='/'
                                className='inline-block bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 px-4 py-2 rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:scale-105 transform transition-transform duration-200'
                            >
                                ⬅️ Retour à l’accueil
                            </Link>
                        </div>
                    </div>

                    {/* Lecteur twitch */}
                    <TwitchPlayer channel='h0ldhaven' parent={window.location.hostname} />
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default StreamPage;