import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// Core Components

function MobileAppsComponent() {
  return (
    <>
      <section className="section-basic-components mx-auto">
        <Container>
          <Row className="flex-column-reverse flex-lg-row">
            <Col className="mx-auto order-md-1" lg="6">
              <div className="section-description">
                <h1 className="display-3">
                  Mobile Apps Development
                  <span className="text-primary">
                    Build mobile apps of your company or organization 
                  </span>
                </h1>
                <p className="lead">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis placeat nam nobis labore, repellat, at fuga eligendi
                  pariatur vero vitae aspernatur animi delectus dolor sed saepe
                  iure consequatur optio voluptas.
                </p>
                <Button color="primary" target="_blank">
                  View more
                </Button>
              </div>
            </Col>

            <Col className="mt-md-4 mx-auto order-md-2 mb-6 order-lg-1" lg="5">
              <div className="image-container">
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/presentation-page/layer-1.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/layer-3.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/layer-4.jpg")}
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/layer-2.jpg")}
                ></img>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/ill/example-3.svg")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MobileAppsComponent;
