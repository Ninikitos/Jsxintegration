import React from '../../node_modules/react/index.js';
import { View, Text } from '../../node_modules/magic-script-components/src/components.js';

class DropDownListComp extends React.Component {
  render() {
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.2, 0.3, 0],
      textSize: 0.04
    }, "This is a DropDownList Component"), React.createElement(DropdownList, {
      text: "Dropdown"
    }), React.createElement(DropdownListItem, {
      label: "Item"
    }));
  }

}

export default DropDownListComp;
