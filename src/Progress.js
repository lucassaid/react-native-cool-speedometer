import React, { useContext } from 'react'
import { Path } from 'react-native-svg'
import Context from './context'
import { getCirclePath } from './utils'

export default function Progress ({
  color,
  arcWidth = 5,
  lineCap,
}) {

  const {
    accentColor,
    radius,
    lineCap: globalLineCap,
    currentFillAngle,
  } = useContext(Context)

  const progressPath = getCirclePath(
    radius,
    radius,
    radius - arcWidth / 2,
    0,
    currentFillAngle
  )

  return (
    <Path
      d={progressPath}
      stroke={color || accentColor}
      strokeWidth={arcWidth}
      strokeLinecap={lineCap || globalLineCap}
      fill="transparent"
    />
  )
}