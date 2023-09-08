import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Logo from "../images/AlianzaLogo.png";
import Footer from "./footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Container style={{ position: "relative", minHeight: "100vh"}}>
        <Row style={{ margin: "2.5% 0 7.5%" }}>
          <Col md={8} className="justify-content-center">
            <img
              src={Logo}
              alt="Alianza Security Professionals Company Logo"
              style={{ width: "75%" }}
            />
          </Col>
          <Col style={{ display: "flex", alignItems: "flex-end" }}>
            <h1 style={{ fontSize: "15pt", margin: "0px" }}>
              EMPLOYMENT APPLICATION
            </h1>
          </Col>
        </Row>
        {children}
        <Footer />
      </Container>
    </>
  );
}
