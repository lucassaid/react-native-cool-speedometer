# Cool Speedometer 😎
If you are tired of all those boring speedometers for react native, have a look at this one. This is different. This is cool.

![Cool speedometer](./assets/cool-speedometer.gif)

![Cool speedometer](./assets/speeds.png)

✅ Flexible

✅ Support for negative numbers

✅ Made out of SVG

✅ Animated

✅ More customization than you'll use

✅ Cool 😎


Install it for free:
```bash
npm i react-native-cool-speedometer
```

# Usage
![Default speedometer](./assets/default.png)
```js
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';

// a few lines later ...

<Speedometer
  value={128}
  fontFamily='squada-one'
>
  <Background />
  <Arc/>
  <Needle/>
  <Progress/>
  <Marks/>
  <Indicator/>
</Speedometer>
```
That's it, you can play around changing some of the components inside `<Speedometer>`. Take in mind the order of them matters: `<Background>` is first because it is meant to be behind all other components.

#### sizing
By default, the size of the component is `250`. You can resize it by passing a different `width`. You can also change the `height`, if you need a proportion other than 1:1.

---
# Examples
### Playing with angle

![Half speedometer](./assets/half.png)

```js
<Speedometer
  value={54}
  max={80}
  angle={160}
  fontFamily='squada-one'
>
  <Background angle={180} />
  <Arc/>
  <Needle/>
  <Progress/>
  <Marks/>
  <Indicator
    suffix="k/h"
    style={{
      bottom: 25,
      fontSize: 60,
      color: '#555'
    }}
  />
</Speedometer>
```

### Rotated
Changing `rotation`, `step`, the looking of `<Needle/>`, and adding `<DangerPath/>`:

![Rotated speedometer](./assets/rotated.png)
```js
<Speedometer
  value={5}
  max={11}
  fontFamily='squada-one'
>
  <Background angle={180} />
  <Arc arcWidth={4} />
  <Needle
    baseOffset={40}
    circleRadius={30}
  />
  <DangerPath/>
  <Progress arcWidth={10}/>
  <Marks/>
</Speedometer>
```

---
# God mode

When I said "more customization than you'll use", I meant it.

### Marks

Use `renderLine` to render your own line marks. This function receives the coordinates of the current line: `{ x1, y1, x2, y2 }`, so you can either pass them to a `<Line>` component, or use them to create whatever you want, as long as it is made of SVG.

```js
import { Line } from 'react-native-svg'
// later ...
<Marks
  renderLine={coordinates => (
    <Line
      {...coordinates}
      // any other prop here, except
      // x1, y1, x2, and y2
    />
  )}
/>
```


If you want to show lines but not numbers, or vice-versa:

```js
<Marks renderNumber={() => null} /> // shows lines only
// or
<Marks renderLine={() => null} /> // shows numbers only
```


Use `renderNumber` to render your own text. This function returns an object with the coordinates, the rotation of the text and the actual number. It is recommended to pass this object to a `<Text>` component

```js
import { Text } from 'react-native-svg'
// later ...
<Marks
  renderNumber={numberProps => (
    <Text
      {...numberProps}
      // any other prop here, except
      // x, y, transform, and children
    />
  )}
/>
```

### Needle

Pass a function as children to make a custom Needle. It will rotate automatically.

```js
<Speedometer width={width}>
  <Needle>
    {() => {
      // you might need the center of the circle
      // to place the needle correctly
      const center = width / 2

      return (
        // some magic SVG here
      )
    }}
  </Needle>
</Speedometer>
```

### useSpeedometerContext

You can achieve virtually anything you need by adding a component that uses this hook and returns SVG:

```js
const MyCustomSVG = () => {

  const {
    currentFillAngle,
    radius,
    rotation,
    min,
    max,
    angle,
    lineCap,
    accentColor,
    fontFamily,
    value,
  } = useSpeedometerContext();

  return (
    // some magic SVG here
  )
}

const App = () => {

  return (
    <Speedometer>
      <Background>
      <Needle>
      <MyCustomSVG>
    </Speedometer>
  )
}
```

---
# Properties

| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| width | 250 | number | Width of the component |
| height | same as width | number | Height of the component |
| angle | 250 | number | Angle of the speedometer in degrees |
| rotation | | number | By default, the rotation is computed with the given `angle` to keep the marks symmetrical. If you want to change the rotation (like [this example](#rotated)) take in mind that "0" is at the top of the circle. |
| value | 0 | number | Current value of the speedometer, this is what you typically change dynamically |
| min | 0 | number | Minimum value, can be a negative number |
| max | 180 | number | Max value |
| lineCap | 'butt' | string | Line terminations, can be `butt`, `line`, or `square` |
| accentColor | '#00e0ff' | string | Accent color. Used by default for the progress bar, and the circle of the needle. |
| fontFamily | 'helvetica' | string | Font to use in the indicator and the marks. You need to configure in your project the font you want to use. |

### Background
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| angle | 360 | number | A lower angle will result in a shorter circle |
| color | 'black' | string | Color of background |
| opacity | 0.5 | number | Opacity of background |

### Arc
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| color | 'black | Color of the arc behind the progress |
| opacity | 0.3 | Opacity of the arc behind the progress |
| arcWidth | 4 | number | Width of the arc behind the progress |
| lineCap | Same as global `lineCap` | string | Line terminations, can be `butt`, `line`, or `square` |

### Needle
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| baseWidth | 6 | number | Width of the base of the needle |
| baseOffset | 18 | number | Distance of the base from the center of the circle |
| color | 'white' | string | Color of the needle |
| circleRadius | 15 | number | Radius of the circle at the base of the needle |
| circleColor | Same as global `accentColor` | string | Color of the circle at the base of the needle |

### DangerPath
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| color | '#FF3333' | string | Color of the danger path |
| angle | 50 | number | Angle of the danger path, from the right |
| arcWidth | 4 | string | Width of the danger path |
| lineCap | same as global `lineCap` | string | Line terminations, can be `butt`, `line`, or `square` |
| offset | 6 | number | Distance from the border of the circle |

### Progress
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| color | Same as global `accentColor` | string | Color of the progress bar |
| arcWidth | 5 | number | Width of the progress bar |
| lineCap | Same as global `lineCap` | string | Line terminations, can be `butt`, `line`, or `square` |

### Marks
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| step | 10 | number | Times `max` will be divided in, to show the line marks |
| lineCap | 'butt' | string | Line terminations, can be `butt`, `line`, or `square` |
| lineColor | 'white' | string | Color of lines |
| lineOpacity | 1 | number | Opacity of lines |
| numbersRadius | 17 | number | Distance from the border of the circle |
| fontSize | 18 | number | Font size of the numbers |
| lineSize | 12 | number | Large of the lines |
| renderLine | | function | Function to render custom lines. This function receives the coordinates of the line: `{ x1, y1, x2, y2 }`.  |
| renderNumber | | function | Function to render custom numbers. This function receives: `{ x, y, transform, children }` |

### Indicator
| Prop | Default | Type | Description
| :---- | :------ | :--- | :---------
| suffix | | string | Text after the value |
| fontSize | 45 | number | Font size of the indicator |
| color | 'white' | Text color of the indicator |
| fontFamily | Same as global `fontFamily` | number | Font family of the indicator |