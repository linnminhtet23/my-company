import React from "react";

// reactstrap components
import {
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Footer6() {
  return (
    <>
      <footer className="footer footer-big bg-gradient-default">
        <Container>
          <div className="content">
            <Row className="mb-5">
              <div className="column mx-auto">
               <h1 className="text-primary text-uppercase">Our Company</h1>
              </div>
            </Row>
            <Row>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mb-4">About Us</h4>
                  <ul className="links-vertical">
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Our mission
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Media Kit
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mb-4">Social</h4>
                  <ul className="links-vertical">
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="8">
              <div className="column">
                  <h4 className="mb-4">Social</h4>
                  <ul className="links-vertical">
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <hr className="bg-white opacity-3"></hr>
          <div className="column">
            <ul className="d-flex justify-content-center">
              <li>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Terms &amp; conditions
                </NavLink>
              </li>
              <li>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Privacy policy
                </NavLink>
              </li>
              <li>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Legal notice
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer6;
