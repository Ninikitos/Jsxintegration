import React from '../../node_modules/react/index.js';
import { View, Text, Dialog } from '../../node_modules/magic-script-components/src/components.js';

class DialogComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.2, 0.3, 0],
      textSize: 0.04
    }, "This is a Dialog Component"), React.createElement(Dialog, {
      title: "Successfully completed confirmation",
      text: "Your device is ready for a new Mixed Reality seccion",
      type: "timed",
      expireTime: 0.1,
      layout: "standard",
      scrolling: false
    }));
  }

}

export default DialogComp;
