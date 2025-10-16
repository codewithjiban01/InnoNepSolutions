import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Maintenance: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero py-5 bg-gradient text-white">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <div className="service-badge mb-3">
                  <i className="fas fa-tools me-2"></i>
                  <span>Website Maintenance</span>
                </div>
                <h1 className="display-4 fw-bold mb-4">
                  Keep Your Website 
                  <span className="text-warning"> Running Smoothly</span>
                </h1>
                <p className="lead mb-4">
                  Affordable monthly maintenance to keep your website secure, updated, and running smoothly. Perfect for small businesses on a budget.
                </p>
                <div className="hero-price mb-4">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">रू 2,999</span>
                  <span className="price-usd">($20/month)</span>
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
              <h2 className="section-title" data-aos="fade-up">Maintenance Services</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Comprehensive website care and support
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-edit fa-2x text-primary"></i>
                </div>
                <h5>Content Updates</h5>
                <p className="text-muted">Regular updates to your website content, images, and information as needed.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-bug fa-2x text-primary"></i>
                </div>
                <h5>Bug Fixes</h5>
                <p className="text-muted">Quick resolution of any issues or bugs that may arise with your website.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-headset fa-2x text-primary"></i>
                </div>
                <h5>Basic Support</h5>
                <p className="text-muted">Email and phone support for any questions or assistance you need.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="pricing-card mx-auto" data-aos="fade-up">
                <div className="pricing-header">
                  <h3>Monthly Maintenance</h3>
                  <div className="price">
                    <span className="currency">रू</span>
                    <span className="amount">2,999</span>
                    <span className="period">per month</span>
                  </div>
                  <p className="price-usd">$20 USD/month</p>
                </div>
                <div className="pricing-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Content updates (up to 5 per month)</li>
                    <li><i className="fas fa-check text-success me-2"></i>Bug fixes and troubleshooting</li>
                    <li><i className="fas fa-check text-success me-2"></i>Basic technical support</li>
                    <li><i className="fas fa-check text-success me-2"></i>Backup assistance</li>
                    <li><i className="fas fa-check text-success me-2"></i>Performance monitoring</li>
                    <li><i className="fas fa-check text-success me-2"></i>Email & phone support</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="/contact" className="btn btn-primary btn-lg w-100">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Maintenance;
