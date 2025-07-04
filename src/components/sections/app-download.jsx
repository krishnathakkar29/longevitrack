import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppDownloadSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Content Area */}
      <div className="relative">
        {/* Upper Section with Dark Green Background */}
        <div
          className="relative px-4 sm:px-6 lg:px-8 pt-8"
          style={{ backgroundColor: "#071412" }}
        >
          <div className="w-full md:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
              {/* Left Content */}
              <div className="relative z-20 text-left lg:pr-12">
                <p className="text-gray-300 text-lg mb-6 font-medium">
                  Your path to a longer, better life starts now
                </p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
                  Download App now
                </h1>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl h-auto flex items-center gap-3 text-base font-medium transition-all duration-300 hover:scale-105 border-0"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-600 font-normal leading-tight">
                        GET IT ON
                      </div>
                      <div className="text-lg font-semibold leading-tight">
                        Google Play
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl h-auto flex items-center gap-3 text-base font-medium transition-all duration-300 hover:scale-105 border-0"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="currentColor"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-600 font-normal leading-tight">
                        DOWNLOAD ON THE
                      </div>
                      <div className="text-lg font-semibold leading-tight">
                        App Store
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Right Content - Phone Mockup and Character */}
              <div className="relative z-30 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-2xl">
                  {/* iPhone Mockup */}
                  <div className="relative z-40 ml-auto mr-8 lg:mr-0">
                    <div className="transform rotate-6 hover:rotate-6 transition-transform duration-500">
                      <img
                        src="/app/iphone.png"
                        alt="Longevitytrack App Interface"
                        width={600}
                        height={1200}
                        className="w-[400px] sm:w-[450px] lg:w-[600px] h-auto drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>

                  {/* Character Illustration */}
                  <div className="absolute bottom-0 left-0 lg:left-64 z-50 transform hover:scale-105 transition-transform duration-300 hidden md:block">
                    <img
                      src="/app/lady.png"
                      alt="Health App User"
                      width={320}
                      height={480}
                      className=" w-[250px] sm:w-[280px] lg:w-[320px] h-auto drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seamless Wave Transition */}
        <div className="relative -mt-24">
          <svg
            className="w-full h-20 sm:h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ backgroundColor: "#071412" }}
          >
            <path
              d="M0,0 C200,80 400,80 600,40 C800,0 1000,0 1200,40 L1200,120 L0,120 Z"
              fill="#2A3F3B"
            />
          </svg>
        </div>
      </div>

      {/* Lower Section with Lighter Green Background */}
      <div
        className="relative px-4 sm:px-6 lg:px-8 py-12"
        style={{ backgroundColor: "#2A3F3B" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Divider Line */}
          <div className="w-full h-px bg-gray-600 mb-8"></div>

          {/* Footer Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Left Side - Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-300">
              <span className="text-sm">2025 © Longevitytrack</span>
              <div className="flex gap-6">
                <button className="text-sm hover:text-white transition-colors duration-300">
                  Privacy Policy
                </button>
                <button className="text-sm hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </button>
              </div>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
