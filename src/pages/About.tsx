import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { 
  Target, Eye, Heart, Users, Award, Globe,
  Lightbulb, Handshake, TrendingUp, Shield, Star, Zap, Smartphone, Clock
} from 'lucide-react';

const About: React.FC = () => {
  // Animation hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [cultureRef, cultureInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Animations
  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  // Company values
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To help small businesses in Nepal establish a strong online presence with simple, affordable, and effective web solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be Nepal\'s most trusted web development partner, making digital transformation accessible to every business.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Honesty, transparency, quality work, fair pricing, and genuine care for our clients\' success drives everything we do.',
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  // Company culture aspects
  const culture = [
    {
      icon: Handshake,
      title: 'Collaborative Environment',
      description: 'We work as a team with our clients, ensuring every project reflects their vision and meets their goals.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay updated with the latest technologies and trends to deliver modern, future-proof solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'We constantly learn and improve our skills to provide better services and exceed client expectations.'
    },
    {
      icon: Shield,
      title: 'Client Partnership',
      description: 'We build long-term relationships with our clients, providing ongoing support and maintenance services.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy work-life balance while delivering quality work on time.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'While rooted in Nepal, we think globally and apply international best practices to local projects.'
    }
  ];

  const valuesTrail = useTrail(values.length, {
    opacity: valuesInView ? 1 : 0,
    transform: valuesInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  const cultureTrail = useTrail(culture.length, {
    opacity: cultureInView ? 1 : 0,
    transform: cultureInView ? 'translateY(0px)' : 'translateY(30px)',
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
              <Users className="w-5 h-5 mr-2" />
              About Our Team
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Simple & <span className="text-yellow-300">Honest</span> Approach
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              We're a new web development company in Nepal, helping small businesses get online with simple, 
              affordable websites using basic technologies.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {[
                { label: '2025', sublabel: 'Started' },
                { label: 'Fresh', sublabel: 'New Team' },
                { label: 'Basic', sublabel: 'Tech Stack' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-white/80">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </animated.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  InnoNep Solutions was founded in 2025 with a simple mission: to help small businesses in Nepal 
                  establish their online presence without breaking the bank.
                </p>
                <p>
                  We noticed that many local businesses struggled to get online due to high costs and complex 
                  technical requirements. That's when we decided to create a solution that focuses on simplicity, 
                  affordability, and effectiveness.
                </p>
                <p>
                  Our team believes in honest communication, transparent pricing, and delivering exactly what we promise. 
                  We use proven technologies and straightforward approaches to build websites that actually work for 
                  small businesses.
                </p>
                <p>
                  As a new company, we're hungry to prove ourselves and build lasting relationships with our clients. 
                  Every project is an opportunity for us to demonstrate our commitment to quality and customer satisfaction.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
                  <div className="text-gray-600">Company Started</div>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-xl">
                  <div className="text-3xl font-bold text-pink-600 mb-2">New</div>
                  <div className="text-gray-600">Fresh Perspective</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Basic</div>
                  <div className="text-gray-600">Simple Solutions</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">Small</div>
                  <div className="text-gray-600">Business Focus</div>
                </div>
              </div>
            </div>

            {/* Logo/Visual */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-12 rounded-3xl text-white shadow-2xl">
                <div className="text-6xl font-bold mb-4">INNONEP</div>
                <div className="text-2xl font-light">SOLUTIONS</div>
                <div className="mt-8 text-lg opacity-90">
                  Building ideas into solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple & Honest Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from how we work with clients to how we build websites.
            </p>
          </div>

          <div ref={valuesRef} className="grid md:grid-cols-3 gap-8">
            {valuesTrail.map((style, index) => {
              const value = values[index];
              if (!value) return null;
              
              const IconComponent = value.icon;
              return (
                <animated.div key={value.title} style={style}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in building a positive work culture that benefits both our team and our clients.
            </p>
          </div>

          <div ref={cultureRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureTrail.map((style, index) => {
              const item = culture[index];
              if (!item) return null;
              
              const IconComponent = item.icon;
              return (
                <animated.div key={item.title} style={style}>
                  <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose InnoNep Solutions?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Get your website live in just 7-14 days with our streamlined process.'
              },
              {
                icon: Heart,
                title: 'Transparent Pricing',
                description: 'No hidden costs. Pay once and own your website forever.'
              },
              {
                icon: Smartphone,
                title: 'Mobile First',
                description: 'Every website is designed to look perfect on all devices.'
              },
              {
                icon: Shield,
                title: 'Ongoing Support',
                description: '30 days of free support and maintenance included.'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="text-center">
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a 
              href="/services"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Star className="w-5 h-5 mr-2" />
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
