import React from 'react';
import { View, Text, Dialog } from 'magic-script-components';

class DialogComp extends React.Component {
  render () {
    return (
      <View>
        <Text localPosition={[-0.2, 0.3, 0]} textSize={0.04}>This is a Dialog Component</Text>
        <Dialog
          title='Successfully completed confirmation'
          text='Your device is ready for a new Mixed Reality seccion'
          type='timed'
          expireTime={0.1}
          layout='standard'
          scrolling={false}
        />
      </View>
    );
  }
}

export default DialogComp;
