interface AdminCredentials {
  username: string;
  password: string;
}

interface AdminSettings {
  username: string;
  password: string;
  email: string;
  lastLogin: string;
}

class AuthService {
  private readonly ADMIN_KEY = 'innonep_admin_settings';
  private readonly SESSION_KEY = 'innonep_admin_session';

  constructor() {
    this.initializeDefaultAdmin();
  }

  private initializeDefaultAdmin() {
    const existing = localStorage.getItem(this.ADMIN_KEY);
    if (!existing) {
      const defaultAdmin: AdminSettings = {
        username: 'admin',
        password: 'InnoNep2025!',
        email: 'admin@innonep.com',
        lastLogin: new Date().toISOString()
      };
      localStorage.setItem(this.ADMIN_KEY, JSON.stringify(defaultAdmin));
    }
  }

  login(credentials: AdminCredentials): boolean {
    const adminSettings = this.getAdminSettings();
    if (adminSettings.username === credentials.username && 
        adminSettings.password === credentials.password) {
      
      // Update last login
      adminSettings.lastLogin = new Date().toISOString();
      localStorage.setItem(this.ADMIN_KEY, JSON.stringify(adminSettings));
      
      // Create session
      const session = {
        username: credentials.username,
        loginTime: new Date().toISOString(),
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
      };
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
      
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  isAuthenticated(): boolean {
    const session = localStorage.getItem(this.SESSION_KEY);
    if (!session) return false;

    try {
      const sessionData = JSON.parse(session);
      const now = new Date();
      const expires = new Date(sessionData.expires);
      
      return now < expires;
    } catch {
      return false;
    }
  }

  getAdminSettings(): AdminSettings {
    const settings = localStorage.getItem(this.ADMIN_KEY);
    if (!settings) {
      this.initializeDefaultAdmin();
      return this.getAdminSettings();
    }
    return JSON.parse(settings);
  }

  updateAdminSettings(newSettings: Partial<AdminSettings>): boolean {
    try {
      const currentSettings = this.getAdminSettings();
      const updatedSettings = { ...currentSettings, ...newSettings };
      localStorage.setItem(this.ADMIN_KEY, JSON.stringify(updatedSettings));
      return true;
    } catch {
      return false;
    }
  }

  changePassword(currentPassword: string, newPassword: string): boolean {
    const settings = this.getAdminSettings();
    if (settings.password === currentPassword) {
      settings.password = newPassword;
      localStorage.setItem(this.ADMIN_KEY, JSON.stringify(settings));
      return true;
    }
    return false;
  }

  getCurrentSession() {
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }
}

export const authService = new AuthService();
export type { AdminCredentials, AdminSettings };
