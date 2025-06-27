import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';

type FormData = {
    name: string;
    email: string;
    message: string;
};

type EmailJSResponse = {
  status: number;
  text: string;
};

const ContactPage: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

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

        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Erreur serveur.');

            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setError('Erreur lors de l’envoi. Réessaie plus tard.');
        } finally {
            setLoading(false);
        }
    };

    return(
        <main className='flex flex-col h-full min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-in-out'>
            <Header />
            <form onSubmit={handleSubmit} autoComplete='off' noValidate>
                <input type='text' name='name' placeholder='Nom' value={formData.name} onChange={handleChange} required />
                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
                <textarea name='message' placeholder='Message' value={formData.message} onChange={handleChange} required />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>Message envoyé ✅</p>}

                <button type='submit' disabled={loading}>
                    {loading ? 'Envoi...' : 'Envoyer'}
                </button>
            </form>
        </main>
    );
};

export default ContactPage;