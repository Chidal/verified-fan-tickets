"use client";

import EventCard from '@/components/EventCard';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import EventFilter from '@/components/EventFilter';
import { Event } from '@/types';
import { useState } from 'react';

// Mock event data
const events: Event[] = [
  { id: '1', name: 'Concert X', date: '2025-11-01', description: 'Epic show!', category: 'Music' },
  { id: '2', name: 'Game Fest', date: '2025-12-05', description: 'Gaming event!', category: 'Gaming' },
  { id: '3', name: 'VIP Gala', date: '2025-12-15', description: 'Exclusive event!', category: 'VIP' },
];

export default function Home() {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilter = (category: string) => {
    if (category === 'all') setFilteredEvents(events);
    else setFilteredEvents(events.filter(event => event.category === category));
  };

  return (
    <div className="min-h-screen p-8">
      <HeroSection />
      <header className="flex justify-between items-center mb-12 bg-gray-800 p-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-glam-gold">Verified Fan Tickets</h1>
        <p className="text-moca-gray">Wallet connection</p>
      </header>
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