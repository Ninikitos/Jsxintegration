import React from '../../node_modules/react/index.js';
import { View, ScrollView, ScrollBar, Content, Text } from '../../node_modules/magic-script-components/src/components.js';

class ContentComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(ScrollView, {
      scrollBarVisibility: "always"
    }, React.createElement(ScrollBar, {
      width: 0.3,
      height: 0.6,
      thumbSize: 0.03,
      thumbPosition: 0,
      orientation: "vertical"
    }), React.createElement(Content, null, React.createElement(Text, {
      localPosition: [0, 0.4, 0],
      textSize: 0.03
    }, "Message Box1"), React.createElement(Text, {
      localPosition: [0, 0.3, 0],
      textSize: 0.03
    }, "Message Box2"), React.createElement(Text, {
      localPosition: [0, 0.2, 0],
      textSize: 0.03
    }, "Message Box3"), React.createElement(Text, {
      localPosition: [0, 0.1, 0],
      textSize: 0.03
    }, "Message Box4"))));
  }

}

export default ContentComp;
