import styled from 'styled-components';
import StyledSection from '../StyledSection';
import thumbsUp from '../../../assets/thumbs_up.png';
import thumbsDown from '../../../assets/thumbs_down.png';

const StyledGuidelinesSection = styled(StyledSection)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h3:first-of-type {
    margin-top: 0;
  }

  .good,
  .bad {
    width: 50%;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .good {
    border-right: 2px #eee dashed;
    padding-right: 3.5rem;

    @media only screen and (max-width: 800px) {
      padding: 0;
      border-right: none;
    }

    .good-heading {
      position: relative;
      padding-left: 1.75em;

      &:after {
        position: absolute;
        top: -3px;
        left: 0;
        width: 1em;
        height: 1em;
        content: '';
        background-image: url(${thumbsUp});
        background-size: cover;
        background-position: center center;
      }
    }
  }

  .bad {
    padding-left: 3.5rem;

    .bad-heading {
      position: relative;
      padding-left: 1.75em;

      &:after {
        position: absolute;
        top: 3px;
        left: 0;
        width: 1em;
        height: 1em;
        content: '';
        background-image: url(${thumbsDown});
        background-size: cover;
        background-position: center center;
      }
    }

    @media only screen and (max-width: 800px) {
      padding: 0;
      margin-top: 2rem;
    }
  }
`;

export default StyledGuidelinesSection;
