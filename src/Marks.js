import React, { useState, useEffect } from 'react';
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

  const [optionsState, setOptionsState] = useState(
    {
      lineCap: 'butt',
      lineColor: 'white',
      lineOpacity: 1,
      numbersRadius: 17,
      numbersFontSize: 19,
      roundNumbers: true,
      ...options
    }
  );

  const [marks, setMarks] = useState([]);

  useEffect(() => { 
    const marksLen = Math.round(max/step)+1;
    const gap = angle / (marksLen-1);

    setMarks(
      [...Array(marksLen)].map((val, idx, arr) => {
        const actualAngle = gap * idx;
        const highlight = idx%2 == 0
        const size = highlight ? 15 : 10;

        return {
          highlight: highlight,
          c: {...getMarkPosition(actualAngle, 0)},
          size: size,
          c2: {...getMarkPosition(actualAngle, -size)},
          cText: {...getMarkPosition(actualAngle, - 10 - optionsState.numbersRadius)}
        }
      })
    );
  }, [max, step, radius]);

  const getMarkPosition = (angle, offset) => {
    return polarToCartesian(
      radius,
      radius,
      radius + offset,
      angle
    )
  }

  const getFormatedStepNumber = (val) => optionsState.roundNumbers ? Math.round(val) : val;

  return(
    <>
      {marks.map((mark, i) => {
        return(
          <G key={i}>
            {!noLineMarks && (
              <Line
                x1={mark.c.x}
                y1={mark.c.y}
                x2={mark.c2.x}
                y2={mark.c2.y}
                stroke={optionsState.lineColor}
                strokeWidth={mark.highlight ? 4 : 2}
                strokeOpacity={optionsState.lineOpacity}
                strokeLinecap={optionsState.lineCap}
              />
            )}
            {mark.highlight && !noNumberMarks && (
              <Text
                x={mark.cText.x}
                y={mark.cText.y}
                fill="white"
                transform={`rotate(${360 - rotation}, ${mark.cText.x}, ${mark.cText.y})`}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily={fontFamily}
                opacity="0.8"
                fontSize={optionsState.numbersFontSize}
              >
                {getFormatedStepNumber(i * step)}
              </Text>
            )}
          </G>
        )
      })}
    </>
  )
}