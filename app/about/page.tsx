'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const approachPoints = [
    'A deep understanding of business processes and finance',
    'Practical, scalable ERPNext solutions',
    'Clear communication and structured delivery',
    'Long-term partnerships, not one-off projects',
  ];

  const whyWorkWithUs = [
    'UK-based leadership with ACA & ACCA-qualified founders',
    'Strong finance, compliance, and operational expertise',
    'Specialist ERPNext technical and functional consultants',
    'Global delivery model with local accountability',
    'Practical, business-led digital transformation',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            We transform businesses for a better future
          </motion.h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Who we are
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded by Chartered Accountants with over 20 years of combined experience in finance, operations, and systems transformation, we understand the real challenges organisations face. Our finance-led perspective means we design ERP solutions that work in the real world—solutions that integrate seamlessly with your existing processes, deliver the insights you need, and scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Firm Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary-600 font-semibold mb-4">Our firm</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We are an independent management and technology consultancy with European roots.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our global network spans over 70 countries and 13,000 people. We operate in three business units: Consulting, Products, and Implementation, consulting, training, and support. Our mission is to make digital transformation accessible, practical, and sustainable for every organisation we work with.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ERPNext Specialists with Real Business Experience
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our specialist team of technical and functional ERP consultants brings together deep ERPNext expertise with real-world business knowledge. We don't just configure and customise ERPNext—we ensure it aligns with your business objectives, integrates with your workflows, and delivers measurable value.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With teams in the UK, Pakistan, and Gulf countries, we combine global delivery capability with local accountability. This means you get access to world-class ERPNext services, delivered by teams who understand your market, your challenges, and your opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Approach
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg mb-8"
          >
            We believe successful digital transformation is built on:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            {approachPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700 text-lg">{point}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We work with you to ensure ERPNext becomes more than just software—it becomes a platform for efficiency, insight, and sustainable growth. Every project we deliver is designed to build long-term capability, not just solve immediate problems.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Why Work With Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {whyWorkWithUs.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700 text-lg">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

