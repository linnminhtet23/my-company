import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import HeaderPresentation from "components/headers/HeaderPresentation.js";
// Sections for this page
import { Button } from "reactstrap";
import Feature7 from "components/features/Feature7";
import BasicComponents from "components/presentation-page/BasicComponents";
import MobileAppsComponent from "components/presentation-page/MobileAppsComponent";
import Footer2 from "components/footers/Footer2";
function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  });
  return (
    <>
      <DemoNavbar type="bg-default navbar-absolute" />
      <div className="wrapper">
        <Button
          className="btn-icon-only back-to-top show"
          color="default"
          name="button"
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
          }}
        >
          <i className="ni ni-bold-up"></i>
        </Button>
        <HeaderPresentation />
        {/* <Info /> */}
        <Feature7/>
        <BasicComponents/>
        <MobileAppsComponent/>
        <Footer2/>
      </div>
    </>
  );
}

export default Presentation;
