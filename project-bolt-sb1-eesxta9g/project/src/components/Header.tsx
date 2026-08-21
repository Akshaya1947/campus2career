import React, { useState } from 'react';
import { Menu, X, Volume2, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { languages } from '../data/translations';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <header className="bg-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md hover:bg-red-600 transition-colors"
              aria-label={isMenuOpen ? t('close') : 'Menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-700 font-bold text-xl">+</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">நலம் | Health</h1>
                <p className="text-sm opacity-90 hidden sm:block">{t('welcomeSubtitle')}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Voice Support Indicator */}
            <div className="hidden sm:flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-xs">
              <Volume2 size={16} />
              <span>{t('voiceSupported')}</span>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 px-3 py-2 rounded-lg transition-colors"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">
                  {languages.find(l => l.code === currentLanguage)?.nativeName}
                </span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code as keyof typeof import('../data/translations').translations);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        currentLanguage === lang.code
                          ? 'bg-red-50 text-red-700 font-medium'
                          : 'text-gray-700'
                      }`}
                    >
                      <span className="font-medium">{lang.nativeName}</span>
                      <span className="text-sm text-gray-500 ml-2">({lang.name})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;