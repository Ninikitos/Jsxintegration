import React from 'react';
import { View, Text, ScrollView, ScrollBar, Button, Content } from 'magic-script-components';

class ContentComp extends React.Component {
  render () {
    return (
      <View>
        <ScrollView
          scrollBarVisibility='always'
        >
          <ScrollBar
            width={0.3}
            height={0.6}
            thumbSize={0.03}
            thumbPosition={0}
            orientation='vertical'>
          </ScrollBar>
          <Content>
            <Text localPosition={[0, 0.4, 0]} textSize={0.03}>Message Box1</Text>
            <Text localPosition={[0, 0.3, 0]} textSize={0.03}>Message Box2</Text>
            <Text localPosition={[0, 0.2, 0]} textSize={0.03}>Message Box3</Text>
            <Text localPosition={[0, 0.1, 0]} textSize={0.03}>Message Box4</Text>
          </Content>
        </ScrollView>
      </View>
    );
  }
}

export default ContentComp;
