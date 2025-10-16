import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PortfolioWebsites: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero py-5 bg-gradient text-white">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <div data-aos="fade-up">
                <div className="service-badge mb-3">
                  <i className="fas fa-user me-2"></i>
                  <span>Portfolio Websites</span>
                </div>
                <h1 className="display-4 fw-bold mb-4">
                  Showcase Your Work with a 
                  <span className="text-warning"> Professional Portfolio</span>
                </h1>
                <p className="lead mb-4">
                  Simple, clean portfolio websites for freelancers, artists, photographers, and professionals to showcase their work online.
                </p>
                <div className="hero-price mb-4">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">रू 3,999</span>
                  <span className="price-usd">($25.99)</span>
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
                Everything you need for a professional portfolio website
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-images fa-2x text-primary"></i>
                </div>
                <h5>Photo Gallery</h5>
                <p className="text-muted">Beautiful image galleries to showcase your work with lightbox effects and responsive design.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-mobile-alt fa-2x text-primary"></i>
                </div>
                <h5>Mobile Friendly</h5>
                <p className="text-muted">Your portfolio will look great on all devices - desktop, tablet, and mobile phones.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <h5>Contact Form</h5>
                <p className="text-muted">Simple contact form so potential clients can easily reach out to you for projects.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="400">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-user-circle fa-2x text-primary"></i>
                </div>
                <h5>About Section</h5>
                <p className="text-muted">Tell your story and showcase your skills, experience, and what makes you unique.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="500">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-share-alt fa-2x text-primary"></i>
                </div>
                <h5>Social Links</h5>
                <p className="text-muted">Connect your social media profiles to build your online presence and reach.</p>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="600">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-search fa-2x text-primary"></i>
                </div>
                <h5>SEO Ready</h5>
                <p className="text-muted">Basic SEO optimization to help people find your portfolio on Google and other search engines.</p>
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
                Who can benefit from a portfolio website?
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="100">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-camera fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Photographers</Card.Title>
                  <Card.Text className="text-muted">
                    Showcase your photography portfolio with beautiful galleries and client testimonials.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="200">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-paint-brush fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Artists & Designers</Card.Title>
                  <Card.Text className="text-muted">
                    Display your artwork, designs, and creative projects in an elegant online gallery.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-laptop-code fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Freelancers</Card.Title>
                  <Card.Text className="text-muted">
                    Show your skills, past projects, and attract new clients with a professional online presence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="400">
              <Card className="text-center border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="fas fa-briefcase fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Professionals</Card.Title>
                  <Card.Text className="text-muted">
                    Build your personal brand and showcase your expertise in your field.
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
              <h2 className="section-title mb-4" data-aos="fade-up">Simple Pricing</h2>
              <p className="section-subtitle mb-5" data-aos="fade-up" data-aos-delay="100">
                Affordable portfolio website for everyone
              </p>
              
              <div className="pricing-card mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="pricing-header">
                  <h3>Portfolio Website</h3>
                  <div className="price">
                    <span className="currency">रू</span>
                    <span className="amount">3,999</span>
                    <span className="period">one-time</span>
                  </div>
                  <p className="price-usd">$25.99 USD</p>
                </div>
                <div className="pricing-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Up to 5 pages</li>
                    <li><i className="fas fa-check text-success me-2"></i>Photo gallery (up to 50 images)</li>
                    <li><i className="fas fa-check text-success me-2"></i>Contact form</li>
                    <li><i className="fas fa-check text-success me-2"></i>Mobile responsive design</li>
                    <li><i className="fas fa-check text-success me-2"></i>Basic SEO setup</li>
                    <li><i className="fas fa-check text-success me-2"></i>Social media links</li>
                    <li><i className="fas fa-check text-success me-2"></i>1 month free support</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="/contact" className="btn btn-primary btn-lg w-100">
                    Get Started Now
                  </Link>
                  <p className="text-muted mt-3 mb-0">
                    <small>Delivery: 5-7 days | Payment: 50% advance, 50% on completion</small>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <Row>
            <Col xs={12} className="text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="accordion" data-aos="fade-up">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What do I need to provide for my portfolio website?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      You need to provide your images/work samples, a brief about yourself, contact information, and any specific content you want on the website. We'll help guide you through the process.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Can I update my portfolio after it's completed?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      Yes! We provide 1 month of free support for minor updates. After that, you can subscribe to our maintenance service for रू 2,999/month for ongoing updates and support.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Do you provide hosting for the portfolio website?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      We can help you set up hosting with reliable providers. Hosting typically costs रू 2,000-5,000 per year depending on your needs. We'll recommend the best option for you.
                    </div>
                  </div>
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
              <h2 className="mb-3" data-aos="fade-up">Ready to Showcase Your Work?</h2>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
                Let's create a beautiful portfolio website that represents your work and helps you attract new clients.
              </p>
              <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
                <Link to="/contact" className="btn btn-warning btn-lg me-3">
                  Start Your Portfolio
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

export default PortfolioWebsites;
