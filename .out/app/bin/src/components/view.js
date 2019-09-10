import React from '../../node_modules/react/index.js';
import { View, Text } from '../../node_modules/magic-script-components/src/components.js';
import '../../node_modules/magic-script-components/index.js';

class ViewComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.2, 0.3, 0],
      textSize: 0.04
    }, "This is a View Component"));
  }

}

export default ViewComp;
