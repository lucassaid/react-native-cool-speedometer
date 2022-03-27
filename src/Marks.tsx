import React, { useContext, useMemo } from 'react'
import { polarToCartesian } from './utils'
import { G, Line, SvgProps, Text } from 'react-native-svg'
import Context from './context'

const getMarkPosition = (angle: number, offset: number, radius: number) => {
  return polarToCartesian(
    radius,
    radius,
    radius + offset,
    angle
  )
}

interface Mark {
  coordinates: { x1: number, y1: number, x2: number, y2: number }
  isEven: boolean
  textProps: { x: number, y: number, transform: string }
  value: number
}

interface MarksProps {
  step?: number
  lineCap?: SvgProps['strokeLinecap']
  lineColor?: string
  lineOpacity?: number
  numbersRadius?: number
  fontSize?: number
  lineSize?: number
  children?: (mark: Mark, index: number) => JSX.Element
}

export default function Marks({
  step = 10,
  lineCap = 'butt',
  lineColor = 'white',
  lineOpacity = 1,
  numbersRadius = 17,
  fontSize = 18,
  lineSize = 12,
  children,
}: MarksProps) {

  const {
    rotation,
    min,
    max,
    angle,
    radius,
    fontFamily
  } = useContext(Context)

  const marks: Mark[] = useMemo(() => { 
    const stepsLength = Math.round((max - min) / step)
    const gap = angle / stepsLength

    return [...Array(stepsLength + 1)].map((val, index) => {
      const actualAngle = gap * index
      const isEven = index  % 2 == 0
      const size = isEven ? lineSize : lineSize - 5

      const {x: x1, y: y1 } = getMarkPosition(actualAngle, 0, radius)
      const {x: x2, y: y2 } = getMarkPosition(actualAngle, - size, radius)
      const { x, y } = getMarkPosition(actualAngle, - lineSize - numbersRadius, radius)
      
      return {
        coordinates: { x1, y1, x2, y2 },
        isEven,
        textProps: { x, y, transform: `rotate(${360 - rotation}, ${x}, ${y})` },
        value: Math.round((index * step) + min)
      }
    })
  }, [max, min, step, radius, rotation, angle, lineSize])

  if (children) return (
    <>
      {marks.map(children)}
    </>
  )

  return (
    <>
      {marks.map((mark, i) => (
        <G key={i}>
          <Line
            {...mark.coordinates}
            stroke={lineColor}
            strokeWidth={mark.isEven ? 3 : 2}
            strokeOpacity={lineOpacity}
            strokeLinecap={lineCap}
          />
          {mark.isEven && (
            <Text
              {...mark.textProps}
              fill="white"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontFamily={fontFamily}
              opacity={0.8}
              fontSize={fontSize}
              children={mark.value}
            />
          )}
        </G>
      ))}
    </>
  )
}