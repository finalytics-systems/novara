'use client';

import { motion } from 'framer-motion';
import { Rocket, Target, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver modern solutions',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with our clients',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Deep knowledge and experience in ERPNext and business automation',
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
            About Novara Tech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-50"
          >
            Innovative Technology Solutions for Modern Business
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Novara Tech is a forward-thinking technology company specializing in ERPNext implementation,
              custom business automation, and comprehensive ERP consulting services. We help businesses
              streamline their operations, improve efficiency, and achieve their digital transformation goals.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Operating in strategic partnership with <span className="text-primary-600 font-semibold">Finalytics</span>,
              we combine cutting-edge technology expertise with deep industry knowledge to deliver exceptional
              results for our clients. Together, we bring over 100 years of combined experience and have
              successfully served 500+ companies worldwide.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our focus on ERPNext and open-source technologies allows us to provide flexible, scalable,
              and cost-effective solutions that grow with your business. We don't just implement software –
              we partner with you to transform your business processes and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Novara Tech?</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ERPNext Specialists</h3>
              <p className="text-gray-600">
                We are experts in ERPNext implementation and customization, ensuring you get the most
                out of this powerful open-source ERP platform.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Development</h3>
              <p className="text-gray-600">
                Our team excels at building custom applications and automations tailored to your
                unique business requirements.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Partnership</h3>
              <p className="text-gray-600">
                Through our partnership with Finalytics, we offer comprehensive solutions backed by
                decades of industry experience and a track record of 500+ successful projects.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-600">
                From initial consultation to implementation, training, and ongoing support,
                we're with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

