// Imports must be at the top
import FooterCard from '../components/FooterCard';

const Contact = () => {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">Contact Us</h1>

      {/* Contact Card */}
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Astropheonix</h2>
        <ul className="text-slate-300 space-y-2">
          <li>Email: support@astropheonix.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Address: 456 Innovation Drive, Kolkata, India</li>
        </ul>
      </div>

      {/* Footer */}
      <FooterCard />
    </main>
  );
};

export default Contact;
