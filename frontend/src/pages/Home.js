import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserMd, FaUserNurse, FaUser, FaCalendarCheck, FaNotesMedical, FaHospital } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-white">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="py-5" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">
                Modern Healthcare<br />
                <span className="text-accent">At Your Fingertips</span>
              </h1>
              <p className="lead mb-4">
                Experience seamless healthcare management with our integrated platform 
                connecting patients, doctors, and medical staff.
              </p>
              <div className="d-flex gap-3">
                <Link to="/register" className="button">
                  Request Appointment
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link to="/login" className="hover-btn">
                  <span className="btn-text-one">Sign In</span>
                  <span className="btn-text-two">Welcome!</span>
                </Link>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block" data-aos="fade-left">
              <img 
                src="/banner_doctor.png" 
                alt="Healthcare Illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* First Section - Healing starts here */}
      <section className="healing-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="pe-lg-5" data-aos="fade-right">
              <h2 className="display-4 mb-4">Healing starts here</h2>
              <div className="mb-4">
                <p className="lead mb-2">The right answers the first time</p>
                <p className="text-muted">
                  Effective treatment depends on getting the right diagnosis. 
                  Our experts diagnose and treat the toughest medical challenges.
                </p>
              </div>
              <div className="mb-4">
                <p className="lead mb-2">Top-ranked in India</p>
                <p className="text-muted">
                  MK Hospital has more No. 1 rankings than any other hospital 
                  in the nation according to medical reports.
                </p>
              </div>
              <Button 
                as={Link} 
                to="/about" 
                variant="outline-primary" 
                className="rounded-pill px-4"
              >
                Why choose MK Hospital
              </Button>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <img 
                src="/doctor_patient.jpg" 
                alt="Doctor with Patient" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Second Section - Global Care */}
      <section className="global-care-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2" data-aos="fade-left">
              <h2 className="display-4 mb-4">World-class care for global patients</h2>
              <p className="lead mb-4">
                We make it easy for patients around the world to get care from MK Hospital.
              </p>
              <Button 
                as={Link} 
                to="/services" 
                variant="outline-primary" 
                className="rounded-pill px-4"
              >
                International services
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1" data-aos="fade-right">
              <img 
                src="/Mother with Child.jpg" 
                alt="Mother with Child" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* User Types Section */}
      <section className="user-types-section py-5">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">Choose Your Role</h2>
          <Row className="g-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card className="border-0 shadow-sm h-100 role-card">
                <Card.Body className="text-center p-4">
                  <div className="icon-wrapper mb-4">
                    <FaUserMd className="role-icon" />
                  </div>
                  <Card.Title className="h4 mb-3">Doctors</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Manage patient consultations, prescriptions, and appointments efficiently.
                    Access medical records and provide better care.
                  </Card.Text>
                  <Link to="/register?role=doctor">
                    <Button variant="outline-primary" className="rounded-pill px-4">
                      Join as Doctor
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="border-0 shadow-sm h-100 role-card">
                <Card.Body className="text-center p-4">
                  <div className="icon-wrapper mb-4">
                    <FaUserNurse className="role-icon" />
                  </div>
                  <Card.Title className="h4 mb-3">Nurses</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Update patient vitals, assist in appointments, and manage 
                    medications with our streamlined system.
                  </Card.Text>
                  <Link to="/register?role=nurse">
                    <Button variant="outline-success" className="rounded-pill px-4">
                      Join as Nurse
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <Card className="border-0 shadow-sm h-100 role-card">
                <Card.Body className="text-center p-4">
                  <div className="icon-wrapper mb-4">
                    <FaUser className="role-icon" />
                  </div>
                  <Card.Title className="h4 mb-3">Patients</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Book appointments, access medical records, and communicate 
                    with healthcare providers seamlessly.
                  </Card.Text>
                  <Link to="/register?role=patient">
                    <Button variant="outline-info" className="rounded-pill px-4">
                      Join as Patient
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">Key Features</h2>
          <Row className="g-4">
            <Col md={4} data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-item text-center">
                <FaCalendarCheck className="feature-icon" />
                <h4>Smart Scheduling</h4>
                <p className="text-muted">
                  Efficient appointment management with automated reminders
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-item text-center">
                <FaNotesMedical className="feature-icon" />
                <h4>Digital Records</h4>
                <p className="text-muted">
                  Secure access to medical history and test results
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-item text-center">
                <FaHospital className="feature-icon" />
                <h4>Integrated Care</h4>
                <p className="text-muted">
                  Seamless communication between healthcare providers
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
