import React, { Fragment } from 'react';
import LayoutWrapper from '../components/LayoutWrapper';
import Hero from '../components/Hero';
import Intro from '../components/sections/Intro';
import LeadTimes from '../components/sections/LeadTimes';
import GuideLines from '../components/sections/Guidelines';
import Takeovers from '../components/sections/Takeovers';
import RunOfNetwork from '../components/sections/RunOfNetwork';
import HTML5 from '../components/sections/HTML5';
import Custom from '../components/sections/Custom';
import Programatic from '../components/sections/Programatic';
import Instream from '../components/sections/InStream';
import Compliance from '../components/sections/Compliance';

const IndexPage = () => {
  return (
    <Fragment>
      <Hero />
      <LayoutWrapper>
        <Intro />
        <LeadTimes />
        <GuideLines />
        <RunOfNetwork />
        <Takeovers />
        <HTML5 />
        <Custom />
        <Programatic />
        <Instream />
        <Compliance />
      </LayoutWrapper>
    </Fragment>
  );
};

export default IndexPage;
