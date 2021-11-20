import React from 'react'
import { Svg, G } from 'react-native-svg'
import SpeedometerContext from './context'

export default function Speedometer({
  width = 250,
  height = width,
  angle = 250,
  rotation = -angle / 2,
  value = 0,
  min = 0,
  max = 180,
  lineCap = 'butt',
  accentColor = '#00e0ff',
  fontFamily = 'helvetica',
  children,
}) {

  const clampValue = Math.min(max, Math.max(min, Number(value)))
  const radius = width / 2
  const currentFillAngle = (angle * (clampValue - min)) / (max -min)

  const contextValue = {
    currentFillAngle,
    radius,
    rotation,
    min,
    max,
    angle,
    lineCap,
    accentColor,
    fontFamily,
    value,
  }
  
  return (
    <SpeedometerContext.Provider value={contextValue}>
      <Svg width={width} height={height}>
        <G
          rotation={rotation}
          originX={radius}
          originY={radius}
        >
          {children}
        </G>
      </Svg>
    </SpeedometerContext.Provider>
  )
}