import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const StreamPage: React.FC = () => {
    return(
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out'>
            <Header />
            <div className='flex flex-col justify-center items-center text-center mt-8 font-roboto'>
                <h1 className='font-bold text-4xl p-4'>Bienvenue sur holdhaven.fr/streams !</h1>
                {/* Message de construction */}
                <p className='text-lg mt-8 mb-8 italic text-gray-700 dark:text-gray-300'>
                    ⚠️ Le site est en pleine construction, merci de revenir bientôt pour plus de contenu !
                </p>
            </div>
            <Footer />
        </main>
    );
};

export default StreamPage;