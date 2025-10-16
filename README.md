# InnoNep Solutions - Modern Web Development Agency

A modern, responsive website for InnoNep Solutions - a web development agency based in Nepal. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Contact Management**: Built-in contact form with local storage database
- **Newsletter Subscription**: Email subscription system
- **Admin Dashboard**: View and manage submissions at `/admin`
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading with modern best practices
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **State Management**: Zustand
- **Animations**: AOS (Animate On Scroll), Custom CSS animations
- **Icons**: FontAwesome, Emoji icons
- **Database**: LocalStorage (easily replaceable with real database)
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd INNONEP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App

## 📱 Pages & Routes

- **Home** (`/`) - Landing page with hero, services, testimonials
- **About** (`/about`) - Company information and team
- **Services** (`/services`) - Service offerings overview
- **Contact** (`/contact`) - Contact form and information
- **Blog** (`/blog`) - Blog posts and articles
- **Admin** (`/admin`) - Dashboard for managing submissions

### Service Pages
- Portfolio Websites (`/services/portfolio-websites`)
- Business Websites (`/services/business-websites`)
- Blog Websites (`/services/blog-websites`)
- E-commerce Frontend (`/services/ecommerce-frontend`)
- Website Maintenance (`/services/maintenance`)

## 🎨 Design System

### Colors
- **Primary**: Teal/Cyan gradient (`#14b8a6` to `#0d9488`)
- **Secondary**: Blue gradient (`#3b82f6` to `#2563eb`)
- **Navy**: Custom navy palette for backgrounds
- **Grays**: Tailwind gray palette

### Typography
- **Primary Font**: Inter
- **Display Font**: Poppins
- **Responsive sizing** with `clamp()` for fluid typography

### Components
- **Buttons**: Primary, Secondary, Ghost variants
- **Cards**: Hover effects with shadows and transforms
- **Forms**: Modern styling with validation states
- **Animations**: Smooth transitions and micro-interactions

## 💾 Database Structure

The app uses a simple localStorage-based database service that can be easily replaced with a real database:

### Contact Submissions
```typescript
{
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
```

### Newsletter Subscriptions
```typescript
{
  id: string;
  email: string;
  createdAt: Date;
  status: 'active' | 'unsubscribed';
}
```

## 🔧 Customization

### Adding New Services
1. Create a new component in `src/pages/services/`
2. Add the route in `src/App.tsx`
3. Update the services data in relevant components

### Styling Changes
- **Colors**: Update `tailwind.config.js`
- **Fonts**: Modify imports in `src/index.css`
- **Components**: Edit component-specific styles

### Database Integration
Replace the localStorage service in `src/services/database.ts` with your preferred database:
- Firebase
- Supabase
- MongoDB
- PostgreSQL
- etc.

## 📊 Admin Dashboard

Access the admin dashboard at `/admin` to:
- View contact submissions
- Monitor newsletter subscriptions
- Track project inquiries
- See analytics and statistics

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `build` folder contents

## 🌟 Performance Features

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Proper image handling with fallbacks
- **Code Splitting**: Automatic code splitting by Create React App
- **Responsive Images**: Optimized for different screen sizes
- **Smooth Animations**: Hardware-accelerated CSS animations

## 🔒 Security Considerations

- **Form Validation**: Client and server-side validation
- **XSS Protection**: Proper input sanitization
- **HTTPS**: Always use HTTPS in production
- **Environment Variables**: Store sensitive data in env files

## 📞 Contact Information

- **Email**: info@innonepsolutions.com
- **Phone**: +977-9800000000
- **Location**: Kathmandu, Nepal
- **Website**: [Your Website URL]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🐛 Bug Reports

If you find any bugs, please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

---

**Built with ❤️ by InnoNep Solutions**
