import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Telemedicine from './components/Telemedicine';
import HealthCenters from './components/HealthCenters';
import HealthEducation from './components/HealthEducation';
import SymptomChecker from './components/SymptomChecker';
import Emergency from './components/Emergency';
import Admin from './components/Admin';
import DoctorPortal from './components/DoctorPortal';
import Login from './components/Login';
import { useAuth } from './context/AuthContext';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage } = useLanguage();

  // Set document direction and font class based on language
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.body.className = `font-${currentLanguage}`;
    
    // Add Tamil font family to document
    if (currentLanguage === 'ta') {
      document.body.style.fontFamily = '"Noto Sans Tamil", "Latha", sans-serif';
    } else {
      document.body.style.fontFamily = '"Inter", "Arial", sans-serif';
    }
  }, [currentLanguage]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, isAuthenticated } = useAuth();

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={handleSectionChange} />;
      case 'telemedicine':
        return <Telemedicine />;
      case 'healthCenters':
        return <HealthCenters />;
      case 'healthEducation':
        return <HealthEducation />;
      case 'symptomChecker':
        return <SymptomChecker />;
      case 'emergency':
        return <Emergency />;
      case 'admin':
        return isAuthenticated && user.role === 'doctor' ? (
          <Admin />
        ) : (
          <Login onLoggedIn={() => setActiveSection('admin')} />
        );
      case 'doctorPortal':
        return isAuthenticated && user.role === 'doctor' ? (
          <DoctorPortal />
        ) : (
          <Login onLoggedIn={() => setActiveSection('doctorPortal')} />
        );
      case 'login':
        return <Login onLoggedIn={() => setActiveSection('home')} />;
      default:
        return <HomePage onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      
      <div className="flex">
        <aside className="hidden lg:block w-80 bg-white shadow-lg">
          <Navigation
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            isOpen={true}
            onClose={() => {}}
            isDesktop={true}
          />
        </aside>

        {/* Mobile Navigation */}
        <Navigation
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          isDesktop={false}
        />

        <main className="flex-1 min-h-screen">
          {renderActiveSection()}
        </main>
      </div>

      {/* Service Worker Registration for Offline Support */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                }, function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>
    </div>
  );
}

export default App;