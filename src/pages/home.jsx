import AppDownloadSection from "@/components/sections/app-download";
import FAQSection from "@/components/sections/faq-section";
import Features from "@/components/sections/features";
import Habits from "@/components/sections/habits";
import Health from "@/components/sections/health";
import TestimonialsSection from "@/components/sections/testimonials";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main className=" min-h-screen">
      <section className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Background with 50% opacity overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Top glow effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-[#02ADA9] to-transparent opacity-70 blur-3xl z-50"></div>

        {/* Left leaf with glow */}
        <div className="absolute bottom-0 left-0 z-20">
          <div className="relative">
            <div className="absolute inset-0  bg-gradient-to-r from-[#02ADA9] to-[#02ADA9] opacity-50 blur-2xl"></div>
            <img
              src="/hero/left.png"
              alt="Left decorative leaf"
              width={400}
              height={600}
              className="relative z-10 -bottom-36"
            />
          </div>
        </div>

        {/* Right leaf with glow */}
        <div className="absolute bottom-0 right-0 z-20">
          <div className="relative">
            <div className="absolute inset-0 -bottom-12 bg-gradient-to-l from-[#02ADA9] to-[#02ADA9] opacity-50 blur-2xl"></div>
            <img
              src="/hero/rightleaf.png"
              alt="Right decorative leaf"
              width={400}
              height={600}
              className="relative z-10 -bottom-40"
            />
          </div>
        </div>

        {/* Left lady */}
        <div className="absolute left-8 lg:left-16 bottom-0 z-30">
          <img
            src="/hero/ladyleft.png"
            alt="Woman exercising"
            width={280}
            height={400}
            className="w-48 lg:w-72 h-auto"
          />
        </div>

        {/* Right lady */}
        <div className="absolute right-8 lg:right-16 bottom-0 z-30">
          <img
            src="/hero/ladyright.png"
            alt="Woman with phone"
            width={280}
            height={320}
            className="w-48 lg:w-72 h-auto"
          />
        </div>

        {/* Mobile mockup */}
        <div className="absolute right-12 lg:right-8 top-1/2 transform -translate-y-1/2 z-[15]">
          <img
            src="/hero/phone.png"
            alt="Health app mobile interface"
            width={300}
            height={600}
            className="w-48 lg:w-72 h-auto transform rotate-12"
          />
        </div>

        {/* Central content */}
        <div className="relative z-30 flex flex-col items-center justify-center max-h-screen px-6 mt-28 md:mt-36 text-center">
          {/* DNA/Health icon */}
          <div className="mb-8">
            <div className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-4 rounded-lg flex items-center justify-center">
              <img src="/hero/center.png" alt="" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl relative shadow-lg shadow-transparent z-[100] font-bold mb-6 max-w-4xl font-hanken ">
            <span className="bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent">
              Your Daily System for a
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent">
              Longer, Healthier Life
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg lg:text-3xl mb-8 max-w-2xl font-hanken">
            Track routines, build habits, and take control of your healthspan -
            one day at a time
          </p>

          {/* CTA Button */}
          <button
            className="px-8 py-4 bg-gradient-to-r from-[#02ADA9] to-[#00E073] text-white text-lg md:text-3xl font-semibold rounded-2xl hover:shadow-lg hover:shadow-[#02ADA9]/25 transition-all duration-300 transform hover:scale-105 font-dm"
            onClick={() => {
              navigate("/pricing");
            }}
          >
            Try for FREE
          </button>
        </div>

        {/* Responsive adjustments for mobile */}
        <style jsx>{`
          @media (max-width: 768px) {
            .absolute.left-8 {
              left: 1rem;
            }
            .absolute.right-8 {
              right: 1rem;
            }
            .absolute.right-12 {
              right: 2rem;
              top: 60%;
            }
          }

          @media (max-width: 640px) {
            .absolute.left-8 img,
            .absolute.right-8 img {
              width: 120px;
            }
            .absolute.right-12 img {
              width: 160px;
            }
          }
        `}</style>
      </section>
      <Habits />

      <Features />
      <TestimonialsSection />
      <Health />
      <FAQSection />
      <AppDownloadSection />
    </main>
  );
}

export default Home;
