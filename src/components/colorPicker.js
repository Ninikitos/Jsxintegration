import React from 'react';
import { View, Text, ColorPicker } from 'magic-script-components';

class ColorPickerComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a colorPicker Component</Text>
        <ColorPicker
          height={0.6}
          color={[0.339, 0.123, 0.991, 1]}
        />
      </View>
    );
  }
}

export default ColorPickerComp;
