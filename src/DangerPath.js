import React, { useContext } from 'react'
import { Path } from 'react-native-svg'
import Context from './context'
import { getCirclePath } from './utils'

export default function DangerPath ({
  color = '#FF3333',
  angle = 50,
  arcWidth = 4,
  lineCap,
  offset = 6
}) {

  const {
    radius,
    angle: globalAngle,
    lineCap: globalLineCap,
  } = useContext(Context)

  const circlePath = getCirclePath(
    radius,
    radius,
    radius - arcWidth - offset,
    globalAngle - angle,
    globalAngle,
  )

  return (
    <Path
      d={circlePath}
      stroke={color}
      strokeWidth={arcWidth}
      strokeLinecap={lineCap || globalLineCap}
      fill="transparent"
    />
  )
}