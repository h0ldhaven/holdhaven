import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ProjectPage: React.FC = () => {
    return(
        <main className='flex flex-col h-full min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white'>
            <Header />
            <div className='flex flex-col justify-center items-center text-center mt-8 font-roboto'>
                <h1 className='font-bold text-4xl p-4'>Bienvenue sur holdhaven.fr/projects !</h1>
            </div>
            <Footer />
        </main>
    );
};

export default ProjectPage;