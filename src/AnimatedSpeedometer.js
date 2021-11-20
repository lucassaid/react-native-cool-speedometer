import React from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'
import Speedometer from './Speedometer'

class ClassBasedSpeedometer extends React.Component {
  render() {
    return(
      <Speedometer {...this.props}/>
    )
  }
}

const ASpeedometer = Animated.createAnimatedComponent(ClassBasedSpeedometer)

export default class AnimatedSpeedometer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fillAnimation: new Animated.Value(props.prefill),
    }

    this.state.fillAnimation.addListener(({ value }) => {
      props.onFillChange(value)
    })
  }

  componentDidMount() {
    this.animate()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.animate()
    }
  }

  reAnimate(prefill, toVal, dur, ease) {
    this.setState(
      {
        fillAnimation: new Animated.Value(prefill),
      },
      () => this.animate(toVal, dur, ease)
    )
  }

  animate(toVal, dur, ease) {
    const toValue = toVal >= 0 ? toVal : this.props.value
    const duration = dur || this.props.duration
    const easing = ease || this.props.easing
    const useNativeDriver = this.props.useNativeDriver

    const anim = Animated.timing(this.state.fillAnimation, {
      useNativeDriver,
      toValue,
      easing,
      duration,
    })
    anim.start(this.props.onAnimationComplete)

    return anim
  }

  render() {
    const { value, prefill, ...other } = this.props

    return (
      <ASpeedometer
        {...other}
        value={this.state.fillAnimation}
      />
    )
  }
}

AnimatedSpeedometer.propTypes = {
  ...Speedometer.propTypes,
  prefill: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.func,
  onFillChange: PropTypes.func,
  onAnimationComplete: PropTypes.func,
  useNativeDriver: PropTypes.bool,
}

AnimatedSpeedometer.defaultProps = {
  duration: 300,
  easing: Easing.out(Easing.ease),
  prefill: 0,
  useNativeDriver: false,
  onFillChange: () => {}
}