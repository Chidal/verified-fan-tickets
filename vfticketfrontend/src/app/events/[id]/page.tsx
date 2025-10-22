"use client";

import { useRouter } from 'next/router';
import { useState } from 'react';
import EventModal from '@/components/EventModal';
import { Event } from '@/types';

// Mock event data
const events: Record<string, Event> = {
  '1': { id: '1', name: 'Concert X', date: '2025-11-01', description: 'Epic show!', category: 'Music' },
  '2': { id: '2', name: 'Game Fest', date: '2025-12-05', description: 'Gaming event!', category: 'Gaming' },
  '3': { id: '3', name: 'VIP Gala', date: '2025-12-15', description: 'Exclusive event!', category: 'VIP' },
};

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const event = events[id as string];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!event) return <div className="p-8 text-red-400">Event not found</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary mb-6"
      >
        View Event Details
      </button>
      <EventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} event={event} />
      <p className="text-moca-gray italic font-medium">Ticket purchase disabled for now (mock mode)</p>
    </div>
  );
}