import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center mb-5">
              <h1 className="display-4 mb-3">Contact Us</h1>
              <p className="lead text-primary">
                We're Here to Help You 24/7
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-section py-5 bg-light">
        <Container>
          <Row>
            {/* Contact Information */}
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="contact-info">
                <h2 className="h3 mb-4">Get in Touch</h2>
                
                <div className="info-card mb-4" data-aos="fade-up">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <h3 className="h5">Phone</h3>
                  <p className="mb-0">Emergency: +91 9876 543 210</p>
                  <p>General: +91 9876 543 211</p>
                </div>

                <div className="info-card mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <h3 className="h5">Email</h3>
                  <p className="mb-0">info@mkhospital.com</p>
                  <p>support@mkhospital.com</p>
                </div>

                <div className="info-card mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h3 className="h5">Location</h3>
                  <p className="mb-0">123 Healthcare Avenue</p>
                  <p>New York, NY 10001</p>
                </div>

                <div className="info-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <h3 className="h5">Working Hours</h3>
                  <p className="mb-0">Emergency: 24/7</p>
                  <p>Outpatient: Mon-Sat (8:00 AM - 8:00 PM)</p>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={8}>
              <div className="contact-form-wrapper" data-aos="fade-up">
                <h2 className="h3 mb-4">Send Us a Message</h2>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter your name"
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter your email"
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                      type="tel" 
                      placeholder="Enter your 10-digit mobile number"
                      className="form-input"
                      pattern="[6-9][0-9]{9}"
                      maxLength="10"
                      title="Please enter a valid Indian mobile number"
                    />
                    <Form.Text className="text-muted">
                      Example: 9876543210
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Department</Form.Label>
                    <Form.Select className="form-input">
                      <option>Select Department</option>
                      <option>General Medicine</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={4}
                      placeholder="Enter your message"
                      className="form-input"
                    />
                  </Form.Group>

                  <Button 
                    variant="primary" 
                    type="submit"
                    className="btn-submit"
                  >
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact; 