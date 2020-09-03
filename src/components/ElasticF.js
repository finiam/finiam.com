import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useDimensions from "react-use-dimensions";

function ElasticF({ transitionDuration: defaultTransitionDuration }) {
  const [ref, { width }] = useDimensions();
  const [transitionDuration, setTransitionDuration] = useState(
    defaultTransitionDuration,
  );
  const connectorSize = parseFloat(((width || 0) - 200).toFixed(2));
  const padding = 48;

  useEffect(() => {
    setTimeout(() => setTransitionDuration(0), transitionDuration);
  }, []);

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
      <motion.path
        fill="white"
        transition={{ duration: transitionDuration }}
        initial={{
          // eslint-disable-next-line id-length
          d: `M1131.34 81.448H${70.976 + padding}v200.129h40.34V81.447z`,
        }}
        animate={{
          // eslint-disable-next-line id-length
          d: `M1131.34 81.448H${
            70.976 + padding + connectorSize
          }v200.129h40.34V81.447z`,
        }}
        layout
      />

      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: connectorSize }}
        transition={{ duration: transitionDuration }}
        height="35.292"
        x="120"
        y="81.45"
        fill="#fff"
        ry="0"
        layout
      />
    </svg>
  );
}

ElasticF.propTypes = {
  transitionDuration: PropTypes.number.isRequired,
};

export default ElasticF;
