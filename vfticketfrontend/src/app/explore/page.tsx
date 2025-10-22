"use client";

import EventCard from '@/components/EventCard';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import EventFilter from '@/components/EventFilter';
import { Event } from '@/types';
import { useState, useEffect } from 'react';

const events: Event[] = [
  { id: '1', name: 'Concert X', date: '2025-11-01', description: 'Epic show!', category: 'Music' },
  { id: '2', name: 'Game Fest', date: '2025-12-05', description: 'Gaming event!', category: 'Gaming' },
  { id: '3', name: 'VIP Gala', date: '2025-12-15', description: 'Exclusive event!', category: 'VIP' },
  { id: '4', name: 'Music Night', date: '2025-11-10', description: 'Live music night!', category: 'Music' },
];

export default function Explore() {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchTerm, setSearchTerm] = useState('');
  const [upcomingCount, setUpcomingCount] = useState(0);

  useEffect(() => {
    const now = new Date();
    const upcoming = events.filter(event => new Date(event.date) > now).length;
    setUpcomingCount(upcoming);
  }, []);

  const handleFilter = (category: string) => {
    const filtered = category === 'all' 
      ? events 
      : events.filter(event => event.category === category);
    setFilteredEvents(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = events.filter(event =>
      event.name.toLowerCase().includes(term) ||
      event.category.toLowerCase().includes(term)
    );
    setFilteredEvents(filtered);
  };

  const featuredEvents = events.slice(0, 2); // Mock featured events

  return (
    <div className="min-h-screen p-8">
      <HeroSection />
      <header className="flex justify-between items-center mb-12 bg-gray-800 p-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-glam-gold">Explore Events</h1>
        <p className="text-moca-gray">Wallet connection disabled for now (mock mode)</p>
      </header>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/2 p-4 bg-gray-700 rounded-xl text-white placeholder-moca-gray focus:outline-none focus:ring-2 focus:ring-moca-green"
        />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl text-glam-gold mb-4">Featured Events</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {featuredEvents.map((event) => (
            <div key={event.id} className="card w-80 flex-shrink-0 transform hover:scale-105 hover:shadow-card-glow transition-all duration-300">
              {event.category === 'Music' && (
                <div className="w-full h-48 bg-gradient-to-r from-moca-blue to-glam-purple flex items-center justify-center text-white">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3.895.895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3.895.895 3 2z" />
                  </svg>
                  <span className="absolute text-xl font-bold text-glam-gold">{event.name}</span>
                </div>
              )}
              {event.category === 'Gaming' && (
                <div className="w-full h-48 bg-gradient-to-r from-moca-green to-glam-gold flex items-center justify-center text-white">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-2.147A1.765 1.765 0 014 16.412V10a3 3 0 013-3h1.382a1 1 0 00.823-.188l2.122-1.707A1 1 0 0112 5.882zM18.131 8.513l-2.122-1.707a1 1 0 00-.825-.188H15a3 3 0 01-3 3v6.882a1.765 1.765 0 001.437 1.738l2.147 2.147A1.765 1.765 0 0018 19.24V13a3 3 0 013-3h1.382a1 1 0 00.823-.188l2.122-1.707A1 1 0 0023 8.513H18.131z" />
                  </svg>
                  <span className="absolute text-xl font-bold text-glam-purple">{event.name}</span>
                </div>
              )}
              {event.category === 'VIP' && (
                <div className="w-full h-48 bg-gradient-to-r from-glam-purple to-moca-blue flex items-center justify-center text-white">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7C6.875 1 3.5 4.5 3.5 9c0 2.5 3.5 6.5 8 9.5s6.5-2.5 6.5-5c0-1.5-1.5-3-3.5-3-1.053 0-2.05.5-2.829 1.212" />
                  </svg>
                  <span className="absolute text-xl font-bold text-glam-gold">{event.name}</span>
                </div>
              )}
              <div className="p-4 bg-gradient-to-t from-gray-900 to-transparent">
                <p className="text-moca-gray text-sm mb-1">{event.date}</p>
                <p className="text-moca-gray text-sm line-clamp-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl text-glam-gold mb-4">Upcoming Events: {upcomingCount}</h2>
      </div>
      <EventFilter onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <Footer />
    </div>
  );
}