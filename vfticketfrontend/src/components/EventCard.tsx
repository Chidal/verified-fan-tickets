import Link from 'next/link';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getDesign = (category: string) => {
    switch (category) {
      case 'Music':
        return (
          <div className="w-full h-56 bg-gradient-to-r from-moca-blue to-glam-purple flex items-center justify-center text-white">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3.895.895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3.895.895 3 2z" />
            </svg>
            <span className="absolute text-2xl font-bold text-glam-gold">Concert X</span>
          </div>
        );
      case 'Gaming':
        return (
          <div className="w-full h-56 bg-gradient-to-r from-moca-green to-glam-gold flex items-center justify-center text-white">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-2.147A1.765 1.765 0 014 16.412V10a3 3 0 013-3h1.382a1 1 0 00.823-.188l2.122-1.707A1 1 0 0112 5.882zM18.131 8.513l-2.122-1.707a1 1 0 00-.825-.188H15a3 3 0 01-3 3v6.882a1.765 1.765 0 001.437 1.738l2.147 2.147A1.765 1.765 0 0018 19.24V13a3 3 0 013-3h1.382a1 1 0 00.823-.188l2.122-1.707A1 1 0 0023 8.513H18.131z" />
            </svg>
            <span className="absolute text-2xl font-bold text-glam-purple">Game Fest</span>
          </div>
        );
      case 'VIP':
        return (
          <div className="w-full h-56 bg-gradient-to-r from-glam-purple to-moca-blue flex items-center justify-center text-white">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7C6.875 1 3.5 4.5 3.5 9c0 2.5 3.5 6.5 8 9.5s6.5-2.5 6.5-5c0-1.5-1.5-3-3.5-3-1.053 0-2.05.5-2.829 1.212" />
            </svg>
            <span className="absolute text-2xl font-bold text-glam-gold">VIP Gala</span>
          </div>
        );
      default:
        return <div className="w-full h-56 bg-gray-700"></div>;
    }
  };

  return (
    <Link href={`/events/${event.id}`}>
      <div className="card overflow-hidden transform hover:scale-105 hover:shadow-card-glow">
        {getDesign(event.category)}
        <div className="p-4 bg-gradient-to-t from-gray-900 to-transparent">
          <h2 className="text-xl font-semibold text-glam-gold mb-2">{event.name}</h2>
          <p className="text-moca-gray text-sm mb-1">{event.date}</p>
          <p className="text-moca-gray text-sm line-clamp-2">{event.description}</p>
        </div>
      </div>
    </Link>
  );
}