import React from 'react';
import { View, Text, DropDownList, DropDownListItem } from 'magic-script-components';

class DropDownListComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a DropDownList Component</Text>
        <DropdownList text='Dropdown'/>
        <DropdownListItem label='Item'/>
      </View>
    );
  }
}

export default DropDownListComp;
