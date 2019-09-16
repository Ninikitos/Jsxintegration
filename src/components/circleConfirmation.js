import React from 'react';
import { View, Text, CircleConfirmation, Dialog } from 'magic-script-components';

class CircleConfirmationComp extends React.Component {

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

      };
    });
  }

  onDialogCancel = (event) => {
    print("onDialogCancel");
  }

  onDialogConfirm = (event) => {
    print("onDialogConfirm");
  }

  render () {
    return (
      <View>
        <Text localPosition={[-0.32, 0.3, 0]} textSize={0.04}>This is a circleConfirmation Component</Text>
        <CircleConfirmation
          onConfirmationCanceled={this.onConfirmationCanceled}
          onConfirmationComplete={this.onConfirmationComplete}
          onConfirmationUpdate={this.onConfirmationUpdate}
          height={0.2}
        ></CircleConfirmation>
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
        ></Dialog>
      </View>
    );
  }
}

export default CircleConfirmationComp;
