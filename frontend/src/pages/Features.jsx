const Features = () => {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-extrabold text-purple-400 mb-6">Features</h1>
      <p className="text-slate-300 max-w-2xl mb-12">
        Explore the key features of MedFusion.AI: real-time AI consultation, emergency medicine tracking, 
        telemedicine for rural areas, and AI-powered symptom checking. Designed to make healthcare fast, reliable, and accessible.
      </p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white/5 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Health Records Dashboard</h3>
          <p className="text-gray-500">
            Centralized access to patient health records with secure login and real-time updates.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white/5 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Stock Update</h3>
          <p className="text-gray-500">
            Keep track of medicine availability and prevent shortages in rural clinics.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white/5 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Online Consultation</h3>
          <p className="text-gray-500">
            Connect patients with doctors remotely, with video call and chat support.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white/5 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Prescription Generator</h3>
          <p className="text-gray-500">
            Generate prescriptions digitally, reducing black marketing of medicines.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white/5 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Offline AI Support</h3>
          <p className="text-gray-500">
            3 Billion parameter AI model for offline assistance using Ollama technology.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white/5 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Appointment Scheduler</h3>
          <p className="text-gray-500">
            Easy scheduling system for doctors and patients with reminders.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Features;