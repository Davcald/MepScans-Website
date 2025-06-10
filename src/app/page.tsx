'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--background)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.h1
            {...fadeInUp}
            className="text-5xl sm:text-7xl font-semibold tracking-tight mb-6"
            style={{ 
              color: 'var(--foreground)',
              letterSpacing: '-0.015em',
              lineHeight: '1.05'
            }}
          >
            MepScans
          </motion.h1>
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-medium mb-8"
            style={{ 
              color: 'var(--primary)',
              letterSpacing: '-0.01em',
              lineHeight: '1.1'
            }}
          >
            Your workflows, our WMS
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto font-normal"
            style={{ 
              color: 'var(--foreground)',
              letterSpacing: '-0.01em',
              lineHeight: '1.4'
            }}
          >
            A flexible warehouse management system that adapts to your business processes and seamlessly integrates with SYSPRO.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium rounded-full text-white hover:opacity-90 transition-colors"
              style={{ 
                background: 'var(--primary)',
                letterSpacing: '-0.01em'
              }}
            >
              Request a Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium rounded-full hover:opacity-90 transition-colors"
              style={{ 
                background: 'var(--secondary)',
                color: 'var(--foreground)',
                borderColor: 'var(--foreground)',
                letterSpacing: '-0.01em'
              }}
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'var(--background)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2 
                  className="text-4xl sm:text-5xl font-semibold"
                  style={{ 
                    color: 'var(--foreground)',
                    letterSpacing: '-0.015em',
                    lineHeight: '1.1'
                  }}
                >
                  Who We Are
                </motion.h2>
                <motion.p 
                  className="text-xl sm:text-2xl font-medium"
                  style={{ 
                    color: 'var(--primary)',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.3'
                  }}
                >
                  30+ Years in ERP and Manufacturing, Dedicated to Simplicity
                </motion.p>
              </div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p 
                  className="text-lg sm:text-xl mb-6 font-normal"
                  style={{ 
                    color: 'var(--foreground)',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.6'
                  }}
                >
                  With over three decades of experience in the ERP and manufacturing industry, our team has specialized in Syspro ERP solutions. Observing clients consistently adapting their processes to rigid warehouse management systems, we knew there had to be a better way.
                </p>
                <p 
                  className="text-lg sm:text-xl font-normal"
                  style={{ 
                    color: 'var(--foreground)',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.6'
                  }}
                >
                  Our vision: a WMS solution adaptable enough to fit any company's unique workflow—without adding complexity. So, we built MepScans—a flexible yet intuitive WMS software designed to easily configure and seamlessly support every workflow. This is our guiding principle: "Simplicity in Complexity."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block px-6 py-3 rounded-full"
                style={{ 
                  background: 'var(--secondary)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
              </motion.div>
            </motion.div>

            {/* Visual Elements Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px] hidden lg:block"
            >
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-24 h-24 rounded-2xl flex items-center justify-center text-4xl shadow-lg"
                style={{ background: 'var(--secondary)' }}
              >
                ⚙️
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-40 right-10 w-32 h-32 rounded-2xl flex items-center justify-center text-5xl shadow-lg"
                style={{ background: 'var(--secondary)' }}
              >
                🔄
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-20 left-20 w-28 h-28 rounded-2xl flex items-center justify-center text-4xl shadow-lg"
                style={{ background: 'var(--secondary)' }}
              >
                📊
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  d="M 100,100 Q 200,50 300,150 T 500,100"
                  fill="none"
                  stroke="var(--foreground)"
                  strokeWidth="2"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.7 }}
                  d="M 400,200 Q 500,150 600,250 T 800,200"
                  fill="none"
                  stroke="var(--foreground)"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting Started with MepScans - Scrollable Section with Timeline */}
      <section className="py-32 overflow-hidden" style={{ background: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <h2 
              className="text-4xl sm:text-5xl font-semibold mb-6"
              style={{ 
                color: 'var(--foreground)',
                letterSpacing: '-0.015em',
                lineHeight: '1.1'
              }}
            >
              How MepScans Works
            </h2>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line Container - Exact between points */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-160px)] top-[80px] w-0.5 bg-gray-300 z-0 md:block hidden">
              <motion.div 
                initial={{ height: '0%' }}
                whileInView={{ height: '100%' }}
                viewport={{ once: false }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full bg-primary z-10"
                style={{ background: 'var(--primary)' }}
              />
            </div>

            <div className="space-y-40 relative">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 order-2 md:order-1 pr-4 md:pr-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Map Your Workflows
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    MepScans brings your current or improved workflows to life with tailored warehouse management software.
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    It precisely mirrors your workflow, ensuring you're never forced into a generic, one-size-fits-all process.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center order-1 md:order-2 pl-4 md:pl-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex items-bottom justify-center "
                  >
                    <Image
                      src="/images/map.png"
                      alt="Workflow Mapping Illustration"
                      width={256}
                      height={256}
                      className="object-contain w-full h-full"
                      priority={true}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row-reverse items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 pl-4 md:pl-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Define Your Prompts
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Clearly define each step and prompt exactly how your team prefers.
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Customize prompts to reflect your operations naturally and intuitively.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center pr-4 md:pr-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/prompt.png"
                      alt="Prompt Configuration Illustration"
                      width={256}
                      height={256}
                      className="object-contain w-full h-full"
                      priority={true}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 order-2 md:order-1 pr-4 md:pr-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Selection Search
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Allow users to search relevant data for each specific prompt.
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Users see only valid and applicable options, eliminating confusion and guesswork.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center order-1 md:order-2 pl-4 md:pl-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/search.png"
                      alt="Selection Search Illustration"
                      width={256}
                      height={256}
                      className="object-contain w-full h-full"
                      priority={true}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row-reverse items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 pl-4 md:pl-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Verification & Conditional Checks
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Ensure every response meets your defined criteria (e.g., verifying item stock availability).
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    If a response fails validation, MepScans immediately re-asks the question, ensuring seamless accuracy without dead ends.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center pr-4 md:pr-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/verify.png"
                      alt="Verification and Conditional Checks Illustration"
                      width={256}
                      height={256}
                      className="object-contain w-full h-full"
                      priority={true}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Step 5 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 order-2 md:order-1 pr-4 md:pr-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Auto-Select
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Automatically select options when only one valid choice is available.
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Set preferences such as automatically choosing the closest bin location, even among multiple valid choices.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center order-1 md:order-2 pl-4 md:pl-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/select.png"
                      alt="Auto-Select Illustration"
                      width={256}
                      height={256}
                      className="object-contain w-full h-full"
                      priority={true}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Step 6 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row-reverse items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 pl-4 md:pl-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Looping
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Easily loop through prompts to gather comprehensive data first.
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Collect all necessary information before posting transactions, improving user experience and workflow efficiency.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center pr-4 md:pr-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src="/images/loop.png"
                      alt="Looping Illustration"
                      width={256}
                      height={256}
                      className="object-contain w-full h-full"
                      priority={true}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Step 7 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 order-2 md:order-1 pr-4 md:pr-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Live Data
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Connect directly to your database for continuous, real-time visibility.
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Your team always accesses the latest inventory, order statuses, and critical operational data.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center order-1 md:order-2 pl-4 md:pl-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div 
                    whileInView={{ y: [0, -5, 5, 0] }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center text-4xl md:text-6xl shadow-lg"
                    style={{ background: 'var(--background)' }}
                  >
                    📊
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Step 8 (Last Step) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row-reverse items-center gap-12 relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1, 
                      backgroundColor: '#FFFFFF',
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ 
                      once: false, 
                      margin: "-200px 0px -200px 0px",
                      amount: 0.5
                    }}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-20"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>

                <motion.div 
                  className="md:w-1/2 pl-4 md:pl-16"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-semibold mb-4"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    Logging
                  </h3>
                  <p 
                    className="text-lg sm:text-xl mb-4 font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Automatically log all transactions and user interactions in a built-in database.
                  </p>
                  <p 
                    className="text-lg sm:text-xl font-normal"
                    style={{ 
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4'
                    }}
                  >
                    Utilize detailed logs for effective warehouse reporting, audits, and performance insights.
                  </p>
                </motion.div>

                <motion.div 
                  className="md:w-1/2 flex justify-center pr-4 md:pr-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.3
                    }
                  }}
                  viewport={{ 
                    once: false, 
                    margin: "-200px 0px -200px 0px",
                    amount: 0.5
                  }}
                >
                  <motion.div 
                    whileInView={{ scale: [1, 1.05, 1] }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center text-4xl md:text-6xl shadow-lg"
                    style={{ background: 'var(--background)' }}
                  >
                    📝
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="py-16" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/examples"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg text-white shadow-md hover:shadow-lg transition-all"
              style={{ background: 'var(--primary)' }}
            >
              See Real Life Examples
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Common Programs Section */}
      <section className="py-32" style={{ background: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <h2 
              className="text-4xl sm:text-5xl font-semibold mb-6"
              style={{ 
                color: 'var(--foreground)',
                letterSpacing: '-0.015em',
                lineHeight: '1.1'
              }}
            >
              Common Programs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Stock Taking',
              'Purchase Order Receiving',
              'Sales Order Picking',
              'Shipping',
              'Printing Labels'
            ].map((program, index) => (
              <motion.div
                key={program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
                style={{ 
                  background: 'var(--background)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                <h3 
                  className="text-xl font-medium"
                  style={{ 
                    color: 'var(--foreground)',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.3'
                  }}
                >
                  {program}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 
              className="text-4xl sm:text-5xl font-semibold mb-8"
              style={{ 
                color: 'var(--foreground)',
                letterSpacing: '-0.015em',
                lineHeight: '1.1'
              }}
            >
              Ready to see MepScans in action?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium rounded-full text-white hover:opacity-90 transition-colors"
              style={{ 
                background: 'var(--primary)',
                letterSpacing: '-0.01em'
              }}
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
