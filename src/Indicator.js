import React, { useContext } from 'react'
import { Text } from 'react-native-svg'
import Context from './context'

export default function Indicator({
  suffix,
  fontSize = 45,
  color = 'white',
  fontFamily,
  ...textProps
}) {

  const {
    value,
    radius,
    rotation,
    fontFamily: globalFontFamily,
  } = useContext(Context)

  return (
    <Text
      transform={`rotate(${360 - rotation}, ${radius}, ${radius})`}
      x={radius}
      y={radius + radius / 2 + 10}
      textAnchor="middle"
      fontSize={fontSize}
      fontFamily={fontFamily || globalFontFamily}
      fill={color}
      {...textProps}
    >
      {Number(value).toFixed()}
      {suffix && (
        <Text >
          {suffix}
        </Text>
      )}
    </Text>
  )
}