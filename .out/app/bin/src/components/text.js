import React from '../../node_modules/react/index.js';
import { View, Text } from '../../node_modules/magic-script-components/src/components.js';
import '../../node_modules/magic-script-components/index.js';

class TextComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-1, 0.380, 0],
      textSize: 0.04
    }, "Text Size = 0.04"), React.createElement(Text, {
      localPosition: [-1, 0.280, 0],
      textSize: 0.05
    }, "Text Size = 0.05"), React.createElement(Text, {
      localPosition: [-1, 0.180, 0],
      textSize: 0.06
    }, "Text Size = 0.06"), React.createElement(Text, {
      localPosition: [-0.4, 0.3, 0],
      textSize: 0.04,
      boundsSize: {
        boundsSize: [0.2, 0.1],
        wrap: true
      },
      textAlignment: 'center'
    }, "This text is align by center"), React.createElement(Text, {
      localPosition: [-0.4, 0.1, 0],
      textSize: 0.04,
      boundsSize: {
        boundsSize: [0.2, 0.1],
        wrap: true
      },
      textAlignment: 'right'
    }, "This text is align by right"), React.createElement(Text, {
      localPosition: [-0.4, -0.1, 0],
      textSize: 0.04,
      boundsSize: {
        boundsSize: [0.2, 0.1],
        wrap: true
      },
      textAlignment: 'left'
    }, "This text is align by left"), React.createElement(Text, {
      localPosition: [0.1, 0.3, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.2, 0.2],
        wrap: true
      },
      lineSpacing: 2
    }, "textSize = 0.04 and lineSpacing = 2"), React.createElement(Text, {
      localPosition: [0.1, 0.120, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.2, 0.1],
        wrap: true
      },
      lineSpacing: 1.5
    }, "textSize = 0.04 and lineSpacing = 1.5"), React.createElement(Text, {
      localPosition: [0.1, -0.180, 0],
      textSize: 0.03,
      boundsSize: {
        boundsSize: [0.2, 0.1],
        wrap: true
      },
      lineSpacing: 1
    }, "textSize = 0.04 and lineSpacing = 1"), React.createElement(Text, {
      localPosition: [-1, -0.3, 0],
      textSize: 0.03,
      style: "italic",
      weight: "extra-light"
    }, "This text is Italic and extra-light"), React.createElement(Text, {
      localPosition: [-1, -0.4, 0],
      textSize: 0.03,
      style: "normal",
      weight: "light"
    }, "This text is normal and light"), React.createElement(Text, {
      localPosition: [-1, -0.5, 0],
      textSize: 0.03,
      style: "italic",
      weight: "regular"
    }, "This text is Italic and regular"), React.createElement(Text, {
      localPosition: [-1, -0.6, 0],
      textSize: 0.03,
      style: "normal",
      weight: "medium"
    }, "This text is normal and medium"), React.createElement(Text, {
      localPosition: [-1, -0.7, 0],
      textSize: 0.03,
      style: "italic",
      weight: "bold"
    }, "This text is italic and bold"), React.createElement(Text, {
      localPosition: [-1, -0.8, 0],
      textSize: 0.03,
      style: "normal",
      weight: "extra-bold"
    }, "This text is normal and extra-bold"), React.createElement(Text, {
      localPosition: [-0.4, -0.3, 0],
      textSize: 0.06,
      textColor: [0.423, 0.255, 0.935, 1]
    }, "Colored Text"), React.createElement(Text, {
      localPosition: [-0.4, -0.4, 0],
      textSize: 0.04,
      allCaps: true
    }, "This text is set to all caps"), React.createElement(Text, {
      localPosition: [0.1, -0.3, 0],
      textSize: 0.04,
      charSpacing: 0.2
    }, "Spacing = 0.1 "), React.createElement(Text, {
      localPosition: [0.1, -0.4, 0],
      textSize: 0.04,
      charSpacing: 0.3
    }, "Spacing = 0.2 "), React.createElement(Text, {
      localPosition: [0.1, -0.5, 0],
      textSize: 0.04,
      charSpacing: 0.4
    }, "Spacing = 0.4 "));
  }

}

export default TextComp;
