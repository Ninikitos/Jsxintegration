import React from 'react';
import { View, Text } from 'magic-script-components';

class VideoComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a Video Component</Text>
      </View>
    );
  }
}

export default VideoComp;
