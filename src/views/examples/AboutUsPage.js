import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import {
  Modal,
  ModalBody,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function AboutUsPage() {
  const [modal2, setModal2] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  This website was created for a final project for Advanced Web Programming.
                </h5>
                <h5 className="description">
                  This website aims to provide knowledge and data from the League of Legends API.
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
                        "url(" + require("assets/img/rengar.jpg").default + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "League of legends is a very fun and balanced game. I sure do enjoy playing it." <br></br>
                      <br></br>
                      <small>-Nobody ever</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/teemo.jpg").default + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/fiora.jpg").default + ")",
                    }}
                  ></div>
                  <h3>
                    So what will this website actually be doing?
                  </h3>
                  <p>
                    The aim of this website is to provide data from the league 
                    of legends API in such a way that any inference can be made.
                    What we aim to do is provide insight into what champions might
                    be the best for your playstyle and personality.
                  </p>
                  <p>
                    For a start, if you are a hardcore assassin player, then
                    it would make sense for you to play Kha'zix or Zed or something
                    like this.
                  </p>
                  <p>
                    I hope that this website provides all the data you will need
                    for your future games of league of legends!
                  </p>
                </Col>
              </Row>
            </div>
            <Button
            onClick={() => setModal2(true)}>
              Who should I really play?
            </Button>

            <Modal
                modalClassName="modal-mini modal-info"
                toggle={() => setModal2(false)}
                isOpen={modal2}
              >
                <ModalBody>
                  <p>Kha'zix</p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

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
