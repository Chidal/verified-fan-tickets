"use client"; // Added directive

import ProfileBadges from '@/components/ProfileBadges';
import { useState } from 'react'; // Already present

export default function Profile() {
  const [activeTab, setActiveTab] = useState('badges');

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-glam-gold mb-6">Your Profile</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('badges')}
          className={`px-4 py-2 rounded-full ${activeTab === 'badges' ? 'bg-moca-blue text-white' : 'bg-gray-700 text-moca-gray'} hover:bg-glam-purple`}
        >
          Badges
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-full ${activeTab === 'settings' ? 'bg-moca-blue text-white' : 'bg-gray-700 text-moca-gray'} hover:bg-glam-purple`}
        >
          Settings
        </button>
      </div>
      {activeTab === 'badges' ? (
        <ProfileBadges />
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <p className="text-moca-gray">Settings will be available soon (mock mode).</p>
        </div>
      )}
    </div>
  );
}