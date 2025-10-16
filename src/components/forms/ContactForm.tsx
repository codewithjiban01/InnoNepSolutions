import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import Button from '../ui/Button';
import Toast from '../ui/Toast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { submitContact, isSubmittingContact, error, successMessage, clearMessages } = useStore();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await submitContact(formData);
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Error handling is done in the store
    }
  };

  const services = [
    { value: '', label: 'Select a service' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'business', label: 'Business Website' },
    { value: 'blog', label: 'Blog Website' },
    { value: 'ecommerce', label: 'E-Commerce Full-Stack' },
    { value: 'maintenance', label: 'Website Maintenance' },
    { value: 'custom', label: 'Custom Project' }
  ];

  const budgets = [
    { value: '', label: 'Select budget range' },
    { value: 'under-5k', label: 'Under रू 5,000' },
    { value: '5k-10k', label: 'रू 5,000 - रू 10,000' },
    { value: '10k-20k', label: 'रू 10,000 - रू 20,000' },
    { value: '20k-50k', label: 'रू 20,000 - रू 50,000' },
    { value: 'above-50k', label: 'Above रू 50,000' }
  ];

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-primary-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-primary-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-300 transition-all duration-300"
              placeholder="+977-9800000000"
            />
          </div>

          {/* Service Field */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-300 transition-all duration-300"
            >
              {services.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Budget Field */}
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-300 transition-all duration-300"
            >
              {budgets.map(budget => (
                <option key={budget.value} value={budget.value}>
                  {budget.label}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-primary-300 transition-all duration-300"
              placeholder="Brief subject of your inquiry"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none ${
              errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-primary-300'
            }`}
            placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmittingContact}
            className="group"
            rightIcon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            }
          >
            {isSubmittingContact ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center text-sm text-gray-600 bg-gray-50 rounded-lg p-4">
          <p className="flex items-center justify-center mb-2">
            <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            We typically respond within 1 hour
          </p>
          <p>All consultations are free and confidential</p>
        </div>
      </form>

      {/* Toast Notifications */}
      {error && (
        <Toast
          message={error}
          type="error"
          onClose={clearMessages}
        />
      )}
      
      {successMessage && (
        <Toast
          message={successMessage}
          type="success"
          onClose={clearMessages}
        />
      )}
    </>
  );
};

export default ContactForm;
