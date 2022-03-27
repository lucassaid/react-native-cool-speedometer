

import React, { useContext, useMemo } from 'react'
import { Path, PathProps, SvgProps } from 'react-native-svg'
import Context from './context'
import { getCirclePath } from './utils'

interface ArcProps extends PathProps {
  color?: string
  opacity?: number
  arcWidth?: number
  lineCap?: SvgProps['strokeLinecap']
}

export default function Arc ({
  color = 'black',
  opacity = 0.3,
  arcWidth = 4,
  lineCap,
  ...rest
}: ArcProps) {

  const {
    radius,
    lineCap: globalLineCap,
    angle,
  } = useContext(Context)

  const secondaryPath = useMemo(() => getCirclePath(
    radius,
    radius,
    radius - arcWidth / 2,
    0,
    angle
  ), [radius, arcWidth, angle])

  return (
    <Path
      d={secondaryPath}
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth={arcWidth}
      strokeLinecap={lineCap || globalLineCap}
      fill='transparent'
      {...rest}
    />
  )
}