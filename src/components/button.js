import React from 'react';
import { View, Button, Text } from 'magic-script-components';

class ButtonComp extends React.Component {
  state = {
    visible: true
  }

  isVisibleClick = event => {
    this.setState({visible: false});
  }

  render () {
    return (
      <View>
        <Text localPosition={[-0.825, 0.5, 0]} textSize={0.03}>Different text size</Text>
        <Button localPosition={[-0.7, 0.4, 0]} textSize={0.04}>Click Me</Button>
        <Button localPosition={[-0.7, 0.2, 0]} textSize={0.05}>Click Me</Button>
        <Button localPosition={[-0.7, 0, 0]} textSize={0.06}>Click Me</Button>

        <Text localPosition={[-0.3, 0.5, 0]} textSize={0.03}>Different text color</Text>
        <Button localPosition={[-0.2, 0.4, 0]} textSize={0.04} textColor={[0.332, 0.988, 0.123, 1]}>Click Me</Button>

        <Text localPosition={[-0.3, 0.1, 0]} textSize={0.03}>Different button roundness, 0.3</Text>
        <Button localPosition={[-0.2, 0, 0]} textSize={0.04} roundness={0.3}>Click Me</Button>

        <Text localPosition={[-0.3, -0.1, 0]} textSize={0.03}>Different button roundness, 0.6</Text>
        <Button localPosition={[-0.2, -0.2, 0]} textSize={0.04} roundness={0.6}>Click Me</Button>

        <Text localPosition={[-0.3, -0.3, 0]} textSize={0.03}>Different button roundness, 0.9</Text>
        <Button localPosition={[-0.2, -0.4, 0]} textSize={0.04} roundness={0.9}>Click Me</Button>

        <Text localPosition={[0.1, 0.5, 0]} textSize={0.03}>Is enabled?</Text>
        <Button localPosition={[0.2, 0.4, 0]} textSize={0.04} enabled={false}>Click Me</Button>

        <Text localPosition={[0.1, 0.1, 0]} textSize={0.03}>Not default width and height</Text>
        <Button localPosition={[0.2, -0.1, 0]} textSize={0.04} width={0.2} height={0.2}>Click Me</Button>

        <Text localPosition={[0.5, 0.5, 0]} textSize={0.03}>Button + icon</Text>
        <Button localPosition={[0.6, 0.4, 0]} iconType="thumbs-up" type="icon" height={0.1} visible={this.state.visible} onClick={this.isVisibleClick}></Button>
        {/* EclipseButtonParams(type, iconPath, text, labelSide, height, iconType) */}
        <Text localPosition={[0.5, 0.2, 0]} textSize={0.03}>Button + Icon + Text</Text>
        <Button localPosition={[0.7, 0.1, 0]} type="text-with-icon" height={0.1} iconType="exit" >Click Me</Button>

      </View>
    );
  }
}

export default ButtonComp;
