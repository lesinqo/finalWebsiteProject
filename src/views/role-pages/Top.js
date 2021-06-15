import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TopLaneHeader from "components/Headers/TopLaneHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

function AboutUsPage() {
  const [pills, setPills] = React.useState("1");
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
        <TopLaneHeader />
        <div className="section section-team text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category" align="center">
                Select a playstyle
              </p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#tank"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Tank
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#mage"
                        onClick={(e) => {
                          let winrate = "0";
                          document.getElementById("akaliTitle").innerHTML = "Akali";

                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Mage
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#assassin"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Assassin
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      tank
                    </TabPane>
                    <TabPane tabId="pills2">
                    <Col>
                        <Row>
                          <img src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a5/AkaliSquare.png" alt="idk"></img>
                          <p id="akaliTitle"></p>
                          <p id="akaliWinrate"></p>
                        </Row>
                      </Col>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        Assassin
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutUsPage;
