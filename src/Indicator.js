import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Indicator({
  value,
  style,
  centered,
  fontFamily,
  suffix,
  suffixStyle
}) {

  const centeredStyles = centered 
    ? ({alignItems: 'center'})
    : {}

  const containerStyles = StyleSheet.flatten([
    styles.indicatorContainer,
    centeredStyles
  ])

  const fontSize = style.fontSize || 50

  return(
    <View style={containerStyles}>
      <Text style={{
        position: 'relative',
        color: 'white',
        fontSize,
        fontFamily,
        ...style
      }}>
        {Number(value).toFixed()}
        {suffix && (
          <Text style={{
            fontSize: fontSize - 10,
            ...suffixStyle
          }}>
            {suffix}
          </Text>
        )}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  indicatorContainer: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    bottom: 0,
    left: 0,
    alignItems: 'flex-end',
    padding: 10
  }
})