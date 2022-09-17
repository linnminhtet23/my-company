import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// Core Components

function BasicComponents() {
  return (
    <>
      <section className="section-basic-components mx-auto">
        <Container>
          <Row>
          <Col className="mb-md-5 mx-auto " lg="5" md="10">
            <div className="image-container">
            
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/layer-1.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/layer-2.jpg")}
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/layer-4.jpg")}
                ></img>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/ill/example-3.svg")}
                ></img>
              </div>
            </Col>
            <Col lg="6" md="12" className="ml-lg-6 ">
              <div className="section-description">
                <h1 className="display-3">
                  Website Development
                  <span className="text-primary">
                    Build website of your company or organization with us
                  </span>
                </h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis sed odit porro ratione quibusdam? Aspernatur cum id
                  qui quaerat blanditiis tempore suscipit voluptates doloribus,
                  dolorum dolores itaque eaque eos modi.
                </p>
                <Button color="primary" target="_blank">
                  View more
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
}

export default BasicComponents;
