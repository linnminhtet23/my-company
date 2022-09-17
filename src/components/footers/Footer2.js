/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavLink, Container } from "reactstrap";

// Core Components

function Footer2() {
  return (
    <>
      <footer className="footer footer-simple">
        <Container>
          <nav>
            <ul>
              <li>
                <NavLink
                  href="#"
                  target="_blank"
                >
                Our Company
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  target="_blank"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  target="_blank"
                >
                  License
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="copyright text-right">
          Copyright © {new Date().getFullYear()}, {" "}
            <a
              className="copyright-link"
              href="#"
              // target="_blank"
            >
              Our Company
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer2;
