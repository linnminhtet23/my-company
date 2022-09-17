import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function HeaderPresentation() {
  return (
    <>
      <div className="section section-hero section-shaped">
        <div className="page-header">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/presentation_bg.png") + ")",
            }}
          ></div>
          <Container
            className="shape-container d-flex align-items-center py-lg"
            fluid
          >
            <div className="col px-0">
              <Row>
                <Col className="ml-5" lg="4">
                  <h1>
                    Empowering Your Working Life With<br></br>
                    <span className="text-primary">
                      <b> Our Technology</b>
                    </span>
                  </h1>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="default"
                      size="lg"
                    >
                      <span className="btn-inner--text">View Services</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeaderPresentation;
