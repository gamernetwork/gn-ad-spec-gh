import React, { Fragment } from 'react';
import LayoutWrapper from '../components/LayoutWrapper';
import Hero from '../components/Hero';
import Intro from '../components/sections/Intro';
import LeadTimes from '../components/sections/LeadTimes';
import GuideLines from '../components/sections/Guidelines';
import Takeovers from '../components/sections/Takeovers';

const IndexPage = () => {
  return (
    <Fragment>
      <Hero />
      <LayoutWrapper>
        <Intro />
        <LeadTimes />
        <GuideLines />
        <Takeovers />
      </LayoutWrapper>
    </Fragment>
  );
};

export default IndexPage;
