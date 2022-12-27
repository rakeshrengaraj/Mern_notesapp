import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainscreen">
      <Container>
        <Row>
          <Col>
            {title && (
              <>
                <h1 className="title">{title}</h1>
                <hr className="text-dark bg-dark"/>
              </>
            )}
          </Col>
        </Row>

        <div>{children}</div>
      </Container>
    </div>
  );
};

export default MainScreen;
