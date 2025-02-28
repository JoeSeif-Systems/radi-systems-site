import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-5" id="team">
      <Row>
        <Col>
          <h2 className='text-center'>Meet the Team</h2>
          <p>
            RADI System is powered by a team of dedicated professionals with extensive experience in system development, integration, and installation. Our mission is to deliver cutting-edge tracking solutions that enhance efficiency, security, and automation across multiple industries.
          </p>
          <p>
            With a combined expertise of over 30 years, our team is committed to providing world-class AI-driven tracking technology. From software engineering to hands-on installations, we ensure that our clients receive top-notch services backed by industry knowledge and real-world experience.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1440149713/photo/black-man-tablet-and-smile-for-social-media-post-shopping-online-or-browsing-internet.jpg?s=612x612&w=0&k=20&c=_AJnX1NBt8cHvOL0ygXQR4ysZQCLoPUr9Z9bzCl8Nrk=" alt="Joseph Mwadime" />
            <Card.Body>
              <Card.Title>Joseph Mwadime</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Founder & Software Engineer</Card.Subtitle>
              <Card.Text>
                With 18 years of experience in system development, integration, and hardware & telecommunication engineering, Joseph leads the RADI System with innovation and expertise.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=612x612&w=0&k=20&c=JESGRQ2xqRH9ZcJzvZBHZIZKVY8MDejBSOfxeM-i5e4=" alt="William Mwakideu" />
            <Card.Body>
              <Card.Title>William Mwakideu</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Senior Technician, HOD Technical</Card.Subtitle>
              <Card.Text>
                William has over 7 years of experience in installation and technical support, ensuring seamless integration of our AI tracking systems in diverse environments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1415194604/photo/cad-electronics-engineer-a.jpg?s=612x612&w=0&k=20&c=EbmhNz6UT2NFXzw69im2RbZ9AF58iEks7UlWtq1mLNU=" alt="Rophine Mzodzo" />
            <Card.Body>
              <Card.Title>Rophine Mzodzo</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Technician</Card.Subtitle>
              <Card.Text>
                With 5 years of hands-on experience, Rophine specializes in technical installations and maintenance, ensuring smooth operation of our tracking solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
