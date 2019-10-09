import React from "react";
import { View, Audio } from "magic-script-components";

class AudioComp extends React.Component {
  render () {
    return (
      <View name="main-view">
        <Audio
          fileName="res\Recording.mp3"
          loadFile={true}
          action="start"
        />
      </View>
    );
  }
}

export default AudioComp;
