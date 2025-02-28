import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { 
  FaHeartbeat, FaBrain, FaXRay, FaAmbulance, 
  FaStethoscope, FaUserMd, FaTooth, FaEye 
} from 'react-icons/fa';

const Services = () => {
  const specialties = [
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and rehabilitation services.",
      treatments: ["Angioplasty", "Cardiac Surgery", "Heart Disease Treatment", "ECG & Echo"]
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      description: "Expert care for disorders of the nervous system, brain, and spine.",
      treatments: ["Brain Surgery", "Spine Treatment", "Stroke Management", "Epilepsy Care"]
    },
    {
      icon: <FaXRay />,
      title: "Orthopedics",
      description: "Specialized care for bones, joints, ligaments, tendons, and muscles.",
      treatments: ["Joint Replacement", "Sports Injuries", "Fracture Care", "Arthroscopy"]
    },
    {
      icon: <FaStethoscope />,
      title: "General Medicine",
      description: "Primary healthcare services for all age groups and general health concerns.",
      treatments: ["Health Checkups", "Vaccinations", "Chronic Disease Management"]
    }
  ];

  const emergencyServices = [
    {
      icon: <FaAmbulance />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with rapid response teams."
    },
    {
      icon: <FaUserMd />,
      title: "Specialist Consultation",
      description: "Quick access to specialist doctors for emergency consultations."
    }
  ];

  return (
    <div className="services-page">
      {/* Main Services Section */}
      <section className="services-hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center mb-5">
              <h1 className="display-4 mb-3">Our Medical Services</h1>
              <p className="lead text-primary">
                Comprehensive Healthcare Solutions for Every Need
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specialty Cards */}
      <section className="specialties-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Specialties</h2>
          <Row className="g-4">
            {specialties.map((specialty, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="specialty-card text-center p-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="specialty-icon mb-3">
                    {specialty.icon}
                  </div>
                  <h3 className="h4 mb-3">{specialty.title}</h3>
                  <p className="text-muted mb-3">{specialty.description}</p>
                  <ul className="treatment-list">
                    {specialty.treatments.map((treatment, idx) => (
                      <li key={idx}>{treatment}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Emergency Services */}
      <section className="emergency-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="mb-4">Emergency Services</h2>
              <div className="emergency-cards">
                {emergencyServices.map((service, index) => (
                  <div className="emergency-card" key={index} data-aos="fade-up">
                    <div className="emergency-icon">{service.icon}</div>
                    <h3 className="h5">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What insurance plans do you accept?</Accordion.Header>
                  <Accordion.Body>
                    We accept most major insurance plans and provide flexible payment options for our patients.
                    Please contact our insurance department for specific details about your coverage.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>How do I schedule an appointment?</Accordion.Header>
                  <Accordion.Body>
                    You can schedule an appointment by calling our appointment desk, using our online booking system,
                    or visiting the hospital in person. Emergency cases are attended to immediately.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What are your visiting hours?</Accordion.Header>
                  <Accordion.Body>
                    General visiting hours are from 10:00 AM to 8:00 PM daily. However, different departments
                    may have specific visiting hours based on patient care requirements.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services; 