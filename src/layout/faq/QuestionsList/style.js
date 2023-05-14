import styled from 'styled-components/macro';

import {StyledAccordionSummary, StyledAccordionDetails} from '@ui/StyledAccordion';

export const Summary = styled(StyledAccordionSummary)`
  .MuiAccordionSummary-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 15px 0 !important;

    * {
      transition: all var(--transition);
    }

    .icon {
      will-change: transform;
      font-size: 18px;
    }

    &.Mui-expanded {
      margin: 15px 0 10px !important;

      .icon {
        transform: rotate(180deg);
      }

      .title, .icon {
        color: var(--accent);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .MuiAccordionSummary-content {
      margin: 25px 0 !important;

      &.Mui-expanded {
        margin: 25px 0 10px !important;
      }
    }
  }
`;

export const Details = styled(StyledAccordionDetails)`
  margin: 0 0 15px 0 !important;
  color: var(--text) !important;

  .text {
    margin-bottom: 10px;
  }

  .list {
    padding-left: 20px;

    .list-item .marker {
      margin-right: 8px;
    }
  }

  .video-container {
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 25px 0 !important;

    .text {
      margin-bottom: 15px;
    }

    .video-container {
      margin-top: 20px;
    }
  }
`;


