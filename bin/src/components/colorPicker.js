import React from '../../node_modules/react/index.js';
import { View, Text, ColorPicker } from '../../node_modules/magic-script-components/src/components.js';

class ColorPickerComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.2, 0.3, 0],
      textSize: 0.04
    }, "This is a colorPicker Component"), React.createElement(ColorPicker, {
      height: 0.6,
      color: [0.339, 0.123, 0.991, 1]
    }));
  }

}

export default ColorPickerComp;
