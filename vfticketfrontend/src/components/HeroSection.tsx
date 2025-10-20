import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="hero mb-12 relative overflow-hidden" style={{ backgroundImage: "url('/bg-hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-extrabold text-glam-gold mb-4">Welcome to Verified Fan Tickets</h2>
        <p className="text-xl text-moca-gray mb-6">Secure your spot with zero-knowledge proof identity!</p>
        <Link href="/explore">
          <button className="btn btn-secondary mr-4">Explore Events</button>
        </Link>
        <Link href="/profile">
          <button className="btn btn-primary">View Profile</button>
        </Link>
      </div>
    </div>
  );
}