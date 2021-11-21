import React, { useContext } from 'react'
import { Text } from 'react-native-svg'
import Context from './context'

export default function Indicator({
  fontSize = 45,
  color = 'white',
  fontFamily,
  children,
}) {

  const {
    value,
    radius,
    rotation,
    fontFamily: globalFontFamily,
  } = useContext(Context)

  const textProps = {
    transform: `rotate(${360 - rotation}, ${radius}, ${radius})`,
  }
  const fixedValue = Number(value).toFixed() 

  if (children) return children(fixedValue, textProps)

  return (
    <Text
      {...textProps}
      x={radius}
      y={radius + radius / 2 + 10}
      textAnchor="middle"
      fontSize={fontSize}
      fontFamily={fontFamily || globalFontFamily}
      fill={color}
    >
      {fixedValue}
    </Text>
  )
}