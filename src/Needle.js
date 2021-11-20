import React, { useContext } from 'react'
import { G, Polygon, Circle } from 'react-native-svg'
import Context from './context'

export default function Needle ({
  baseWidth = 6,
  baseOffset = 18,
  color = 'white',
  circleRadius = 15,
  circleColor,
  children,
}) {
  const { currentFillAngle, radius, accentColor } = useContext(Context)
  const bottom = radius + baseOffset
  const points = `
    ${radius - baseWidth / 2}, ${bottom} ${radius + baseWidth / 2}, ${bottom} ${radius}, 25
  `
  const defaultNeedle = (
    <G>
      <Circle
        r={circleRadius}
        cx={radius}
        cy={radius}
        fill={circleColor || accentColor}
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

  return (
    <G transform={`rotate(${currentFillAngle}, ${radius}, ${radius})`}>
      {children ? children() : defaultNeedle}
    </G>
  )
}