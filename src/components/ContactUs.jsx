import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Container className="mt-5 mb-3" id="support">
      <Row className="align-items-center">
        {/* Left Side - Contact Info */}
        <Col md={6}>
          <h2>Contact Us</h2>
          <p><strong>Phone:</strong> +254 705 060 324</p>
          <p><strong>Email:</strong> developer.radiskyeye@gmail.com</p>
        </Col>

        {/* Right Side - Contact Form */}
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="Write your message here..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required 
              />
            </Form.Group>

            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
