import React, { useEffect, useState } from 'react';
import { Play, BookOpen, Headphones, Image, Search, Filter } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { mockHealthContent } from '../data/mockData';

const HealthEducation: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [youtubeResults, setYoutubeResults] = useState<Array<{ id: string; title: string; description: string; videoId: string; channelTitle: string; thumbnail: string }>>([]);
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    'all',
    'Chronic Diseases',
    'Mother & Child Health',
    'Mental Health',
    'Preventive Care',
    'Nutrition',
    'Infectious Diseases',
  ];

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'video':
        return <Play size={20} className="text-red-600" />;
      case 'audio':
        return <Headphones size={20} className="text-green-600" />;
      case 'infographic':
        return <Image size={20} className="text-blue-600" />;
      default:
        return <BookOpen size={20} className="text-purple-600" />;
    }
  };

  const getMediaColor = (mediaType: string) => {
    switch (mediaType) {
      case 'video':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'audio':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'infographic':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-purple-50 border-purple-200 text-purple-800';
    }
  };

  const filteredContent = mockHealthContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Basic health-only filter helper
  const isHealthQuery = (q: string) => {
    const keywords = ['health', 'medicine', 'medical', 'நலம்', 'ஆரோக்கிய', 'ആരോഗ്യം', 'स्वास्थ्य', 'doctor', 'disease', 'treatment', 'symptom'];
    const lower = q.toLowerCase();
    return keywords.some(k => lower.includes(k));
  };

  // YouTube search integration (client-side; requires VITE_YT_API_KEY)
  useEffect(() => {
    let timer: number | undefined;
    if (searchQuery.trim().length === 0) {
      setYoutubeResults([]);
      return;
    }
    if (!isHealthQuery(searchQuery)) {
      setYoutubeResults([]);
      return;
    }
    timer = window.setTimeout(async () => {
      const apiKey = (import.meta as any).env?.VITE_YT_API_KEY as string | undefined;
      if (!apiKey) {
        return;
      }
      try {
        setIsSearching(true);
        const params = new URLSearchParams({
          key: apiKey,
          q: `${searchQuery} health medicine`,
          part: 'snippet',
          type: 'video',
          maxResults: '6',
          safeSearch: 'strict',
          relevanceLanguage: 'en',
        });
        const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`);
        const data = await resp.json();
        if (Array.isArray(data.items)) {
          const results = data.items
            .map((it: any) => ({
              id: it.id?.videoId ?? it.id,
              title: it.snippet?.title ?? '',
              description: it.snippet?.description ?? '',
              videoId: it.id?.videoId ?? '',
              channelTitle: it.snippet?.channelTitle ?? '',
              thumbnail: it.snippet?.thumbnails?.medium?.url ?? it.snippet?.thumbnails?.default?.url ?? ''
            }))
            // Extra filter to keep likely health/medical items only
            .filter((r: any) => isHealthQuery(`${r.title} ${r.description}`));
          setYoutubeResults(results);
        } else {
          setYoutubeResults([]);
        }
      } catch (_) {
        setYoutubeResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 500);
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [searchQuery]);

  const toYouTubeEmbedUrl = (url?: string) => {
    if (!url) return undefined;
    try {
      const u = new URL(url);
      const host = u.hostname.replace('www.', '');
      if (host === 'youtube.com' || host === 'm.youtube.com') {
        const v = u.searchParams.get('v');
        return v ? `https://www.youtube.com/embed/${v}` : undefined;
      }
      if (host === 'youtu.be') {
        const id = u.pathname.replace('/', '');
        return id ? `https://www.youtube.com/embed/${id}` : undefined;
      }
    } catch (_) {
      return undefined;
    }
    return undefined;
  };

  if (selectedContent) {
    const content = mockHealthContent.find(c => c.id === selectedContent);
    const youtubeItem = youtubeResults.find(r => r.id === selectedContent);
    if (!content && !youtubeItem) return null;

    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setSelectedContent(null)}
          className="text-red-600 hover:text-red-700 mb-6 flex items-center space-x-2"
        >
          <span>←</span>
          <span>{t('back')}</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Media Header */}
          {(content?.mediaType === 'video' || youtubeItem) && (
            <div className="bg-gray-900 aspect-video flex items-center justify-center">
              {youtubeItem ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeItem.videoId}`}
                  title={youtubeItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : toYouTubeEmbedUrl(content.mediaUrl) ? (
                <iframe
                  className="w-full h-full"
                  src={toYouTubeEmbedUrl(content.mediaUrl)}
                  title={content.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : content?.mediaUrl ? (
                <video className="w-full h-full" controls>
                  <source src={content.mediaUrl} />
                </video>
              ) : (
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4 bg-red-600 rounded-full p-4" />
                  <p>{t('videoPlayer')}</p>
                </div>
              )}
            </div>
          )}

          {content.mediaType === 'audio' && (
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white">
              <div className="flex items-center space-x-4">
                <Headphones size={48} />
                <div>
                  <h2 className="text-2xl font-bold">{content.title}</h2>
                  <p className="opacity-90">Audio Content in Multiple Languages</p>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-colors">
                  ▶️ Play Audio
                </button>
                <div className="text-sm opacity-90">Duration: 15:30</div>
              </div>
            </div>
          )}

          <div className="p-8">
            <div className="flex items-center space-x-3 mb-4">
              {getMediaIcon(content.mediaType)}
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getMediaColor(content.mediaType)}`}>
                {content.mediaType.charAt(0).toUpperCase() + content.mediaType.slice(1)}
              </span>
              <span className="text-sm text-gray-500">{content.category}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{content ? content.title : youtubeItem?.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{content ? content.description : youtubeItem?.description}</p>

            <div className="prose max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Points</h3>
                <ul className="text-blue-800">
                  <li>Early detection and prevention strategies</li>
                  <li>Lifestyle modifications and dietary guidelines</li>
                  <li>When to seek medical attention</li>
                  <li>Home care and management tips</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This comprehensive guide provides essential information about maintaining good health 
                and managing common health conditions. The content has been developed by certified 
                healthcare professionals and adapted for the Tamil Nadu rural context.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevention Strategies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Regular health check-ups, maintaining a balanced diet, regular physical activity, 
                and avoiding harmful substances are key to preventing many health conditions.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Note</h4>
                <p className="text-yellow-700 text-sm">
                  This information is for educational purposes only. Always consult with qualified 
                  healthcare professionals for proper diagnosis and treatment.
                </p>
              </div>
            </div>

            {/* Related Content */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">{t('relatedContent')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockHealthContent
                  .filter(c => c.id !== content.id && c.category === content.category)
                  .slice(0, 2)
                  .map(relatedContent => (
                    <button
                      key={relatedContent.id}
                      onClick={() => setSelectedContent(relatedContent.id)}
                      className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        {getMediaIcon(relatedContent.mediaType)}
                        <span className="font-medium">{relatedContent.title}</span>
                      </div>
                      <p className="text-sm text-gray-600">{relatedContent.description}</p>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Prominent Search on Top */}
      <div className="mb-6">
        <div className="relative">
          <Search size={22} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t('searchTopicsPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-red-500 focus:border-red-500 shadow-sm"
          />
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pt-3">
          <Filter size={20} className="text-gray-400 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? t('allTopics') : category}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('healthEducation')}</h1>
        <p className="text-gray-600">{t('healthEducationSubtitle')}</p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* YouTube Results (Health-only) */}
        {isSearching && (
          <div className="col-span-full text-sm text-gray-600">{t('searchingYoutube')}</div>
        )}
        {!isSearching && youtubeResults.length > 0 && (
          <div className="col-span-full">
            <h2 className="text-xl font-semibold mb-3">{t('youtubeResults')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeResults.map((yt) => (
                <button
                  key={yt.id}
                  onClick={() => setSelectedContent(yt.id)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-left overflow-hidden group"
                >
                  <div className="aspect-video bg-black relative">
                    <img src={yt.thumbnail} alt={yt.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getMediaColor('video')}`}>
                        YouTube
                      </span>
                      <span className="text-xs text-gray-500">{yt.channelTitle}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {yt.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{yt.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredContent.map((content) => (
          <button
            key={content.id}
            onClick={() => setSelectedContent(content.id)}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-left overflow-hidden group"
          >
            <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
              {getMediaIcon(content.mediaType)}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getMediaColor(content.mediaType)}`}>
                  {content.mediaType}
                </span>
                <span className="text-xs text-gray-500">{content.category}</span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {content.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">{content.description}</p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">{t('availableInLanguages')}</span>
                <span className="text-red-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  {t('readMore')}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{t('weeklyHealthTips')}</h2>
            <p className="opacity-90">{t('weeklyHealthTipsSubtitle')}</p>
          </div>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('subscribe')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthEducation;