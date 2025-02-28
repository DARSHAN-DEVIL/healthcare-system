import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAward, FaUserMd, FaHospital, FaHandHoldingMedical } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
              <h1 className="display-4 mb-4">About MK Hospital</h1>
              <p className="lead text-primary mb-4">
                Leading the way in medical excellence with compassionate care
              </p>
              <p className="text-muted">
                Since our establishment in 1995, MK Hospital has been at the forefront 
                of medical innovation and patient care. Our state-of-the-art facilities 
                and dedicated team of healthcare professionals work tirelessly to provide 
                the highest quality of care to our community.
              </p>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="video-wrapper rounded-4 overflow-hidden">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="w-100"
                  poster="/images/hospital-poster.jpg"
                >
                  <source src="/videos/hospital-tour.mp4" type="video/mp4" />
                 
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <Container>
          <Row className="text-center g-4">
            <Col md={3} data-aos="fade-up">
              <div className="stat-card">
                <FaUserMd className="stat-icon mb-3" />
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Specialist Doctors</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="100">
              <div className="stat-card">
                <FaHospital className="stat-icon mb-3" />
                <h3 className="stat-number">100+</h3>
                <p className="stat-label">Hospital Rooms</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="200">
              <div className="stat-card">
                <FaHandHoldingMedical className="stat-icon mb-3" />
                <h3 className="stat-number">10K+</h3>
                <p className="stat-label">Patients Served</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="300">
              <div className="stat-card">
                <FaAward className="stat-icon mb-3" />
                <h3 className="stat-number">25+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Values Section */}
      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="pe-lg-5" data-aos="fade-right">
              <h2 className="mb-4">Our Mission & Values</h2>
              <div className="mission-content">
                <div className="mb-4">
                  <h5 className="text-primary mb-3">Our Mission</h5>
                  <p>
                    To deliver exceptional healthcare services that improve the quality 
                    of life for our patients and community through innovation, 
                    compassion, and excellence.
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="text-primary mb-3">Our Vision</h5>
                  <p>
                    To be the leading healthcare provider known for excellence in 
                    patient care, medical education, and innovative research.
                  </p>
                </div>
                <div>
                  <h5 className="text-primary mb-3">Core Values</h5>
                  <ul className="value-list">
                    <li>Patient-Centered Care</li>
                    <li>Excellence & Innovation</li>
                    <li>Integrity & Ethics</li>
                    <li>Compassion & Respect</li>
                    <li>Teamwork & Collaboration</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="video-wrapper rounded-4 overflow-hidden">
                <video 
                autoPlay
                  controls 
                  className="w-100"
                  poster="/doctor-team-poster.jpg"
                >
                  <source src="/videos/doctor-team.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">Our Facilities</h2>
          <Row className="g-4">
            <Col md={4} data-aos="fade-up">
              <div className="facility-card">
                <img 
                  src="/facility-1.jpg" 
                  alt="Modern Operating Theater" 
                  className="facility-img"
                />
                <h4 className="mt-4 mb-3">Modern Operating Theaters</h4>
                <p>
                  State-of-the-art operating rooms equipped with the latest 
                  medical technology for complex surgical procedures.
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <div className="facility-card">
                <img 
                  src="/facility-2.jpg" 
                  alt="ICU" 
                  className="facility-img"
                />
                <h4 className="mt-4 mb-3">Intensive Care Units</h4>
                <p>
                  24/7 monitored ICU facilities with advanced life support 
                  systems and dedicated medical staff.
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <div className="facility-card">
                <img 
                  src="/facility-3.jpg" 
                  alt="Laboratory" 
                  className="facility-img"
                />
                <h4 className="mt-4 mb-3">Advanced Laboratories</h4>
                <p>
                  Fully equipped diagnostic laboratories providing accurate 
                  and timely test results.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 