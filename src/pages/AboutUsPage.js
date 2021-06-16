import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function AboutUsPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <AboutUsHeader />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="text-center">Scroll to find out...</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who am I?</h2>
                <h5 className="description">
                  Sometimes I ask myself the same question.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/HECOOKING.jpeg").default + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Computer science is hard. Return to monke." <br></br>
                      <br></br>
                      <small>-Derek</small>
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <h3>
                    Who is Derek?
                  </h3>
                  <p>
                    I am a senior at Rowan Univserity studying Computer Science.
                    I also currently work at ASRC Federal Mission Solutions 
                    located in Moorestown NJ. I have been an intern here for 
                    over 4 and a half years currently.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutUsPage;
