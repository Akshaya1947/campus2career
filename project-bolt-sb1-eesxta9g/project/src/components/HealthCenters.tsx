import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Navigation, Clock, Star, Search } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useGeolocation } from '../hooks/useGeolocation';
import { mockHealthCenters } from '../data/mockData';
import { HealthCenter } from '../types';

const HealthCenters: React.FC = () => {
  const { t } = useLanguage();
  const { coords, getCurrentLocation, loading: locationLoading } = useGeolocation();
  const [centers, setCenters] = useState<HealthCenter[]>(mockHealthCenters);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'nearby' | 'emergency'>('all');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filtered = mockHealthCenters.filter(center =>
        center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setCenters(filtered);
    } else {
      setCenters(mockHealthCenters);
    }
  };

  const handleFilter = (type: 'all' | 'nearby' | 'emergency') => {
    setFilterType(type);
    let filtered = [...mockHealthCenters];
    
    switch (type) {
      case 'nearby':
        filtered = filtered.sort((a, b) => (a.distance || 0) - (b.distance || 0));
        break;
      case 'emergency':
        filtered = filtered.filter(center => 
          center.services.some(service => 
            service.toLowerCase().includes('emergency') || 
            service.toLowerCase().includes('icu')
          )
        );
        break;
      default:
        // Show all centers
        break;
    }
    
    setCenters(filtered);
  };

  const getDirections = (center: HealthCenter) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.coordinates.lat},${center.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('healthCenters')}</h1>
        <p className="text-gray-600">{t('findHealthCenter')}</p>
      </div>

      {/* Search and Location */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t('enterPincode')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            {t('search')}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <button
            onClick={getCurrentLocation}
            disabled={locationLoading}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
          >
            <Navigation size={20} />
            <span>
              {locationLoading ? 'Getting location...' : t('useLocation')}
            </span>
          </button>

          <div className="flex space-x-2">
            {[
              { key: 'all', label: 'All Centers' },
              { key: 'nearby', label: 'Nearby' },
              { key: 'emergency', label: 'Emergency' },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleFilter(filter.key as any)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filterType === filter.key
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Health Centers List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {centers.map((center) => (
          <div key={center.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{center.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{center.address}</span>
                  </div>
                  {center.distance && (
                    <div className="flex items-center space-x-2 text-green-600 mb-2">
                      <Navigation size={16} />
                      <span className="text-sm font-medium">{center.distance} km away</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                  <Clock size={14} className="text-green-600" />
                  <span className="text-xs text-green-700 font-medium">Open 24/7</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-700 mb-2">Available Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {center.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => getDirections(center)}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </button>
                <a
                  href={`tel:${center.phone}`}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Phone size={14} />
                    <span>{center.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span>4.5 (120 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Offline Map Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
        <div className="flex items-center space-x-4">
          <MapPin size={32} className="text-blue-600" />
          <div>
            <h3 className="font-bold text-blue-900">Offline Map Available</h3>
            <p className="text-blue-700 text-sm">
              Basic location information is cached for offline access. 
              Internet connection required for real-time directions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCenters;