import React, { useContext } from 'react'
import { Path } from 'react-native-svg'
import Context from './context'
import { getCirclePath } from './utils'

export default function Background({
  angle = 360,
  color = 'black',
  opacity = 0.5,
  ...props
}) {
  const { rotation, radius } = useContext(Context)
  const backgroundStart = rotation + angle / 2
  const backgroundPath = getCirclePath(
    radius,
    radius,
    radius,
    -backgroundStart,
    -backgroundStart + angle
  )
  return(
    <Path
      d={backgroundPath}
      fill={color}
      fillOpacity={opacity}
      {...props}
    />
  )
}