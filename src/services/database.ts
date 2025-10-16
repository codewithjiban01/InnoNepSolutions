// Simple database service using localStorage for demo purposes
// In production, this would connect to a real database like Firebase, Supabase, or MongoDB

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  subject?: string;
  message: string;
  createdAt: Date;
  status: 'new' | 'contacted' | 'completed';
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  createdAt: Date;
  status: 'active' | 'unsubscribed';
}

export interface ProjectInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  createdAt: Date;
  status: 'pending' | 'in-progress' | 'completed';
}

class DatabaseService {
  private getStorageKey(type: string): string {
    return `innonep_${type}`;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Contact Submissions
  async submitContact(data: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      ...data,
      id: this.generateId(),
      createdAt: new Date(),
      status: 'new'
    };

    const existing = this.getContactSubmissions();
    existing.push(submission);
    localStorage.setItem(this.getStorageKey('contacts'), JSON.stringify(existing));

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return submission;
  }

  getContactSubmissions(): ContactSubmission[] {
    const data = localStorage.getItem(this.getStorageKey('contacts'));
    return data ? JSON.parse(data) : [];
  }

  // Newsletter Subscriptions
  async subscribeNewsletter(email: string): Promise<NewsletterSubscription> {
    const existing = this.getNewsletterSubscriptions();
    
    // Check if email already exists
    const existingSubscription = existing.find(sub => sub.email === email);
    if (existingSubscription) {
      throw new Error('Email already subscribed');
    }

    const subscription: NewsletterSubscription = {
      id: this.generateId(),
      email,
      createdAt: new Date(),
      status: 'active'
    };

    existing.push(subscription);
    localStorage.setItem(this.getStorageKey('newsletter'), JSON.stringify(existing));

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return subscription;
  }

  getNewsletterSubscriptions(): NewsletterSubscription[] {
    const data = localStorage.getItem(this.getStorageKey('newsletter'));
    return data ? JSON.parse(data) : [];
  }

  // Project Inquiries
  async submitProjectInquiry(data: Omit<ProjectInquiry, 'id' | 'createdAt' | 'status'>): Promise<ProjectInquiry> {
    const inquiry: ProjectInquiry = {
      ...data,
      id: this.generateId(),
      createdAt: new Date(),
      status: 'pending'
    };

    const existing = this.getProjectInquiries();
    existing.push(inquiry);
    localStorage.setItem(this.getStorageKey('projects'), JSON.stringify(existing));

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    return inquiry;
  }

  getProjectInquiries(): ProjectInquiry[] {
    const data = localStorage.getItem(this.getStorageKey('projects'));
    return data ? JSON.parse(data) : [];
  }

  // Analytics
  getAnalytics() {
    const contacts = this.getContactSubmissions();
    const newsletter = this.getNewsletterSubscriptions();
    const projects = this.getProjectInquiries();

    return {
      totalContacts: contacts.length,
      totalSubscribers: newsletter.filter(sub => sub.status === 'active').length,
      totalProjects: projects.length,
      recentContacts: contacts.slice(-5).reverse(),
      recentProjects: projects.slice(-5).reverse(),
      monthlyStats: this.getMonthlyStats(contacts, projects)
    };
  }

  private getMonthlyStats(contacts: ContactSubmission[], projects: ProjectInquiry[]) {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const thisMonthContacts = contacts.filter(contact => {
      const date = new Date(contact.createdAt);
      return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    });

    const thisMonthProjects = projects.filter(project => {
      const date = new Date(project.createdAt);
      return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    });

    return {
      contactsThisMonth: thisMonthContacts.length,
      projectsThisMonth: thisMonthProjects.length
    };
  }

  // Clear all data (for testing)
  clearAllData(): void {
    localStorage.removeItem(this.getStorageKey('contacts'));
    localStorage.removeItem(this.getStorageKey('newsletter'));
    localStorage.removeItem(this.getStorageKey('projects'));
  }
}

export const db = new DatabaseService();
