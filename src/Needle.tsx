import React, { useContext } from 'react'
import { G, Polygon, Circle } from 'react-native-svg'
import Context from './context'

interface NeedleProps {
  offset?: number
  baseWidth?: number
  baseOffset?: number
  color?: string
  circleRadius?: number
  circleColor?: string
  strokeLinejoin?: 'bevel' | 'miter' | 'round'
  children?: () => JSX.Element
}

export default function Needle ({
  offset = 25,
  baseWidth = 6,
  baseOffset = 18,
  color = 'white',
  circleRadius = 15,
  circleColor,
  strokeLinejoin='round',
  children,
}: NeedleProps) {
  const { currentFillAngle, radius, accentColor } = useContext(Context)
  const bottom = radius + baseOffset
  const points = `
    ${radius - baseWidth / 2}, ${bottom} ${radius + baseWidth / 2}, ${bottom} ${radius}, ${offset}
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
        strokeLinejoin={strokeLinejoin}
      />
    </G>
  )

  return (
    <G transform={`rotate(${currentFillAngle}, ${radius}, ${radius})`}>
      {children ? children() : defaultNeedle}
    </G>
  )
}