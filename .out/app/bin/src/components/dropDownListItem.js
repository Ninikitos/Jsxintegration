import React from '../../node_modules/react/index.js';
import { View, Text } from '../../node_modules/magic-script-components/src/components.js';

class DropDownListItemComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.6, 0.3, 0],
      textSize: 0.04
    }, "DropDownListItem Component is being tested in DropDownList scene"));
  }

}

export default DropDownListItemComp;
