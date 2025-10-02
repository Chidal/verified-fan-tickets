import EventCard from '@/components/EventCard';
import WalletConnect from '@/components/WalletConnect';
import { Event } from '@/types';

// Mock event data
const events: Event[] = [
  { id: '1', name: 'Concert X', date: '2025-11-01', image: '/concert.jpg', description: 'Epic show!' },
  { id: '2', name: 'Game Fest', date: '2025-12-05', image: '/concert.jpg', description: 'Gaming event!' },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Verified Fan Tickets</h1>
        <WalletConnect />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}