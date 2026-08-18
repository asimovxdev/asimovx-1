"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '@/utils/translations';

export type Language = 'EN' | 'ES' | 'SV' | 'DA';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isIndia: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('EN');
    const [isIndia, setIsIndia] = useState(false);

    useEffect(() => {
        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (timeZone.startsWith('Asia/Calcutta') || timeZone.startsWith('Asia/Kolkata')) {
                setLanguage('EN');
                setIsIndia(true);
            } else if (timeZone.startsWith('Europe/Stockholm')) {
                setLanguage('SV');
            } else if (timeZone.startsWith('Europe/Madrid')) {
                setLanguage('ES');
            } else if (timeZone.startsWith('Europe/Copenhagen')) {
                setLanguage('DA');
            } else {
                setLanguage('EN');
            }
        } catch (e) {
            console.error('Timezone detection failed', e);
        }
    }, []);

    const t = (key: string) => {
        const keys = key.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let value: any = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value as string;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isIndia }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
