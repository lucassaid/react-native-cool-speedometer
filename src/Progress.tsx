import React, { useContext, useMemo } from 'react'
import { Path, PathProps } from 'react-native-svg'
import Context from './context'
import { getCirclePath } from './utils'

interface ProgressProps extends PathProps {
  color?: string
  arcWidth?: number
  lineCap?: PathProps['strokeLinecap']
}

export default function Progress ({
  color,
  arcWidth = 5,
  lineCap,
  ...rest
}: ProgressProps) {

  const {
    accentColor,
    radius,
    lineCap: globalLineCap,
    currentFillAngle,
  } = useContext(Context)

  const progressPath = useMemo(() => getCirclePath(
    radius,
    radius,
    radius - arcWidth / 2,
    0,
    currentFillAngle
  ), [radius, arcWidth, currentFillAngle])

  return (
    <Path
      d={progressPath}
      stroke={color || accentColor}
      strokeWidth={arcWidth}
      strokeLinecap={lineCap || globalLineCap}
      fill="transparent"
      {...rest}
    />
  )
}