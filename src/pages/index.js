import React, { Fragment } from 'react';
import LayoutWrapper from '../components/LayoutWrapper';
import Hero from '../components/Hero';
import Intro from '../components/sections/Intro';
import LeadTimes from '../components/sections/LeadTimes';
import GuideLines from '../components/sections/Guidelines';

const IndexPage = () => {
  return (
    <Fragment>
      <Hero />
      <LayoutWrapper>
        <Intro />
        <LeadTimes />
        <GuideLines />
      </LayoutWrapper>
    </Fragment>
  );
};

export default IndexPage;
