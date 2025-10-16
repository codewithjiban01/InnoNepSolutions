import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, Mail, Phone } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8 text-white font-medium">
              <FileText className="w-5 h-5 mr-2" />
              Legal Terms
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Terms of Service
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-white">
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-cyan-400" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using InnoNep Solutions' services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Services Provided</h2>
                <p className="text-gray-300 mb-4">InnoNep Solutions provides:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Website design and development services</li>
                  <li>Website maintenance and support</li>
                  <li>Digital consultation services</li>
                  <li>Technical support and troubleshooting</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                <p className="text-gray-300 mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>50% payment required upfront before project commencement</li>
                  <li>Remaining 50% due upon project completion</li>
                  <li>Maintenance services are billed monthly or annually as agreed</li>
                  <li>All prices are in Nepali Rupees (NPR)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Project Timeline</h2>
                <p className="text-gray-300 mb-4">
                  Project timelines are estimates and may vary based on:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Project complexity and scope changes</li>
                  <li>Client feedback and approval timelines</li>
                  <li>Availability of required content and materials</li>
                  <li>Technical challenges or third-party dependencies</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
                <p className="text-gray-300 mb-4">Clients are responsible for:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing accurate and complete project requirements</li>
                  <li>Supplying necessary content, images, and materials</li>
                  <li>Timely feedback and approvals during development</li>
                  <li>Making payments according to agreed terms</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-2 text-cyan-400" />
                  Intellectual Property
                </h2>
                <p className="text-gray-300 mb-4">
                  Upon full payment, clients own the website and its content. However, InnoNep Solutions retains 
                  the right to use the project in our portfolio and marketing materials unless otherwise agreed.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" />
                  Limitation of Liability
                </h2>
                <p className="text-gray-300 mb-4">
                  InnoNep Solutions shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Warranty</h2>
                <p className="text-gray-300 mb-4">
                  We provide a 30-day warranty on all completed projects, covering:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Bug fixes and technical issues</li>
                  <li>Minor content updates</li>
                  <li>Basic technical support</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <p className="text-gray-300 mb-4">
                  Either party may terminate the agreement with written notice. In case of termination:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Client pays for work completed up to termination date</li>
                  <li>All materials and work-in-progress will be delivered to client</li>
                  <li>Refunds are subject to work completed and expenses incurred</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of Nepal. 
                  Any disputes shall be resolved in the courts of Kathmandu, Nepal.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                    <a href="mailto:info.innonepsolutions@gmail.com" className="hover:text-cyan-300 transition-colors">
                      info.innonepsolutions@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                    <a href="tel:+977-9704748957" className="hover:text-cyan-300 transition-colors">
                      +977-9704748957
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Last updated: October 16, 2025
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
