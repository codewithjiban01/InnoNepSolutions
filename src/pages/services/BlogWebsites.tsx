import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const BlogWebsites: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero py-5 bg-gradient text-white">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <div className="service-badge mb-3">
                  <i className="fas fa-blog me-2"></i>
                  <span>Blog Websites</span>
                </div>
                <h1 className="display-4 fw-bold mb-4">
                  Simple Blog Websites for 
                  <span className="text-warning"> Content Creators</span>
                </h1>
                <p className="lead mb-4">
                  Easy-to-manage blog websites for writers, content creators, and businesses to share articles and connect with readers.
                </p>
                <div className="hero-price mb-4">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">रू 5,999</span>
                  <span className="price-usd">($35.99)</span>
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
              <h2 className="section-title" data-aos="fade-up">Blog Features</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Everything you need to start blogging
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-edit fa-2x text-primary"></i>
                </div>
                <h5>Easy Admin Panel</h5>
                <p className="text-muted">Simple admin interface to write, edit, and publish blog posts without technical knowledge.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-tags fa-2x text-primary"></i>
                </div>
                <h5>Categories & Tags</h5>
                <p className="text-muted">Organize your content with categories and tags for better navigation and SEO.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-comments fa-2x text-primary"></i>
                </div>
                <h5>Comment System</h5>
                <p className="text-muted">Built-in comment system to engage with your readers and build a community.</p>
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
                  <h3>Blog Website</h3>
                  <div className="price">
                    <span className="currency">रू</span>
                    <span className="amount">5,999</span>
                    <span className="period">one-time</span>
                  </div>
                  <p className="price-usd">$35.99 USD</p>
                </div>
                <div className="pricing-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Blog with admin panel</li>
                    <li><i className="fas fa-check text-success me-2"></i>Categories & tags</li>
                    <li><i className="fas fa-check text-success me-2"></i>Comment system</li>
                    <li><i className="fas fa-check text-success me-2"></i>Mobile responsive</li>
                    <li><i className="fas fa-check text-success me-2"></i>SEO optimized</li>
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

export default BlogWebsites;
