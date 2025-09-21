// Imports must be at the top
import FooterCard from '../components/FooterCard';

const About = () => {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">About Us</h1>

      {/* About Card */}
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Astropheonix</h2>
        <p className="text-slate-300 mb-4">
          Astropheonix is dedicated to creating innovative solutions in healthcare using AI.
          Our mission is to provide smart, fast, and reliable medical services to underserved areas.
        </p>
        <p className="text-slate-300">
          We specialize in AI-powered telemedicine, real-time consultation tracking, and emergency response
          systems that connect clinics and hospitals seamlessly.
        </p>
      </div>

      {/* Footer */}
      <FooterCard />
    </main>
  );
};

export default About;
