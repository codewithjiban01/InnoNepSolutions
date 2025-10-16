import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NewsletterForm from './forms/NewsletterForm';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://facebook.com/innonepsolutions', icon: faFacebook, label: 'Facebook', color: 'hover:bg-blue-600' },
    { href: 'https://instagram.com/innonepsolutions', icon: faInstagram, label: 'Instagram', color: 'hover:bg-pink-600' },
    { href: 'https://tiktok.com/@innonepsolutions', icon: faTiktok, label: 'TikTok', color: 'hover:bg-gray-800' },
    { href: 'https://wa.me/9779704748957', icon: faWhatsapp, label: 'WhatsApp', color: 'hover:bg-green-600' }
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ];

  const serviceLinks = [
    { to: '/services/portfolio-websites', label: 'Portfolio Websites' },
    { to: '/services/business-websites', label: 'Business Websites' },
    { to: '/services/blog-websites', label: 'Blog Websites' },
    { to: '/services/ecommerce-frontend', label: 'E-Commerce Full-Stack' },
    { to: '/services/maintenance', label: 'Website Maintenance' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative mr-4">
                <img 
                  src="/assets/images/innonep-logo.png" 
                  alt="InnoNep Solutions" 
                  className="h-12 w-auto transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 items-center justify-center text-white font-bold text-xl"
                  style={{ display: 'none' }}
                >
                  IN
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-inno-gradient leading-none">
                  InnoNep
                </h3>
                <p className="text-sm font-semibold text-primary-400 -mt-1 tracking-wider">
                  SOLUTIONS
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-lg">
              Building ideas into solutions. We create digital experiences that drive results and transform businesses across Nepal.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ${social.color} group`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon 
                    icon={social.icon} 
                    className="text-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              Services
            </h4>
            <div className="space-y-3">
              {serviceLinks.map((service) => (
                <Link 
                  key={service.to}
                  to={service.to} 
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Stay Updated</h4>
              <p className="text-gray-300">Get the latest updates on web development trends and our services.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-primary-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href="tel:+977-9704748957" className="text-white font-medium hover:text-primary-400 transition-colors">
                  +977-9704748957
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:info.innonepsolutions@gmail.com" className="text-white font-medium hover:text-primary-400 transition-colors">
                  info.innonepsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} InnoNep Solutions. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
