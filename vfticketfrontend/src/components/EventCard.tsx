import Link from 'next/link';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-md mb-2" />
        <h2 className="text-xl font-bold text-white">{event.name}</h2>
        <p className="text-gray-400">{event.date}</p>
        <p className="text-gray-300">{event.description}</p>
      </div>
    </Link>
  );
}