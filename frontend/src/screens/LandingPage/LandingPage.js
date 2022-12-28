import React from "react";
import "./LandingPage.css";
import { Card, Button, Container,Row, Col } from "react-bootstrap";

const LandingPage = () => {
  return (
    <main className="main">
      <Container>
        <Card
          className="text-center main-card"
          bg="dark"
          variant="white"
          text="light"
        >
          <Card.Header></Card.Header>
          <Card.Body className="main-cardbody">
            <Card.Title>Welcome to Notes App</Card.Title>
            <Card.Text>One Safe place for all your notes</Card.Text>
            <Row>
              <Col >
                <Button href="/login"
                  variant="primary"
                  className="mr-5 mt-5 btn btn-primary btn-lg"
                >
                  Login
                </Button>
              </Col>
              <Col>
                <Button
                  href="/signup"
                  variant="primary"
                  className="mt-5 btn btn-primary btn-lg"
                >
                  Signup
                </Button>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Container>
    </main>
  );
};

export default LandingPage;
