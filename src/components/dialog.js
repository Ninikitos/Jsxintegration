import React from 'react';
import { View, Text, Dialog } from 'magic-script-components';

class DialogComp extends React.Component {

  state = { 
    requestUserConfirmation: true,
    dismissNotification: false
  };

  onDialogCancel = event => {
    this.setState({
      requestUserConfirmation: false
    });
    console.log("User pressed Cancel");
  };

  onDialogConfirm = event => {
    this.setState({
      requestUserConfirmation: false,
      dismissNotification : true
    });
    console.log("User wants to dismiss notification");
  };


  render () {
    const dialog = this.state.requestUserConfirmation
    ? ( <Dialog
        buttonType="text-with-icon"
        dialogType="dual-action"
        dialogLayout="wide"
        cancelIcon="close"
        cancelText="No"
        confirmIcon="check"
        confirmText="Yes"
        title="Please confirm:"
        text="Dismiss the notification ?"
        onCancel={this.onDialogCancel}
        onConfirm={this.onDialogConfirm}
      />)
    : undefined;

    const notification = this.state.dismissNotification
      ? undefined
      : (<Text key='notification' textSize={0.035} text='You have recieved message!' localPosition={[-0.175, 0.3, 0]} />);

    return (
      <View>
        {notification}
        {dialog}
      </View>
    );
  }
}

export default DialogComp;
