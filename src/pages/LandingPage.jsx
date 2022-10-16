import React from "react";
import Header from "../components/Landing Page/Header/Header";
import Banner from "../components/Landing Page/Banner/Banner";
import About from "../components/Landing Page/AbousUs/About";
import Chart from "../components/Landing Page/OrganisationChart/Chart";
import WhatWeDo from "../components/Landing Page/WhatWeDo/WhatWeDo";

const LandingPage = () => {
  return (
    <section>
      <Header />
      <Banner />
      <About />
      <Chart />
      <WhatWeDo />
    </section>
  );
};

export default LandingPage;
