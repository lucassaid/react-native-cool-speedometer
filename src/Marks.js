import React, { useContext } from 'react'
import { polarToCartesian } from './utils'
import { G, Line, Text } from 'react-native-svg'
import Context from './context'

export default function Marks({
  step = 10,
  lineCap = 'butt',
  lineColor = 'white',
  lineOpacity = 1,
  numbersRadius = 17,
  fontSize = 18,
  lineSize = 12,
  renderLine,
  renderNumber,
}) {

  const {
    rotation,
    min,
    max,
    angle,
    radius,
    fontFamily
  } = useContext(Context)

  const getMarkPosition = (angle, offset) => {
    return polarToCartesian(
      radius,
      radius,
      radius + offset,
      angle
    )
  }

  const stepsLength = Math.round((max - min) / step)
  const marksArr = Array.from(Array(stepsLength + 1))

  return(
    <>
      {marksArr.map((mark, i) => {
        const gap = angle / (marksArr.length - 1)
        const actualAngle = gap * i
        const highlight = i%2 == 0
        const {x: x1, y: y1} = getMarkPosition(actualAngle, 0)
        const size = highlight ? lineSize : lineSize - 5
        const {x: x2, y: y2} = getMarkPosition(actualAngle, - size)
        const {x: cxText, y: cyText} = getMarkPosition(actualAngle, - lineSize - numbersRadius)

        const markProps = { x1, y1, x2, y2 }

        const defaultMark = (
          <Line
            {...markProps}
            stroke={lineColor}
            strokeWidth={highlight ? 3 : 2}
            strokeOpacity={lineOpacity}
            strokeLinecap={lineCap}
          />
        )

        const textProps = {
          x: cxText,
          y: cyText,
          transform: `rotate(${360 - rotation}, ${cxText}, ${cyText})`,
        }

        const number = Math.round((i * step) + min)

        const defaultNumber = (
          <Text
            {...textProps}
            fill="white"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontFamily={fontFamily}
            opacity={0.8}
            fontSize={fontSize}
            children={number}
          />
        )

        return(
          <G key={i}>
            {renderLine ? renderLine(markProps) : defaultMark}
            {highlight && (
              renderNumber ? renderNumber(number, textProps) : defaultNumber
            )}
          </G>
        )
      })}
    </>
  )
}