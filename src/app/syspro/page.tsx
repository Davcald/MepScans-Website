'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function SysproPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--background)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Syspro Integration
            </h1>
            <p className="text-xl" style={{ color: 'var(--foreground)' }}>
              Seamlessly integrate your MEP scan data with Syspro ERP for enhanced project management and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Streamlined Workflow
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--foreground)' }}>
                Our Syspro integration allows you to:
              </p>
              <ul className="space-y-4">
                {[
                  'Automatically sync scan data with your Syspro system',
                  'Generate accurate BOMs and material lists',
                  'Track project progress in real-time',
                  'Maintain data consistency across platforms'
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                    style={{ color: 'var(--foreground)' }}
                  >
                    <span className="mr-3" style={{ color: 'var(--primary)' }}>✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl"
              style={{ background: 'var(--secondary)' }}
            >
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                Key Benefits
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Time Savings',
                    description: 'Reduce manual data entry by up to 80% with automated integration'
                  },
                  {
                    title: 'Error Reduction',
                    description: 'Minimize human error with direct data transfer between systems'
                  },
                  {
                    title: 'Real-time Updates',
                    description: 'Keep your project data current with automatic synchronization'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl shadow-sm"
                    style={{ background: 'var(--background)' }}
                  >
                    <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                      {benefit.title}
                    </h4>
                    <p style={{ color: 'var(--foreground)' }}>
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-24" style={{ background: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Simple Integration Process
            </h2>
            <p className="text-xl" style={{ color: 'var(--foreground)' }}>
              Get started with our Syspro integration in just a few steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect',
                description: 'Link your Syspro system with our secure API'
              },
              {
                step: '02',
                title: 'Configure',
                description: 'Set up your integration preferences and mapping'
              },
              {
                step: '03',
                title: 'Automate',
                description: 'Start enjoying automated data synchronization'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl text-center"
                style={{ background: 'var(--background)' }}
              >
                <div className="text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--foreground)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 