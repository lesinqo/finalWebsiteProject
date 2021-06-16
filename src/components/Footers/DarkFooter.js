/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
              <a
                href="/about-derek"
              >
                About Derek
              </a>
          </ul>
          <ul>
          <a
                href="https://maestroderek.github.io/"
                target="_blank"
              >
                Blog
              </a>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          Coded by Derek Ledford & Abdullah Sahid
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
