import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const EcommerceFrontend: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero py-5 bg-gradient text-white">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <div className="service-badge mb-3">
                  <i className="fas fa-shopping-cart me-2"></i>
                  <span>E-commerce Frontend</span>
                </div>
                <h1 className="display-4 fw-bold mb-4">
                  Beautiful Product Showcase 
                  <span className="text-warning"> Websites</span>
                </h1>
                <p className="lead mb-4">
                  Beautiful product showcase websites with shopping cart design. Frontend only - perfect for displaying products without payment processing.
                </p>
                <div className="hero-price mb-4">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">रू 15,999</span>
                  <span className="price-usd">($99.99)</span>
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
              <h2 className="section-title" data-aos="fade-up">E-commerce Features</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Professional product showcase without the complexity
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-th-large fa-2x text-primary"></i>
                </div>
                <h5>Product Display</h5>
                <p className="text-muted">Beautiful product catalogs with detailed pages, images, and descriptions.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-shopping-cart fa-2x text-primary"></i>
                </div>
                <h5>Shopping Cart UI</h5>
                <p className="text-muted">Professional shopping cart interface (frontend only - no payment processing).</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-images fa-2x text-primary"></i>
                </div>
                <h5>Product Gallery</h5>
                <p className="text-muted">High-quality image galleries with zoom functionality for product details.</p>
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
                  <h3>E-commerce Frontend</h3>
                  <div className="price">
                    <span className="currency">रू</span>
                    <span className="amount">15,999</span>
                    <span className="period">one-time</span>
                  </div>
                  <p className="price-usd">$99.99 USD</p>
                </div>
                <div className="pricing-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Product catalog (up to 50 products)</li>
                    <li><i className="fas fa-check text-success me-2"></i>Shopping cart UI</li>
                    <li><i className="fas fa-check text-success me-2"></i>Product galleries</li>
                    <li><i className="fas fa-check text-success me-2"></i>Contact forms</li>
                    <li><i className="fas fa-check text-success me-2"></i>Mobile responsive</li>
                    <li><i className="fas fa-check text-success me-2"></i>1 month free support</li>
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

export default EcommerceFrontend;
