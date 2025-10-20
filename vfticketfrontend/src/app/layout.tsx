"use client"; // Mark as Client Component
import './globals.css';
import { useState, useEffect } from 'react';

export const metadata = {
  title: 'Verified Fan Tickets',
  description: 'A platform for verified fan tickets',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSessionTimeout(true), 30 * 60 * 1000); // 30-min timeout
    return () => clearTimeout(timer);
  }, []);

  const mockEvents = ['1', '2', '3']; // Mock data
  const filteredEvents = mockEvents.filter((id) => {
    const matchesSearch = searchTerm === '' || id.includes(searchTerm);
    const matchesCategory = category === '' || id.includes(category);
    return matchesSearch && matchesCategory;
  });

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto p-4 max-w-4xl">
          <div className="flex justify-between mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search events..."
              className="p-2 border rounded w-1/2"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">All Categories</option>
              <option value="Music">Music</option>
              <option value="Gaming">Gaming</option>
              <option value="VIP">VIP</option>
            </select>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
          {sessionTimeout && <p className="text-red-500">Session expiring soon!</p>}
          {children}
          <div className="mt-4">
            <p>Recommended: Event 1</p>
          </div>
        </div>
      </body>
    </html>
  );
}