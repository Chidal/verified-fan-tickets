import { useRouter } from 'next/router';
import TicketPurchase from '@/components/TicketPurchase';
import { Event } from '@/types';

// Mock event data
const events: Record<string, Event> = {
  '1': { id: '1', name: 'Concert X', date: '2025-11-01', image: '/concert.jpg', description: 'Epic show!' },
  '2': { id: '2', name: 'Game Fest', date: '2025-12-05', image: '/concert.jpg', description: 'Gaming event!' },
};

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const event = events[id as string];

  if (!event) return <div className="p-8">Event not found</div>;

  return (
    <div className="p-8">
      <img src={event.image} alt={event.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-2xl font-bold mb-2">{event.name}</h1>
      <p className="text-gray-400 mb-4">{event.date}</p>
      <p className="text-gray-300 mb-4">{event.description}</p>
      <TicketPurchase eventId={event.id} tokenURI={`https://ipfs.io/ipfs/Qm...${event.id}`} />
    </div>
  );
}