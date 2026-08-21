import React, { useEffect, useState } from 'react';
import { MessageCircle, Send, Bot, User, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  suggestions?: string[];
}

const SymptomChecker: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `${t('welcomeTitle')} ${t('symptomCheckerIntro')}`,
      suggestions: [t('suggestFeverHeadache'), t('suggestStomachPain'), t('suggestCoughCold'), t('suggestChestPain')]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [youtubeResults, setYoutubeResults] = useState<Array<{ id: string; title: string; videoId: string; thumbnail: string }>>([]);
  const [searching, setSearching] = useState(false);

  const commonSymptoms = [
    'காய்ச்சல் (Fever)',
    'தலைவலி (Headache)', 
    'வயிற்றுவலி (Stomach pain)',
    'இருமல் (Cough)',
    'மூச்சுத்திணறல் (Breathlessness)',
    'சோர்வு (Fatigue)'
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('fever') || lowerInput.includes('காய்ச்சல்') || lowerInput.includes('জ্বর')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: t('botFever'),
        suggestions: [t('days12'), t('days35'), t('daysWeek'), t('alsoHeadache')]
      };
    }
    
    if (lowerInput.includes('headache') || lowerInput.includes('தலைவலி')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: t('botHeadache'),
        suggestions: [t('suddenSevere'), t('gradualOnset'), t('withNausea'), t('stressRelated')]
      };
    }

    // Cough/Cold intent
    if (lowerInput.includes('cough') || lowerInput.includes('இருமல்')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: t('botCough'),
        suggestions: [t('dryCough'), t('withPhlegm'), t('withFever'), t('breathless')]
      };
    }

    // Chest pain intent
    if (lowerInput.includes('chest') || lowerInput.includes('மார்பு')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: t('botChestPain'),
        suggestions: [t('sharpPain'), t('pressureTightness'), t('radiatingPain'), t('callEmergency')]
      };
    }

    // Stomach pain intent
    if (lowerInput.includes('stomach') || lowerInput.includes('வயிறு')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: t('botStomachPain'),
        suggestions: [t('upperAbdomen'), t('lowerRight'), t('vomiting'), t('diarrhea')]
      };
    }

    // Default response
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: t('botDefault'),
      suggestions: [t('startedToday'), t('started2to3'), t('moreThanWeek'), t('verySevere')]
    };
  };

  useEffect(() => {
    const q = inputMessage.trim();
    if (!q) { setYoutubeResults([]); return; }
    const apiKey = (import.meta as any).env?.VITE_YT_API_KEY as string | undefined;
    if (!apiKey) return;
    const timer = window.setTimeout(async () => {
      try {
        setSearching(true);
        const params = new URLSearchParams({ key: apiKey, q: `${q} medicine health`, part: 'snippet', type: 'video', maxResults: '4', safeSearch: 'strict' });
        const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`);
        const data = await resp.json();
        const items = (data.items || []).map((it: any) => ({ id: it.id?.videoId, title: it.snippet?.title, videoId: it.id?.videoId, thumbnail: it.snippet?.thumbnails?.medium?.url }));
        setYoutubeResults(items);
      } finally {
        setSearching(false);
      }
    }, 400);
    return () => window.clearTimeout(timer);
  }, [inputMessage]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('symptomChecker')}</h1>
        <p className="text-gray-600">{t('symptomCheckerSubtitle')}</p>
      </div>

      {/* Important Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle size={24} className="text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">{t('medicalDisclaimerTitle')}</h3>
            <p className="text-yellow-700 text-sm">
              {t('medicalDisclaimer')}
            </p>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Chat Header */}
        <div className="bg-red-600 text-white p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Health Assistant</h3>
              <p className="text-sm opacity-90">Multilingual Symptom Checker</p>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Online</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-800 shadow-md'
              }`}>
                <div className="flex items-center space-x-2 mb-1">
                  {message.type === 'user' ? (
                    <User size={16} />
                  ) : (
                    <Bot size={16} className="text-red-600" />
                  )}
              <span className="text-xs opacity-75">{message.type === 'user' ? t('you') : t('healthAssistant')}</span>
                </div>
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                
                {message.suggestions && (
                  <div className="mt-3 space-y-2">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(suggestion)}
                        className="block w-full text-left text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white text-gray-800 shadow-md px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bot size={16} className="text-red-600" />
                <span className="text-xs text-gray-500">{t('assistantTyping')}</span>
                </div>
                <div className="flex space-x-1 mt-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t('describeSymptoms')}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-red-500 focus:border-red-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(inputMessage);
                }
              }}
            />
            <button
              onClick={() => handleSendMessage(inputMessage)}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Common Symptoms Quick Access */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('commonSymptoms')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {commonSymptoms.map((symptom, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(symptom.split(' (')[0])}
              className="p-3 bg-white border border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-colors text-left"
            >
              <span className="text-sm font-medium">{symptom}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Warning */}
      <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-center space-x-3">
          <AlertTriangle size={24} className="text-red-600" />
          <div>
            <h3 className="font-semibold text-red-800 mb-2">{t('emergencySymptomsTitle')}</h3>
            <div className="text-red-700 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>• {t('symptomBreathing')}</div>
              <div>• {t('symptomChestPain')}</div>
              <div>• {t('symptomSevereHeadache')}</div>
              <div>• {t('symptomHighFeverStiffNeck')}</div>
              <div>• {t('symptomLossConsciousness')}</div>
              <div>• {t('symptomSevereBleeding')}</div>
            </div>
            <div className="mt-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                {t('call108')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube medicine videos for typed symptoms */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('youtubeResults')}</h3>
        {searching && <div className="text-sm text-gray-500">{t('searchingYoutube')}</div>}
        {!searching && youtubeResults.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubeResults.map(v => (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.videoId}`} target="_blank" className="block bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
                <div className="aspect-video bg-black">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 text-sm font-medium text-gray-800 line-clamp-2">{v.title}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;