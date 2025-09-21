import Hero from '../components/Hero';
import AIConsultationCard from '../components/AIConsultationCard';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Hero />
        <AIConsultationCard />
      </div>
      <Stats />
    </main>
  );
};

export default Home;
