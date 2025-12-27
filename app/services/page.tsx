'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Code, Users, Award, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Rocket,
      title: 'ERPNext Implementation',
      description: 'Complete end-to-end ERPNext implementation services tailored to your business needs. We handle everything from requirements analysis to deployment and training.',
      features: [
        'Requirements Analysis',
        'System Configuration',
        'Data Migration',
        'Testing & Deployment',
        'User Training',
      ],
      href: '/services/erp-implementation',
    },
    {
      icon: Code,
      title: 'Custom Apps & Business Automation',
      description: 'Bespoke application development and business process automation solutions that integrate seamlessly with your existing systems.',
      features: [
        'Custom Module Development',
        'Workflow Automation',
        'Third-party Integrations',
        'Mobile Apps',
        'API Development',
      ],
      href: '/services/custom-apps',
    },
    {
      icon: Users,
      title: 'ERP Consulting Services',
      description: 'Expert guidance and strategic consulting to help you make the most of your ERP investment and achieve your business goals.',
      features: [
        'ERP Strategy & Planning',
        'Process Optimization',
        'Technology Selection',
        'Change Management',
        'Best Practices',
      ],
      href: '/services/consulting',
    },
    {
      icon: Award,
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing support to ensure your team is fully equipped to leverage your ERP system.',
      features: [
        'User Training Programs',
        'Administrator Training',
        'Documentation',
        '24/7 Technical Support',
        'System Maintenance',
      ],
      href: '/services/training',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-50"
          >
            Comprehensive solutions for your business transformation
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="text-primary-600" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss which services are right for your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors group"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

