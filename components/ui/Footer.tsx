'use client';

import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">
                Novara <span className="text-primary-400">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your Trusted ERPNext Deployment & Customization Experts
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-primary-400 text-sm">All Services</Link></li>
              <li><Link href="/services/consulting" className="hover:text-primary-400 text-sm">Consulting</Link></li>
              <li><Link href="/services/erp-implementation" className="hover:text-primary-400 text-sm">Implementation</Link></li>
              <li><Link href="/services/custom-apps" className="hover:text-primary-400 text-sm">Customisation</Link></li>
              <li><Link href="/services/training" className="hover:text-primary-400 text-sm">Training & Support</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-primary-400 text-sm">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 text-sm">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 text-sm">Contact</Link></li>
              <li><a href="#" className="hover:text-primary-400 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary-400 text-sm">DMCA</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">UK</div>
                  <div>Piccadilly Business Centre, Unit C Aldow Enterprise Park, Blackett Street, Manchester, M12 6AE, England</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Saudi Arabia</div>
                  <div>Address to be added</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Pakistan</div>
                  <div>Address to be added</div>
                </div>
              </li>
              <li className="flex items-center space-x-2 mt-4">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:info@novaratech.com" className="text-sm hover:text-primary-400">
                  info@novaratech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Novara Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

