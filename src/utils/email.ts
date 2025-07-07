import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!serviceId || !templateId || !publicKey) {
    throw new Error('❌ EmailJS env vars are missing!');
}

export type ContactTemplateParams = {
  name: string;
  email: string;
  message: string;
};

export const sendContactEmail = async (params: ContactTemplateParams): Promise<void> => {
    await emailjs.send(serviceId, templateId, params, publicKey);
};