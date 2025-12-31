'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Code, Users, Award, ArrowRight, Shield } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: 'ERPNext Consulting',
      headline: 'Clarity, optimisation, and strategic direction.',
      description: 'Our ERPNext consulting services help businesses get more value from their system, whether pre-implementation, mid-project, or post go-live.',
      features: [
        'Process optimisation expertise - identify inefficiencies and redesign workflows',
        'Finance-led advisory - ensure reporting, controls, and compliance are built in',
        'System health checks - performance, security, and configuration reviews',
        'Clear ERP roadmap - structured guidance for scaling and future enhancements',
        'Independent, practical advice - focused on outcomes, not software sales',
      ],
      href: '/services/consulting',
    },
    {
      icon: Rocket,
      title: 'ERPNext Implementation',
      headline: 'Structured. Scalable. Built around your business.',
      description: 'Our ERPNext implementation approach is designed to reduce risk, accelerate adoption, and deliver measurable value from day one.',
      features: [
        'Business-first system design - ERPNext configured around your real processes, not generic templates',
        'Faster user adoption - clear process mapping and role-based setup reduces resistance and confusion',
        'Clean, reliable data migration - structured migration and validation to protect reporting integrity',
        'Future-ready architecture - scalable setup that supports growth, new entities, and regulatory change',
        'Controlled go-live - rigorous testing and go-live planning to minimise disruption',
      ],
      href: '/services/erp-implementation',
    },
    {
      icon: Code,
      title: 'ERPNext Customisation & Automation',
      headline: 'Tailored to your requirements. Stable by design.',
      description: 'We provide ERPNext customisation tailored to customer requirements, optimising workflows, reports, and automation without compromising system stability.',
      features: [
        'Configuration over heavy development - leading to lower risk, easier upgrades, and reduced technical debt',
        'Automated workflows & approvals - to eliminate manual tasks and enforce internal controls',
        'Custom reports & dashboards - providing decision-ready insights for finance and operations',
        'Role-based system behaviour - ERPNext adapts to how different teams work',
        'Audit-friendly setup - structured workflows that support compliance and governance',
      ],
      href: '/services/custom-apps',
    },
    {
      icon: Award,
      title: 'ERPNext Training',
      headline: 'Confident users. Higher adoption. Better ROI.',
      description: 'We deliver practical ERPNext training tailored to how your system is configured and how your teams actually work.',
      features: [
        'Role-based training - relevant, focused sessions for each team',
        'Hands-on learning - real scenarios using your ERPNext setup',
        'Faster adoption - reduced reliance on support and workarounds',
        'Stronger internal capability - empower teams to use ERPNext effectively',
        'Long-term knowledge retention - documentation and structured knowledge transfer',
      ],
      href: '/services/training',
    },
    {
      icon: Shield,
      title: 'ERPNext Support & Maintenance',
      headline: 'Reliable. Responsive. Long-term.',
      description: 'Our ERPNext support services provide stability, continuity, and ongoing improvement as your business evolves.',
      features: [
        'Proactive issue resolution - identify and resolve problems before they impact operations',
        'Performance optimisation - keep ERPNext fast, secure, and efficient',
        'Enhancements & improvements - evolve the system as business needs change',
        'Trusted long-term partner - continuity of knowledge and system ownership',
        'Peace of mind - knowing your ERPNext system is in safe hands',
      ],
      href: '/services/training',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:from-primary-500 group-hover:to-primary-600 transition-all">
                      <service.icon className="text-primary-600 group-hover:text-white transition-colors" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h2>
                    {service.headline && (
                      <p className="text-primary-600 font-semibold text-lg mb-4">
                        {service.headline}
                      </p>
                    )}
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
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
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Let's discuss which services are right for your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 group"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

