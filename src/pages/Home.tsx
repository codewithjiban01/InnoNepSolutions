import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  ArrowRight, CheckCircle, Star, Users,
  Globe, Shield, Zap, Code, Palette,
  Settings, Target, MessageSquare, Phone, Mail
} from 'lucide-react';

// Tech stack icons (using Lucide icons as placeholders)
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, 
  FaBootstrap, FaGitAlt, FaFigma, FaWordpress
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress,
  SiTypescript, SiMysql, SiFirebase
} from 'react-icons/si';

const Home: React.FC = () => {

  // Animation hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.1, triggerOnce: true });


  // Animations
  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  // Services data matching your reference
  const services = [
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work with a professional portfolio that highlights your skills and achievements.',
      price: 'रू 2,999',
      features: ['Responsive Design', 'Contact Forms', 'Gallery Section', 'SEO Optimized'],
      icon: Globe,
      popular: false
    },
    {
      title: 'Business Websites',
      description: 'Professional websites for businesses with all essential features to grow your online presence.',
      price: 'रू 8,999',
      features: ['Custom Design', 'Contact Integration', 'Service Pages', 'Admin Panel'],
      icon: Users,
      popular: true
    },
    {
      title: 'Blog Websites',
      description: 'Share your thoughts and expertise with a beautifully designed blog platform.',
      price: 'रू 4,999',
      features: ['Content Management', 'Comment System', 'Social Sharing', 'Newsletter'],
      icon: MessageSquare,
      popular: false
    },
    {
      title: 'E-Commerce Full-Stack',
      description: 'Complete e-commerce solutions with both frontend and backend, including payment processing and admin panel.',
      price: 'रू 14,999',
      features: ['Product Catalog', 'Shopping Cart UI', 'Payment Integration', 'Order Management'],
      icon: Shield,
      popular: false
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your website updated, secure, and running smoothly with our maintenance services.',
      price: 'रू 1,999',
      features: ['Regular Updates', 'Security Monitoring', 'Backup Services', 'Technical Support'],
      icon: Settings,
      popular: false
    }
  ];

  // Development process
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your requirements and create a detailed project plan.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Create beautiful designs and wireframes that match your vision.',
      icon: Palette,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your website with clean code and thorough testing.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploy your website and provide ongoing support and maintenance.',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Technologies we use
  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    { name: 'WordPress', icon: FaWordpress, color: '#21759B' }
  ];

  const serviceTrail = useTrail(services.length, {
    opacity: servicesInView ? 1 : 0,
    transform: servicesInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  const processTrail = useTrail(processSteps.length, {
    opacity: processInView ? 1 : 0,
    transform: processInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  const techTrail = useTrail(technologies.length, {
    opacity: techInView ? 1 : 0,
    transform: techInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 280, friction: 60 }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section - Blue Gradient matching your logo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <animated.div ref={heroRef} style={heroAnimation} className="text-center py-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8 text-white font-medium">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              Best of Nepal
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Simple & Affordable
              <span className="block text-cyan-300">
                Web Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
              We create beautiful, functional websites for small businesses in Nepal. 
              Simple pricing, fast delivery, and ongoing support that grows with you.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {[
                { number: 50, label: 'Happy Clients', suffix: '+' },
                { number: 100, label: 'Satisfaction', suffix: '%' },
                { number: 7, label: 'Days Delivery', suffix: '' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <CountUp end={stat.number} duration={2} />
                    {stat.suffix}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link 
                to="/services"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </animated.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple Websites for Small Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All websites are mobile-friendly, SEO-optimized, and include free hosting setup. 
              Choose the package that fits your business needs.
            </p>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTrail.map((style, index) => {
              const service = services[index];
              if (!service) return null;
              
              const IconComponent = service.icon;
              return (
                <animated.div key={service.title} style={style}>
                  <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    service.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <div className="text-3xl font-bold text-purple-600 mt-1">{service.price}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
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
                      className={`w-full py-3 px-6 rounded-xl font-bold text-center transition-all duration-300 inline-flex items-center justify-center ${
                        service.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600' 
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

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven 4-step process to deliver your website on time and within budget.
            </p>
          </div>

          <div ref={processRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processTrail.map((style, index) => {
              const step = processSteps[index];
              if (!step) return null;
              
              const IconComponent = step.icon;
              return (
                <animated.div key={step.step} style={style} className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-300 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use modern and reliable technologies to build fast, secure, and scalable websites.
            </p>
          </div>

          <div ref={techRef} className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {techTrail.map((style, index) => {
              const tech = technologies[index];
              if (!tech) return null;
              
              const IconComponent = tech.icon as React.ComponentType<any>;
              return (
                <animated.div key={tech.name} style={style} className="text-center group">
                  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <IconComponent 
                      className="w-8 h-8 mx-auto mb-2" 
                      style={{ color: tech.color }}
                    />
                    <div className="text-sm font-medium text-gray-700">{tech.name}</div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Simple Website?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to get your business online? Contact us for a simple, affordable website that works for your needs.
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

export default Home;
