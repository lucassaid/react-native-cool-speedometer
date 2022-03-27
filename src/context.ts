import { createContext } from 'react'
import { SvgProps } from 'react-native-svg'

interface ContextProps {
  currentFillAngle: number
  radius: number
  rotation: number
  min: number
  max: number
  angle: number
  lineCap: SvgProps['strokeLinecap']
  accentColor: string
  fontFamily: string
  value: number
}

export default createContext<ContextProps>({
  currentFillAngle: 0,
  radius: 0,
  rotation: 0,
  min: 0,
  max: 0,
  angle: 0,
  lineCap: 'butt',
  accentColor: '#00e0ff',
  fontFamily: 'helvetica',
  value: 0,
})