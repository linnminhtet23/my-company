import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  NavItem,
  Button,
} from "reactstrap";

function DemoNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/index" tag={Link}>
          <h2 className="text-primary">Our Company</h2>
            {/* <img alt="..." src={require("assets/img/brand/white.png")}></img> */}
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                  <h2 className="text-primary">Our Company</h2>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <span className="nav-link-inner--text">Home</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <span className="nav-link-inner--text">About Us</span>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <span className="nav-link-inner--text">Services</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="ni ni-map-big text-warning"></i>
                    Wesites
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="ni ni-tv-2 text-info"></i>
                    Web Apps
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="ni ni-mobile-button text-danger"></i>
                    Mobile Apps
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <span className="nav-link-inner--text">FAQ</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <span className="nav-link-inner--text">Blogs</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <Button
                    className="btn-white btn-icon mb-3 mb-sm-0"
                    color="default"
                  >
                    <span className="btn-inner--text">Contact Us</span>
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
