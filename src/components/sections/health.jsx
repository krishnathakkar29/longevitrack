import React, { use } from "react";
import { useNavigate } from "react-router-dom";

function Health() {
  const navigate = useNavigate();
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Header Content */}
      <div className="text-center mb-12 max-w-5xl">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Join the thousands taking control of their health every day
        </h1>

        <button
          className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors mb-4"
          onClick={() => {
            navigate("/pricing");
          }}
        >
          Try for FREE
        </button>
      </div>

      {/* Images Section with Enhanced Minimal Glow Effect */}
      <div className="relative w-full max-w-6xl">
        {/* Enhanced Minimal Curved Glow - Behind Images */}
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-40 z-0"
          style={{
            background: `radial-gradient(ellipse 70% 100% at 50% 0%, #8bffd4 0%, #1B804F 35%, transparent 65%)`,
            opacity: 0.5,
            filter: "blur(8px)",
          }}
        />

        {/* Secondary Glow Layer for Better Visibility */}
        <div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4/5 h-24 z-0"
          style={{
            background: `linear-gradient(90deg, transparent 0%, #8bffd4 30%, #1B804F 50%, #8bffd4 70%, transparent 100%)`,
            opacity: 0.4,
            filter: "blur(6px)",
            clipPath: "ellipse(80% 100% at 50% 0%)",
          }}
        />

        {/* Images Container - Higher z-index */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4">
          {/* Left Image - App Store Rating */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-64 h-48 md:w-72 md:h-52 rounded-3xl overflow-hidden bg-black">
                <img
                  src="/testimonial/man.jpg"
                  alt="Person using health app"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl font-bold mb-1">4.6</div>
              <div className="text-gray-400 text-sm">App Store Rating</div>
            </div>
          </div>

          {/* Center Image - Downloads */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-72 h-56 md:w-80 md:h-60 rounded-3xl overflow-hidden bg-black">
                <img
                  src="/testimonial/man.jpg"
                  alt="Person using health app"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl font-bold mb-1">10K+</div>
              <div className="text-gray-400 text-sm">Downloads</div>
            </div>
          </div>

          {/* Right Image - Activities Tracked */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-64 h-48 md:w-72 md:h-52 rounded-3xl overflow-hidden bg-black">
                <img
                  src="/testimonial/man.jpg"
                  alt="Person using health app"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl font-bold mb-1">50K+</div>
              <div className="text-gray-400 text-sm">Activities Tracked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dots Pattern */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-green-400 rounded-full"
              style={{
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Health;
