import React from 'react'
import { Line, Text, G } from 'react-native-svg'
import Speedometer, {
  Needle,
  Marks,
  Background,
  Indicator,
  Progress
} from 'react-native-cool-Speedometer'

const Thermostat = () => {
  const center = 250 / 2
  
  return (
    <Speedometer
      value={-10}
      min={-50}
      max={50}
      angle={320}
    >
      <Background
        color="#00DEFC"
        opacity={0.3}
      />
      <Progress/>
      <Marks step={5}>
        {(mark, i) => (
          <G key={i}>
            {mark.isEven && (
              <Text
                {...mark.textProps}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize={18}
                opacity={0.6}
              >
                {mark.value}°
              </Text>
            )}
            <Line
              {...mark.coordinates}
              stroke="black"
              strokeOpacity={0.4}
            />
          </G>
        )}
      </Marks>
      <Needle baseOffset={-30} circleRadius={0} color="#444" offset={50} />
      <Indicator>
        {(value, textProps) => (
          <Text
            {...textProps}
            fontSize={40}
            x={center}
            y={center + 10}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {value}°
          </Text>
        )}
      </Indicator>
    </Speedometer>
  )
}