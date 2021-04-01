import React from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import { polarToCartesian } from './utils'
import Marks from './Marks'
import Indicator from './Indicator'
import Needle from './Needle'

const getCirclePath = (x, y, radius, startAngle, endAngle) => {
  var start = polarToCartesian(x, y, radius, endAngle * 0.9999);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y];
  return d.join(' ');
}

const clampValue = (value, max) => Math.min(max, Math.max(0, value));

export default function Speedometer({
  size = 250,
  primaryArcWidth = 5,
  secondaryArcWidth = primaryArcWidth - 1,
  accentColor = '#00e0ff',
  primaryArcColor = accentColor,
  secondaryArcColor = 'black',
  secondaryArcOpacity = 0.3,
  style,
  rotation,
  lineCap = 'butt',
  angle = 250,
  value = 0,
  max = 180,
  noIndicator,
  backgroundColor = '#000000',
  backgroundOpacity = 0.5,
  step = 10,
  indicatorStyle = {},
  noNeedle,
  indicatorCentered,
  noLineMarks,
  dangerZone,
  dangerZoneAngle = 60,
  noProgress,
  needle = {},
  marks = {},
  noNumberMarks,
  noBackground,
  backgroundAngle = 360,
  fontFamily = 'helvetica',
  indicatorSuffix,
  indicatorSuffixStyle = {},
  calcSizeByAngle = false,
  calcSizeByAngleIndicatorHeight = 0
}) {

  const radius = size / 2;
  const currentFillAngle = (angle * clampValue(value, max)) / max;
  const finalRotation = !rotation ? -angle / 2 : rotation
  
  const Background = () => {
    const backgroundStart = finalRotation + backgroundAngle / 2
    const backgroundPath = getCirclePath(
      radius,
      radius,
      radius,
      -backgroundStart,
      -backgroundStart + backgroundAngle
    )
    return(
      <Path
        d={backgroundPath}
        fill={backgroundColor}
        fillOpacity={backgroundOpacity}
      />
    )
  }

  const PrimaryPath = () => {
    const progressPath = getCirclePath(
      radius,
      radius,
      radius - primaryArcWidth / 2,
      0,
      currentFillAngle
    )
    return(
      <Path
        d={progressPath}
        stroke={primaryArcColor}
        strokeWidth={primaryArcWidth}
        strokeLinecap={lineCap}
        fill="transparent"
      />
    )
  }

  const SecondaryPath = () => {
    const secondaryPath = getCirclePath(
      radius,
      radius,
      radius - secondaryArcWidth / 2,
      0,
      angle
    )
    return (
      <Path
        d={secondaryPath}
        stroke={secondaryArcColor}
        strokeOpacity={secondaryArcOpacity}
        strokeWidth={secondaryArcWidth}
        strokeLinecap={lineCap}
        fill='transparent'
      />
    )
  }

  const DangerPath = () => {
    const dangerCirclePath = getCirclePath(
      radius,
      radius,
      radius - secondaryArcWidth - 6,
      angle - dangerZoneAngle,
      angle
    )
    
    return (
      <Path
        d={dangerCirclePath}
        stroke="#FF3333"
        strokeWidth={secondaryArcWidth}
        strokeLinecap={lineCap}
        fill="transparent"
      />
    )
  }

  const getViewHeight = () => calcSizeByAngle ? (size*(backgroundAngle/360)) + calcSizeByAngleIndicatorHeight : size;

  const getSvgHeight = () =>  calcSizeByAngle ? (size*(backgroundAngle/360)) + 20 : size;
  
  return (
    <View style={{width: size, height: getViewHeight(), marginRight: 25, ...style}}>
      <Svg width={size} height={getSvgHeight()}>
        <G
          rotation={finalRotation}
          originX={radius}
          originY={radius}
        >
          {!noBackground && <Background/>}

          <SecondaryPath/>

          {value > 0 && !noProgress && (
            <PrimaryPath/>
          )}

          {dangerZone && <DangerPath/>}
          
          <Marks
            noLineMarks={noLineMarks}
            rotation={finalRotation}
            max={max}
            step={step}
            options={marks}
            angle={angle}
            radius={radius}
            noNumberMarks={noNumberMarks}
            fontFamily={fontFamily}
          />

          {!noNeedle && (
            <G transform={`rotate(${currentFillAngle}, ${radius}, ${radius})`}>
              <Needle accentColor={accentColor} center={radius} options={needle}/>
            </G>
          )}
        </G>
      </Svg>
      {!noIndicator && (
        <Indicator
          centered={indicatorCentered}
          fontFamily={fontFamily}
          style={indicatorStyle}
          value={value}
          suffix={indicatorSuffix}
          suffixStyle={indicatorSuffixStyle}
        />
      )}
    </View>
  );
}

Speedometer.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(Animated.Value),
  ]),
  value: PropTypes.number,
  primaryArcWidth: PropTypes.number,
  primaryArcColor: PropTypes.string,
  secondaryArcWidth: PropTypes.number,
  accentColor: PropTypes.string,
  secondaryArcColor: PropTypes.string,
  secondaryArcOpacity: PropTypes.number,
  rotation: PropTypes.number,
  lineCap: PropTypes.string,
  angle: PropTypes.number,
  children: PropTypes.func,
  childrenContainerStyle: PropTypes.object,
  renderCap: PropTypes.func,
  max: PropTypes.number,
  noIndicator: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.number,
  step: PropTypes.number,
  marksFontFamily: PropTypes.string,
  indicatorStyle: PropTypes.object,
  noNeedle: PropTypes.bool,
  indicatorCentered: PropTypes.bool,
  noLineMarks: PropTypes.bool,
  dangerZone: PropTypes.bool,
  dangerZoneAngle: PropTypes.number,
  noProgress: PropTypes.bool,
  needle: PropTypes.object,
  marks: PropTypes.object,
  noNumberMarks: PropTypes.bool,
  noBackground: PropTypes.bool,
  indicatorSuffix: PropTypes.string,
  indicatorSuffixStyle: PropTypes.object,
  fontFamily: PropTypes.string,
  backgroundAngle: PropTypes.number,
  calcSizeByAngle: PropTypes.bool,
  calcSizeByAngleIndicatorHeight: PropTypes.number
};