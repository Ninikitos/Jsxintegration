import React from 'react';
import { View, Text, CircleConfirmation, Dialog } from 'magic-script-components';

class CircleConfirmationComp extends React.Component {
  state = {
    isCircleComplete : false
  };

  onConfirmationCanceled = (event) => {
    print("onConfirmationCanceled");
    this.setState(state => ({

    }));
  }

  onConfirmationUpdate = (event) => {
    print("onConfirmationUpdate");
  }

  onConfirmationComplete = (event) => {
    print("onConfirmationComplete");
    this.setState(state => {
      return {
        isCircleComplete : true
      };
    });
  }

  onDialogCancel = (event) => {
    print("onDialogCancel");
  }

  onDialogConfirm = (event) => {
    print("onDialogConfirm");
  }

  onTimeExpired = (event) => {
    print('onTimeExpired');
  }

  render () {
    print("render");
    let dialog;
    if (this.state.isCircleComplete) {
      print("isCircleComplete = true")
      dialog = (
        <Dialog 
          title='Successfully completed confirmation'
          text='Your device is ready for a new Mixed Reality seccion'
          type='timed'
          expireTime={0.1}
          layout='standard'
          scrolling={false}
        />
        );
    }
    return (
      <View>
        <Text localPosition={[-0.32, 0.3, 0]} textSize={0.04}>This is a circleConfirmation Component</Text>
        <CircleConfirmation
          onConfirmationCanceled={this.onConfirmationCanceled}
          onConfirmationComplete={this.onConfirmationComplete}
          onConfirmationUpdate={this.onConfirmationUpdate}
          height={0.2}
        ></CircleConfirmation>
        {dialog}
      </View>
    );
  }
}

export default CircleConfirmationComp;
