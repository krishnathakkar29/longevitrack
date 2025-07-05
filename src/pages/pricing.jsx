import React from "react";

function Pricing() {
  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden">
      {/* Top right gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#02ADA9] via-[#00E073] to-transparent opacity-40 blur-3xl transform translate-x-32 -translate-y-32"></div>

      {/* Bottom right gradient glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[#00E073] via-[#02ADA9] to-transparent opacity-30 blur-3xl transform translate-x-24 translate-y-24"></div>

      {/* Bottom left gradient glow behind leaf */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-gradient-radial from-[#02ADA9] via-[#00E073] to-transparent opacity-35 blur-3xl transform -translate-x-32 translate-y-16"></div>

      {/* Leaf element positioned at bottom left - only partially visible */}
      <div className="absolute -bottom-14 left-0 z-20">
        <img
          src="/hero/left.png"
          alt="Decorative leaf"
          className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain transform -translate-x-32 translate-y-32 lg:-translate-x-40 lg:translate-y-40"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-30 min-h-screen flex items-center justify-center md:ml-24 px-6 lg:px-12 py-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid w-full max-w-7xl grid-cols-2 gap-20 items-center">
          {/* Left side - Pricing content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-300">No payment now.</p>
              <h1 className="text-6xl xl:text-7xl font-bold">
                <span className="bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent">
                  $0 today
                </span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl font-semibold">
                  7 day free trial. Then $XX.XX / year.
                </p>
                <p className="text-gray-400">No payment now. Cancel anytime</p>
              </div>
            </div>

            {/* Feature list */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#02ADA9] to-[#00E073] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg">Track Activities by Categories</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#02ADA9] to-[#00E073] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg">
                  Get Advanced Analytics & Insights
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#02ADA9] to-[#00E073] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg">View Detailed Progress Reports</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#02ADA9] to-[#00E073] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg">Access Enhanced Calendar Views</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#02ADA9] to-[#00E073] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg">Enable Smart Notifications</span>
              </div>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center space-y-1">
              <p className="text-white text-md">
                Scan the QR code to download app on
              </p>
              <p className="text-white text-md">
                Google Play Store or Apple App Store
              </p>
            </div>
            <div className="bg-white p-2 rounded-2xl">
              <img
                src="/hero/qr.png"
                alt="QR Code for app download"
                className="w-80 h-80"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full max-w-sm mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">
              Unlock Premium Access
            </h1>
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent">
                $0 today
              </span>
            </h2>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">
                7 day free trial. Then $XX.XX / year
              </p>
              <p className="text-gray-400">No payment now. Cancel anytime</p>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-black border border-gray-600 rounded-lg p-4 flex items-center justify-center space-x-3 hover:border-gray-500 transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#34A853"
                  d="M3.609 1.814L13.792 12L3.609 22.186C3.219 21.796 3 21.266 3 20.7V3.3C3 2.734 3.219 2.204 3.609 1.814Z"
                />
                <path
                  fill="#FBBC04"
                  d="M13.792 12L3.609 1.814C4.196 1.227 5.023 1 5.9 1H6.1C6.977 1 7.804 1.227 8.391 1.814L13.792 12Z"
                />
                <path
                  fill="#EA4335"
                  d="M13.792 12L8.391 22.186C7.804 22.773 6.977 23 6.1 23H5.9C5.023 23 4.196 22.773 3.609 22.186L13.792 12Z"
                />
                <path
                  fill="#4285F4"
                  d="M13.792 12L20.7 5.1C21.266 5.1 21.796 5.319 22.186 5.709C22.576 6.099 22.795 6.629 22.795 7.195V16.805C22.795 17.371 22.576 17.901 22.186 18.291C21.796 18.681 21.266 18.9 20.7 18.9L13.792 12Z"
                />
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-400">GET IT ON</p>
                <p className="text-white font-semibold">Google Play</p>
              </div>
            </button>

            <button className="w-full bg-black border border-gray-600 rounded-lg p-4 flex items-center justify-center space-x-3 hover:border-gray-500 transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-400">Download on the</p>
                <p className="text-white font-semibold">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for gradient-radial and responsive adjustments */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @media (max-width: 1024px) {
          .absolute.bottom-0.left-0 img {
            width: 300px;
            height: 300px;
            transform: translateX(-8rem) translateY(8rem);
          }

          .absolute.bottom-0.left-0:not(:has(img)) {
            width: 400px;
            height: 250px;
            transform: translateX(-8rem) translateY(4rem);
          }

          .absolute.top-0.right-0 {
            width: 250px;
            height: 250px;
            transform: translateX(6rem) translateY(-6rem);
          }

          .absolute.bottom-0.right-0 {
            width: 200px;
            height: 200px;
            transform: translateX(4rem) translateY(4rem);
          }
        }

        @media (max-width: 768px) {
          .absolute.bottom-0.left-0 img {
            width: 250px;
            height: 250px;
            transform: translateX(-6rem) translateY(6rem);
          }
        }

        @media (max-width: 640px) {
          .absolute.bottom-0.left-0 img {
            width: 200px;
            height: 200px;
            transform: translateX(-4rem) translateY(4rem);
          }

          .absolute.bottom-0.left-0:not(:has(img)) {
            width: 300px;
            height: 200px;
            transform: translateX(-6rem) translateY(2rem);
          }

          .absolute.top-0.right-0 {
            width: 200px;
            height: 200px;
            transform: translateX(4rem) translateY(-4rem);
          }

          .absolute.bottom-0.right-0 {
            width: 150px;
            height: 150px;
            transform: translateX(3rem) translateY(3rem);
          }
        }
      `}</style>
    </div>
  );
}

export default Pricing;
