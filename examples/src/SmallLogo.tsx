import React from "react";
import RoughReactLogo from "react-rough-logo";

const roughOptions = {
  stroke: "#41403e",
  strokeWidth: 2,
};

const SmallLogo = () => (
  <RoughReactLogo
    ellipsesOptions={roughOptions}
    circleOptions={roughOptions}
    style={{
      marginRight: "1px",
      width: "36px",
    }}
    viewBox="-60 -60 120 120"
    scale={0.16}
  />
);

export default SmallLogo;
