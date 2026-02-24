import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import ContactPage from "@/app/contactPage";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ContactPage />
    </StrictMode>
);
