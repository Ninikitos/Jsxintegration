import React from '../../node_modules/react/index.js';
import { View, Text, Button } from '../../node_modules/magic-script-components/src/components.js';
import '../../node_modules/magic-script-components/index.js';

class ButtonComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.825, 0.5, 0],
      textSize: 0.03
    }, "Different text size"), React.createElement(Button, {
      localPosition: [-0.7, 0.4, 0],
      textSize: 0.04
    }, "Click Me"), React.createElement(Button, {
      localPosition: [-0.7, 0.2, 0],
      textSize: 0.05
    }, "Click Me"), React.createElement(Button, {
      localPosition: [-0.7, 0, 0],
      textSize: 0.06
    }, "Click Me"), React.createElement(Text, {
      localPosition: [-0.3, 0.5, 0],
      textSize: 0.03
    }, "Different text color"), React.createElement(Button, {
      localPosition: [-0.2, 0.4, 0],
      textSize: 0.04,
      textColor: [0.332, 0.988, 0.123, 1]
    }, "Click Me"), React.createElement(Text, {
      localPosition: [-0.3, 0.1, 0],
      textSize: 0.03
    }, "Different button roundness, 0.3"), React.createElement(Button, {
      localPosition: [-0.2, 0, 0],
      textSize: 0.04,
      roundness: 0.3
    }, "Click Me"), React.createElement(Text, {
      localPosition: [-0.3, -0.1, 0],
      textSize: 0.03
    }, "Different button roundness, 0.6"), React.createElement(Button, {
      localPosition: [-0.2, -0.2, 0],
      textSize: 0.04,
      roundness: 0.6
    }, "Click Me"), React.createElement(Text, {
      localPosition: [-0.3, -0.3, 0],
      textSize: 0.03
    }, "Different button roundness, 0.9"), React.createElement(Button, {
      localPosition: [-0.2, -0.4, 0],
      textSize: 0.04,
      roundness: 0.9
    }, "Click Me"), React.createElement(Text, {
      localPosition: [0.1, 0.5, 0],
      textSize: 0.03
    }, "Is enabled?"), React.createElement(Button, {
      localPosition: [0.2, 0.4, 0],
      textSize: 0.04,
      enabled: false
    }, "Click Me"), React.createElement(Text, {
      localPosition: [0.1, 0.1, 0],
      textSize: 0.03
    }, "Not default width and height"), React.createElement(Button, {
      localPosition: [0.2, -0.1, 0],
      textSize: 0.04,
      width: 0.2,
      height: 0.2
    }, "Click Me"), React.createElement(Text, {
      localPosition: [0.5, 0.5, 0],
      textSize: 0.03
    }, "Button + icon"), React.createElement(Button, {
      localPosition: [0.6, 0.4, 0],
      iconType: "thumbs-up",
      type: "icon",
      height: 0.1
    }), React.createElement(Text, {
      localPosition: [0.5, 0.2, 0],
      textSize: 0.03
    }, "Button + Icon + Text"), React.createElement(Button, {
      localPosition: [0.7, 0.1, 0],
      type: "text-with-icon",
      text: "Click Me",
      labelSide: "right",
      height: 0.1,
      iconType: "exit"
    }));
  }

}

export default ButtonComp;
