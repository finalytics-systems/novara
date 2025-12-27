'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Rocket, Code, Users, Award } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'ERPNext Implementation',
      description: 'Complete ERPNext implementation services tailored to your business needs',
      icon: Rocket,
      href: '/services/erp-implementation',
    },
    {
      title: 'Custom Apps & Automation',
      description: 'Bespoke applications and business process automation solutions',
      icon: Code,
      href: '/services/custom-apps',
    },
    {
      title: 'ERP Consulting',
      description: 'Expert guidance for your digital transformation journey',
      icon: Users,
      href: '/services/consulting',
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support for your team',
      icon: Award,
      href: '/services/training',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] bg-gray-900 overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/main-image.jpg"
            alt="Novara Tech - Modern Business Solutions"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We transform businesses using technology intelligently
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Transformation starts with intelligence - human, sharp, and purpose-driven. 
              We apply it intelligently to what matters most: bold differentiation, lasting 
              client impact, global resonance, and the power of people.
            </p>
            <p className="text-lg text-gray-200 mb-10">
              Welcome to your future ERPNext implementation and technology consulting partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center group text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center text-lg"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow h-full group">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                      <service.icon className="text-primary-600 group-hover:text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  In Partnership with Finalytics
                </h2>
                <p className="text-gray-600 mb-6">
                  Novara Tech operates in strategic partnership with Finalytics, combining our expertise in modern technology solutions with their deep industry knowledge and proven track record.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Combined 100+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Trusted by 500+ companies worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Comprehensive end-to-end solutions</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-12 text-white text-center">
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-xl">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
