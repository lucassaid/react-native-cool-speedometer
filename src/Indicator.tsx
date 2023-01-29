import React, { useContext } from 'react'
import { Text, TextProps } from 'react-native-svg'
import Context from './context'

interface IndicatorProps extends TextProps {
  fontSize?: number
  color?: string
  fontFamily?: string
  textAnchor?: TextProps['textAnchor']
  fixValue: boolean
  children?: (
    fixedValue: string,
    textProps: { transform: string }
  ) => JSX.Element
}

export default function Indicator({
  fontSize = 45,
  color = 'white',
  fontFamily,
  textAnchor = 'middle',
  fixValue = true,
  children,
  ...rest
}: IndicatorProps) {

  const {
    value,
    radius,
    rotation,
    fontFamily: globalFontFamily,
  } = useContext(Context)

  const textProps = {
    transform: `rotate(${360 - rotation}, ${radius}, ${radius})`,
  }
  
  const fixedValue = fixValue ? Number(value).toFixed() : value.toString();

  if (children) return children(fixedValue, textProps)
  

  return (
    <Text
      {...textProps}
      x={radius}
      y={radius + radius / 2 + 10}
      textAnchor={textAnchor}
      fontSize={fontSize}
      fontFamily={fontFamily || globalFontFamily}
      fill={color}
      {...rest}
    >
      {fixedValue}
    </Text>
  )
}