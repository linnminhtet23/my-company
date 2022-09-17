import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// Core Components

function Feature7() {
  return (
    <>
      <div className="section features-7 bg-secondary">
        <Container>
          <Row>
            <Col className="text-center mx-auto" md="8">
              <h3 className="display-3">Follow your dreams</h3>
              <p className="lead">
                We provide best digital solutions to help your company reach
                greater heights. Here are benefits of our technology
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-6">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="ni ni-chart-pie-35"></i>
                      </div>
                      <h6 className="text-primary text-uppercase">
                        Analyse and Identify Problems Easily
                      </h6>
                      <p className="description mt-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ab, eum culpa. A laborum quod labore temporibus
                        officiis asperiores molestias beatae quam similique
                        ipsam eligendi voluptate sequi ducimus, animi pariatur
                        at.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-6">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="ni ni-user-run"></i>
                      </div>
                      <h6 className="text-success text-uppercase">
                      Faster Performance
                      </h6>
                      <p className="description mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi culpa illum repellendus ab. Quam quis explicabo
                        obcaecati. Quis fuga vel laudantium assumenda quam ut.
                        Ad soluta nesciunt molestiae provident non! provident non! provident non! provident non!
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-6">
                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <i className="ni ni-planet"></i>
                      </div>
                      <h6 className="text-warning text-uppercase">
                        Lower Your Costs and Maximize Your Profit
                      </h6>
                      <p className="description mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis quasi tenetur nesciunt corrupti fugit sapiente
                        eaque consequuntur obcaecati minus. Voluptatem qui
                        laborum a consequuntur delectus, eveniet deserunt dolor
                        
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature7;
