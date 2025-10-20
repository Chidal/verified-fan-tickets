import { Event } from '@/types';

interface EventModalProps {
  isOpen: boolean;       // Added to match the usage
  onClose: () => void;   // Added to match the usage
  event: Event;          // Already present
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-glam-gold mb-4">{event.name}</h2>
        <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-moca-gray">
          Image placeholder (removed)
        </div>
        <p className="text-moca-gray mb-4">{event.date}</p>
        <p className="text-moca-gray mb-6">{event.description}</p>
        <button onClick={onClose} className="btn btn-primary w-full">Close</button>
      </div>
    </div>
  );
}