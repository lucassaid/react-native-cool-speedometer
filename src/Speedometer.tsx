import React, { ReactNode, useMemo } from 'react'
import { Svg, G, SvgProps } from 'react-native-svg'
import SpeedometerContext from './context'

export interface SpeedometerProps {
  width?: number
  height?: number
  angle?: number
  rotation?: number
  value?: number
  min?: number
  max?: number
  lineCap?: SvgProps['strokeLinecap']
  accentColor?: string
  fontFamily?: string
  children: JSX.Element | ReactNode,
}

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
}: SpeedometerProps) {

  const radius = width / 2
  const currentFillAngle = useMemo(() => {
    const clampValue = Math.min(max, Math.max(min, Number(value)))
    return (angle * (clampValue - min)) / (max -min)
  }, [min, max, value, angle])

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