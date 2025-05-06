import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ErrorState {
    errorStatus: number;
    errorMessage: string;
};

const ErrorPage: React.FC = () => {
    const location = useLocation();
    const [errorStatus, setErrorStatus] = useState<number>(404);
    const [errorMessage, setErrorMessage] = useState<string>('Page non trouvée. Veuillez vérifier l\'URL.');

    useEffect(() => {
        // Vérifie si l'état d'erreur est passé via la location
        const state = location.state as ErrorState | undefined;
        if (state?.errorStatus && state?.errorMessage) {
            setErrorStatus(state.errorStatus);
            setErrorMessage(state.errorMessage);
        }
    }, [location]);

    return(
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out'>
            <Header />

            {/* Error Section */}
            <section className='flex flex-col items-center justify-center flex-grow p-6 text-center'>
                <h1 className='text-4xl font-bold text-red-500 uppercase font-kony' role='text'>Erreur {errorStatus}</h1>
                <p className='text-xl text-gray-700 dark:text-white font-roboto'>{errorMessage}</p>
                <div className='mt-4'>
                    <Link to='/' role='button' aria-label="Bouton de retour a l'acceuil">
                        <div className='flex justify-end px-8 md:justify-start md:px-0'>
                            <p className='px-3 py-2 text-white uppercase w-fit md:text-2xl font-kony rounded-xl bg-mediumseagreen'>
                                Retour à l'accueil
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ErrorPage;