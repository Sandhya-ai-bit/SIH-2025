// Imports must be at the top
import FooterCard from '../components/FooterCard';

const Contact = () => {
  return (
    <main className="relative min-h-screen flex flex-col justify-between text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col gap-12">
        {/* Heading */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-purple-400 mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Have questions about <span className="text-purple-300 font-semibold">Telemedicine Access for Rural Healthcare</span> in Nabha?
            Get in touch with our team.
          </p>
        </header>

        {/* Contact Info + Form */}
        <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Card */}
          <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Astropheonix</h2>
            <ul className="text-slate-200 space-y-3">
              <li>
                <span className="font-semibold text-purple-300">Email:</span>{' '}
                support@astropheonix.com
              </li>
              <li>
                <span className="font-semibold text-purple-300">Phone:</span>{' '}
                +91 98765 43210
              </li>
              <li>
                <span className="font-semibold text-purple-300">Address:</span>{' '}
                456 Innovation Drive, Kolkata, India
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">Get in Touch</h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-xl bg-slate-900/80 text-white border border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-xl bg-slate-900/80 text-white border border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="px-4 py-3 rounded-xl bg-slate-900/80 text-white border border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="px-4 py-3 rounded-xl bg-slate-900/80 text-white border border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <FooterCard />
    </main>
  );
};

export default Contact;