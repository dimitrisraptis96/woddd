import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";
import { rgba } from "polished";

import theme from "../../../utils/theme";

const { primary, secondary, tertiary, white } = theme.colors;

const Card = styled.div`
  background-color: ${secondary};
  border-radius: 1rem;
  box-shadow: 0px 8px ${rgba(secondary, 0.5)}, 0px 16px ${rgba(secondary, 0.4)},
    0px 24px ${rgba(secondary, 0.3)};

  padding: 2rem;
  margin-bottom: ${25 + 16}px;
  text-align: left;
  min-width: 300px;
`;

const WodLoader = () => (
  <Card>
    <ContentLoader
      height={208}
      width={300}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="272" y="32" rx="100" ry="100" width="28" height="28" />
      <rect x="32" y="32" rx="8" ry="8" width="120" height="24" />
      <rect x="32" y="64" rx="8" ry="8" width="70" height="16" />
      <rect x="32" y="112" rx="8" ry="8" width="210" height="16" />
      <rect x="32" y="136" rx="8" ry="8" width="140" height="16" />
      <rect x="32" y="160" rx="8" ry="8" width="180" height="16" />
    </ContentLoader>
  </Card>
);

export default WodLoader;
