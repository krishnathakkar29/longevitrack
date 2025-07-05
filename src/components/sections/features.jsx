import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const carouselData = [
  {
    id: 1,
    title: "Stay in Control of Your Routine",
    description:
      "Stay in control of your longevity journey with a simple dashboard that helps you build routines, track your day, and feel organized",
    features: [
      {
        icon: "/features/box1.png",
        title: "Organize your day with scheduled routines",
        description: "from supplements, workouts, and wellness habits.",
      },
      {
        icon: "/features/clock1.png",
        title: "Sort tasks by time",
        description:
          "- morning, noon, evening - for a clearer, more structured flow.",
      },
      {
        icon: "/features/arrow1.png",
        title: "Visualize your progress",
        description:
          "with a simple layout that shows what's done and what's left",
      },
    ],
    phoneImage: "/features/mock1.png",
  },
  {
    id: 2,
    title: "Earn your Streaks",
    description:
      "Understand your patterns, measure your effort, and track your wins so every healthy habit feels like a win.",
    features: [
      {
        icon: "/features/21.png",
        title: "View progress weekly, monthly, or yearly",
        description: "to see how far you've come",
      },
      {
        icon: "/features/22.png",
        title: "Spot trends and patterns",
        description: "in your routines to understand what's working best.",
      },
      {
        icon: "/features/23.png",
        title: "Earn a Consistency Score",
        description: "as you build streaks and complete your daily goals",
      },
    ],
    phoneImage: "/features/mock2.png",
  },
  {
    id: 3,
    title: "Make it Yours",
    description:
      "Personalize your health routines to match your goals and your lifestyle.",
    features: [
      {
        icon: "/features/31.png",
        title: "Create and customize activities",
        description: "with name, categories, and notes",
      },
      {
        icon: "/features/32.png",
        title: "Add colors, icons & reminders",
        description: "to keep things clear and motivating",
      },
      {
        icon: "/features/33.png",
        title: "Set schedules and recurrence",
        description: "to make healthy routines stick",
      },
    ],
    phoneImage: "/features/mock3.png",
  },
  {
    id: 4,
    title: "Stay on Track",
    description:
      "Never miss a step. Smart reminders and progress history help you stay accountable and build real habits.",
    features: [
      {
        icon: "/features/41.png",
        title: "View past reminders",
        description: "in a single, organized timeline",
      },
      {
        icon: "/features/42.png",
        title: "See what you completed or missed",
        description: "to track progress",
      },
      {
        icon: "/features/43.png",
        title: "Find the best times",
        description: "for your activities based on patterns",
      },
      {
        icon: "/features/44.png",
        title: "Fine-tune your routine",
        description: "with insights that keep you consistent",
      },
    ],
    phoneImage: "/features/mock4.png",
  },
];

function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-20 left-32 w-1 h-1 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 left-20 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
        <div className="absolute top-16 right-40 w-1 h-1 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section - Fixed */}
        <div className="text-center mb-12">
          <p className="text-green-400 text-sm font-medium tracking-wider mb-4 uppercase">
            Built for Everyday Wellness
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            The Longevity app for
            <br />
            Everyday Life
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              "Own Your Day",
              "See your wins",
              "Make it yours",
              "Stick with it",
            ].map((text, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#02ADA9] to-[#00E073] hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Green Rectangle Background */}
          <div className="relative">
            <div
              className="absolute inset-0 top-20 rounded-2xl"
              style={{ backgroundColor: "#0E2E2A" }}
            ></div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-start pt-20 pb-4 px-8">
              {/* Content Side */}
              <div className="space-y-8 order-2 lg:order-1 pt-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {carouselData[currentSlide].title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {carouselData[currentSlide].description}
                  </p>
                </div>

                <div className="space-y-6">
                  {carouselData[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        <img
                          src={feature.icon || "/placeholder.svg"}
                          alt=""
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone Mockup Side - Overlapping above rectangle */}
              <div className="relative order-1 lg:order-2 flex justify-center -mt-8 lg:-mt-12">
                {/* Gradient Glow Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 opacity-60 blur-3xl z-0">
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: `radial-gradient(ellipse, #00FFFF 0%, #A4FF9F 40%, #00FF6A 70%, transparent 100%)`,
                    }}
                  ></div>
                </div>

                {/* Phone Image */}
                <div className="relative z-10">
                  <img
                    src={
                      carouselData[currentSlide].phoneImage ||
                      "/placeholder.svg"
                    }
                    alt={`${carouselData[currentSlide].title} phone mockup`}
                    width={300}
                    height={600}
                    className="w-full max-w-[300px] h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-[#02ADA9] to-[#00E073] w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
