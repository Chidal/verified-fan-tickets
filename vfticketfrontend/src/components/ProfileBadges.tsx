interface Badge {
  id: string;
  name: string;
  description: string;
}

export default function ProfileBadges() {
  const badges: Badge[] = [
    { id: '1', name: 'Loyal Fan', description: 'Attended 5+ events' },
    { id: '2', name: 'VIP Access', description: 'Exclusive VIP status' },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
      {badges.map((badge) => (
        <div key={badge.id} className="card p-4 text-center">
          <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-moca-gray">
            Badge placeholder
          </div>
          <h4 className="text-lg font-semibold text-glam-gold">{badge.name}</h4>
          <p className="text-moca-gray">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}