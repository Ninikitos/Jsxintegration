import React from '../../node_modules/react/index.js';
import { View, Text, TextEdit } from '../../node_modules/magic-script-components/src/components.js';

class TextEditComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.9, 0.550, 0],
      textSize: 0.03
    }, "Center aligment"), React.createElement(TextEdit, {
      localPosition: [-0.9, 0.5, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.03,
      padding: [0.5, 0.3, 0.5, 0.3],
      textAlignment: "center",
      lineSpacing: 0.3,
      charSpacing: 0.02
    }), React.createElement(Text, {
      localPosition: [-0.9, 0.350, 0],
      textSize: 0.03
    }, "Right aligment"), React.createElement(TextEdit, {
      localPosition: [-0.9, 0.3, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.04,
      textColor: [0.732, 0.265, 0.469, 1],
      textAlignment: "right"
    }), React.createElement(Text, {
      localPosition: [-0.9, 0.150, 0],
      textSize: 0.03
    }, "Left aligment. Entery URL"), React.createElement(TextEdit, {
      localPosition: [-0.9, 0.1, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.05,
      textAlignment: "left",
      textEntry: "url"
    }), React.createElement(Text, {
      localPosition: [-0.9, -0.150, 0],
      textSize: 0.03
    }, "Entery Numeric"), React.createElement(TextEdit, {
      localPosition: [-0.9, -0.2, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.06,
      textEntry: "numeric"
    }), React.createElement(Text, {
      localPosition: [-0.9, -0.350, 0],
      textSize: 0.03
    }, "Entery None"), React.createElement(TextEdit, {
      localPosition: [-0.9, -0.4, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.07,
      textEntry: "none"
    }), React.createElement(Text, {
      localPosition: [-0.2, 0.550, 0],
      textSize: 0.03
    }, "ScrollBarVisibility Always"), React.createElement(TextEdit, {
      localPosition: [-0.2, 0.5, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.03,
      scrollBarVisibility: "always"
    }), React.createElement(Text, {
      localPosition: [-0.2, 0.350, 0],
      textSize: 0.03
    }, "ScrollBarVisibility Auto + Multiline"), React.createElement(TextEdit, {
      localPosition: [-0.2, 0.3, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.04,
      scrollBarVisibility: "auto",
      multiline: true,
      scrolling: true,
      cursorEdgeScrollMode: "auto",
      scrollSpeed: 0.1,
      scrollValue: 0.2
    }), React.createElement(Text, {
      localPosition: [-0.2, 0.150, 0],
      textSize: 0.03
    }, "Password Mode on"), React.createElement(TextEdit, {
      localPosition: [-0.2, 0.1, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.05,
      password: true
    }), React.createElement(Text, {
      localPosition: [0.4, 0.550, 0],
      textSize: 0.03
    }, "This is Text Edit component"), React.createElement(TextEdit, {
      localPosition: [0.4, 0.5, 0],
      text: "Edit Me",
      width: 0.4,
      height: 0.08,
      textSize: 0.03,
      style: "italic",
      weight: "bold",
      hint: "This is a hint.",
      hintColor: [0.732, 0.265, 0.469, 1]
    }));
  }

}

export default TextEditComp;
