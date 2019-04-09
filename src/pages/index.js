import React from 'react';
import LayoutWrapper from '../components/LayoutWrapper';

const IndexPage = () => {
  return (
    <LayoutWrapper>
      <h1>Gamer Network Ad Specs</h1>
      <p>
        Our advertising policy matches our industry reputation, the following
        spec is to guide you through our process, ensure quality and timely
        delivery.
      </p>
      <p>
        We adhere to a lightweight, non-disruptive consumer advertising
        experience to maximise page load performance. A document has been
        written on the IAB’s LEAN guidelines which supports our aims in
        delivering modern advertising standards.
      </p>
      <p>
        Gamer Network reserves the right to reject advertising and non-compliant
        functionality that doesn’t adhere to our policy, user expectation or
        applicable law.
      </p>
      <h2>Takeovers</h2>
      <p>
        Site Takeovers are a high impact desktop format that pairs the top
        leaderboard & halfpage units together with a re-skin of the site
        background. Due to site layout the format for this creative varies by
        domain, so it is incredibly important that the right template is used
        for your campaign. If you are unsure about what template is required
        please contact your sales representative or ad ops team member for
        clarification.{' '}
      </p>
      <p>
        Takeover ads can contain autoplaying video if compliant with our video
        specs (link to PDF). Video should be part of the subload and the total
        file size cannot exceed 1.5MB. Only one creative in the takeover can
        have auto-playing video to avoid negatively affecting a user’s CPU and
        experience on the site. Any video should only autoplay if more that 50%
        is in view.
      </p>
    </LayoutWrapper>
  );
};

export default IndexPage;
