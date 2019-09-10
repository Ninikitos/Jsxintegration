import React from 'react';
import { View, Text, Model, Slider, Toggle, Button } from 'magic-script-components';


class ModelComp extends React.Component {

  state = {
    counter: 0,
    animation: { name: 'idle' },
    toggleState: false,
    animationPauseState: false,
    animationPlaybackSpeed: 1

  }

  animations = ['idle', 'walking', 'spotted'];

  onButtonClick = (event) => {
    const counter = this.state.counter < 2 ? this.state.counter + 1 : 0;
    this.setState(state => {
      return {
        counter: counter,
        animation: { name: this.animations[counter] }
      };
    });
  }

  onSliderChanged = (event) => {
    print("This is slider value " + event.Value);
    this.setState(state => ({ animationPlaybackSpeed: event.Value }));
  }

  onToggleChanged = (event) => {
    this.setState(state => {
      return {
        animationPauseState: !state.animationPauseState,
        toggleState: !state.toggleState
      };
    });
  }
  
  render () {
    print("This is slider value in render " + this.state.animationPlaybackSpeed);
    return (
      <View>
        <Text localPosition={[-0.2, 0.4, 0]} textSize={0.04}>This is a Model Component</Text>
        <Model
          localPosition={[0, 0.1, 0]}
          localScale={[0.0075, 0.0075, 0.0075]}
          modelPath={'res/turkey4.fbx'}
          materialPath={'res/turkey.kmat'}
          texturePaths={['res/turkey_baseColor.png']}
          defaultTextureIndex={0}
          defaultTextureSlot={'albedo'}
          defaultMaterialName={'turkey_material'}
          importScale={1.0}
          animationPlaybackSpeed={this.state.animationPlaybackSpeed}
          animation={this.state.animation}
          animationPauseState={this.state.animationPauseState}
        />
        <Slider 
          localPosition={[0, -0.2, 0]}
          onSliderChanged={this.onSliderChanged}
          width={0.3}
          min={0}
          max={2}/>
        <Button 
          localPosition={[0.4, -0.2, 0]}
          onClick={this.onButtonClick}
          textSize={0.03}
          width={0.3}
          height={0.1}
          roundness={0.7}>Change Animation</Button>
        <Toggle 
          localPosition={[-0.3, -0.2, 0]} 
          onClick={this.onToggleChanged} 
          on={this.state.toggleState}>start/stop</Toggle>
      </View>
    );
  }
}

export default ModelComp;
