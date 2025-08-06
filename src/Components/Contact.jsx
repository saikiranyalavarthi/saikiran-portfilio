import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0d0f1a] py-16 text-white px-6 md:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left: Form */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-8">Just say Hello</h2>
            <form className="flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#11131f] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#11131f] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="bg-[#11131f] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="bg-[#11131f] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />

              {/* WhatsApp Message Button */}
              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full w-fit hover:bg-yellow-300 transition-all"
              >
                Send Message
              </a>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me through the form or directly via the
              information below.
            </p>

            {/* Info items */}
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>yalavarthisaikiran3482@gamil.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+91 9390627367</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>Hyderabad</p>
                  <p>Telangana</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="text-lg font-semibold mb-3">
                Visit my social profile and get connected
              </p>
              <div className="flex gap-5 text-2xl">
                <a
                  href="https://github.com/saikiranyalavarthi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-yellow-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-kiran-yalavarthi-9aa35919a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-yellow-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
