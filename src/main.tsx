import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './Router.tsx';
import { MainProvider } from './providers/MainProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MainProvider>
            <Router />
        </MainProvider>
    </StrictMode>,
);
