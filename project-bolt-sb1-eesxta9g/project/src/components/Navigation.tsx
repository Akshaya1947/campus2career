import React from 'react';
import { 
  Home, 
  Video, 
  MapPin, 
  BookOpen, 
  Stethoscope, 
  Phone, 
  Settings 
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../context/AuthContext';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
  isDesktop?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onSectionChange, 
  isOpen, 
  onClose,
  isDesktop = false
}) => {
  const { t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();

  const menuItems = [
    { id: 'home', icon: Home, label: t('home') },
    { id: 'telemedicine', icon: Video, label: t('telemedicine') },
    { id: 'healthCenters', icon: MapPin, label: t('healthCenters') },
    { id: 'healthEducation', icon: BookOpen, label: t('healthEducation') },
    { id: 'symptomChecker', icon: Stethoscope, label: t('symptomChecker') },
    { id: 'emergency', icon: Phone, label: t('emergency') },
    { id: 'doctorPortal', icon: Settings, label: t('doctorPortal') },
    ...(isAuthenticated && user.role === 'doctor' ? [{ id: 'admin', icon: Settings, label: t('admin') }] : [] as any),
  ];

  const handleItemClick = (sectionId: string) => {
    onSectionChange(sectionId);
    onClose();
  };

  return (
    <>
      {/* Overlay for mobile only */}
      {!isDesktop && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Navigation Menu */}
      <nav 
        className={
          isDesktop
            ? 'relative h-full bg-white lg:bg-transparent shadow-none w-80'
            : `fixed left-0 top-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              } w-80 lg:hidden`
        }
      >
        <div className="pt-20 lg:pt-4 px-4">
          <ul className="space-y-2">
            {menuItems.map(({ id, icon: Icon, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleItemClick(id)}
                  className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-red-50 hover:text-red-700 ${
                    activeSection === id
                      ? 'bg-red-100 text-red-700 font-semibold border-l-4 border-red-700'
                      : 'text-gray-700'
                  }`}
                >
                  <Icon size={22} />
                  <span className="font-medium">{label}</span>
                </button>
              </li>
            ))}
            {/* Login entry removed per request */}
          </ul>
        </div>

        {/* Offline Mode Indicator */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-green-100 border border-green-300 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700 font-medium">
                Offline Mode Ready
              </span>
            </div>
            <p className="text-xs text-green-600 mt-1">
              Essential features available without internet
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;