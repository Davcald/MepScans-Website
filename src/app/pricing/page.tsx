'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small projects and startups',
    price: 'From $999',
    features: [
      'Basic 3D scanning',
      'Standard resolution',
      'Basic documentation',
      'Email support',
      '5-day turnaround'
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 'From $2,499',
    features: [
      'High-resolution 3D scanning',
      'Advanced documentation',
      'Syspro integration',
      'Priority support',
      '3-day turnaround',
      'Custom reporting',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    features: [
      'Ultra-high resolution scanning',
      'Full documentation suite',
      'Custom Syspro integration',
      '24/7 dedicated support',
      'Same-day turnaround',
      'Custom reporting',
      'API access',
      'Dedicated account manager'
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your project needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-blue-600 text-white dark:bg-blue-700'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-sm opacity-75">/project</span>}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className={`h-6 w-6 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'
                        }`} />
                        <span className={plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'What factors affect the final price?',
                answer: 'The final price depends on project size, complexity, required resolution, and additional services like Syspro integration or custom reporting.'
              },
              {
                question: 'Can I upgrade my plan later?',
                answer: 'Yes, you can upgrade your plan at any time. We'll prorate the difference for the remaining period.'
              },
              {
                question: 'Do you offer volume discounts?',
                answer: 'Yes, we offer special pricing for multiple projects or long-term contracts. Contact us for details.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can accommodate purchase orders for enterprise clients.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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