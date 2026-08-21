import React from 'react';
import { 
  Video, 
  MapPin, 
  BookOpen, 
  Stethoscope, 
  Phone, 
  Heart,
  Users,
  Shield,
  Volume2
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSectionChange }) => {
  const { t } = useLanguage();

  const quickActions = [
    {
      id: 'telemedicine',
      icon: Video,
      title: t('consultDoctor'),
      subtitle: t('onlineConsultation'),
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      id: 'healthCenters',
      icon: MapPin,
      title: t('findHealthCenter'),
      subtitle: t('nearbyHealthCenters'),
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      id: 'symptomChecker',
      icon: Stethoscope,
      title: t('checkSymptoms'),
      subtitle: t('getAdvice'),
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
    },
    {
      id: 'emergency',
      icon: Phone,
      title: t('emergency'),
      subtitle: t('emergencyContacts'),
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
    },
  ];

  const features = [
    {
      icon: Heart,
      title: t('preventiveCare'),
      description: 'Regular health check-ups and prevention tips',
    },
    {
      icon: Users,
      title: t('motherChildHealth'),
      description: 'Specialized care for mothers and children',
    },
    {
      icon: Shield,
      title: t('mentalHealth'),
      description: 'Mental health support and counseling',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              {t('welcomeTitle')}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              {t('welcomeSubtitle')}
            </p>
            
            {/* Voice Support Badge */}
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Volume2 size={24} />
              <span className="font-semibold">{t('voiceSupported')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
          Quick Access Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onSectionChange(action.id)}
                className={`${action.color} ${action.hoverColor} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-left group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon size={32} className="group-hover:scale-110 transition-transform" />
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs">→</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                <p className="text-sm opacity-90">{action.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            {t('healthEducation')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                    <Icon size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <Phone size={32} />
              <div>
                <h3 className="text-xl font-bold">24/7 Emergency Services</h3>
                <p className="opacity-90">Call 108 for ambulance services</p>
              </div>
            </div>
            <button
              onClick={() => onSectionChange('emergency')}
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('emergencyContacts')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;