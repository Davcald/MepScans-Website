"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};


const addOns = [
  {
    name: "Additional Users",
    options: [
      { range: "4–10 Users", price: "$150/user/month" },
      { range: "11–30 Users", price: "$125/user/month" },
      { range: "31+ Users", price: "$100/user/month" },
    ],
  },
  {
    name: "Additional Programs",
    price: "$150/program/month",
  },
];

export default function PricingPage() {
  return (
    <div className="relative bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-purple-800 via-orange-400 to-green-500 bg-clip-text text-transparent">
              Flexible Pricing Designed for Your Business
            </h1>
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto font-normal text-gray-600 dark:text-gray-300">
              Transparent monthly subscriptions. No long-term commitments. Easily scale your plan anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl sm:text-5xl font-semibold tracking-tight mb-8 bg-gradient-to-r from-purple-800 via-orange-400 to-green-500 bg-clip-text text-transparent" style={{ lineHeight: '1.1' }}>
              Base Package
            </h2>
            <p className="text-4xl font-bold text-white mb-6">
              $599/month
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>3 Users + 2 Programs</li>
              <li>Month-to-month subscription</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center bg-gradient-to-r from-purple-800 via-orange-400 to-green-500 bg-clip-text text-transparent">
            Base Add-Ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-shadow transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-purple-800 via-orange-400 to-green-500 bg-clip-text text-transparent">
                  {addOn.name}
                </h3>
                {addOn.options ? (
                  <ul className="space-y-4">
                    {addOn.options.map((option) => (
                      <li key={option.range} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">{option.range}</span>
                        <span className="text-gray-900 dark:text-white font-medium">{option.price}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">{addOn.price}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-purple-800 via-orange-400 to-green-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change my subscription anytime?",
                answer:
                  "Yes, you can easily adjust users or programs monthly without hassle.",
              },
              {
                question: "Is there a minimum subscription period?",
                answer:
                  "No, our service is month-to-month, giving you complete control and flexibility.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards and ACH transfers.",
              },
              {
                question: "Are there any hidden fees?",
                answer:
                  "No hidden fees. Transparent pricing is our commitment to you.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Absolutely. You can cancel your subscription anytime without penalties.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-shadow transform hover:-translate-y-1 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-purple-800 via-orange-400 to-green-500 bg-clip-text text-transparent">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 