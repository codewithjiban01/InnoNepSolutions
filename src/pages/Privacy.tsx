import React from 'react';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8 text-white font-medium">
              <Shield className="w-5 h-5 mr-2" />
              Your Privacy Matters
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              At InnoNep Solutions, we respect your privacy and are committed to protecting your personal information.
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
                  <Database className="w-6 h-6 mr-2 text-cyan-400" />
                  Information We Collect
                </h2>
                <p className="text-gray-300 mb-4">We collect information you provide directly to us, such as:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Name and contact information when you fill out our contact forms</li>
                  <li>Email address when you subscribe to our newsletter</li>
                  <li>Project details when you request a quote or consultation</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-cyan-400" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you project updates and important communications</li>
                  <li>Improve our services and website functionality</li>
                  <li>Send newsletters and marketing communications (with your consent)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-cyan-400" />
                  Information Security
                </h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy or as required by law.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
                <p className="text-gray-300 mb-4">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable cookies 
                  through your browser settings, though this may affect website functionality.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting 
                  the new policy on this page with an updated effective date.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy;
