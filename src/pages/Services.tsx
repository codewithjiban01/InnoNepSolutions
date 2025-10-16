import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, Users, MessageSquare, Shield, Settings,
  CheckCircle, ArrowRight, Star, Zap, Code,
  Palette, Monitor, Smartphone, Heart, Phone, Mail
} from 'lucide-react';

const Services: React.FC = () => {
  // Animation hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Animations
  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  // Services data
  const services = [
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work with a professional portfolio that highlights your skills and achievements perfectly.',
      price: 'रू 2,999',
      features: [
        'Responsive Design',
        'Image Gallery',
        'Contact Forms',
        'SEO Optimized',
        'Social Media Integration',
        'Fast Loading'
      ],
      icon: Globe,
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Business Websites',
      description: 'Professional websites for businesses with all essential features to grow your online presence and reach customers.',
      price: 'रू 8,999',
      features: [
        'Custom Design',
        'Contact Integration',
        'Service Pages',
        'About Us Section',
        'Location Maps',
        'Admin Panel'
      ],
      icon: Users,
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Blog Websites',
      description: 'Share your thoughts and expertise with a beautifully designed blog platform that engages your audience.',
      price: 'रू 4,999',
      features: [
        'Content Management',
        'Comment System',
        'Social Sharing',
        'Newsletter Signup',
        'Category System',
        'Search Function'
      ],
      icon: MessageSquare,
      popular: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-Commerce Full-Stack',
      description: 'Complete e-commerce solutions with both frontend and backend, including payment processing, admin panel, and database management.',
      price: 'रू 14,999',
      features: [
        'Product Catalog',
        'Shopping Cart UI',
        'Payment Integration',
        'Order Management',
        'Customer Reviews',
        'Inventory Display'
      ],
      icon: Shield,
      popular: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your website updated, secure, and running smoothly with our comprehensive maintenance services.',
      price: 'रू 1,999',
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Backup Services',
        'Technical Support',
        'Performance Optimization',
        'Content Updates'
      ],
      icon: Settings,
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const serviceTrail = useTrail(services.length, {
    opacity: servicesInView ? 1 : 0,
    transform: servicesInView ? 'translateY(0px)' : 'translateY(50px)',
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
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <animated.div ref={heroRef} style={heroAnimation} className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Hero Content */}
            <div className="text-left">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8 text-white font-medium">
                <Code className="w-5 h-5 mr-2" />
                Simple Web Development
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Simple & Affordable
                <span className="block text-cyan-300">
                  Web Solutions
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl">
                We help small businesses and individuals get online with simple, effective websites. 
                Using proven technologies to create websites that work.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {[
                  { label: 'Fresh', sublabel: 'New Company' },
                  { label: '100%', sublabel: 'Dedicated' },
                  { label: 'Basic', sublabel: 'Tech Stack' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.label}</div>
                    <div className="text-white/80 text-sm">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
                
                <a 
                  href="#services-grid"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Code, title: 'Clean Code', color: 'from-blue-500 to-cyan-500' },
                    { icon: Palette, title: 'Beautiful Design', color: 'from-purple-500 to-pink-500' },
                    { icon: Zap, title: 'Fast Performance', color: 'from-green-500 to-emerald-500' },
                    { icon: Monitor, title: 'Responsive', color: 'from-orange-500 to-red-500' }
                  ].map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={feature.title} className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl text-center group hover:scale-105 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white mx-auto mb-2" />
                        <div className="text-white font-semibold text-sm">{feature.title}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-2xl mb-2">Ready to Build?</div>
                  <div className="text-white/80">Let's create something amazing together</div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All websites include mobile-friendly design, 
              SEO optimization, and free hosting setup.
            </p>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTrail.map((style, index) => {
              const service = services[index];
              if (!service) return null;
              
              const IconComponent = service.icon;
              return (
                <animated.div key={service.title} style={style}>
                  <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 h-full flex flex-col ${
                    service.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <div className="text-3xl font-bold text-purple-600 mt-1">{service.price}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-xl font-bold text-center transition-all duration-300 inline-flex items-center justify-center mt-auto ${
                        service.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transform hover:scale-105' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Get your website live in just 7-14 days'
              },
              {
                icon: Heart,
                title: 'Honest Pricing',
                description: 'No hidden costs or surprise fees'
              },
              {
                icon: Smartphone,
                title: 'Mobile Ready',
                description: 'Perfect on phones, tablets, and desktops'
              },
              {
                icon: Shield,
                title: 'Ongoing Support',
                description: '30 days free support included'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
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
            Choose your service and let's build something amazing together. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <a 
              href="mailto:info.innonepsolutions@gmail.com"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
