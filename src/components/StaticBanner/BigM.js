import React from "react";
import styled from "styled-components";

import mediaQueries from "root/styleutils/mediaQueries";

const MAX_HEIGHT = 817;

const Svg = styled.svg`
  height: ${MAX_HEIGHT}px;
  margin-bottom: 30px;

  ${mediaQueries.tablet} {
    margin-bottom: -7px;
  }

  ${mediaQueries.mobile} {
    height: 340px;

    margin-bottom: 26px;
  }
`;

export default function BigM(props) {
  return (
    <Svg viewBox={`0 0 1434 ${MAX_HEIGHT}`} fill="none" {...props}>
      <path
        d="M1191.46 0c-25.06 39.767-281.577 466.899-311.062 516.977 0-1.473 0-516.977-1.474-516.977H710.86c-1.474 0-284.529 472.791-311.065 518.45l-1.474-47.132L399.795 0H245v760h154.795c39.804-67.752 325.807-543.488 327.282-543.488V760h153.321c33.907-55.969 325.812-542.015 327.282-542.015V760H1361V0h-169.54z"
        fill="url(#bigm_prefix__paint0_linear)"
      />
      <g opacity={0.15} filter="url(#bigm_prefix__filter0_f)">
        <path fill="#000" d="M49 760h1336v8H49z" />
      </g>
      <defs>
        <linearGradient
          id="bigm_prefix__paint0_linear"
          x1={803}
          y1={0}
          x2={803}
          y2={760}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4100C3" stopOpacity={0.13} />
          <stop offset={1} stopColor="#4100C3" />
        </linearGradient>
        <filter
          id="bigm_prefix__filter0_f"
          x={0.97}
          y={711.97}
          width={1432.06}
          height={104.06}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={24.015}
            result="effect1_foregroundBlur"
          />
        </filter>
      </defs>
    </Svg>
  );
}
