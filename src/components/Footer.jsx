import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const importantLinks = [
    { name: 'Academic Calendar', href: '#' },
    { name: 'Fee Structure', href: '/admissions' },
    { name: 'Application Form', href: '#' },
    { name: 'Student Portal', href: '#' },
    { name: 'Parent Portal', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-school-primary p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kahatia Secondary School</h3>
                <p className="text-gray-400 text-sm">Excellence Through Education</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Committed to providing quality education that develops academic excellence, 
              moral values, and leadership skills in our students since 2009.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-school-primary" />
                <span className="text-sm text-gray-300">+254 712 345 678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-school-primary" />
                <span className="text-sm text-gray-300">info@kahatiasecondary.ac.ke</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-school-primary mt-0.5" />
                <span className="text-sm text-gray-300">
                  P.O. Box 123, Kahatia<br />
                  Eastern Province, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Office Hours</h4>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-300">
                <span className="font-medium">Monday - Friday:</span><br />
                8:00 AM - 5:00 PM
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium">Saturday:</span><br />
                8:00 AM - 12:00 PM
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium">Sunday:</span><br />
                Closed
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-full hover:bg-school-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest news and updates about school events, 
                achievements, and important announcements.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-school-primary"
              />
              <button className="bg-school-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Kahatia Secondary School. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;