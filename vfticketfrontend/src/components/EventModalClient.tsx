"use client";
import { useState, useEffect } from 'react';
import { Event } from '@/types';
import { QRCodeSVG } from 'qrcode.react';

// Use Material-UI Rating instead of react-rating for better TypeScript support
import Rating from '@mui/material/Rating';

// Use react-vertical-timeline-component instead of react-vertical-timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function EventModalClient({ event }: { event: Event }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [rating, setRating] = useState<number | null>(0); // Adjusted for MUI Rating
  const [reviews] = useState(['Great event!', 'Awesome!']);
  const [isFavorite, setIsFavorite] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const target = new Date(event.date).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      setCountdown(Math.floor(distance / (1000 * 60 * 60 * 24)) + ' days');
    }, 1000);
    return () => clearInterval(interval);
  }, [event.date]);

  useEffect(() => {
    const timer = setTimeout(() => alert('Reservation expired!'), 5 * 60 * 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!event) return null;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn bg-glam-gold hover:bg-yellow-600 text-white px-4 py-2 rounded mb-6"
      >
        View Event Details
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-glam-gold mb-4">{event.name}</h2>
            <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-moca-gray">
              Image placeholder
            </div>
            <p className="text-moca-gray mb-4">{event.date}</p>
            <p className="text-moca-gray mb-6">{event.description}</p>
            <p className="text-moca-gray mb-2">Countdown: {countdown}</p>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="p-2 border rounded mb-2"
            >
              {[1, 2, 3, 4].map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
            <p className="mb-2">Price: ${quantity * 10}</p>
            {quantity < 2 && <span className="text-yellow-500">Low Stock</span>}
            <button
              onClick={() => setConfirmOpen(true)}
              className="btn bg-glam-gold hover:bg-yellow-600 text-white px-4 py-2 rounded mb-2"
            >
              Reserve
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`mb-2 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
            >
              ♥
            </button>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email for reminders"
              className="w-full p-2 border rounded mb-2"
            />
            <Rating
              value={rating}
              onChange={(e, value) => setRating(value)}
              className="mb-2"
            />
            <ul className="mb-2">
              {reviews.map((r, i) => (
                <li key={i} className="text-sm">{r}</li>
              ))}
            </ul>
            <video controls className="w-full h-32 bg-gray-700 mb-2">
              <source src="/mock-video.mp4" type="video/mp4" />
            </video>
            {event.id && <QRCodeSVG value={event.id} className="mb-2" />}
            <VerticalTimeline>
              <VerticalTimelineElement>
                <h3 className="text-moca-gray">10:00 AM - Doors Open</h3>
              </VerticalTimelineElement>
            </VerticalTimeline>
            <a href="https://mock-stream.com" className="text-blue-500 underline mb-2 block">
              Watch Live
            </a>
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn bg-glam-gold hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {confirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <p>Confirm purchase of {quantity} tickets?</p>
            <button
              onClick={() => setConfirmOpen(false)}
              className="btn bg-glam-gold hover:bg-yellow-600 text-white px-4 py-2 rounded mt-2"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}