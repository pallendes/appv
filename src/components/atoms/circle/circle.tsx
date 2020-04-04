import React from 'react';
import {Svg, Circle as SvgCircle} from 'react-native-svg';

export const Circle = () => {
  return (
    <Svg>
      <SvgCircle
        cx="50"
        cy="50"
        r="35"
        stroke="blue"
        strokeWidth="2.5"
        strokeDasharray="156"
      />
    </Svg>
  );
};
