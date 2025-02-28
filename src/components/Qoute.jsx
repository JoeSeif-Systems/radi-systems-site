import { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";

const QuotationForm = () => {
  const [email, setEmail] = useState("");
  const [packageType, setPackageType] = useState("");
  const [numAssets, setNumAssets] = useState(1);
  const [quote, setQuote] = useState(null);

  const packagePrices = {
    "full-package": 30000 + 40000 + 50000, // Tracking + Fuel + Cameras
    "tracking-only": 30000,
    "tracking-fuel": 30000 + 40000,
    "tracking-cameras": 30000 + 50000,
  };

  const generateQuotation = () => {
    if (!email || !packageType || numAssets < 1) {
      alert("Please fill all fields correctly.");
      return;
    }

    const basePrice = packagePrices[packageType] || 0;
    const totalPrice = basePrice * numAssets;

    setQuote({
      email,
      packageType,
      numAssets,
      totalPrice,
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Quotation", 14, 15);
    doc.autoTable({
      head: [["Email", "Package", "Number of Assets", "Total Price (KES)"]],
      body: [[quote.email, quote.packageType, quote.numAssets, quote.totalPrice]],
    });
    doc.save("quotation.pdf");
  };

  return (
    <Container className="mt-5" id="ask">
      <h2>Get Your Quotation</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Package</Form.Label>
          <Form.Select value={packageType} onChange={(e) => setPackageType(e.target.value)}>
            <option value="">Select a package</option>
            <option value="full-package">Full Package</option>
            <option value="tracking-only">Tracking Only</option>
            <option value="tracking-fuel">Tracking + Fuel</option>
            <option value="tracking-cameras">Tracking + Cameras</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Assets</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={numAssets}
            onChange={(e) => setNumAssets(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={generateQuotation}>
          Generate Quotation
        </Button>
      </Form>

      {quote && (
        <>
          <h3 className="mt-4">Quotation Summary</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Email</th>
                <th>Package</th>
                <th>Number of Assets</th>
                <th>Total Price (KES)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{quote.email}</td>
                <td>{quote.packageType}</td>
                <td>{quote.numAssets}</td>
                <td>{quote.totalPrice}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="success" onClick={downloadPDF}>
            Download PDF
          </Button>
        </>
      )}
    </Container>
  );
};

export default QuotationForm;
