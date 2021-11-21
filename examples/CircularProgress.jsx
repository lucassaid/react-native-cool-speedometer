import React from 'react'
import { Text } from 'react-native-svg'
import Speedometer, {
  Indicator,
  Progress,
  Arc
} from 'react-native-cool-Speedometer'

const Circular = () => {
  const center = 250 / 2
  return (
    <Speedometer
      value={40}
      max={100}
      angle={360}
      lineCap="round"
      accentColor="orange"
    >
      <Arc arcWidth={40} />
      <Progress arcWidth={40} />
      <Indicator>
        {(value, textProps) => (
          <Text
            {...textProps}
            fontSize={60}
            fill="orange"
            x={center}
            y={center + 10}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {value}%
          </Text>
        )}
      </Indicator>
    </Speedometer>
  )
}