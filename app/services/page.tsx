'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Code, Users, Award, ArrowRight, Shield } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: 'ERPNext Consulting Services',
      headline: 'Clarity, optimisation, and strategic direction.',
      description: 'Our ERPNext consulting services help businesses get more value from their system, whether pre-implementation, mid-project, or post go-live.',
      features: [
        'Process optimisation expertise - identify inefficiencies and redesign workflows',
        'Finance-led advisory ensure reporting, controls, and compliance are built in',
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
        'Faster user adoption clear process mapping and role-based setup reduces resistance and confusion',
        'Clean, reliable data migration - structured migration and validation to protect reporting integrity',
        'Future-ready architecture scalable setup that supports growth new entities and regulatory change',
        'Controlled go-live - rigorous testing and go-live planning to minimise disruption',
      ],
      whyThisMatters: 'Our services are designed to ensure ERPNext becomes a business platform, not just an IT system, supporting decision-making, compliance, efficiency, and growth.',
      approachTitle: 'Our Approach',
      approachSubtitle: 'A structured, business-led approach to ERPNext delivery.',
      approachDescription: 'We follow a proven, methodical approach to ensure every ERPNext engagement is delivered with clarity, control, and long-term value. Our focus is on understanding how your business operates, designing the right solution, and supporting you beyond go-live.',
      approachSteps: [
        {
          title: 'Discover',
          description: 'We take time to understand your business, processes, pain points, and objectives. This includes finance, operations, reporting, and compliance requirements ensuring ERPNext is aligned to real-world needs from the start.',
          outcome: 'Clear requirements, aligned expectations, and defined success criteria.',
        },
        {
          title: 'Design',
          description: 'We translate business requirements into a structured ERPNext design. Processes, workflows, roles, controls, and reporting are mapped with scalability and best practice in mind.',
          outcome: 'A future-ready ERPNext design tailored to your organisation.',
        },
        {
          title: 'Configure & Customise',
          description: 'ERPNext is configured and customised to match your requirements, with a strong preference for standard functionality to maintain stability, performance, and upgradeability.',
          outcome: 'A system that fits your business without unnecessary complexity.',
        },
        {
          title: 'Validate & Go-Live',
          description: 'We rigorously test the system, validate data, and support users through go-live. This ensures continuity, accuracy, and confidence across the business.',
          outcome: 'A controlled go-live with minimal disruption.',
        },
        {
          title: 'Support & Optimise',
          description: 'Post go-live, we provide ongoing support, enhancements, and optimisation as your business evolves. We act as a long-term ERPNext partner, not just an implementation provider.',
          outcome: 'A continuously improving ERPNext system that grows with your business.',
        },
      ],
      approachWorks: [
        'Business and finance-led, not technology-driven',
        'Structured delivery with clear accountability',
        'Reduced implementation risk',
        'Strong user adoption and long-term ROI',
      ],
      href: '/services/erp-implementation',
    },
    {
      icon: Code,
      title: 'ERPNext Customisation & Business Automation',
      headline: 'Tailored to your requirements. Stable by design.',
      description: 'We customise ERPNext to fit your business needs while preserving performance, upgradeability, and long-term stability.',
      features: [
        'Configuration over heavy development - lower risk, easier upgrades, and reduced technical debt',
        'Automated workflows & approvals eliminate manual tasks and enforce internal controls',
        'Custom reports & dashboards - decision-ready insights for finance and operations',
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
        'Stronger internal capability empower teams to use ERPNext effectively',
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
        'Performance optimisation keep ERPNext fast, secure, and efficient',
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
                    <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <service.icon className="" size={32} style={{ stroke: '#0A2A40', fill: 'none', color: '#0A2A40' }} />
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
                    {service.whyThisMatters && (
                      <div className="mb-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Why This Matters</h3>
                        <p className="text-gray-700">{service.whyThisMatters}</p>
                      </div>
                    )}
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
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

                {/* Our Approach Section (for Implementation service only) */}
                {service.approachTitle && (
                  <div className="mt-12 pt-12 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.approachTitle}</h3>
                    <p className="text-primary-600 font-semibold text-lg mb-4">{service.approachSubtitle}</p>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.approachDescription}</p>
                    
                    <div className="space-y-8">
                      {service.approachSteps?.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stepIndex * 0.1 }}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                          <p className="text-gray-700 mb-3 leading-relaxed">{step.description}</p>
                          <p className="text-primary-600 font-semibold">
                            <strong>Outcome:</strong> {step.outcome}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {service.approachWorks && (
                      <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Our Approach Works</h4>
                        <ul className="space-y-2">
                          {service.approachWorks.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start text-gray-700">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
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

