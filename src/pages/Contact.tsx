import React, { useState } from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare,
  ChevronDown
} from 'lucide-react';
import { 
  FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok
} from 'react-icons/fa';
import ContactForm from '../components/forms/ContactForm';

const Contact: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Animation hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Animations
  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Kathmandu, Nepal', 'Serving clients nationwide'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+977-9704748957', 'Mon - Fri, 9:00 AM - 6:00 PM'],
      color: 'from-blue-500 to-cyan-500',
      link: 'tel:+977-9704748957'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info.innonepsolutions@gmail.com', "We'll respond within 1 hour"],
      color: 'from-cyan-500 to-blue-500',
      link: 'mailto:info.innonepsolutions@gmail.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: FaFacebookF, url: '#', color: '#1877F2' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: '#E4405F' },
    { name: 'TikTok', icon: FaTiktok, url: '#', color: '#000000' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: '#', color: '#25D366' }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly and we\'ll respond immediately.'
    },
    {
      question: 'Do you provide free consultations?',
      answer: 'Yes! We offer free consultations to understand your project requirements and provide you with the best solution for your business needs.'
    },
    {
      question: 'What information should I include in my project inquiry?',
      answer: 'Please include details about your business, the type of website you need, your budget range, timeline, and any specific features you want. The more details you provide, the better we can help you.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! While we\'re based in Nepal, we work with clients worldwide. We communicate via email, video calls, and project management tools to ensure smooth collaboration.'
    },
    {
      question: 'What are your payment methods?',
      answer: 'We accept bank transfers, eSewa, Khalti, and international payments via PayPal. We typically require 50% upfront and 50% upon project completion.'
    }
  ];

  const contactTrail = useTrail(contactInfo.length, {
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  const faqTrail = useTrail(faqs.length, {
    opacity: faqInView ? 1 : 0,
    transform: faqInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 280, friction: 60 }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <animated.div ref={heroRef} style={heroAnimation} className="text-center py-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8 text-white font-medium">
              <MessageSquare className="w-5 h-5 mr-2" />
              Let's Build Your Website
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Ready to get your business online? Contact us for a simple, affordable website that works for your needs.
            </h1>
            
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-12">
              {[
                { label: 'Free', sublabel: 'Consultation' },
                { label: '1-2', sublabel: 'Weeks' },
                { label: 'Fair', sublabel: 'Pricing' }
              ].map((item, index) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{item.label}</div>
                  <div className="text-white/80 text-sm">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </animated.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div ref={contactRef} className="space-y-6 mb-12">
                {contactTrail.map((style, index) => {
                  const info = contactInfo[index];
                  if (!info) return null;
                  
                  const IconComponent = info.icon;
                  return (
                    <animated.div key={info.title} style={style}>
                      <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className={`${idx === 0 ? 'text-purple-600 font-semibold' : 'text-gray-600'} text-sm`}>
                                {info.link && idx === 0 ? (
                                  <a href={info.link} className="hover:text-purple-700 transition-colors">
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </animated.div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="grid grid-cols-4 gap-4">
                  {socialMedia.map((social) => {
                    const IconComponent = social.icon as React.ComponentType<any>;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110 group"
                        style={{ 
                          '--hover-color': social.color 
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = social.color;
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '';
                          e.currentTarget.style.color = '';
                        }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: social.color }} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div ref={faqRef} className="space-y-4">
            {faqTrail.map((style, index) => {
              const faq = faqs[index];
              if (!faq) return null;
              
              const isExpanded = expandedFaq === index;
              return (
                <animated.div key={index} style={style}>
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown 
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Let's bring your vision to life with a stunning website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+977-9704748957"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a 
              href="mailto:info.innonepsolutions@gmail.com"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
