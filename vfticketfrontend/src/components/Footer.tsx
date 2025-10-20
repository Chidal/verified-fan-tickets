export default function Footer() {
  return (
    <footer className="mt-12 p-6 bg-gray-800 rounded-xl shadow-md text-center">
      <p className="text-moca-gray">&copy; 2025 Verified Fan Tickets. Built for Moca Network Buildathon.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="text-moca-green hover:text-glam-gold">Terms</a>
        <a href="#" className="text-moca-green hover:text-glam-gold">Privacy</a>
        <a href="#" className="text-moca-green hover:text-glam-gold">Support</a>
      </div>
    </footer>
  );
}