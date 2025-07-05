import React from "react";

function Contact() {
  return (
    <div className="relative min-h-screen bg-black font-dm pt-32 md:pt-0">
      {/* Top right gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#00FFFF] via-[#A4FF9F] to-[#00FF6A] opacity-30 blur-3xl transform translate-x-32 -translate-y-32"></div>

      {/* Bottom left gradient glow behind leaf */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-[#00FF6A] via-[#A4FF9F] to-[#00FFFF] opacity-40 blur-3xl transform -translate-x-48 translate-y-24"></div>

      {/* Leaf element positioned at bottom left */}
      <div className="absolute -bottom-20 left-0 z-20">
        <img
          src="/hero/left.png"
          alt="Decorative leaf"
          className="w-80 h-80 lg:w-96 lg:h-96 object-contain transform -translate-x-8 translate-y-8"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-30 min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 ">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Contact information */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
              Contact us
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg">
              We're here to help. Got a question about your account,
              subscription, or anything else? Just drop us a message and we'll
              get back to you with the support you need.
            </p>
          </div>

          {/* Right side - Contact form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-[#0D2221] rounded-2xl p-8 lg:p-10 shadow-2xl">
              <form className="space-y-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[#1a3332] border border-[#2a4443] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF6A] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#1a3332] border border-[#2a4443] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF6A] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium mb-3"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1a3332] border border-[#2a4443] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF6A] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#00FF6A] to-[#A4FF9F] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00FF6A]/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for gradient-radial */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @media (max-width: 1024px) {
          .grid-cols-1.lg\\:grid-cols-2 {
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .absolute.bottom-0.left-0 img {
            width: 240px;
            height: 240px;
            transform: translateX(-2rem) translateY(2rem);
          }

          .absolute.bottom-0.left-0 + .absolute {
            width: 400px;
            height: 300px;
            transform: translateX(-12rem) translateY(6rem);
          }

          .text-4xl.lg\\:text-5xl.xl\\:text-6xl {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .absolute.bottom-0.left-0 img {
            width: 200px;
            height: 200px;
            transform: translateX(-1rem) translateY(1rem);
          }

          .bg-\\[\\#0D2221\\] {
            padding: 1.5rem;
          }

          .min-h-screen.flex.items-center {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
