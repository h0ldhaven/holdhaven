import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TurnStile from '../components/TurnStile';
import { sendContactEmail } from '../utils/email';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const siteKey = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITEKEY;

const ContactPage: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [ loading, setLoading ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!formData.name || !formData.email || !formData.message) {
            setError('Tous les champs sont requis');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('Adresse email invalide.');
            return;
        }

        if (!turnstileToken) {
            setError('Veuillez valider le captcha.');
            return;
        }

        setLoading(true);

        try {
            await sendContactEmail(formData);
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setError('Erreur lors de l’envoi. Réessaie plus tard.');
            console.error('EmailJS error:', err);
        } finally {
            setLoading(false);
        }
    };

    return(
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out'>
            <Header />

            <section className='flex-grow flex items-center justify-center p-4'>
                <form 
                    onSubmit={handleSubmit} 
                    autoComplete='off' 
                    noValidate
                    className='w-full max-w-xl bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 space-y-6'
                >
                    <h2 className='text-2xl font-semibold text-center'>Envoyer un message</h2>

                    <div className='space-y-4'>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Votre Nom' 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        <input 
                            type='email' 
                            name='email' 
                            placeholder='Email' 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        <textarea 
                            name='message' 
                            placeholder='Message' 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        {error && <p className='text-red-500 text-sm'>{error}</p>}
                        {success && <p className='text-green-500 text-sm'>Message envoyé ✅</p>}

                        <button 
                            type='submit' 
                            disabled={loading}
                            className={`w-full py-2 px-4 font-semibold rounded-md transition-colors duration-200 ${
                                loading
                                    ? 'bg-blue-300 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                            } text-white`}
                        >
                            {loading ? 'Envoi en cours...' : 'Envoyer'}
                        </button>

                        <TurnStile
                            sitekey={siteKey}
                            onVerify={(token) => setTurnstileToken(token)}
                        />
                    </div>
                </form>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;