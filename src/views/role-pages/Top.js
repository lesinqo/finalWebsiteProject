import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TopLaneHeader from "components/Headers/TopLaneHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function AboutUsPage() {
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
        <TopLaneHeader />
        <div className="section section-team text-center">
          this lane sucks lol
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutUsPage;
