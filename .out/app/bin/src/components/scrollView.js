import React from '../../node_modules/react/index.js';
import { View, Text, ScrollView, ScrollBar } from '../../node_modules/magic-script-components/src/components.js';
import '../../node_modules/magic-script-components/index.js';

class ScrollViewComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.2, 0.3, 0],
      textSize: 0.04
    }, "This is a ScrollView Component"), React.createElement(ScrollView, {
      localPosition: [-0.1, 0, 1],
      scrollDirection: "vertical",
      scrollBarVisibility: "auto"
    }, React.createElement(ScrollBar, {
      height: 0.05,
      width: 0.1,
      thumbSize: 0.03,
      orientation: "vertical"
    }), React.createElement(Text, {
      localPosition: [0, 0.1, 0],
      textSize: 0.03
    }, "Item 1"), React.createElement(Text, {
      localPosition: [0, 0.2, 0],
      textSize: 0.03
    }, "Item 2"), React.createElement(Text, {
      localPosition: [0, 0.3, 0],
      textSize: 0.03
    }, "Item 3"), React.createElement(Text, {
      localPosition: [0, 0.4, 0],
      textSize: 0.03
    }, "Item 4")));
  }

}

export default ScrollViewComp;
