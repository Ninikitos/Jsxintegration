import React from 'react';
import { View, Text } from 'magic-script-components';

class WebViewComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a WebView Component</Text>
      </View>
    );
  }
}

export default WebViewComp;
