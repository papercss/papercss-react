import React from "react";
import styled from "react-emotion";
import RoughReactLogo from "react-rough-logo";

const roughOptions = {
  stroke: "#41403e",
  strokeWidth: 2,
};

const SmallReactLogo = styled(({ className }: { className?: string }) => (
  <RoughReactLogo
    className={className}
    circleOptions={roughOptions}
    ellipsesOptions={roughOptions}
    style={{
      marginRight: "1px",
      width: "36px",
    }}
    scale={0.16}
    viewBox="-60 -60 120 120"
  />
))`
  @media (max-width: 940px) {
    display: none;
  }
`;

export default SmallReactLogo;
