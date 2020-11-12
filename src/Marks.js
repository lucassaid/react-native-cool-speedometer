import React from 'react';
import { polarToCartesian } from './utils'
import { G, Line, Text } from 'react-native-svg';

export default function Marks({
  noLineMarks,
  rotation,
  max,
  step,
  options,
  angle,
  radius,
  noNumberMarks,
  fontFamily
}) {

  const getMarkPosition = (angle, offset) => {
    return polarToCartesian(
      radius,
      radius,
      radius + offset,
      angle
    )
  }

  const stepsLength = Math.round(max / step)
  const marksArr = Array.from(Array(stepsLength + 1))

  const {
    lineCap = 'butt',
    lineColor = 'white',
    lineOpacity = 1,
    numbersRadius = 17,
    numbersFontSize = 19
  } = options

  return(
    <>
      {marksArr.map((mark, i) => {
        const gap = angle / (marksArr.length - 1)
        const actualAngle = gap * i
        const highlight = i%2 == 0
        const {x: cx, y: cy} = getMarkPosition(actualAngle, 0)

        const lineSize = 15 
        const size = highlight ? lineSize : lineSize - 5
        const {x: cx2, y: cy2} = getMarkPosition(actualAngle, - size)
        const {x: cxText, y: cyText} = getMarkPosition(actualAngle, - lineSize - numbersRadius)

        return(
          <G key={i}>
            {!noLineMarks && (
              <Line
                x1={cx}
                y1={cy}
                x2={cx2}
                y2={cy2}
                stroke={lineColor}
                strokeWidth={highlight ? 4 : 2}
                strokeOpacity={lineOpacity}
                strokeLinecap={lineCap}
              />
            )}
            {highlight && !noNumberMarks && (
              <Text
                x={cxText}
                y={cyText}
                fill="white"
                transform={`rotate(${360 - rotation}, ${cxText}, ${cyText})`}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily={fontFamily}
                opacity="0.8"
                fontSize={numbersFontSize}
              >
                {i * step}
              </Text>
            )}
          </G>
        )
      })}
    </>
  )
}