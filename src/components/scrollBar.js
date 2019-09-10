import React from 'react';
import { View, Text } from 'magic-script-components';

class ScrollBarComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a ScrollBar Component</Text>
      </View>
    );
  }
}

export default ScrollBarComp;
