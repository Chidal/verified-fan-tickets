"use client";
export default function History() {
  const history = ['Event 1 - 2025-11-01', 'Event 2 - 2025-12-05'];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-glam-gold mb-4">Purchase History</h1>
      <ul className="list-disc pl-5">
        {history.map((h, i) => <li key={i} className="text-moca-gray">{h}</li>)}
      </ul>
    </div>
  );
}