import React, { useContext, useMemo } from 'react'
import { Path, PathProps } from 'react-native-svg'
import Context from './context'
import { getCirclePath } from './utils'

interface BackgroundProps extends PathProps {
  angle?: number
  color?: string
  opacity?: number
}

export default function Background({
  angle = 360,
  color = 'black',
  opacity = 0.5,
  ...rest
}: BackgroundProps) {

  const { rotation, radius } = useContext(Context)
  const backgroundStart = rotation + angle / 2

  const backgroundPath = useMemo(() => getCirclePath(
    radius,
    radius,
    radius,
    -backgroundStart,
    -backgroundStart + angle
  ), [radius, backgroundStart, angle])

  return(
    <Path
      d={backgroundPath}
      fill={color}
      fillOpacity={opacity}
      {...rest}
    />
  )
}