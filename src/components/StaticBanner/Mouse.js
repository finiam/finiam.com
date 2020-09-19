import React from "react";

export default function Mouse(props) {
  return (
    <svg width={21} height={36} viewBox="0 0 21 36" fill="none" {...props}>
      <rect
        x={0.313}
        y={0.313}
        width={20.374}
        height={35.074}
        rx={10.187}
        fill="url(#mouse__paint0_linear)"
        fillOpacity={0.3}
        stroke="#fff"
        strokeWidth={0.626}
      />
      <circle cx={10.5} cy={8.591} r={2.864} fill="#fff" />
      <defs>
        <linearGradient
          id="mouse__paint0_linear"
          x1={10.5}
          y1={0}
          x2={10.5}
          y2={35.7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
