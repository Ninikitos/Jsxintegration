import React from 'react';
import { View, Text, ScrollView, ScrollBar } from 'magic-script-components';

class ScrollViewComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a ScrollView Component</Text>
        <ScrollView localPosition={[-0.1, 0, 1]} scrollDirection='vertical' scrollBarVisibility='auto'>
          <ScrollBar height={0.05} width={0.1} thumbSize={0.03} orientation='vertical'></ScrollBar>
          <Text localPosition={[0, 0.1, 0]} textSize={0.03}>Item 1</Text>
          <Text localPosition={[0, 0.2, 0]} textSize={0.03}>Item 2</Text>
          <Text localPosition={[0, 0.3, 0]} textSize={0.03}>Item 3</Text>
          <Text localPosition={[0, 0.4, 0]} textSize={0.03}>Item 4</Text>
        </ScrollView>
      </View>
    );
  }
}

export default ScrollViewComp;
