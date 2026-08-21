import React, { useState } from 'react';
import { Phone, AlertTriangle, Heart, Shield, Flame, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { mockEmergencyContacts } from '../data/mockData';

const Emergency: React.FC = () => {
  const { t } = useLanguage();
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'ambulance':
        return <Heart className="text-red-600" size={24} />;
      case 'police':
        return <Shield className="text-blue-600" size={24} />;
      case 'fire':
        return <Flame className="text-orange-600" size={24} />;
      case 'poison':
        return <AlertTriangle className="text-purple-600" size={24} />;
      default:
        return <Phone className="text-gray-600" size={24} />;
    }
  };

  const firstAidSteps = [
    {
      condition: t('condHeartAttack'),
      steps: [
        t('stepCall108'),
        t('stepAspirin'),
        t('stepKeepCalm'),
        t('stepLoosenClothes'),
        t('stepCPRReady')
      ]
    },
    {
      condition: t('condChoking'),
      steps: [
        t('stepEncourageCough'),
        t('stepBackBlows'),
        t('stepAbdominalThrusts'),
        t('stepRepeat'),
        t('stepCall108IfUnconscious')
      ]
    },
    {
      condition: t('condSevereBleeding'),
      steps: [
        t('stepDirectPressure'),
        t('stepElevate'),
        t('stepDontRemoveObjects'),
        t('stepBandage'),
        t('stepSeekHelp')
      ]
    },
    {
      condition: t('condBurns'),
      steps: [
        t('stepCoolBurn'),
        t('stepRemoveJewelry'),
        t('stepCoverBandage'),
        t('stepDontBreakBlisters'),
        t('stepSeekBurnAttention')
      ]
    }
  ];

  const translateContactName = (name: string, type: string) => {
    const typeLabel = t(`contactType.${type}`);
    if (name.toLowerCase().includes('state')) {
      return `${typeLabel} (${t('state')})`;
    }
    if (name.toLowerCase().includes('national')) {
      return `${typeLabel} (${t('national')})`;
    }
    if (name.toLowerCase().includes('poison')) {
      return t('poisonControl');
    }
    if (name.toLowerCase().includes('child')) {
      return t('childHelpline');
    }
    if (name.toLowerCase().includes('police')) {
      return t('policeEmergency');
    }
    if (name.toLowerCase().includes('fire')) {
      return t('fireEmergency');
    }
    return typeLabel;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-700 mb-2">{t('emergency')}</h1>
        <p className="text-gray-600">{t('emergencySubtitle')}</p>
      </div>

      {/* Critical Emergency Banner */}
      <div className="bg-red-600 text-white rounded-xl p-6 mb-8 shadow-lg">
        <div className="flex items-center space-x-4">
          <AlertTriangle size={48} className="flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold mb-2">{t('lifeThreatEmergency')}</h2>
            <p className="text-lg opacity-90">{t('call108Now')}</p>
          </div>
          <a
            href="tel:108"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <Phone size={24} />
            <span>108</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Emergency Contacts */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t('emergencyContacts')}</h2>
          
          <div className="space-y-4">
            {mockEmergencyContacts.map((contact) => (
              <div
                key={contact.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-red-500 hover:bg-red-50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getContactIcon(contact.type)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{translateContactName(contact.name, contact.type)}</h3>
                      <p className="text-sm text-gray-600 capitalize">{t('services')}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${contact.number}`}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg flex items-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>{contact.number}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Local Numbers */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">{t('tamilNaduSpecific')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{t('disasterManagement')} </span>
                <a href="tel:1070" className="text-blue-600 font-semibold">1070</a>
              </div>
              <div className="flex justify-between">
                <span>{t('touristHelpline')} </span>
                <a href="tel:1363" className="text-blue-600 font-semibold">1363</a>
              </div>
              <div className="flex justify-between">
                <span>{t('railwayEnquiry')} </span>
                <a href="tel:139" className="text-blue-600 font-semibold">139</a>
              </div>
            </div>
          </div>
        </div>

        {/* First Aid Guide */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t('firstAid')}</h2>
          
          <div className="space-y-6">
            {firstAidSteps.map((guide, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg text-red-700 mb-3">{guide.condition}</h3>
                <ol className="space-y-2">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-sm text-gray-700 flex items-start space-x-2">
                      <span className="bg-red-100 text-red-700 text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">{t('important')}</h4>
                <p className="text-yellow-700 text-sm">{t('firstAidDisclaimer')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Preparedness */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">{t('emergencyPreparedness')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">{t('emergencyKit')}</h3>
            <ul className="text-sm opacity-90 space-y-1">
              <li>• {t('kitFirstAid')}</li>
              <li>• {t('kitMedications')}</li>
              <li>• {t('kitContacts')}</li>
              <li>• {t('kitFlashlight')}</li>
              <li>• {t('kitWaterFood')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('importantDocs')}</h3>
            <ul className="text-sm opacity-90 space-y-1">
              <li>• {t('docMedicalRecords')}</li>
              <li>• {t('docInsurance')}</li>
              <li>• {t('docEmergencyContacts')}</li>
              <li>• {t('docMedicationList')}</li>
              <li>• {t('docAllergies')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('familyPlan')}</h3>
            <ul className="text-sm opacity-90 space-y-1">
              <li>• {t('planMeeting')}</li>
              <li>• {t('planOutOfTown')}</li>
              <li>• {t('planEvacuation')}</li>
              <li>• {t('planPetCare')}</li>
              <li>• {t('planCommunication')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Natural Disasters - Tamil Nadu Specific */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('disasterPreparedness')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-orange-600 mb-3">{t('cycloneSeason')}</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• {t('cycloneMonitor')}</li>
              <li>• {t('cycloneStock')}</li>
              <li>• {t('cycloneSecure')}</li>
              <li>• {t('cycloneRoutes')}</li>
              <li>• {t('cycloneDocs')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-600 mb-3">{t('monsoonFlooding')}</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• {t('floodAvoidWalking')}</li>
              <li>• {t('floodKeepNumbers')}</li>
              <li>• {t('floodHigherGround')}</li>
              <li>• {t('floodElectrical')}</li>
              <li>• {t('floodPurify')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;