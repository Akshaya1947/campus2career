import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

type LanguageCode = keyof typeof translations;

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('ta');

  useEffect(() => {
    const saved = localStorage.getItem('healthapp-language') as LanguageCode;
    if (saved && translations[saved]) {
      setCurrentLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    localStorage.setItem('healthapp-language', lang);
    
    // Update document language and font
    document.documentElement.lang = lang;
    document.body.className = `font-${lang}`;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations[currentLanguage] as any;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
  };
};