'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Code, Users, Award } from 'lucide-react';
import ClientLogo from '@/components/ui/ClientLogo';
import AppLogo from '@/components/ui/AppLogo';

export default function HomePage() {
  const services = [
    {
      title: 'Consulting',
      description: 'Our ERPNext consulting services help businesses design efficient processes, optimise performance, and get maximum value from ERPNext.',
      icon: Users,
      href: '/services/consulting',
    },
    {
      title: 'Implementation',
      description: 'We deliver end-to-end ERPNext implementation services, configuring ERPNext to match your business processes and scale with your growth.',
      icon: Rocket,
      href: '/services/erp-implementation',
    },
    {
      title: 'Customisation & Automation',
      description: 'We provide ERPNext customisation tailored to customer requirements, optimising workflows, reports, and automation without compromising system stability.',
      icon: Code,
      href: '/services/custom-apps',
    },
    {
      title: 'Training',
      description: 'We offer practical ERPNext training tailored to user roles, ensuring teams confidently adopt and use ERPNext effectively.',
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-primary-900/30"></div>
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
              A software for tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed">
              Successful ERP implementation starts with clarity business-led, outcome-focused, and technology-enabled. We help organisations design, implement, and optimise ERP platforms that drive efficiency, control, and sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-300 transition-all h-full group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-primary-600 transition-all shadow-sm group-hover:shadow-md">
                      <service.icon className="text-primary-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
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

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <span className="bg-primary-100 px-4 py-2 rounded inline-block">Digital transformation starts here</span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  We are a UK-based ERPNext and digital transformation partner, led by Chartered Accountants with over 20 years of combined experience. Our finance-led approach ensures ERPNext is implemented, customised, and supported to meet real operational and reporting needs.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl p-12 text-white text-center shadow-2xl transform hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold mb-2">20+</div>
                  <div className="text-xl font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Organisations That Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've delivered successful ERP implementation and advisory services to the organisations below, earning long-term trust through quality delivery and measurable results.
            </p>
          </div>

          {/* GCC Implementations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">GCC Implementations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Univest Business Machines', logo: 'ubm.png' },
                { name: 'DigiSec', logo: 'digisec.png' },
                { name: 'ticom', logo: 'ticom.png' },
                { name: 'Levene', logo: 'levene.png' },
              ].map((company, idx) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-100 transition-all flex items-center justify-center min-h-[140px] group"
                >
                  <div className="text-center w-full">
                    <ClientLogo name={company.name} logo={company.logo} />
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">{company.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* US and Europe Implementations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">US and Europe Implementations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'SAW Components', logo: 'saw.png' },
                { name: 'Flow', logo: 'flow.png' },
                { name: 'Cobb', logo: 'cobb.png' },
              ].map((company, idx) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-100 transition-all flex items-center justify-center min-h-[140px] group"
                >
                  <div className="text-center w-full">
                    <ClientLogo name={company.name} logo={company.logo} />
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">{company.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pakistan Implementations */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pakistan Implementations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'TCL', logo: 'tcl.jpg' },
                { name: 'Friends Home', logo: 'friends.png' },
                { name: 'Hyundai', logo: 'hyundai.jpeg' },
                { name: 'Vapes Direct', logo: 'vapes.png' },
              ].map((company, idx) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-100 transition-all flex items-center justify-center min-h-[140px] group"
                >
                  <div className="text-center w-full">
                    <ClientLogo name={company.name} logo={company.logo} />
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">{company.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrate with Apps Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integrate with your favourite Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To achieve your business goals, we seamlessly integrate your applications with your existing systems
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'PayPal', logo: 'Paypal.png' },
              { name: 'Dropbox', logo: 'Dropbox.png' },
              { name: 'Razorpay', logo: 'Razor Pay.webp' },
              { name: 'Slack', logo: 'Slack.png' },
              { name: 'Google', logo: 'Google.webp' },
              { name: 'Stripe', logo: 'Stripe.webp' },
              { name: 'Exotel', logo: 'Exotel.avif' },
              { name: 'WooCommerce', logo: 'Woo Commerce.png' },
              { name: 'Plaid', logo: 'Plaid.png' },
              { name: 'AWS', logo: 'AWS.png' },
            ].map((app, idx) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-100 transition-all flex items-center justify-center min-h-[120px] group"
                style={{ filter: 'none' }}
              >
                <div className="w-full" style={{ filter: 'none' }}>
                  <AppLogo name={app.name} logo={app.logo} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
