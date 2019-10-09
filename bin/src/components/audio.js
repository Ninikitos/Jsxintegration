import React from '../../node_modules/react/index.js';
import { View, Audio } from '../../node_modules/magic-script-components/src/components.js';

class AudioComp extends React.Component {
  render() {
    return React.createElement(View, {
      name: "main-view"
    }, React.createElement(Audio, {
      fileName: "res\\Recording.mp3",
      loadFile: true,
      action: "start"
    }));
  }

}

export default AudioComp;
