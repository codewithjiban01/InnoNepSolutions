import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import Button from '../ui/Button';
import Toast from '../ui/Toast';

const NewsletterForm: React.FC = () => {
  const { subscribeNewsletter, isSubscribingNewsletter, error, successMessage, clearMessages } = useStore();
  const [email, setEmail] = useState('');
  const [localError, setLocalError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!email.trim()) {
      setLocalError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setLocalError('Please enter a valid email address');
      return;
    }

    try {
      await subscribeNewsletter(email);
      setEmail('');
    } catch (error) {
      // Error handling is done in the store
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input 
            type="email" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (localError) setLocalError('');
            }}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
              localError ? 'border-red-400 bg-red-500/10' : 'border-white/20 hover:border-white/30'
            }`}
          />
          {localError && (
            <p className="mt-2 text-sm text-red-300 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {localError}
            </p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="primary"
          loading={isSubscribingNewsletter}
          className="whitespace-nowrap"
          rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          }
        >
          {isSubscribingNewsletter ? 'Subscribing...' : 'Subscribe'}
        </Button>
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

export default NewsletterForm;
