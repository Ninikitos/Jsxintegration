import React from 'react';
import { View, Text, GridLayout } from 'magic-script-components';

class GridLayoutComp extends React.Component {

  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a GridLayout Component</Text>

      </View>
    );
  }
}

export default GridLayoutComp;
