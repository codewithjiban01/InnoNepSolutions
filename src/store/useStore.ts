// Simple React-based state management
import { db, ContactSubmission, NewsletterSubscription, ProjectInquiry } from '../services/database';
import { useState, useCallback } from 'react';

// Global state object
let globalState = {
  isLoading: false,
  error: null as string | null,
  successMessage: null as string | null,
  isSubmittingContact: false,
  isSubscribingNewsletter: false,
  isSubmittingProject: false,
  contacts: [] as ContactSubmission[],
  newsletters: [] as NewsletterSubscription[],
  projects: [] as ProjectInquiry[],
};

// Subscribers for state changes
let subscribers: Array<() => void> = [];

const notifySubscribers = () => {
  subscribers.forEach(callback => callback());
};

const updateState = (updates: Partial<typeof globalState>) => {
  globalState = { ...globalState, ...updates };
  notifySubscribers();
};

export const useStore = () => {
  const [, forceUpdate] = useState({});
  
  const subscribe = useCallback(() => {
    const callback = () => forceUpdate({});
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter(sub => sub !== callback);
    };
  }, []);

  // Subscribe to state changes
  useState(() => {
    const unsubscribe = subscribe();
    return unsubscribe;
  });

  const setLoading = useCallback((loading: boolean) => {
    updateState({ isLoading: loading });
  }, []);

  const setError = useCallback((error: string | null) => {
    updateState({ error, successMessage: null });
  }, []);

  const setSuccess = useCallback((message: string | null) => {
    updateState({ successMessage: message, error: null });
  }, []);

  const submitContact = useCallback(async (data: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>) => {
    updateState({ isSubmittingContact: true, error: null });
    try {
      const submission = await db.submitContact(data);
      updateState({ 
        contacts: [...globalState.contacts, submission],
        isSubmittingContact: false,
        successMessage: 'Thank you for your message! We\'ll get back to you soon.'
      });
    } catch (error) {
      updateState({ 
        isSubmittingContact: false,
        error: error instanceof Error ? error.message : 'Failed to submit contact form'
      });
    }
  }, []);

  const subscribeNewsletter = useCallback(async (email: string) => {
    updateState({ isSubscribingNewsletter: true, error: null });
    try {
      const subscription = await db.subscribeNewsletter(email);
      updateState({ 
        newsletters: [...globalState.newsletters, subscription],
        isSubscribingNewsletter: false,
        successMessage: 'Successfully subscribed to our newsletter!'
      });
    } catch (error) {
      updateState({ 
        isSubscribingNewsletter: false,
        error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter'
      });
    }
  }, []);

  const submitProject = useCallback(async (data: Omit<ProjectInquiry, 'id' | 'createdAt' | 'status'>) => {
    updateState({ isSubmittingProject: true, error: null });
    try {
      const inquiry = await db.submitProjectInquiry(data);
      updateState({ 
        projects: [...globalState.projects, inquiry],
        isSubmittingProject: false,
        successMessage: 'Project inquiry submitted successfully! We\'ll contact you within 24 hours.'
      });
    } catch (error) {
      updateState({ 
        isSubmittingProject: false,
        error: error instanceof Error ? error.message : 'Failed to submit project inquiry'
      });
    }
  }, []);

  const loadData = useCallback(() => {
    const contacts = db.getContactSubmissions();
    const newsletters = db.getNewsletterSubscriptions();
    const projects = db.getProjectInquiries();
    updateState({ contacts, newsletters, projects });
  }, []);

  const clearMessages = useCallback(() => {
    updateState({ error: null, successMessage: null });
  }, []);

  return {
    ...globalState,
    setLoading,
    setError,
    setSuccess,
    submitContact,
    subscribeNewsletter,
    submitProject,
    loadData,
    clearMessages
  };
};
