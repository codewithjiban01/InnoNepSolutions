import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import { useStore } from './store/useStore';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import PortfolioWebsites from './pages/services/PortfolioWebsites';
import BusinessWebsites from './pages/services/BusinessWebsites';
import BlogWebsites from './pages/services/BlogWebsites';
import EcommerceFrontend from './pages/services/EcommerceFrontend';
import Maintenance from './pages/services/Maintenance';

// Import Tailwind CSS
import './index.css';
import './fallback.css';

function App() {
  const { loadData } = useStore();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Load data from localStorage
    loadData();
  }, [loadData]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/services/portfolio-websites" element={<PortfolioWebsites />} />
            <Route path="/services/business-websites" element={<BusinessWebsites />} />
            <Route path="/services/blog-websites" element={<BlogWebsites />} />
            <Route path="/services/ecommerce-frontend" element={<EcommerceFrontend />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
