import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main className='flex flex-col h-full min-h-screen bg-gray-800' role='main'>
            <div className='flex flex-col justify-center items-center text-center mt-8 text-white font-roboto'>
                <h1 className='font-bold text-4xl p-4'>Bienvenue sur holdhaven.fr !</h1>
                <h3 className='text-2xl p-2'>Le site est actuellement en construction, merci de repasser plus tard</h3>
            </div>
        </main>
    );
};

export default HomePage;