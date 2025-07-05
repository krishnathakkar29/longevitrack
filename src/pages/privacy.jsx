import React from "react";

function Privacy() {
  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden font-dm">
      {/* Extended right gradient glow - taller than contact page */}
      <div className="absolute top-0 right-0 w-96 h-[600px] bg-gradient-radial from-[#00FFFF] via-[#A4FF9F] to-[#00FF6A] opacity-30 blur-3xl transform translate-x-32 -translate-y-16"></div>

      {/* Bottom left gradient glow behind leaf - same as contact page */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-[#00FF6A] via-[#A4FF9F] to-[#00FFFF] opacity-40 blur-3xl transform -translate-x-48 translate-y-24"></div>

      {/* Leaf element positioned at bottom left - same as contact page */}
      <div className="absolute -bottom-24 left-0 z-20">
        <img
          src="/hero/left.png"
          alt="Decorative leaf"
          className="w-80 h-80 lg:w-96 lg:h-96 object-contain transform -translate-x-8 translate-y-8"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-50 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-20 mt-28 md:mt-0">
        {/* Header section */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet. Est maiores veritatis eos esse pariatur
            eum quis quod. Cum exercitationem quibusdam ut numquam deserunt qui
            eligendi doloremque et aperiam tenetur. Et obcaecati quam vel
            blanditiis aliquam qui reiciendis repudiandae ut inventore veniam.
          </p>
        </div>

        {/* Content cards section */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left card */}
          <div className="bg-[#0D2221] rounded-2xl p-8 lg:p-10 shadow-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet. Est maiores veritatis eos esse
              pariatur eum quis quod. Cum exercitationem quibusdam ut numquam
              deserunt qui eligendi doloremque et aperiam tenetur. Et obcaecati
              quam vel blanditiis aliquam qui reiciendis repudiandae ut
              inventore veniam.
            </p>
          </div>

          {/* Right card */}
          <div className="bg-[#0D2221] rounded-2xl p-8 lg:p-10 shadow-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet. Est maiores veritatis eos esse
              pariatur eum quis quod. Cum exercitationem quibusdam ut numquam
              deserunt qui eligendi doloremque et aperiam tenetur. Et obcaecati
              quam vel blanditiis aliquam qui reiciendis repudiandae ut
              inventore veniam.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for gradient-radial and responsive adjustments */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @media (max-width: 1024px) {
          .grid-cols-1.lg\\:grid-cols-2 {
            gap: 2rem;
          }

          .absolute.top-0.right-0 {
            width: 300px;
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .absolute.bottom-0.left-0 img {
            width: 240px;
            height: 240px;
            transform: translateX(-2rem) translateY(2rem);
          }

          .absolute.bottom-0.left-0:not(:has(img)) {
            width: 400px;
            height: 300px;
            transform: translateX(-12rem) translateY(6rem);
          }

          .absolute.top-0.right-0 {
            width: 250px;
            height: 400px;
            transform: translateX(8rem) translateY(-1rem);
          }

          .text-4xl.lg\\:text-5xl.xl\\:text-6xl {
            font-size: 2.5rem;
          }

          .bg-\\[\\#0D2221\\] {
            padding: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .absolute.bottom-0.left-0 img {
            width: 200px;
            height: 200px;
            transform: translateX(-1rem) translateY(1rem);
          }

          .absolute.top-0.right-0 {
            width: 200px;
            height: 350px;
            transform: translateX(6rem) translateY(0);
          }

          .bg-\\[\\#0D2221\\] {
            padding: 1.25rem;
          }

          .min-h-screen.flex.flex-col {
            padding: 1rem;
          }

          .mb-16 {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Privacy;
