import React from '../../node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { View, Text, Model, Slider, Button, Toggle } from '../../node_modules/magic-script-components/src/components.js';

class ModelComp extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      counter: 0,
      animation: {
        name: 'idle'
      },
      toggleState: false,
      animationPauseState: false,
      animationPlaybackSpeed: 1
    });

    _defineProperty(this, "animations", ['idle', 'walking', 'spotted']);

    _defineProperty(this, "onButtonClick", event => {
      const counter = this.state.counter < 2 ? this.state.counter + 1 : 0;
      this.setState(state => {
        return {
          counter: counter,
          animation: {
            name: this.animations[counter]
          }
        };
      });
    });

    _defineProperty(this, "onSliderChanged", event => {
      print("This is slider value " + event.Value);
      this.setState(state => ({
        animationPlaybackSpeed: event.Value
      }));
    });

    _defineProperty(this, "onToggleChanged", event => {
      this.setState(state => {
        return {
          animationPauseState: !state.animationPauseState,
          toggleState: !state.toggleState
        };
      });
    });
  }

  render() {
    print("This is slider value in render " + this.state.animationPlaybackSpeed);
    return React.createElement(View, null, React.createElement(Text, {
      localPosition: [-0.2, 0.4, 0],
      textSize: 0.04
    }, "This is a Model Component"), React.createElement(Model, {
      localPosition: [0, 0.1, 0],
      localScale: [0.0075, 0.0075, 0.0075],
      modelPath: 'res/turkey4.fbx',
      materialPath: 'res/turkey.kmat',
      texturePaths: ['res/turkey_baseColor.png'],
      defaultTextureIndex: 0,
      defaultTextureSlot: 'albedo',
      defaultMaterialName: 'turkey_material',
      importScale: 1.0,
      animationPlaybackSpeed: this.state.animationPlaybackSpeed,
      animation: this.state.animation,
      animationPauseState: this.state.animationPauseState
    }), React.createElement(Slider, {
      localPosition: [0, -0.2, 0],
      onSliderChanged: this.onSliderChanged,
      width: 0.3,
      min: 0,
      max: 2
    }), React.createElement(Button, {
      localPosition: [0.4, -0.2, 0],
      onClick: this.onButtonClick,
      textSize: 0.03,
      width: 0.3,
      height: 0.1,
      roundness: 0.7
    }, "Change Animation"), React.createElement(Toggle, {
      localPosition: [-0.3, -0.2, 0],
      onClick: this.onToggleChanged,
      on: this.state.toggleState
    }, "start/stop"));
  }

}

export default ModelComp;
