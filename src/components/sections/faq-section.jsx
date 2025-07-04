"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What is Longevitytrack ?",
    answer:
      "Longevitytrack is a comprehensive health and wellness platform designed to help you monitor, track, and improve your overall well-being. Our platform combines cutting-edge technology with personalized insights to support your journey toward optimal health and longevity.",
  },
  {
    id: "item-2",
    question: "How does Longevitytrack work ?",
    answer:
      "Longevitytrack works by collecting and analyzing your health data through various methods including wearable device integration, manual input, and smart assessments. Our AI-powered algorithms then provide personalized recommendations, track your progress, and help you make informed decisions about your health.",
  },
  {
    id: "item-3",
    question: "How do I download Longevitytrack ?",
    answer:
      "You can download Longevitytrack from the App Store for iOS devices or Google Play Store for Android devices. Simply search for 'Longevitytrack' and tap the install button. You can also visit our website to find direct download links and get started with our web application.",
  },
  {
    id: "item-4",
    question: "What is included in Longevitytrack subscription ?",
    answer:
      "Your Longevitytrack subscription includes unlimited access to all premium features, personalized health insights, advanced analytics, custom meal plans, workout routines, progress tracking, priority customer support, and regular updates with new features and improvements.",
  },
  {
    id: "item-5",
    question: "How much does Longevitytrack cost ?",
    answer:
      "Longevitytrack offers flexible pricing plans to suit different needs. Our basic plan starts at $9.99/month, while our premium plan is $19.99/month. We also offer annual subscriptions with significant savings. A free trial is available for new users to explore all features before committing.",
  },
  {
    id: "item-6",
    question: "Does Longevitytrack subscription automatically renew ?",
    answer:
      "Yes, Longevitytrack subscriptions automatically renew at the end of each billing cycle to ensure uninterrupted service. You can manage your subscription settings and turn off auto-renewal at any time through your account settings or the app store where you made the purchase.",
  },
  {
    id: "item-7",
    question: "How do I cancel Longevitytrack subscription ?",
    answer:
      "You can cancel your Longevitytrack subscription at any time through your account settings in the app, or through the app store where you made the purchase (App Store or Google Play). For web subscriptions, visit your account dashboard and click on 'Manage Subscription' to cancel or modify your plan.",
  },
];

export default function FAQSection() {
  return (
    <div className="bg-black">
      <section className="w-full  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#91FFAE] text-sm font-medium tracking-wider uppercase mb-4">
              GOT QUESTIONS
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Frequently asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-0">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <AccordionTrigger className="text-left py-6 px-0 hover:no-underline group transition-all duration-300 hover:text-[#91FFAE]">
                    <span className="text-white text-base sm:text-lg font-medium group-hover:text-[#91FFAE] transition-colors duration-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0 px-0">
                    <div className="text-gray-300 text-sm sm:text-base leading-relaxed animate-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Help Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Still have questions? We're here to help.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-[#91FFAE] text-[#91FFAE] bg-transparent hover:bg-[#91FFAE] hover:text-black rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
