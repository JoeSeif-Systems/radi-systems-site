import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5" id="home">
      <Row className="align-items-center">
        <Col md={6}>
          <Image 
            src="https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk=" 
            alt="RADI System AI Tracking" 
            fluid 
            rounded 
          />
        </Col>
        <Col md={6}>
          <div className='text-center'>
          <h2>Who are We</h2>
          <p>AI Powered</p>
          </div>
          <p>
            The RADI System is a cutting-edge AI-powered tracking platform designed to provide seamless cross-platform asset management. Whether you're tracking vehicles, equipment, or personnel, our intelligent system ensures real-time monitoring, predictive analytics, and enhanced security.
          </p>
          <p>
            With world-class features such as AI-driven anomaly detection, automated reporting, and cloud-based accessibility, RADI System transforms how businesses manage their assets. Our intuitive dashboard and seamless integration with IoT sensors make it the perfect choice for enterprises looking to optimize their operational efficiency.
          </p>
          <p>
            Built for scalability and reliability, RADI System adapts to any industry need, from logistics and fleet management to industrial automation. Experience the future of tracking with AI-powered insights, multi-platform compatibility, and robust security at the core of our system.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
