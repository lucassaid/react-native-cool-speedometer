import React from 'react';
import { G, Polygon, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

export default function Needle ({center, options, accentColor}) {
  const {
    baseWidth = 6,
    baseOffset = 18,
    color = 'white',
    circleRadius = 15,
    circleColor = accentColor,
  } = options

  const bottom = center + baseOffset
  const points = `
    ${center - baseWidth / 2}, ${bottom} ${center + baseWidth / 2}, ${bottom} ${center}, 25
  `
  return (
    <G>
      <Circle
        r={circleRadius}
        cx={center}
        cy={center}
        fill={circleColor}
      />
      <Polygon
        points={points}
        fill={color}
        strokeWidth="2"
        stroke={color}
        style={{strokeLinejoin: 'round'}}
      />
    </G>
  )
}

Needle.PropTypes = {
  center: PropTypes.number,
}