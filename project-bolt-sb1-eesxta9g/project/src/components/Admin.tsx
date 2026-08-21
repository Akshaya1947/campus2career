import React, { useState } from 'react';
import { Users, FileText, BarChart, Settings, Plus, CreditCard as Edit, Trash2, Save, Eye } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Admin: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'content' | 'users' | 'analytics' | 'settings'>('content');
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const mockContentData = [
    {
      id: '1',
      title: 'Diabetes Prevention Guide',
      category: 'Chronic Diseases',
      language: 'Tamil',
      status: 'Published',
      lastUpdated: '2024-12-22',
      views: 1250,
    },
    {
      id: '2',
      title: 'Maternal Health Tips',
      category: 'Mother & Child Health',
      language: 'English',
      status: 'Draft',
      lastUpdated: '2024-12-21',
      views: 890,
    },
    {
      id: '3',
      title: 'Mental Health Awareness',
      category: 'Mental Health',
      language: 'Malayalam',
      status: 'Published',
      lastUpdated: '2024-12-20',
      views: 750,
    },
  ];

  const mockUserStats = [
    { label: 'Total Users', value: '15,247', change: '+12%' },
    { label: 'Active This Month', value: '8,432', change: '+8%' },
    { label: 'New Registrations', value: '342', change: '+24%' },
    { label: 'Health Workers', value: '89', change: '+5%' },
  ];

  const renderContentTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Add New Content</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Language
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockContentData.map((content) => (
                <tr key={content.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{content.title}</div>
                      <div className="text-sm text-gray-500">Updated: {content.lastUpdated}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {content.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {content.language}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      content.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {content.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {content.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUsersTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockUserStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{stat.label}</h3>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className={`ml-2 text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recent User Activity</h3>
        <div className="space-y-4">
          {[
            { user: 'Dr. Priya Sharma', action: 'Updated health content', time: '2 hours ago', location: 'Thanjavur' },
            { user: 'Health Worker - Ravi', action: 'Added new health center', time: '4 hours ago', location: 'Kumbakonam' },
            { user: 'Admin - Meera', action: 'Approved content translation', time: '6 hours ago', location: 'Chennai' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Users size={16} className="text-red-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{activity.user}</div>
                <div className="text-sm text-gray-500">{activity.action}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-900">{activity.time}</div>
                <div className="text-xs text-gray-500">{activity.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Usage by Language</h3>
          <div className="space-y-3">
            {[
              { lang: 'Tamil', percentage: 45, users: '6,861' },
              { lang: 'English', percentage: 30, users: '4,574' },
              { lang: 'Malayalam', percentage: 15, users: '2,287' },
              { lang: 'Hindi', percentage: 10, users: '1,525' },
            ].map((lang) => (
              <div key={lang.lang} className="flex items-center space-x-4">
                <div className="w-20 text-sm text-gray-600">{lang.lang}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full" 
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
                <div className="text-sm font-medium text-gray-900">{lang.users}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Popular Content Categories</h3>
          <div className="space-y-3">
            {[
              { category: 'Mother & Child Health', views: '12,450' },
              { category: 'Chronic Diseases', views: '9,870' },
              { category: 'Mental Health', views: '7,650' },
              { category: 'Preventive Care', views: '6,230' },
              { category: 'Emergency Care', views: '5,140' },
            ].map((cat, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{cat.category}</span>
                <span className="text-sm text-red-600 font-semibold">{cat.views}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { district: 'Thanjavur', users: '2,450' },
            { district: 'Tiruchirappalli', users: '1,890' },
            { district: 'Madurai', users: '1,675' },
            { district: 'Coimbatore', users: '1,230' },
            { district: 'Salem', users: '1,120' },
            { district: 'Tirunelveli', users: '890' },
            { district: 'Vellore', users: '780' },
            { district: 'Erode', users: '650' },
          ].map((district) => (
            <div key={district.district} className="text-center p-4 border rounded-lg">
              <div className="text-lg font-semibold text-gray-900">{district.users}</div>
              <div className="text-sm text-gray-600">{district.district}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Language Settings</h3>
          <div className="space-y-4">
            {[
              { lang: 'Tamil', enabled: true, default: true },
              { lang: 'English', enabled: true, default: false },
              { lang: 'Malayalam', enabled: true, default: false },
              { lang: 'Hindi', enabled: true, default: false },
            ].map((lang) => (
              <div key={lang.lang} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{lang.lang}</span>
                  {lang.default && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Default
                    </span>
                  )}
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={lang.enabled} 
                    className="sr-only peer"
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
          <div className="space-y-4">
            {[
              { label: 'Emergency Alerts', enabled: true },
              { label: 'Content Updates', enabled: true },
              { label: 'User Registrations', enabled: false },
              { label: 'System Maintenance', enabled: true },
            ].map((setting) => (
              <div key={setting.label} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="font-medium">{setting.label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={setting.enabled} 
                    className="sr-only peer"
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Integration Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">e-Sanjeevani Integration</h4>
            <p className="text-sm text-gray-600 mb-3">
              Connect with government telemedicine platform
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600 font-medium">Connected</span>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">SMS Gateway</h4>
            <p className="text-sm text-gray-600 mb-3">
              Emergency alerts and notifications
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'content':
        return renderContentTab();
      case 'users':
        return renderUsersTab();
      case 'analytics':
        return renderAnalyticsTab();
      case 'settings':
        return renderSettingsTab();
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('admin')} Dashboard</h1>
        <p className="text-gray-600">Manage content, users, and system settings</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg mb-8">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Admin;