import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useDimensions from "react-use-dimensions";

export default function ElasticF({ transitionDuration, shouldAnimate }) {
  const [ref, { width }] = useDimensions();
  const connectorSizeInitial = parseFloat(((width || 0) - 200).toFixed(2));
  const connectorSize = connectorSizeInitial < 0 ? 0 : connectorSizeInitial;
  const padding = 48;
  const states = {
    path: {
      initial: {
        // eslint-disable-next-line id-length
        d: `M1131.34 81.448H${70.976 + padding}v200.129h40.34V81.447z`,
      },
      final: {
        // eslint-disable-next-line id-length
        d: `M1131.34 81.448H${
          70.976 + padding + connectorSize
        }v200.129h40.34V81.447z`,
      },
    },

    rect: {
      initial: { width: 0 },
      final: { width: connectorSize },
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="282"
      width="100%"
      ref={ref}
    >
      <path
        fill="white"
        d="M121.008 81.448H70.976V62.83c0-17.065 12.799-24.822 27.15-24.822 9.695 0 17.452 2.327 22.882 4.654V6.206C114.415 3.103 102.779 0 89.981 0 55.85 0 30.64 25.598 30.64 62.056v19.392H0v35.294h30.64v164.835h40.336V116.742h50.032"
      />

      {shouldAnimate && (
        <>
          <motion.path
            fill="white"
            transition={{ duration: transitionDuration }}
            initial={shouldAnimate ? states.path.initial : states.path.final}
            animate={states.path.final}
            layout
          />

          <motion.rect
            initial={states.rect.initial}
            animate={states.rect.final}
            transition={{ duration: transitionDuration }}
            height="35.292"
            x="120"
            y="81.45"
            fill="#fff"
            ry="0"
            layout
          />
        </>
      )}

      {!shouldAnimate && width > 0 && (
        <>
          <path fill="white" {...states.path.final} />

          <rect
            {...states.rect.final}
            height="35.292"
            x="120"
            y="81.45"
            fill="#fff"
            ry="0"
          />
        </>
      )}
    </svg>
  );
}

ElasticF.propTypes = {
  transitionDuration: PropTypes.number.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
};
