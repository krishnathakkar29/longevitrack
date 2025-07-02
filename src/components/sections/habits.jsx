import React from "react";
import { Button } from "../ui/button";

function Habits() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            YOUR DAILY HEALTH SYSTEM
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Optimize Everyday, Here's How
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Create routines */}
          <div className="relative  bg-[#083E34] bg-opacity-50 backdrop-blur-sm rounded-lg p-6">
            <div className=" rounded-2xl h-full">
              <div className="mb-8 px-2 md:px-8 ">
                <h2 className="md:leading-[70px] bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent text-2xl md:text-5xl font-semibold">
                  Create routines <br />
                  <span className="text-white"> that build </span> healthy
                  <br />
                  habits{" "}
                  <span className="text-white">- one step at a time</span>
                </h2>
              </div>

              <div className="space-y-4 px-2 md:px-8 overflow-hidden md:mt-24">
                <div className="flex gap-3">
                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-2 md:px-8 text-xl md:text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Live Longer
                  </Button>
                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-2 md:px-8 text-xl md:text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Build Routines
                  </Button>

                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-6 md:px-8 text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Live Longer
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-2 md:px-8 text-xl md:text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Track Supplements
                  </Button>
                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-2 md:px-8 text-xl md:text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Boost Energy
                  </Button>

                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-6 text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Live Longer
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-2 md:px-8 text-xl md:text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Sleep Better
                  </Button>
                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-2 md:px-8 text-xl md:text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Track Habits
                  </Button>

                  <Button
                    className="text-white border-2 border-green-400 hover:bg-green-400/20 rounded-full px-6 text-2xl py-2 md:py-8"
                    style={{
                      background: "linear-gradient(135deg, #02ADA9, #00E073)",
                    }}
                  >
                    Live Longer
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Wellness in Sync */}
          <div className="relative  bg-[#083E34] bg-opacity-50 backdrop-blur-sm rounded-lg p-6">
            <div className="">
              <h2 className="text-2xl md:text-5xl font-bold mb-2 text-white">
                <span className="bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent ">
                  Wellness
                </span>{" "}
                in Sync
              </h2>
              <p className="text-white text-lg md:text-2xl mb-4 mt-4">
                Easily build and follow wellness with a calender that fits your
                day
              </p>
            </div>

            {/* <div className="rounded-xl overflow-hidden mx-12 mt-10"> */}
            <div className="relative">
              <img
                src="/habit/calender.png"
                alt="Activities dashboard"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* </div> */}
          </div>

          {/* Card 3 - One View */}
          <div className=" relative bg-[#083E34] bg-opacity-50 backdrop-blur-sm rounded-lg p-6">
            <div className="">
              <h2 className="text-2xl md:text-5xl font-bold mb-2 text-white">
                <span className="bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent ">
                  One
                </span>{" "}
                view
              </h2>
              <p className="text-white text-lg md:text-2xl mb-4 mt-4">
                It's hard to stay consistent when your routines are all over the
                place. Bring everything together in one simple dashboard
              </p>
            </div>

            {/* Activities Image */}
            <div className="relative">
              <img
                src="/habit/activities.png"
                alt="Activities dashboard"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Card 4 - Stay on Track */}
          <div className="relative bg-[#083E34] bg-opacity-50 backdrop-blur-sm rounded-lg p-6">
            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1 rounded-r-2xl" />
            <div className="">
              <h2 className="text-2xl md:text-5xl font-bold mb-4 text-white">
                Stay{" "}
                <span className="bg-gradient-to-r from-[#02ADA9] to-[#00E073] bg-clip-text text-transparent">
                  on Track
                </span>
              </h2>
              <p className="text-white text-lg md:text-2xl mb-4 leading-relaxed">
                Form habits that actually stick. Smart reminders help you stay
                consistent so your health goals don't fall behind
              </p>
            </div>
            {/* <div className="rounded-xl overflow-hidden mx-12 mt-10"> */}
            <div className="relative">
              <img
                src="/habit/staytrack.png"
                alt="Activities dashboard"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habits;
