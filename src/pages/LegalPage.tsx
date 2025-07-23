import React from 'react';
import PdfViewer from '../components/reusable-ui/PdfViewer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalPage: React.FC = () => {


    return(
        <main className='h-full w-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out'>
            <Header />

            <div className='flex flex-col items-center justify-center p-4 h-full w-full'>
                <PdfViewer fileUrl='/docs/mentions-legales.pdf' />
            </div>
            
            <Footer />
        </main>
    );
};

export default LegalPage;