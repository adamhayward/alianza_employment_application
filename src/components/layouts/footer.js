import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="footer" >
      <Row>
        <Col>
          <p>
            Alinza Security Professional, LLC provides equal employment
            opportunities to all employees and applicants for employment and
            prohibits discrimination and harassment of any type without regard
            to race, color, religion, age, sex, national origin, disability
            status, genetics, protected veteran status, sexual orientation,
            gender identity or expression, or any other characteristic protected
            by federal, state or local laws. This policy applies to all terms
            and conditions of employment, including recruiting, hiring,
            placement, promotion, termination, layoff, recall, transfer, leaves
            of absence, compensation and training.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
