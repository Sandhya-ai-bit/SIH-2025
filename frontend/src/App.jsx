import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FooterCard from './components/FooterCard';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-950 text-white min-h-screen font-sans flex flex-col">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </div>

        <FooterCard />
      </div>
    </Router>
  );
};

export default App;
