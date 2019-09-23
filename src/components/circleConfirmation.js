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
    console.log("onDialogCancel");
  }

  onDialogConfirm = (event) => {
    console.log("onDialogConfirm");
  }

  render () {
    print("render");
    let dialog;
    if (this.state.isCircleComplete) {
      print("isCircleComplete = true")
      dialog = (
        <Dialog
            buttonType="text-with-icon"
            dialogType="dual-action"
            dialogLayout="wide"
            cancelIcon="thumbs-up"
            cancelText="Cancel"
            confirmIcon="check"
            confirmText="Confirm"
            title="This is title"
            text="This is text"
            onCancel={this.onDialogCancel}
            onConfirm={this.onDialogConfirm}
        />);
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
