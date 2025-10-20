interface EventFilterProps {
  onFilter: (category: string) => void;
}

export default function EventFilter({ onFilter }: EventFilterProps) {
  const categories = ['all', 'Music', 'Gaming', 'VIP'];

  return (
    <div className="mb-8">
      <h3 className="text-xl text-glam-gold mb-4">Filter Events</h3>
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilter(category)}
            className="btn btn-secondary"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}