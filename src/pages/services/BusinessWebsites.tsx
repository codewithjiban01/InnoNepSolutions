import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BusinessWebsites: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero py-5 bg-gradient text-white">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <div className="service-badge mb-3">
                  <i className="fas fa-store me-2"></i>
                  <span>Business Websites</span>
                </div>
                <h1 className="display-4 fw-bold mb-4">
                  Professional Websites for 
                  <span className="text-warning"> Small Businesses</span>
                </h1>
                <p className="lead mb-4">
                  Professional websites for small businesses like restaurants, salons, shops, and local services to attract customers online.
                </p>
                <div className="hero-price mb-4">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">रू 9,999</span>
                  <span className="price-usd">($59.99)</span>
                </div>
                <Link to="/contact" className="btn btn-warning btn-lg me-3">
                  <i className="fas fa-rocket me-2"></i>Get Started
                </Link>
                <a href="#features" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-info-circle me-2"></i>Learn More
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title" data-aos="fade-up">What's Included</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Everything your business needs to succeed online
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-info-circle fa-2x text-primary"></i>
                </div>
                <h5>Business Information</h5>
                <p className="text-muted">Complete business details, location, hours, and contact information prominently displayed.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-list fa-2x text-primary"></i>
                </div>
                <h5>Services Page</h5>
                <p className="text-muted">Detailed pages showcasing your services, products, or offerings with descriptions and pricing.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-images fa-2x text-primary"></i>
                </div>
                <h5>Photo Gallery</h5>
                <p className="text-muted">Showcase your business, products, or work with professional image galleries.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="400">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <h5>Contact Forms</h5>
                <p className="text-muted">Multiple contact options including forms, phone numbers, and location maps.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="500">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-mobile-alt fa-2x text-primary"></i>
                </div>
                <h5>Mobile Optimized</h5>
                <p className="text-muted">Perfect viewing experience on all devices - desktop, tablet, and mobile phones.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="600">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-search fa-2x text-primary"></i>
                </div>
                <h5>Local SEO</h5>
                <p className="text-muted">Optimized for local searches to help customers find your business in Nepal.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Perfect For Section */}
      <section className="perfect-for py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title" data-aos="fade-up">Perfect For</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Types of businesses that benefit from our websites
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="100">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-utensils fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Restaurants & Cafes</Card.Title>
                  <Card.Text className="text-muted">
                    Menu display, location, hours, and online ordering information.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="200">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-cut fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Salons & Spas</Card.Title>
                  <Card.Text className="text-muted">
                    Service listings, pricing, booking information, and gallery of work.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-store fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Retail Shops</Card.Title>
                  <Card.Text className="text-muted">
                    Product showcase, store information, and customer contact options.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="400">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-tools fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Local Services</Card.Title>
                  <Card.Text className="text-muted">
                    Plumbers, electricians, consultants, and other service providers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-4" data-aos="fade-up">Business Website Package</h2>
              <p className="section-subtitle mb-5" data-aos="fade-up" data-aos-delay="100">
                Complete website solution for small businesses
              </p>
              
              <div className="pricing-card mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="pricing-header">
                  <h3>Business Website</h3>
                  <div className="price">
                    <span className="currency">रू</span>
                    <span className="amount">9,999</span>
                    <span className="period">one-time</span>
                  </div>
                  <p className="price-usd">$59.99 USD</p>
                </div>
                <div className="pricing-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Up to 8 pages</li>
                    <li><i className="fas fa-check text-success me-2"></i>Business information & services</li>
                    <li><i className="fas fa-check text-success me-2"></i>Photo gallery (up to 100 images)</li>
                    <li><i className="fas fa-check text-success me-2"></i>Contact forms & location map</li>
                    <li><i className="fas fa-check text-success me-2"></i>Mobile responsive design</li>
                    <li><i className="fas fa-check text-success me-2"></i>Local SEO optimization</li>
                    <li><i className="fas fa-check text-success me-2"></i>Social media integration</li>
                    <li><i className="fas fa-check text-success me-2"></i>1 month free support</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="/contact" className="btn btn-primary btn-lg w-100">
                    Get Started Now
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    <small>Delivery: 1-2 weeks | Payment: 50% advance, 50% on completion</small>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="mb-3" data-aos="fade-up">Ready to Grow Your Business Online?</h2>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
                Let's create a professional website that helps your business attract more customers and grow.
              </p>
              <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
                <Link to="/contact" className="btn btn-warning btn-lg me-3">
                  Start Your Website
                </Link>
                <Link to="/services" className="btn btn-outline-light btn-lg">
                  View All Services
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BusinessWebsites;
