# Cool Speedometer 😎
If you are tired of all those boring speedometers for react native, have a look at this one. This is different. This is cool.
![Cool speedometer](https://lh3.googleusercontent.com/fife/ABSRlIoDnJ_6BjNbRy1nmFxSh9pD5xFuO1gzAZNgLVH8AnpjXNtB6ZhIb6TJ8SBno3SNfr9w97uhMmhQgkYEMfWnNWRQOzmmyTwzghX-28H1rdX__FiBTdo8fuy2D2jq30OHNB9D7y2n9Aa9Jj0UtqPemt3C0cv4vL9MTvX9UB-WjZYHOqtd8k0griFTBtid8lHolzD83m4-TStgUJ9ITEDBzWqlljGgXjJ6gi4lbHBCEsTHBVclQrveYl3b4SnmeNVDJ4ba03nokOt98FLg3vx_sVLdC9iFb0H2RVNlceoD1vezGBmDiqW_TenK2ROncSrjOHfJP7bAb_Uy46icLkFQBE7B9gtS6JWxdR5oiMKaypWTgv65MlyFF1GSySLAML0jGd1rvy-yzQ-r7lgPZSOGnHxwVIQgSP35DYpzDJxqIEQ8DJyYnPwnk7zV69zckhpHglZgTd2QISlwjFeVZu_Y2WurU5HIk1auW0qkXrWqUWgv0dfRzsWxRoFsGXv1FqsrTe8vN-wi0sxdIxOOkhzJGeZvEQG83b8KOtau-pA2NLqqsMkwxj1QFStw4pK0QjT-Z66tW-iGsH49wwDYTj7Yr8tXwwK42XkiNXpgwI0Ti-7oHExskPoVDB81xt6Le3NjjHtlJ1MXRQoT2J_atPNN0u5Gn4_Rc_U4nCHPUBxhZkYtC_lyN2fPJ1x6yLMHWDeTkEqgM6OvPhwqLobFH8FBfWyKOSVoj-x-X3U=w1854-h980-ft)
✅ Flexible
✅ Good-looking
✅ Animated
✅ More customization than you'll use
✅ Cool 😎

Install it for free:
```bash
npm i react-native-cool-speedometer
```

## Usage
![Default speedometer](https://lh3.googleusercontent.com/fife/ABSRlIpRxl8NdiR9yCn6mDzuYVygKzepFUojMUfhVucVUnKag6kw_fe_vljbuRDIOnQcBpOJ50hroo6z8rNB3b2Z3CErZBzEW2eYI91ltPuQCi8C7-NDztaSMQihLt5kkged0_dZvQUc4ALwYOAv8eaUUjoGjcEsskiSY0zrICIW0iJ49foLTk1JXX25aLbTS_Am9m8KcHV2ejSz1goMSJWzUWGhHI7nJxkRZKKs4dvfBn-4W3mTdRCfsQvgqIMpcwqb4AZlquLdLslisAY0aLsaBvZDftv6MEozEU4fxgrbbjqmC07AFiyGmr3FuE3dpoOveWjutk_XoPMDsCScXpDjTf-kjivyHf88x7BQWYo7Ync3YVy30ndRGo4emTLpDjHViKmMjBUUxkNFEjK-wE-B_mg-EjbO78K8y2m3wkLjPShjU7pRyT-zHyRH9MMKEuHGMupgDGzroQDq15UBPkBfXhT5msqYZgpqUweG3yVp7ttdiSueoaQS51GfPLfxDJaUoMxH-BFzM9Iz2QTGOHsUkuz2vrx9KQEseiyfaB86vRAecD8-7VThmAf7kPtkix0HY6admijQn6Mfb4L-2fhBGyTn91kA3ybpm_StMmTtzWKnn2Xn4Boc7yEGluC2cVqLB4eEA1uOlaU9Mutp0m3AsxPdIlebV1WHhvRCNJovsG0R9FBR4evJ1FtAie_4YENYr2yk8Vczn516yfp0ukyx_P15XgLzuP3s270=w1333-h980-ft)
```js
<Speedometer
    value={128}
    fontFamily='squada-one'
/>
```
Note you'll need to configure the font by your own.

### Playing with angle
![Half speedometer](https://lh3.google.com/u/0/d/12oTd7CXs58PnXppWFfqg0yru2DExZnmo=w1333-h980-iv1)
```js
<Speedometer
  value={54}
  max={80}
  angle={160}
  backgroundAngle={180}
  indicatorStyle={{
    bottom: 25,
    fontSize: 60,
    color: '#555'
  }}
  fontFamily='squada-one'
  indicatorSuffix='k/h'
/>
```

### Rotated
Changing `rotation`, `step`, the looking of the needle, and adding an optional "danger zone":
![Rotated speedometer](https://lh3.google.com/u/0/d/1aIp1Ph8Ozvad-ZMJhdukcpO0QM4IZWMt=w1333-h980-iv1)
```js
<Speedometer
  primaryArcWidth={10}
  secondaryArcWidth={4}
  value={5}
  step={1}
  max={11}
  noIndicator
  rotation={-90}
  dangerZone
  needle={{
    baseOffset: 40,
    circleRadius: 30
  }}
/>
```

### Circular progress
![Circular progress](https://lh3.google.com/u/0/d/1b5XpatEfKizRNvQc2pfsoVgmIcNW65tO=w1333-h980-iv1)
```js
<Speedometer
  primaryArcWidth={40}
  value={40}
  max={100}
  lineCap="round"
  noNeedle
  noLineMarks
  noNumberMarks
  angle={360}
  accentColor="orange"
  noBackground
  duration={500}
  indicatorCentered
  indicatorStyle={{
    color: 'orange'
  }}
  indicatorSuffix='%'
/>
```

### More options
Make it as ugly as you want:
![Ugly speedometer](https://lh3.google.com/u/0/d/1RY2zCqyAJRN1jCBC50rLQr0Woj2a_fVk=w1333-h980-iv1)
```js
<Speedometer
  value={73}
  max={100}
  step={5}
  angle={300}
  backgroundColor='aquamarine'
  backgroundOpacity={1}
  noProgress
  noNumberMarks
  needle={{
    color: 'tomato',
    circleColor: 'transparent',
    baseWidth: 20,
    baseOffset: 0
  }}
  marks={{
    lineCap: 'round',
    lineColor: 'tomato'
  }}
  indicatorStyle={{
    color: 'tomato'
  }}
/>

```

## Properties
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| size | 250 | number | Size of the speedometer. Note that if you change this value you will probably need to adjust the font size of the indicator and the marks. |
| primaryArcWidth | 5 | number | Width of the progress bar |
| secondaryArcWidth | primaryArcWidth - 1 | number | Width of the secondary arc. Will use the progress bar width as reference by default. |
| accentColor | '#00e0ff' | string | Accent color. Used by default for the progress bar, and the circle of the needle. |
| primaryArcColor | accentColor | string | Color of the primary path. |
| secondaryArcColor | 'black' | string | Color of the secondary path. |
| secondaryArcOpacity | 0.3 | number | Opacity of the secondary path. |
| style | | object | Style applied to the speedometer |
| rotation | | number | By default, the rotation is computed with the given `angle`. If you want to change the rotation (like [this example](#rotated)) have in mind that "0" is at the top of the circle. |
| lineCap | 'butt' | string | Line terminations, can be `butt`, `line`, or `square`. |
| angle | 250 | number | Angle of the speedometer in degrees |
| value | 0 | number | Actual speed |
| max | 180 | number | Max velocity |
| noIndicator | | boolean | Whether to hide the indicator |
| backgroundColor | '#000000' | string | Color of the background |
| backgroundOpacity | 0.5 | number | Opacity of the background |
| step | 10 | number | Times the max speed will be divided in to show the marks |
| indicatorStyle | {} | object | Style applied to the indicator | 
| noNeedle | | boolean | Whether to hide the needle |
| indicatorCentered | | boolean | Whether to vertically align the indicator | 
| noLineMarks | | boolean | Whether to hide the line marks |
| dangerZone | | boolean | Whether to show the red line at the right |
| dangerZoneAngle | 60 | number | Angle to show the danger zone (from the right) |
| noProgress | | boolean | Whether to hide the progress bar |
| needle | {} | object | [Needle options](#needle-options) |
| marks | {} | object | [Marks options](#marks-options) |
| noNumberMarks | | boolean | Whether to hide the numbers next to the line marks |
| noBackground | | boolean | Whether to hide the background circle |
| backgroundAngle | 360 | number | Angle of the circle path used for the background. It is usually better to let this by default. |
| fontFamily | 'helvetica' | string | Font to use in the indicator and the marks. You need to configure in your project the font you want to use. |
| indicatorSuffix | | string | Text to append to the indicator, for example 'k/h' or '%'. |
| indicatorSuffixStyle | {} | object | Style applied to the suffix of the indicator. (You can reduce its font size to make it more cool). |


### Needle Options
| Prop | Default | Type | Description |
| :---- | ------: | :--- | :----- |
| baseWidth | 6 | number | Width of the base of the needle |
| baseOffset | 18 | number | Distance from the center of the circle |
| color | 'white' | string | Color of ne needle |
| circleRadius | 15 | number | Radius of the circle behind the needle |
| circleColor | accentColor | string | Color fo the circle behind the needle |

### Marks Options
| Prop | Default | Type | Description |
| :---- | ------: | :--- | :----- |
| lineCap| 'butt' | string | Line terminations, can be `butt`, `line`, or `square`. |
| lineColor| 'white' | string | Color of the lines |
| lineOpacity| 1 | number | Opacity of the lines |
| numbersRadius| 17 | string | Change this to place the numbers closer or farther of the center. |
| numbersFontSize| 19 | string | Font size of the number marks |